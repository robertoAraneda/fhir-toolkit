/**
 * CQL expression evaluator.
 *
 * Implements {@link ExpressionVisitor} for async evaluation of CQL AST nodes.
 * Ported from Go: eval/evaluator.go
 */

import type { ModelInfo, ElementInfo } from '../model/model-info.js';
import type { ExpressionVisitor } from './visitor.js';
import { visit } from './visitor.js';
import { EvalContext } from './context.js';
import { FunctionRegistry } from '../funcs/registry.js';
import { registerBuiltins } from '../funcs/builtins.js';
import type { FunctionDef } from '../ast/library.js';
import type {
  Expression,
  LiteralExpr,
  IdentifierRefExpr,
  BinaryExpr,
  UnaryExpr,
  IfThenElseExpr,
  CaseExpr,
  IsExpr,
  AsExpr,
  CastExpr,
  ConvertExpr,
  BooleanTestExpr,
  FunctionCallExpr,
  MemberAccessExpr,
  IndexAccessExpr,
  RetrieveExpr,
  QueryExpr,
  IntervalExpr,
  TupleExpr,
  ListExpr,
  InstanceExpr,
  CodeExpr,
  ConceptExpr,
  ExternalConstantExpr,
  ThisExpr,
  IndexRefExpr,
  TotalExpr,
  MembershipExpr,
  BetweenExpr,
  DurationBetweenExpr,
  DifferenceBetweenExpr,
  DateTimeComponentFromExpr,
  DurationOfExpr,
  DifferenceOfExpr,
  TypeExtentExpr,
  TimingExpr,
  TimingOp,
  SetAggregateExpr,
  WithClause,
  WithoutClause,
  SortByItem,
} from '../ast/nodes.js';
import {
  LiteralType,
  BinaryOp,
  UnaryOp,
  SortDirection,
  TimingKind,
} from '../ast/nodes.js';
import type { CqlValue, CqlComparable } from '../types/value.js';
import {
  CqlBoolean,
  CqlInteger,
  CqlLong,
  CqlDecimal,
  CqlString,
  CqlDate,
  CqlDateTime,
  CqlTime,
  CqlQuantity,
  CqlNull,
  DateTimePrecision,
  DatePrecision,
  TimePrecision,
} from '../types/primitives.js';
import {
  CqlInterval,
  CqlList,
  CqlTuple,
  CqlCode,
  CqlConcept,
} from '../types/complex.js';
import { Decimal } from 'decimal.js';
import { CqlEvalError, CqlSyntaxError } from '../errors.js';

// CQL spec requires at least 28 digits of precision for decimals.
// Default decimal.js precision is 20, which is insufficient.
Decimal.set({ precision: 50 });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isTrue(v: CqlValue | null): boolean {
  return v instanceof CqlBoolean && v.value === true;
}

function isFalse(v: CqlValue | null): boolean {
  return v instanceof CqlBoolean && v.value === false;
}

function toList(v: CqlValue | null): CqlValue[] {
  if (v === null) return [];
  if (v instanceof CqlList) return v.values;
  return [v];
}

/**
 * Recursively wrap a plain JSON value (from a FHIR resource) into a CqlValue.
 * Arrays become CqlList, objects become CqlTuple, primitives map directly.
 */
export function wrapFhirValue(v: unknown): CqlValue | null {
  if (v === null || v === undefined) return null;
  if (typeof v === 'string') return new CqlString(v);
  if (typeof v === 'number')
    return Number.isInteger(v) ? new CqlInteger(v) : CqlDecimal.of(v);
  if (typeof v === 'boolean') return CqlBoolean.of(v);
  if (Array.isArray(v)) {
    const items: CqlValue[] = [];
    for (const item of v) {
      const wrapped = wrapFhirValue(item);
      if (wrapped !== null) items.push(wrapped);
    }
    return new CqlList(items);
  }
  if (typeof v === 'object') {
    const elements = new Map<string, CqlValue | null>();
    for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
      elements.set(k, wrapFhirValue(val));
    }
    return new CqlTuple(elements);
  }
  return new CqlString(String(v));
}

/**
 * Strip namespace prefix from a qualified type name.
 * "FHIR.Quantity" -> "Quantity", "System.String" -> "String"
 */
function stripNamespace(qualifiedType: string): string {
  const dot = qualifiedType.lastIndexOf('.');
  return dot >= 0 ? qualifiedType.substring(dot + 1) : qualifiedType;
}

/**
 * Wrap a single element value using its ElementInfo type from ModelInfo.
 * FHIR complex types are recursively wrapped with type info; System types
 * and primitives delegate to wrapFhirValue.
 */
function wrapFhirElement(
  val: unknown,
  elemInfo: ElementInfo,
  modelInfo: ModelInfo,
): CqlValue | null {
  if (val === null || val === undefined) return null;
  const typeName = stripNamespace(elemInfo.type);

  // List element: wrap each item
  if (elemInfo.isList && Array.isArray(val)) {
    const items: CqlValue[] = [];
    for (const item of val) {
      const wrapped =
        typeof item === 'object' && item !== null && !Array.isArray(item)
          ? wrapFhirElement(item, { ...elemInfo, isList: false }, modelInfo)
          : wrapFhirValue(item);
      if (wrapped !== null) items.push(wrapped);
    }
    return new CqlList(items);
  }

  // FHIR complex type: recurse with type info
  if (
    elemInfo.type.startsWith('FHIR.') &&
    typeof val === 'object' &&
    val !== null &&
    !Array.isArray(val)
  ) {
    return wrapFhirResource(
      val as Record<string, unknown>,
      typeName,
      modelInfo,
    );
  }

  // System type or primitive: generic wrap
  return wrapFhirValue(val);
}

/**
 * Wrap a FHIR JSON resource into a typed CqlTuple using ModelInfo.
 *
 * - Sets `instanceType` on the tuple and all nested FHIR complex sub-objects
 * - Resolves choice types: adds abstract key aliases (e.g., "value" for "valueQuantity")
 * - Falls back to generic `wrapFhirValue` for elements not in ModelInfo
 */
export function wrapFhirResource(
  json: Record<string, unknown>,
  typeName: string,
  modelInfo: ModelInfo,
): CqlTuple {
  const typeInfo = modelInfo.typeInfo(typeName);
  const elements = new Map<string, CqlValue | null>();

  // Build element lookup for this type
  const elemByName = new Map<string, ElementInfo>();
  if (typeInfo) {
    for (const e of typeInfo.elements) {
      elemByName.set(e.name, e);
    }
  }

  // Wrap each JSON key
  for (const [key, val] of Object.entries(json)) {
    const elemInfo = elemByName.get(key);
    if (elemInfo && !elemInfo.isChoice) {
      elements.set(key, wrapFhirElement(val, elemInfo, modelInfo));
    } else {
      elements.set(key, wrapFhirValue(val));
    }
  }

  // Resolve choice types: find concrete keys and add abstract aliases
  if (typeInfo) {
    for (const elem of typeInfo.elements) {
      if (!elem.isChoice) continue;
      if (elements.has(elem.name)) continue;

      for (const choiceType of elem.choiceTypes) {
        const suffix = stripNamespace(choiceType);
        const concreteKey = elem.name + suffix;
        if (elements.has(concreteKey)) {
          const val = elements.get(concreteKey);
          // Tag FHIR complex types with instanceType
          if (val instanceof CqlTuple) {
            val.instanceType = suffix;
          }
          elements.set(elem.name, val ?? null);
          break;
        }
      }
    }
  }

  const tuple = new CqlTuple(elements);
  tuple.instanceType = typeName;
  return tuple;
}

function toDecimal(v: CqlValue | null): Decimal {
  if (v === null) return new Decimal(0);
  if (v instanceof CqlInteger) return new Decimal(v.value);
  if (v instanceof CqlLong) return new Decimal(v.value.toString());
  if (v instanceof CqlDecimal) return v.value;
  return new Decimal(0);
}

function isDecimalType(v: CqlValue): boolean {
  return v instanceof CqlDecimal;
}

function isNumericType(v: CqlValue): boolean {
  return v instanceof CqlInteger || v instanceof CqlDecimal || v instanceof CqlLong;
}

function isComparable(v: CqlValue): v is CqlComparable {
  return typeof (v as CqlComparable).compareTo === 'function';
}

function compareValues(a: CqlValue | null, b: CqlValue | null): number {
  if (a === null && b === null) return 0;
  if (a === null) return 1; // nulls sort last
  if (b === null) return -1;
  if (!isComparable(a)) {
    throw new Error(`cannot compare type ${a.type} for sorting`);
  }
  try {
    return a.compareTo(b);
  } catch {
    // Ambiguous comparison (e.g., different precisions) - use string comparison as fallback
    return a.toString().localeCompare(b.toString());
  }
}

function convertToType(
  v: CqlValue | null,
  typeName: string,
): CqlValue | null {
  if (v === null) return null;
  switch (typeName.toLowerCase()) {
    case 'string':
      return new CqlString(v.toString());
    case 'integer':
      if (v instanceof CqlInteger) return v;
      if (v instanceof CqlString) {
        const n = parseInt(v.value, 10);
        if (isNaN(n)) return null;
        return new CqlInteger(n);
      }
      if (v instanceof CqlBoolean) return new CqlInteger(v.value ? 1 : 0);
      if (v instanceof CqlDecimal) return new CqlInteger(v.value.truncated().toNumber());
      return null;
    case 'decimal':
      if (v instanceof CqlDecimal) return v;
      if (v instanceof CqlInteger) return CqlDecimal.of(v.value);
      if (v instanceof CqlString) {
        try {
          return CqlDecimal.of(v.value);
        } catch {
          return null;
        }
      }
      return null;
    case 'boolean':
      if (v instanceof CqlBoolean) return v;
      if (v instanceof CqlString) {
        const s = v.value.toLowerCase();
        if (s === 'true' || s === '1') return CqlBoolean.TRUE;
        if (s === 'false' || s === '0') return CqlBoolean.FALSE;
      }
      if (v instanceof CqlInteger) return CqlBoolean.of(v.value !== 0);
      return null;
    case 'time':
      if (v instanceof CqlTime) return v;
      if (v instanceof CqlDateTime) {
        return new CqlTime(
          `${String(v.hour).padStart(2, '0')}:${String(v.minute).padStart(2, '0')}:${String(v.second).padStart(2, '0')}.${String(v.millis).padStart(3, '0')}`,
        );
      }
      if (v instanceof CqlString) {
        try {
          let s = v.value.startsWith('T') ? v.value.slice(1) : v.value;
          // Strip timezone
          s = s.replace(/([Zz]|[+-]\d{2}:\d{2})$/, '');
          return new CqlTime(s);
        } catch {
          return null;
        }
      }
      return null;
    case 'date':
      if (v instanceof CqlDate) return v;
      if (v instanceof CqlDateTime) {
        const ds = v.toString();
        const idx = ds.indexOf('T');
        return new CqlDate(idx >= 0 ? ds.slice(0, idx) : ds);
      }
      if (v instanceof CqlString) {
        try { return new CqlDate(v.value); } catch { return null; }
      }
      return null;
    case 'datetime':
      if (v instanceof CqlDateTime) return v;
      if (v instanceof CqlDate) return new CqlDateTime(v.toString());
      if (v instanceof CqlString) {
        try { return new CqlDateTime(v.value); } catch { return null; }
      }
      return null;
    case 'quantity':
      if (v instanceof CqlQuantity) return v;
      if (v instanceof CqlInteger) return CqlQuantity.of(v.value, '1');
      if (v instanceof CqlDecimal) return new CqlQuantity(v.value, '1');
      return null;
    case 'long':
      if (v instanceof CqlLong) return v;
      if (v instanceof CqlInteger) return new CqlLong(BigInt(v.value));
      return null;
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Evaluator
// ---------------------------------------------------------------------------

export type CqlResult = CqlValue | null;

export class CqlEvaluator
  implements ExpressionVisitor<Promise<CqlResult>>
{
  private readonly registry: FunctionRegistry;
  private readonly userFunctions: Map<string, FunctionDef>;
  /** Map of library alias -> CqlEvaluator for included libraries. */
  private readonly includedLibraries: Map<string, CqlEvaluator> = new Map();

  constructor(
    private ctx: EvalContext,
    registry?: FunctionRegistry,
  ) {
    this.registry = registry ?? new FunctionRegistry();
    if (!registry) registerBuiltins(this.registry);
    this.userFunctions = new Map();
    if (ctx.library) {
      for (const fn of ctx.library.functions) {
        this.userFunctions.set(fn.name, fn);
      }
    }
  }

  /**
   * Registers an evaluator for an included library under its alias.
   * Called by the engine when resolving `include` statements.
   */
  registerIncludedLibrary(alias: string, evaluator: CqlEvaluator): void {
    this.includedLibraries.set(alias, evaluator);
  }

  /**
   * Creates a lightweight evaluator sharing the same function registries
   * but using a different context.
   */
  private withContext(ctx: EvalContext): CqlEvaluator {
    const e = new CqlEvaluator(ctx, this.registry);
    // Share user functions map (avoid re-building)
    for (const [k, v] of this.userFunctions) {
      e.userFunctions.set(k, v);
    }
    return e;
  }

  /** Evaluate a single expression. */
  async evaluate(expr: Expression): Promise<CqlResult> {
    return visit(expr, this);
  }

  /** Evaluate all named statements in the library. */
  async evaluateLibrary(): Promise<Record<string, CqlResult>> {
    if (!this.ctx.library) throw new CqlEvalError('no library to evaluate');
    const results: Record<string, CqlResult> = {};
    for (const stmt of this.ctx.library.statements) {
      try {
        const val = await this.evaluate(stmt.expression);
        this.ctx.definitions.set(stmt.name, val);
        results[stmt.name] = val;
      } catch (e) {
        if (e instanceof CqlEvalError) throw e;
        const msg = e instanceof Error ? e.message : String(e);
        throw new CqlEvalError(msg, stmt.name);
      }
    }
    return results;
  }

  /** Evaluate a single named expression from the library. */
  async evaluateExpression(name: string): Promise<CqlResult> {
    const cached = this.ctx.definitions.get(name);
    if (cached !== undefined) return cached;
    if (this.ctx.library) {
      for (const stmt of this.ctx.library.statements) {
        if (stmt.name === name) {
          try {
            const val = await this.evaluate(stmt.expression);
            this.ctx.definitions.set(name, val);
            return val;
          } catch (e) {
            if (e instanceof CqlEvalError) throw e;
            const msg = e instanceof Error ? e.message : String(e);
            throw new CqlEvalError(msg, name);
          }
        }
      }
    }
    throw new CqlEvalError(`expression '${name}' not found`);
  }

  // -----------------------------------------------------------------------
  // Visitor methods
  // -----------------------------------------------------------------------

  async visitLiteral(expr: LiteralExpr): Promise<CqlResult> {
    switch (expr.valueType) {
      case LiteralType.Null:
        return null;
      case LiteralType.Boolean:
        return CqlBoolean.of(expr.value === 'true');
      case LiteralType.String:
        return new CqlString(expr.value);
      case LiteralType.Integer: {
        const v = parseInt(expr.value, 10);
        if (isNaN(v)) throw new Error(`invalid integer: ${expr.value}`);
        // CQL integers are 32-bit: valid range is -2^31 to 2^31-1
        if (v < -2147483648 || v > 2147483647) throw new Error(`integer overflow: ${expr.value}`);
        return new CqlInteger(v);
      }
      case LiteralType.Long: {
        return new CqlLong(BigInt(expr.value));
      }
      case LiteralType.Decimal: {
        const clean = expr.value.replace(/^[+-]/, '')
        const parts = clean.split('.')
        if (parts[0] && parts[0].length > 28)
          throw new CqlSyntaxError(`decimal overflow: too many integer digits in ${expr.value}`)
        if (parts[1] && parts[1].length > 8)
          throw new CqlSyntaxError(`decimal overflow: too many fractional digits in ${expr.value}`)
        return CqlDecimal.of(expr.value)
      }
      case LiteralType.Date:
        return new CqlDate(expr.value);
      case LiteralType.DateTime:
        return new CqlDateTime(expr.value);
      case LiteralType.Time: {
        // Validate raw millisecond string length before CqlTime truncates it
        const msMatch = /^T?\d{2}(?::\d{2}(?::\d{2}(?:\.(\d+))?)?)?$/.exec(expr.value);
        if (msMatch && msMatch[1] && msMatch[1].length > 3) {
          throw new Error(`invalid time: milliseconds exceed 999 in ${expr.value}`);
        }
        const t = new CqlTime(expr.value);
        // Validate time component ranges
        if (t.hour > 23 || t.minute > 59 || t.second > 59 || t.millis > 999) {
          throw new Error(`invalid time: ${expr.value}`);
        }
        return t;
      }
      case LiteralType.Quantity: {
        // Expected format: "value unit" e.g. "10 mg"
        const parts = expr.value.split(/\s+/);
        const numStr = parts[0];
        const unit = parts.slice(1).join(' ') || '';
        return CqlQuantity.of(numStr, unit);
      }
      case LiteralType.Ratio:
        // Ratio literal: "num:den" — return as string for now
        return new CqlString(expr.value);
      default:
        return new CqlString(expr.value);
    }
  }

  async visitIdentifierRef(expr: IdentifierRefExpr): Promise<CqlResult> {
    const resolved = this.ctx.resolveIdentifier(expr.name);
    if (resolved !== undefined) return resolved;
    // Lazily evaluate library expression definitions
    if (this.ctx.library) {
      for (const stmt of this.ctx.library.statements) {
        if (stmt.name === expr.name) {
          const result = await this.evaluate(stmt.expression);
          this.ctx.definitions.set(expr.name, result);
          return result;
        }
      }
      // Resolve context identifier (e.g. "Patient") to the context resource
      if (
        this.ctx.contextResource !== null &&
        this.ctx.contextResource !== undefined &&
        this.ctx.library.contexts.some((c) => c.name === expr.name)
      ) {
        if (
          this.ctx.modelInfo &&
          typeof this.ctx.contextResource === 'object' &&
          this.ctx.contextResource !== null
        ) {
          const ctxObj = this.ctx.contextResource as Record<string, unknown>;
          const ctxType = (ctxObj['resourceType'] as string) ?? expr.name;
          return wrapFhirResource(ctxObj, ctxType, this.ctx.modelInfo);
        }
        return wrapFhirValue(this.ctx.contextResource);
      }
    }
    // Could be a resource type name used in query context
    return new CqlString(expr.name);
  }

  async visitBinary(expr: BinaryExpr): Promise<CqlResult> {
    // Short-circuit for logical operators
    switch (expr.operator) {
      case BinaryOp.And: {
        const left = await this.evaluate(expr.left);
        if (isFalse(left)) return CqlBoolean.FALSE;
        const right = await this.evaluate(expr.right);
        if (left === null || right === null) {
          if (isFalse(right)) return CqlBoolean.FALSE;
          return null;
        }
        return CqlBoolean.of(isTrue(left) && isTrue(right));
      }
      case BinaryOp.Or: {
        const left = await this.evaluate(expr.left);
        if (isTrue(left)) return CqlBoolean.TRUE;
        const right = await this.evaluate(expr.right);
        if (left === null || right === null) {
          if (isTrue(right)) return CqlBoolean.TRUE;
          return null;
        }
        return CqlBoolean.of(isTrue(left) || isTrue(right));
      }
      case BinaryOp.Implies: {
        const left = await this.evaluate(expr.left);
        if (isFalse(left)) return CqlBoolean.TRUE;
        const right = await this.evaluate(expr.right);
        if (isTrue(left)) {
          if (right === null) return null;
          return CqlBoolean.of(isTrue(right));
        }
        // left is null
        if (isTrue(right)) return CqlBoolean.TRUE;
        return null;
      }
    }

    const left = await this.evaluate(expr.left);
    const right = await this.evaluate(expr.right);

    // Null propagation
    if (left === null || right === null) {
      switch (expr.operator) {
        case BinaryOp.Equal:
        case BinaryOp.NotEqual:
        case BinaryOp.Less:
        case BinaryOp.LessOrEqual:
        case BinaryOp.Greater:
        case BinaryOp.GreaterOrEqual:
          return null;
        case BinaryOp.Equivalent:
          return CqlBoolean.of(left === null && right === null);
        case BinaryOp.NotEquivalent:
          return CqlBoolean.of(left !== null || right !== null);
        case BinaryOp.Union: {
          // For list union: null union list = list, list union null = list
          // For interval union: null union interval = null
          const nonNull = left ?? right;
          if (nonNull instanceof CqlInterval) return null;
          if (nonNull instanceof CqlList) return nonNull;
          // If both null or non-null is something else, return null
          return nonNull ?? null;
        }
        case BinaryOp.Except:
          // list except null = list; null except list = null
          return left !== null ? left : null;
        case BinaryOp.Concatenate: {
          const ls = left !== null ? left.toString() : '';
          const rs = right !== null ? right.toString() : '';
          return new CqlString(ls + rs);
        }
        default:
          return null;
      }
    }

    switch (expr.operator) {
      case BinaryOp.Equal: {
        // CQL: if any element in the comparison is null, result is null (not false)
        if (left instanceof CqlTuple && right instanceof CqlTuple) {
          const eqResult = this.tupleEqualWithNull(left, right);
          return eqResult === null ? null : CqlBoolean.of(eqResult);
        }
        // UCUM-aware Quantity equality: convert to common unit before comparing
        if (left instanceof CqlQuantity && right instanceof CqlQuantity && left.unit !== right.unit) {
          return CqlBoolean.of(this.quantityEquals(left, right));
        }
        return CqlBoolean.of(left.equals(right));
      }
      case BinaryOp.NotEqual: {
        if (left instanceof CqlTuple && right instanceof CqlTuple) {
          const eqResult = this.tupleEqualWithNull(left, right);
          return eqResult === null ? null : CqlBoolean.of(!eqResult);
        }
        if (left instanceof CqlQuantity && right instanceof CqlQuantity && left.unit !== right.unit) {
          return CqlBoolean.of(!this.quantityEquals(left, right));
        }
        return CqlBoolean.of(!left.equals(right));
      }
      case BinaryOp.Equivalent:
        // Tuples with different keys cannot be compared for equivalence
        if (left instanceof CqlTuple && right instanceof CqlTuple) {
          const leftKeys = [...left.elements.keys()].sort().join(',');
          const rightKeys = [...right.elements.keys()].sort().join(',');
          if (leftKeys !== rightKeys) {
            throw new Error(`Could not resolve call to operator Equivalent with incompatible tuple types`);
          }
        }
        // UCUM-aware Quantity equivalence
        if (left instanceof CqlQuantity && right instanceof CqlQuantity && left.unit.toLowerCase() !== right.unit.toLowerCase()) {
          return CqlBoolean.of(this.quantityEquivalent(left, right));
        }
        return CqlBoolean.of(left.equivalent(right));
      case BinaryOp.NotEquivalent:
        if (left instanceof CqlTuple && right instanceof CqlTuple) {
          const leftKeys = [...left.elements.keys()].sort().join(',');
          const rightKeys = [...right.elements.keys()].sort().join(',');
          if (leftKeys !== rightKeys) {
            throw new Error(`Could not resolve call to operator NotEquivalent with incompatible tuple types`);
          }
        }
        if (left instanceof CqlQuantity && right instanceof CqlQuantity && left.unit.toLowerCase() !== right.unit.toLowerCase()) {
          return CqlBoolean.of(!this.quantityEquivalent(left, right));
        }
        return CqlBoolean.of(!left.equivalent(right));

      case BinaryOp.Less:
      case BinaryOp.LessOrEqual:
      case BinaryOp.Greater:
      case BinaryOp.GreaterOrEqual: {
        // Uncertainty interval comparison: Interval[a,b] op x
        if (left instanceof CqlInterval && isComparable(right)) {
          return this.evalUncertaintyComparison(expr.operator, left as CqlInterval<CqlComparable>, right);
        }
        if (right instanceof CqlInterval && isComparable(left)) {
          // Flip: x op Interval[a,b] => Interval[a,b] flipped_op x
          const flipOp = expr.operator === BinaryOp.Less ? BinaryOp.Greater
            : expr.operator === BinaryOp.LessOrEqual ? BinaryOp.GreaterOrEqual
            : expr.operator === BinaryOp.Greater ? BinaryOp.Less
            : BinaryOp.LessOrEqual;
          return this.evalUncertaintyComparison(flipOp, right as CqlInterval<CqlComparable>, left);
        }
        if (!isComparable(left)) {
          throw new Error(`cannot compare ${left.type}`);
        }
        try {
          // UCUM-aware Quantity comparison: convert to common unit
          if (left instanceof CqlQuantity && right instanceof CqlQuantity && left.unit !== right.unit) {
            const converted = this.convertQuantityToUnit(right, left.unit);
            if (converted === null) return null; // incompatible units
            const cmp = left.value.comparedTo(converted.value);
            switch (expr.operator) {
              case BinaryOp.Less:
                return CqlBoolean.of(cmp < 0);
              case BinaryOp.LessOrEqual:
                return CqlBoolean.of(cmp <= 0);
              case BinaryOp.Greater:
                return CqlBoolean.of(cmp > 0);
              case BinaryOp.GreaterOrEqual:
                return CqlBoolean.of(cmp >= 0);
            }
          }
          const cmp = left.compareTo(right);
          switch (expr.operator) {
            case BinaryOp.Less:
              return CqlBoolean.of(cmp < 0);
            case BinaryOp.LessOrEqual:
              return CqlBoolean.of(cmp <= 0);
            case BinaryOp.Greater:
              return CqlBoolean.of(cmp > 0);
            case BinaryOp.GreaterOrEqual:
              return CqlBoolean.of(cmp >= 0);
          }
        } catch {
          // Ambiguous comparison (different precisions) returns null per CQL spec
          return null;
        }
        break;
      }

      case BinaryOp.Add:
      case BinaryOp.Subtract:
      case BinaryOp.Multiply:
      case BinaryOp.Divide:
      case BinaryOp.Div:
      case BinaryOp.Mod:
      case BinaryOp.Power:
        // Uncertainty interval arithmetic
        if (left instanceof CqlInterval || right instanceof CqlInterval) {
          // div and mod are not supported on uncertainty intervals
          if (expr.operator === BinaryOp.Div || expr.operator === BinaryOp.Mod) {
            throw new Error('integer division (div/mod) is not supported on uncertainty intervals');
          }
          return this.evalIntervalArithmetic(expr.operator, left, right);
        }
        return this.evalArithmetic(expr.operator, left, right);

      case BinaryOp.Concatenate:
        return new CqlString(left.toString() + right.toString());

      case BinaryOp.Xor:
        return CqlBoolean.of(isTrue(left) !== isTrue(right));

      case BinaryOp.Union:
      case BinaryOp.Intersect:
      case BinaryOp.Except:
        // Interval-specific set operations
        if (left instanceof CqlInterval && right instanceof CqlInterval) {
          return this.evalIntervalSetOp(expr.operator, left as CqlInterval<CqlComparable>, right as CqlInterval<CqlComparable>);
        }
        return this.evalSetOp(expr.operator, left, right);

      case BinaryOp.In:
      case BinaryOp.Contains:
        return this.evalInContains(expr.operator, left, right);
    }

    throw new Error(`unsupported binary operator: ${expr.operator}`);
  }

  async visitUnary(expr: UnaryExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);

    switch (expr.operator) {
      case UnaryOp.Not:
        if (operand === null) return null;
        return CqlBoolean.of(!isTrue(operand));

      case UnaryOp.Exists:
        if (operand === null) return CqlBoolean.FALSE;
        if (operand instanceof CqlList) {
          // Exists is true only if there's at least one non-null element
          return CqlBoolean.of(operand.values.some(v => !(v instanceof CqlNull)));
        }
        return CqlBoolean.TRUE;

      case UnaryOp.Negate:
        if (operand === null) return null;
        if (operand instanceof CqlInteger) return new CqlInteger(-operand.value);
        if (operand instanceof CqlLong) return new CqlLong(-operand.value);
        if (operand instanceof CqlQuantity) return new CqlQuantity(operand.value.neg(), operand.unit);
        return CqlDecimal.of(toDecimal(operand).neg().toString());

      case UnaryOp.Positive:
        return operand;

      case UnaryOp.Distinct: {
        const items = toList(operand);
        const result: CqlValue[] = [];
        for (const v of items) {
          if (!result.some((r) => r.equals(v))) result.push(v);
        }
        return new CqlList(result);
      }

      case UnaryOp.Flatten:
        return this.evalFlatten(operand);

      case UnaryOp.SingletonFrom: {
        const items = toList(operand);
        if (items.length === 0) return null;
        if (items.length === 1) {
          const v = items[0];
          return v instanceof CqlNull ? null : v;
        }
        throw new Error(
          `singleton from requires 0 or 1 elements, got ${items.length}`,
        );
      }

      case UnaryOp.StartOf:
        if (operand instanceof CqlInterval) return operand.low;
        return null;

      case UnaryOp.EndOf:
        if (operand instanceof CqlInterval) return operand.high;
        return null;

      case UnaryOp.WidthOf: {
        if (operand instanceof CqlInterval) {
          const widthFn = this.registry.resolve('width');
          if (widthFn) return await widthFn([operand], this.ctx);
        }
        return null;
      }

      case UnaryOp.SuccessorOf:
      case UnaryOp.PredecessorOf:
        return this.evalSuccessorPredecessor(expr.operator, operand);

      case UnaryOp.PointFrom: {
        if (operand === null) return null;
        if (operand instanceof CqlInterval) {
          if (operand.low === null && operand.high === null) return null;
          if (
            operand.low !== null &&
            operand.high !== null &&
            operand.low.equals(operand.high)
          ) {
            return operand.low;
          }
        }
        throw new Error('point from requires a unit interval');
      }
    }

    throw new Error(`unsupported unary operator: ${expr.operator}`);
  }

  async visitIfThenElse(expr: IfThenElseExpr): Promise<CqlResult> {
    const cond = await this.evaluate(expr.condition);
    if (isTrue(cond)) return this.evaluate(expr.then);
    return this.evaluate(expr.else);
  }

  async visitCase(expr: CaseExpr): Promise<CqlResult> {
    if (expr.comparand !== null) {
      const comp = await this.evaluate(expr.comparand);
      for (const item of expr.items) {
        const when = await this.evaluate(item.when);
        if (comp !== null && when !== null && comp.equals(when)) {
          return this.evaluate(item.then);
        }
      }
    } else {
      for (const item of expr.items) {
        const when = await this.evaluate(item.when);
        if (isTrue(when)) {
          return this.evaluate(item.then);
        }
      }
    }
    return this.evaluate(expr.else);
  }

  async visitIs(expr: IsExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return CqlBoolean.FALSE;
    if (expr.type.specKind !== 'NamedType') return CqlBoolean.FALSE;
    const operandType = operand.type.toLowerCase();
    const targetType = expr.type.name.toLowerCase().replace(/^(fhir\.|system\.)/, '');
    if (operandType === targetType) return CqlBoolean.TRUE;
    // For tuples constructed via Instance expressions, also check the instance type name
    if (operand instanceof CqlTuple && operand.instanceType) {
      const instType = operand.instanceType.toLowerCase();
      if (instType === targetType) return CqlBoolean.TRUE;
      // Check hierarchy using the instance type
      const typeHierarchy: Record<string, string[]> = {
        'vocabulary': ['valueset', 'codesystem'],
        'any': ['boolean', 'integer', 'long', 'decimal', 'string', 'date', 'datetime', 'time', 'quantity', 'code', 'concept', 'interval', 'list', 'tuple'],
      };
      const subtypes = typeHierarchy[targetType];
      if (subtypes && subtypes.includes(instType)) return CqlBoolean.TRUE;
    }
    // CQL type hierarchy
    const typeHierarchy: Record<string, string[]> = {
      'vocabulary': ['valueset', 'codesystem'],
      'any': ['boolean', 'integer', 'long', 'decimal', 'string', 'date', 'datetime', 'time', 'quantity', 'code', 'concept', 'interval', 'list', 'tuple'],
    };
    const subtypes = typeHierarchy[targetType];
    if (subtypes && subtypes.includes(operandType)) return CqlBoolean.TRUE;
    return CqlBoolean.FALSE;
  }

  async visitAs(expr: AsExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    if (expr.type.specKind !== 'NamedType') return null;
    const targetType = expr.type.name.toLowerCase().replace(/^(fhir\.|system\.)/, '');
    // Check base type
    if (operand.type.toLowerCase() === targetType) return operand;
    // Check instanceType for typed FHIR tuples
    if (operand instanceof CqlTuple && operand.instanceType) {
      if (operand.instanceType.toLowerCase() === targetType) return operand;
    }
    return null; // safe cast returns null
  }

  async visitCast(expr: CastExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    if (expr.type.specKind === 'NamedType') {
      const result = convertToType(operand, expr.type.name);
      if (result === null) {
        throw new Error(
          `cast failed: cannot convert ${operand.type} to ${expr.type.name}`,
        );
      }
      return result;
    }
    return operand;
  }

  async visitConvert(expr: ConvertExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    if (expr.toType !== null && expr.toType.specKind === 'NamedType') {
      return convertToType(operand, expr.toType.name);
    }
    return operand;
  }

  async visitBooleanTest(expr: BooleanTestExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    let result: boolean;
    switch (expr.testValue) {
      case 'null':
        result = operand === null;
        break;
      case 'true':
        result = isTrue(operand);
        break;
      case 'false':
        result = isFalse(operand);
        break;
      default:
        result = false;
    }
    if (expr.not) result = !result;
    return CqlBoolean.of(result);
  }

  async visitFunctionCall(expr: FunctionCallExpr): Promise<CqlResult> {
    // Check for library-qualified function call: H.Double(5)
    // In this case, expr.source is an IdentifierRef whose name matches a library alias.
    if (expr.source !== null && expr.source.kind === 'IdentifierRef') {
      const libAlias = (expr.source as IdentifierRefExpr).name;
      const libEvaluator = this.includedLibraries.get(libAlias);
      if (libEvaluator) {
        const libFn = libEvaluator.userFunctions.get(expr.name);
        if (libFn) {
          // Evaluate operands in the current (caller) context, then invoke the function
          // in the included library's context with the pre-evaluated values.
          const argVals: CqlResult[] = [];
          for (const op of expr.operands) {
            argVals.push(await this.evaluate(op));
          }
          return libEvaluator.evalUserFunctionWithValues(libFn, argVals);
        }
        throw new Error(`function '${expr.name}' not found in library '${libAlias}'`);
      }
    }

    // Check user-defined functions first
    const userFn = this.userFunctions.get(expr.name);
    if (userFn) {
      return this.evalUserFunction(userFn, expr.operands);
    }

    // Special case: Length with null operand needs type context
    // CQL: Length(null as String) = null, Length(null as List) = 0
    if (expr.name.toLowerCase() === 'length') {
      const argExpr = expr.source ?? (expr.operands.length > 0 ? expr.operands[0] : null);
      const argVal = argExpr ? await this.evaluate(argExpr) : null;
      if (argVal === null) {
        // Check if the argument is typed as a List (via As expression)
        if (argExpr && argExpr.kind === 'As') {
          const asExpr = argExpr as AsExpr;
          if (asExpr.type.specKind === 'NamedType' && asExpr.type.name.toLowerCase().startsWith('list')) {
            return new CqlInteger(0);
          }
          if (asExpr.type.specKind === 'ListType') {
            return new CqlInteger(0);
          }
        }
        return null; // String or unknown type: null
      }
      if (argVal instanceof CqlString) return new CqlInteger(argVal.value.length);
      if (argVal instanceof CqlList) return new CqlInteger(argVal.values.length);
      return new CqlInteger(0);
    }

    // Built-in via registry
    const builtinFn = this.registry.resolve(expr.name);
    if (builtinFn) {
      // Evaluate source if present
      let sourceVal: CqlResult = null;
      if (expr.source !== null) {
        sourceVal = await this.evaluate(expr.source);
      }
      // Evaluate operand arguments
      const args: CqlResult[] = [];
      if (sourceVal !== null) args.push(sourceVal);
      for (const op of expr.operands) {
        args.push(await this.evaluate(op));
      }
      return await builtinFn(args, this.ctx);
    }

    // Fall back to inline handling for common functions
    return this.evalBuiltinFunctionInline(expr);
  }

  async visitMemberAccess(expr: MemberAccessExpr): Promise<CqlResult> {
    const source = await this.evaluate(expr.source);
    if (source === null) return null;

    // Tuple member access
    if (source instanceof CqlTuple) {
      const val = source.get(expr.member);
      return val === undefined ? null : val;
    }

    // List member access: map over collection (singleton promotion: return list)
    if (source instanceof CqlList) {
      const result: CqlValue[] = [];
      for (const item of source.values) {
        if (item instanceof CqlTuple) {
          const v = item.get(expr.member);
          if (v !== null && v !== undefined) result.push(v);
        } else if (item instanceof CqlList) {
          // Flatten nested lists (e.g. given is already a list of strings)
          result.push(...item.values);
        }
      }
      return new CqlList(result);
    }

    return null;
  }

  async visitIndexAccess(expr: IndexAccessExpr): Promise<CqlResult> {
    const source = await this.evaluate(expr.source);
    const idx = await this.evaluate(expr.index);
    if (source === null || idx === null) return null;
    const items = toList(source);
    if (!(idx instanceof CqlInteger)) {
      throw new Error(`index must be integer, got ${idx.type}`);
    }
    const i = idx.value;
    if (i < 0 || i >= items.length) return null;
    return items[i];
  }

  async visitRetrieve(expr: RetrieveExpr): Promise<CqlResult> {
    if (!this.ctx.dataProvider) return new CqlList([]);
    const resourceType = expr.resourceType.name;

    // Resolve codes/valueset for filtering
    let codes: CqlValue | null = null;
    if (expr.codes !== null) {
      if (expr.codes.kind === 'IdentifierRef') {
        const url = this.ctx.resolveValueSetUrl(expr.codes.name);
        if (url !== null) {
          codes = new CqlString(url);
        } else {
          codes = await this.evaluate(expr.codes);
        }
      } else {
        codes = await this.evaluate(expr.codes);
      }
    }

    // Evaluate date range if present
    let dateRange: CqlValue | null = null;
    if (expr.dateRange !== null) {
      dateRange = await this.evaluate(expr.dateRange);
    }

    const results = await this.ctx.dataProvider.retrieve(
      resourceType,
      expr.codePath,
      expr.codeComparator,
      codes,
      dateRange,
    );

    // Wrap each result recursively as a CqlTuple
    const values: CqlValue[] = [];
    for (const raw of results) {
      let wrapped: CqlValue | null;
      if (
        this.ctx.modelInfo &&
        typeof raw === 'object' &&
        raw !== null &&
        !Array.isArray(raw)
      ) {
        wrapped = wrapFhirResource(
          raw as Record<string, unknown>,
          resourceType,
          this.ctx.modelInfo,
        );
      } else {
        wrapped = wrapFhirValue(raw);
      }
      if (wrapped !== null) values.push(wrapped);
    }
    return new CqlList(values);
  }

  async visitQuery(expr: QueryExpr): Promise<CqlResult> {
    if (expr.sources.length === 0) return new CqlList([]);

    // Multi-source query: compute cross product
    if (expr.sources.length > 1 && expr.aggregate === null) {
      return this.evalMultiSourceQuery(expr);
    }

    // Evaluate first source
    const source = await this.evaluate(expr.sources[0].source);
    const items = toList(source);

    let results: CqlValue[] = [];

    // Process aggregate clause if present — multi-source aggregate
    if (expr.aggregate !== null && expr.sources.length > 1) {
      // Compute cross product of all sources
      const allSourceItems: Array<{ alias: string; items: CqlValue[] }> = [];
      for (const src of expr.sources) {
        const srcVal = await this.evaluate(src.source);
        allSourceItems.push({ alias: src.alias, items: toList(srcVal) });
      }
      // Generate cross product tuples
      const crossItems: Map<string, CqlValue>[] = [new Map()];
      for (const src of allSourceItems) {
        const newCross: Map<string, CqlValue>[] = [];
        for (const existing of crossItems) {
          for (const item of src.items) {
            const row = new Map(existing);
            row.set(src.alias, item);
            newCross.push(row);
          }
        }
        crossItems.length = 0;
        crossItems.push(...newCross);
      }

      // Apply distinct if specified on aggregate
      let effectiveCrossItems = crossItems;
      if (expr.aggregate.distinct) {
        const seen = new Set<string>();
        effectiveCrossItems = crossItems.filter(row => {
          const key = [...row.entries()].map(([k, v]) => `${k}=${v?.toString() ?? 'null'}`).sort().join(',');
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }

      let total: CqlResult = null;
      if (expr.aggregate.starting !== null) {
        total = await this.evaluate(expr.aggregate.starting);
      }

      for (let i = 0; i < effectiveCrossItems.length; i++) {
        const child = this.ctx.childScope();
        for (const [alias, val] of effectiveCrossItems[i]) {
          child.aliases.set(alias, val);
        }
        child.totalValue = total;
        child.aliases.set(expr.aggregate.identifier, total!);
        const childEval = this.withContext(child);

        if (expr.where !== null) {
          const cond = await childEval.evaluate(expr.where);
          if (!isTrue(cond)) continue;
        }

        total = await childEval.evaluate(expr.aggregate.expression);
      }
      return total;
    }

    if (expr.aggregate !== null) {
      let total: CqlResult = null;
      if (expr.aggregate.starting !== null) {
        total = await this.evaluate(expr.aggregate.starting);
      }

      // Handle distinct/all on the items
      let aggItems = items;
      if (expr.aggregate.distinct) {
        const seen = new Set<string>();
        aggItems = items.filter(v => {
          const key = v?.toString() ?? 'null';
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }

      for (let i = 0; i < aggItems.length; i++) {
        const child = this.ctx.childScope();
        child.aliases.set(expr.sources[0].alias, aggItems[i]);
        child.thisValue = aggItems[i];
        child.indexValue = i;
        child.totalValue = total;
        // Also set the aggregate identifier as an alias so it resolves via identifierRef
        child.aliases.set(expr.aggregate.identifier, total!);
        const childEval = this.withContext(child);

        // Process let bindings
        for (const let_ of expr.let) {
          const val = await childEval.evaluate(let_.expression);
          child.letBindings.set(let_.identifier, val);
        }

        // Apply where filter
        if (expr.where !== null) {
          const cond = await childEval.evaluate(expr.where);
          if (!isTrue(cond)) continue;
        }

        total = await childEval.evaluate(expr.aggregate.expression);
      }

      return total;
    }

    // Standard (non-aggregate) query processing
    for (let i = 0; i < items.length; i++) {
      const child = this.ctx.childScope();
      child.aliases.set(expr.sources[0].alias, items[i]);
      child.thisValue = items[i];
      child.indexValue = i;
      const childEval = this.withContext(child);

      // Process let bindings
      for (const let_ of expr.let) {
        const val = await childEval.evaluate(let_.expression);
        child.letBindings.set(let_.identifier, val);
      }

      // Check with clauses
      let withOk = true;
      for (const w of expr.with) {
        const ok = await childEval.evalWithClause(w);
        if (!ok) {
          withOk = false;
          break;
        }
      }
      if (!withOk) continue;

      // Check without clauses
      let withoutOk = true;
      for (const w of expr.without) {
        const ok = await childEval.evalWithoutClause(w);
        if (!ok) {
          withoutOk = false;
          break;
        }
      }
      if (!withoutOk) continue;

      // Apply where filter
      if (expr.where !== null) {
        const cond = await childEval.evaluate(expr.where);
        if (!isTrue(cond)) continue;
      }

      // Apply return clause or use item directly
      if (expr.return !== null) {
        const val = await childEval.evaluate(expr.return.expression);
        if (val !== null) results.push(val);
      } else {
        results.push(items[i]);
      }
    }

    // Apply distinct if specified
    if (expr.return !== null && expr.return.distinct) {
      const distinct: CqlValue[] = [];
      for (const v of results) {
        if (!distinct.some((d) => d.equals(v))) distinct.push(v);
      }
      results = distinct;
    }

    // Apply sort clause
    if (expr.sort !== null) {
      const sort = expr.sort;
      const alias = expr.sources[0].alias;

      if (sort.byItems.length > 0) {
        // Sort by explicit expressions
        const sortKeys = new Map<CqlValue, CqlValue[]>();
        for (const item of results) {
          const keys: CqlValue[] = [];
          for (const byItem of sort.byItems) {
            const scope = this.ctx.childScope();
            scope.aliases.set(alias, item);
            scope.thisValue = item;
            const key = await this.withContext(scope).evaluate(
              byItem.expression,
            );
            keys.push(key!);
          }
          sortKeys.set(item, keys);
        }

        results.sort((a, b) => {
          const keysA = sortKeys.get(a)!;
          const keysB = sortKeys.get(b)!;
          for (let k = 0; k < sort.byItems.length; k++) {
            const cmp = compareValues(keysA[k], keysB[k]);
            if (cmp === 0) continue;
            if (sort.byItems[k].direction === SortDirection.Desc) return -cmp;
            return cmp;
          }
          return 0;
        });
      } else {
        // Sort without 'by' — compare items directly
        results.sort((a, b) => {
          const cmp = compareValues(a, b);
          if (sort.direction === SortDirection.Desc) return -cmp;
          return cmp;
        });
      }
    }

    // CQL spec: if the source was a non-list (singleton), return the single result directly
    const isSingleton = !(source instanceof CqlList);
    if (isSingleton && results.length === 1) {
      return results[0];
    }
    if (isSingleton && results.length === 0) {
      return null;
    }

    return new CqlList(results);
  }

  async visitInterval(expr: IntervalExpr): Promise<CqlResult> {
    const low = await this.evaluate(expr.low);
    const high = await this.evaluate(expr.high);
    // CQL spec: Interval[null, null] with literal untyped nulls evaluates to null.
    // But Interval[null as T, null as T] with typed nulls produces a valid interval with null bounds.
    if (low === null && high === null) {
      // Check if the nulls come from literal null (untyped) — not from typed casts
      const lowIsLiteralNull = expr.low.kind === 'Literal' && (expr.low as LiteralExpr).valueType === LiteralType.Null;
      const highIsLiteralNull = expr.high.kind === 'Literal' && (expr.high as LiteralExpr).valueType === LiteralType.Null;
      if (lowIsLiteralNull && highIsLiteralNull) return null;
    }
    // Compute effective low/high (adjusting for open bounds on discrete types)
    let effectiveLow = low as CqlComparable | null;
    let effectiveHigh = high as CqlComparable | null;
    if (!expr.lowClosed && low !== null) {
      const succ = this.evalSuccessorPredecessor(UnaryOp.SuccessorOf, low as CqlComparable);
      if (succ !== null) effectiveLow = succ as CqlComparable;
    }
    if (!expr.highClosed && high !== null) {
      const pred = this.evalSuccessorPredecessor(UnaryOp.PredecessorOf, high as CqlComparable);
      if (pred !== null) effectiveHigh = pred as CqlComparable;
    }
    // Validate: effective low must be <= effective high
    if (effectiveLow !== null && effectiveHigh !== null && isComparable(effectiveLow)) {
      try {
        const cmp = effectiveLow.compareTo(effectiveHigh);
        if (cmp > 0) {
          throw new Error('Invalid Interval - the ending boundary must be greater than or equal to the starting boundary.');
        }
      } catch (e) {
        // Rethrow invalid interval errors, but ignore ambiguous comparison errors
        if (e instanceof Error && e.message.startsWith('Invalid Interval')) throw e;
        // For ambiguous comparisons (different temporal precisions), allow interval creation
      }
    }
    return new CqlInterval(
      low as CqlComparable | null,
      high as CqlComparable | null,
      expr.lowClosed,
      expr.highClosed,
    );
  }

  async visitTuple(expr: TupleExpr): Promise<CqlResult> {
    const elements = new Map<string, CqlValue | null>();
    for (const elem of expr.elements) {
      const val = await this.evaluate(elem.expression);
      elements.set(elem.name, val);
    }
    return new CqlTuple(elements);
  }

  async visitList(expr: ListExpr): Promise<CqlResult> {
    const values: CqlValue[] = [];
    for (const elem of expr.elements) {
      const val = await this.evaluate(elem);
      values.push(val === null ? CqlNull.INSTANCE : val);
    }
    return new CqlList(values);
  }

  async visitInstance(expr: InstanceExpr): Promise<CqlResult> {
    const elements = new Map<string, CqlValue | null>();
    for (const elem of expr.elements) {
      const val = await this.evaluate(elem.expression);
      elements.set(elem.name, val);
    }

    // Handle Code instance: Code { code: 'X', system: 'Y', display: 'Z' } -> CqlCode
    if (expr.type.name.toLowerCase() === 'code') {
      const codeElem = elements.get('code');
      const systemElem = elements.get('system');
      const displayElem = elements.get('display');
      const versionElem = elements.get('version');
      if (codeElem instanceof CqlString) {
        return new CqlCode(
          codeElem.value,
          systemElem instanceof CqlString ? systemElem.value : '',
          displayElem instanceof CqlString ? displayElem.value : undefined,
          versionElem instanceof CqlString ? versionElem.value : undefined,
        );
      }
    }

    // Handle Concept instance: Concept { codes: [...], display: 'Z' } -> CqlConcept
    if (expr.type.name.toLowerCase() === 'concept') {
      const codesElem = elements.get('codes');
      const displayElem = elements.get('display');
      const codes: CqlCode[] = [];
      if (codesElem instanceof CqlList) {
        for (const c of codesElem.values) {
          if (c instanceof CqlCode) codes.push(c);
        }
      }
      return new CqlConcept(
        codes,
        displayElem instanceof CqlString ? displayElem.value : undefined,
      );
    }

    // Handle Quantity instance: Quantity { value: X, unit: 'Y' } -> CqlQuantity
    if (expr.type.name.toLowerCase() === 'quantity') {
      const valElem = elements.get('value');
      const unitElem = elements.get('unit');
      if (valElem !== null && valElem !== undefined) {
        const unit = unitElem instanceof CqlString ? unitElem.value : '1';
        if (valElem instanceof CqlInteger) return CqlQuantity.of(valElem.value, unit);
        if (valElem instanceof CqlDecimal) return new CqlQuantity(valElem.value, unit);
      }
    }

    const tuple = new CqlTuple(elements);
    // Preserve the instance type name for type-checking (e.g. `is Vocabulary`)
    const rawName = expr.type.name.replace(/^System\./, '');
    tuple.instanceType = rawName;
    return tuple;
  }

  async visitCode(expr: CodeExpr): Promise<CqlResult> {
    let system = expr.system;
    // Resolve system name to URL if it's a codesystem reference
    const cs = this.ctx.resolveCodeSystem(system);
    if (cs !== null) {
      system = cs.system;
    }
    return new CqlCode(expr.code, system, expr.display);
  }

  async visitConcept(expr: ConceptExpr): Promise<CqlResult> {
    const codes: CqlCode[] = [];
    for (const c of expr.codes) {
      const val = await this.visitCode(c);
      if (val instanceof CqlCode) codes.push(val);
    }
    return new CqlConcept(codes, expr.display);
  }

  async visitExternalConstant(expr: ExternalConstantExpr): Promise<CqlResult> {
    const val = this.ctx.parameters.get(expr.name);
    if (val !== undefined) return val;
    return null;
  }

  async visitThis(_expr: ThisExpr): Promise<CqlResult> {
    return this.ctx.thisValue;
  }

  async visitIndexRef(_expr: IndexRefExpr): Promise<CqlResult> {
    return new CqlInteger(this.ctx.indexValue);
  }

  async visitTotal(_expr: TotalExpr): Promise<CqlResult> {
    return this.ctx.totalValue;
  }

  async visitMembership(expr: MembershipExpr): Promise<CqlResult> {
    const left = await this.evaluate(expr.left);
    const right = await this.evaluate(expr.right);
    if (expr.operator === 'in') {
      return this.evalInContains(BinaryOp.In, left, right);
    }
    return this.evalInContains(BinaryOp.Contains, left, right);
  }

  async visitBetween(expr: BetweenExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    const low = await this.evaluate(expr.low);
    const high = await this.evaluate(expr.high);
    if (operand === null || low === null || high === null) return null;
    const interval = new CqlInterval(
      low as CqlComparable,
      high as CqlComparable,
      !expr.properly,
      !expr.properly,
    );
    return CqlBoolean.of(interval.contains(operand as CqlComparable));
  }

  async visitDurationBetween(expr: DurationBetweenExpr): Promise<CqlResult> {
    const low = await this.evaluate(expr.low);
    const high = await this.evaluate(expr.high);
    const fn = this.registry.resolve('durationbetween');
    if (fn) return await fn([low, high, new CqlString(expr.precision)], this.ctx);
    // Fallback: basic implementation for date types
    return this.evalTemporalDuration(low, high, expr.precision);
  }

  async visitDifferenceBetween(
    expr: DifferenceBetweenExpr,
  ): Promise<CqlResult> {
    const low = await this.evaluate(expr.low);
    const high = await this.evaluate(expr.high);
    const fn = this.registry.resolve('differencebetween');
    if (fn) return await fn([low, high, new CqlString(expr.precision)], this.ctx);
    // Fallback to duration for basic cases
    return this.evalTemporalDuration(low, high, expr.precision);
  }

  async visitDateTimeComponentFrom(
    expr: DateTimeComponentFromExpr,
  ): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    // Always use inline handler for precision-aware extraction
    return this.extractDateTimeComponent(operand, expr.component);
  }

  async visitDurationOf(expr: DurationOfExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand instanceof CqlInterval) {
      const fn = this.registry.resolve('durationbetween');
      if (fn)
        return await fn(
          [operand.low, operand.high, new CqlString(expr.precision)],
          this.ctx,
        );
      return this.evalTemporalDuration(operand.low, operand.high, expr.precision);
    }
    return null;
  }

  async visitDifferenceOf(expr: DifferenceOfExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand instanceof CqlInterval) {
      const fn = this.registry.resolve('differencebetween');
      if (fn)
        return await fn(
          [operand.low, operand.high, new CqlString(expr.precision)],
          this.ctx,
        );
      return this.evalTemporalDuration(operand.low, operand.high, expr.precision);
    }
    return null;
  }

  async visitTypeExtent(expr: TypeExtentExpr): Promise<CqlResult> {
    const typeName = expr.type.name.toLowerCase();
    if (expr.extent === 'minimum') {
      switch (typeName) {
        case 'integer':
          return new CqlInteger(-2147483648);
        case 'long':
          return new CqlLong(-9223372036854775808n);
        case 'decimal':
          return new CqlDecimal(new Decimal('-99999999999999999999.99999999'));
        case 'datetime':
          return new CqlDateTime('0001-01-01T00:00:00.000Z');
        case 'date':
          return new CqlDate('0001-01-01');
        case 'time':
          return new CqlTime('00:00:00.000');
        case 'boolean':
          throw new Error('minimum is not defined for Boolean');
        default:
          return null;
      }
    }
    // maximum
    switch (typeName) {
      case 'integer':
        return new CqlInteger(2147483647);
      case 'long':
        return new CqlLong(9223372036854775807n);
      case 'decimal':
        return new CqlDecimal(new Decimal('99999999999999999999.99999999'));
      case 'datetime':
        return new CqlDateTime('9999-12-31T23:59:59.999Z');
      case 'date':
        return new CqlDate('9999-12-31');
      case 'time':
        return new CqlTime('23:59:59.999');
      case 'boolean':
        throw new Error('maximum is not defined for Boolean');
      default:
        return null;
    }
  }

  async visitTiming(expr: TimingExpr): Promise<CqlResult> {
    const left = await this.evaluate(expr.left);
    const right = await this.evaluate(expr.right);
    const op = expr.operator;

    try {
      return this.evalTimingInner(left, right, op);
    } catch (e) {
      // Ambiguous comparison (different precisions) -> null
      if (e instanceof Error && e.message.includes('ambiguous')) return null;
      throw e;
    }
  }

  /**
   * Normalize an interval by converting open bounds to closed bounds using
   * successor/predecessor for discrete types (Integer, Date, DateTime, Time).
   * This is needed for correct overlap/contains semantics with open bounds.
   */
  private normalizeInterval(iv: CqlInterval<CqlComparable>): CqlInterval<CqlComparable> {
    let low = iv.low;
    let high = iv.high;
    let lowClosed = iv.lowClosed;
    let highClosed = iv.highClosed;

    // Only normalize for discrete types
    const isDiscrete = low instanceof CqlInteger || low instanceof CqlDate ||
                       low instanceof CqlDateTime || low instanceof CqlTime ||
                       high instanceof CqlInteger || high instanceof CqlDate ||
                       high instanceof CqlDateTime || high instanceof CqlTime;
    if (!isDiscrete) return iv;

    if (!lowClosed && low !== null) {
      const suc = this.evalSuccessorPredecessor(UnaryOp.SuccessorOf, low);
      if (suc !== null) { low = suc as CqlComparable; lowClosed = true; }
    }
    if (!highClosed && high !== null) {
      const pred = this.evalSuccessorPredecessor(UnaryOp.PredecessorOf, high);
      if (pred !== null) { high = pred as CqlComparable; highClosed = true; }
    }
    return new CqlInterval(low, high, lowClosed, highClosed);
  }

  private evalTimingInner(
    left: CqlValue | null,
    right: CqlValue | null,
    op: TimingOp,
  ): CqlResult {
    // List-based includes/included-in operations
    if (left instanceof CqlList || right instanceof CqlList) {
      return this.evalListTiming(left, right, op);
    }

    // Point-to-point temporal comparisons (e.g., DateTime same day as DateTime)
    if (!(left instanceof CqlInterval) && !(right instanceof CqlInterval)) {
      if (left === null || right === null) return null;
      return this.evalPointTiming(left as CqlComparable, right as CqlComparable, op);
    }

    // Point-to-interval or interval-to-point: promote point to unit interval
    const leftIv = left instanceof CqlInterval
      ? left as CqlInterval<CqlComparable>
      : left !== null
        ? new CqlInterval(left as CqlComparable, left as CqlComparable, true, true)
        : null;
    const rightIv = right instanceof CqlInterval
      ? right as CqlInterval<CqlComparable>
      : right !== null
        ? new CqlInterval(right as CqlComparable, right as CqlComparable, true, true)
        : null;

    // Special handling for properly includes/included in with null intervals.
    // CQL: null interval treated as unbounded (universal) for properly includes/included in.
    // Mirrors Go: eval/evaluator.go:3058
    if (leftIv === null || rightIv === null) {
      if (op.timingKind === TimingKind.IncludedIn || op.timingKind === TimingKind.During) {
        if (op.properly && rightIv === null && leftIv !== null) return CqlBoolean.TRUE
      }
      if (op.timingKind === TimingKind.Includes) {
        if (op.properly && leftIv === null && rightIv !== null) return CqlBoolean.TRUE
      }
      return null
    }

    switch (op.timingKind) {
      case TimingKind.SameAs: {
        if (op.before) {
          // "on or before": left <= start of right
          // For "point on or before Interval" → point <= start of Interval
          // For "Interval on or before Interval" → end of left <= start of right
          const leftVal = leftIv.high;  // end of left (for points, high=low)
          const rightVal = rightIv.low; // start of right
          if (leftVal === null || rightVal === null) return null;
          try {
            if (op.precision) {
              const cmp = this.compareTemporal(leftVal, rightVal, op.precision);
              return cmp === null ? null : CqlBoolean.of(cmp <= 0);
            }
            return CqlBoolean.of(leftVal.compareTo(rightVal) <= 0);
          } catch { return null; }
        }
        if (op.after) {
          // "on or after": left >= end of right
          // For "point on or after Interval" → point >= end of Interval
          // For "Interval on or after Interval" → start of left >= end of right
          const leftVal = leftIv.low;   // start of left (for points, low=high)
          const rightVal = rightIv.high; // end of right
          if (leftVal === null || rightVal === null) return null;
          try {
            if (op.precision) {
              const cmp = this.compareTemporal(leftVal, rightVal, op.precision);
              return cmp === null ? null : CqlBoolean.of(cmp >= 0);
            }
            return CqlBoolean.of(leftVal.compareTo(rightVal) >= 0);
          } catch { return null; }
        }
        return CqlBoolean.of(leftIv.equals(rightIv));
      }

      case TimingKind.Includes: {
        if (op.precision) {
          // Precision-based includes
          return this.evalPrecisionIncludes(leftIv, rightIv, op.precision, op.properly || false);
        }
        if (op.properly) {
          // For properly includes with a point (promoted to unit interval):
          // The point must be strictly inside (not on a boundary)
          if (right !== null && !(right instanceof CqlInterval)) {
            // right is a point promoted to unit interval
            const point = rightIv.low!;
            try {
              const contains = leftIv.contains(point);
              if (!contains) return CqlBoolean.FALSE;
              // Check it's not on a boundary
              const onLow = leftIv.low !== null && leftIv.low.equals(point);
              const onHigh = leftIv.high !== null && leftIv.high.equals(point);
              return CqlBoolean.of(!onLow && !onHigh);
            } catch {
              // Ambiguous comparison (different precision) returns null
              return null;
            }
          }
          return CqlBoolean.of(leftIv.includes(rightIv) && !rightIv.includes(leftIv));
        }
        return CqlBoolean.of(leftIv.includes(rightIv));
      }

      case TimingKind.IncludedIn:
      case TimingKind.During: {
        if (op.precision) {
          return this.evalPrecisionIncludes(rightIv, leftIv, op.precision, op.properly || false);
        }
        if (op.properly) {
          if (left !== null && !(left instanceof CqlInterval)) {
            // left is a point promoted to unit interval
            const point = leftIv.low!;
            try {
              const contains = rightIv.contains(point);
              if (!contains) return CqlBoolean.FALSE;
              // Check it's not on a boundary
              const onLow = rightIv.low !== null && rightIv.low.equals(point);
              const onHigh = rightIv.high !== null && rightIv.high.equals(point);
              return CqlBoolean.of(!onLow && !onHigh);
            } catch {
              return null;
            }
          }
          return CqlBoolean.of(rightIv.includes(leftIv) && !leftIv.includes(rightIv));
        }
        return CqlBoolean.of(rightIv.includes(leftIv));
      }

      case TimingKind.BeforeOrAfter: {
        if (op.before) {
          if (leftIv.high === null || rightIv.low === null) return null;
          return CqlBoolean.of(leftIv.high.compareTo(rightIv.low) < 0);
        }
        if (leftIv.low === null || rightIv.high === null) return null;
        return CqlBoolean.of(leftIv.low.compareTo(rightIv.high) > 0);
      }

      case TimingKind.Meets: {
        // Meets: end of A is immediately adjacent to start of B (using successor), or vice versa
        // Also handle MeetsBefore and MeetsAfter
        if (op.before !== undefined && op.before) {
          // MeetsBefore: A.high is immediately before B.low (successor(A.high) = B.low)
          // If A starts after B ends, they can't meet before -> false
          if (leftIv.low !== null && rightIv.high !== null) {
            try {
              if (leftIv.low.compareTo(rightIv.high) > 0) return CqlBoolean.FALSE;
            } catch { /* ignore precision issues */ }
          }
          return this.evalMeetsAdjacent(leftIv.high, rightIv.low);
        }
        if (op.after !== undefined && op.after) {
          // MeetsAfter: A.low is immediately after B.high (A.low = successor(B.high))
          // If A ends before B starts, they can't meet after -> false
          if (leftIv.high !== null && rightIv.low !== null) {
            try {
              if (leftIv.high.compareTo(rightIv.low) < 0) return CqlBoolean.FALSE;
            } catch { /* ignore precision issues */ }
          }
          return this.evalMeetsAdjacent(rightIv.high, leftIv.low);
        }
        // Meets (either direction)
        const fwd = this.evalMeetsAdjacent(leftIv.high, rightIv.low);
        if (isTrue(fwd)) return CqlBoolean.TRUE;
        const bwd = this.evalMeetsAdjacent(rightIv.high, leftIv.low);
        if (isTrue(bwd)) return CqlBoolean.TRUE;
        if (fwd === null || bwd === null) return null;
        return CqlBoolean.FALSE;
      }

      case TimingKind.Overlaps: {
        // Normalize intervals to closed bounds for discrete types
        const leftNorm = this.normalizeInterval(leftIv);
        const rightNorm = this.normalizeInterval(rightIv);

        if (op.before !== undefined && op.before) {
          // OverlapsBefore: left starts before right AND left ends within right
          // left.low < right.low AND right.low <= left.high AND left.high <= right.high
          if (leftNorm.low === null || rightNorm.low === null || leftNorm.high === null || rightNorm.high === null) return null;
          try {
            const startsBefore = leftNorm.low.compareTo(rightNorm.low) < 0;
            const endsInOrBefore = leftNorm.high.compareTo(rightNorm.high) <= 0;
            const overlapExists = leftNorm.overlaps(rightNorm);
            return CqlBoolean.of(startsBefore && endsInOrBefore && overlapExists);
          } catch { return null; }
        }
        if (op.after !== undefined && op.after) {
          // OverlapsAfter: left ends after right AND left starts within right
          // left.high > right.high AND left.low >= right.low AND left.low <= right.high
          if (leftNorm.low === null || rightNorm.low === null || leftNorm.high === null || rightNorm.high === null) return null;
          try {
            const endsAfter = leftNorm.high.compareTo(rightNorm.high) > 0;
            const startsInOrAfter = leftNorm.low.compareTo(rightNorm.low) >= 0;
            const overlapExists = leftNorm.overlaps(rightNorm);
            return CqlBoolean.of(endsAfter && startsInOrAfter && overlapExists);
          } catch { return null; }
        }
        return CqlBoolean.of(leftNorm.overlaps(rightNorm));
      }

      case TimingKind.Starts: {
        if (leftIv.low === null || rightIv.low === null) return null;
        const startsEqual = leftIv.low.equals(rightIv.low);
        if (!startsEqual) return CqlBoolean.FALSE;
        // 'starts' also requires left is included in right
        return CqlBoolean.of(rightIv.includes(leftIv));
      }

      case TimingKind.Ends: {
        if (leftIv.high === null || rightIv.high === null) return null;
        const endsEqual = leftIv.high.equals(rightIv.high);
        if (!endsEqual) return CqlBoolean.FALSE;
        // 'ends' also requires left is included in right
        return CqlBoolean.of(rightIv.includes(leftIv));
      }

      case TimingKind.Within:
        return CqlBoolean.of(rightIv.includes(leftIv));

      default:
        return null;
    }
  }

  /**
   * Evaluate list-based timing operations (includes, included in, etc.).
   */
  private evalListTiming(
    left: CqlValue | null,
    right: CqlValue | null,
    op: TimingOp,
  ): CqlResult {
    // For list includes/included-in, null element checks
    if (left === null && right === null) return null;

    // null includes {list}: CQL spec says null list operand returns null
    // But: {list} includes null element and null element included in {list} check for null membership
    if (right === null && (op.timingKind === TimingKind.Includes)) {
      // List includes null element: check if list has a CqlNull element
      if (left instanceof CqlList) {
        const hasNull = left.values.some(v => v instanceof CqlNull);
        if (hasNull) {
          if (op.properly) return CqlBoolean.of(left.values.length > 1);
          return CqlBoolean.TRUE;
        }
        // null not found: for properly, definitively false; for regular, uncertain (null)
        if (op.properly) return CqlBoolean.FALSE;
        return null;
      }
      return null;
    }
    if (left === null && (op.timingKind === TimingKind.IncludedIn || op.timingKind === TimingKind.During)) {
      // null element included in list: check if list has a CqlNull element
      if (right instanceof CqlList) {
        const hasNull = right.values.some(v => v instanceof CqlNull);
        if (hasNull) {
          if (op.properly) return CqlBoolean.of(right.values.length > 1);
          return CqlBoolean.TRUE;
        }
        // null not found: for properly, definitively false; for regular, uncertain (null)
        if (op.properly) return CqlBoolean.FALSE;
        return null;
      }
      return null;
    }
    // null as the list/collection operand returns null per CQL spec
    if (left === null || right === null) return null;

    switch (op.timingKind) {
      case TimingKind.Includes: {
        const lItems = toList(left);
        if (right instanceof CqlList) {
          const rItems = right.values;
          // Empty includes empty = true, but properly empty includes empty = false
          if (op.properly && lItems.length <= rItems.length) {
            // Check if they're equivalent first
            if (lItems.length === rItems.length) {
              // Need to be strict subset for proper
              const lEquiv = new CqlList(lItems);
              const rEquiv = new CqlList(rItems);
              if (lEquiv.equivalent(rEquiv)) return CqlBoolean.FALSE;
            }
          }
          if (rItems.length === 0) {
            return CqlBoolean.of(!op.properly || lItems.length > 0);
          }
          let hasNull = false;
          for (const r of rItems) {
            if (r === null) {
              if (!lItems.some(l => l === null)) {
                // null not found in left; but maybe it's ambiguous
                hasNull = true;
              }
            } else {
              if (!lItems.some(l => l !== null && l.equals(r))) return CqlBoolean.FALSE;
            }
          }
          if (hasNull && !lItems.some(l => l === null)) return CqlBoolean.FALSE;
          if (op.properly) {
            return CqlBoolean.of(lItems.length > rItems.length);
          }
          return CqlBoolean.TRUE;
        }
        // List includes single element
        if (right === null) return CqlBoolean.of(lItems.some(l => l === null));
        // Check for ambiguous element comparison (different precision)
        let found = false;
        let hasAmbiguous = false;
        for (const l of lItems) {
          if (l === null || l instanceof CqlNull) continue;
          try {
            // Check for temporal precision mismatch (ambiguous comparison)
            if ((l instanceof CqlTime && right instanceof CqlTime && l.precision !== right.precision) ||
                (l instanceof CqlDate && right instanceof CqlDate && l.precision !== right.precision) ||
                (l instanceof CqlDateTime && right instanceof CqlDateTime && l.precision !== right.precision)) {
              hasAmbiguous = true;
              continue;
            }
            if (l.equals(right)) { found = true; break; }
          } catch {
            hasAmbiguous = true;
          }
        }
        if (found) {
          if (op.properly) return CqlBoolean.of(lItems.length > 1);
          return CqlBoolean.TRUE;
        }
        if (hasAmbiguous) return null;
        return CqlBoolean.FALSE;
      }

      case TimingKind.IncludedIn:
      case TimingKind.During: {
        if (left instanceof CqlList) {
          const rItems = toList(right);
          const lItems = left.values;
          if (op.properly && lItems.length >= rItems.length) {
            if (lItems.length === rItems.length) {
              const lEquiv = new CqlList(lItems);
              const rEquiv = new CqlList(rItems);
              if (lEquiv.equivalent(rEquiv)) return CqlBoolean.FALSE;
            }
          }
          if (lItems.length === 0) {
            return CqlBoolean.of(!op.properly || rItems.length > 0);
          }
          let hasNull = false;
          for (const l of lItems) {
            if (l === null) {
              if (!rItems.some(r => r === null)) hasNull = true;
            } else {
              if (!rItems.some(r => r !== null && r.equals(l))) return CqlBoolean.FALSE;
            }
          }
          if (hasNull && !rItems.some(r => r === null)) return CqlBoolean.FALSE;
          if (op.properly) {
            return CqlBoolean.of(rItems.length > lItems.length);
          }
          return CqlBoolean.TRUE;
        }
        // Single element included in list
        const rItems = toList(right);
        if (left === null) return CqlBoolean.of(rItems.some(r => r === null));
        let found = false;
        let hasAmbiguous = false;
        for (const r of rItems) {
          if (r === null || r instanceof CqlNull) continue;
          try {
            // Check for temporal precision mismatch (ambiguous comparison)
            if ((r instanceof CqlTime && left instanceof CqlTime && r.precision !== left.precision) ||
                (r instanceof CqlDate && left instanceof CqlDate && r.precision !== left.precision) ||
                (r instanceof CqlDateTime && left instanceof CqlDateTime && r.precision !== left.precision)) {
              hasAmbiguous = true;
              continue;
            }
            if (r.equals(left)) { found = true; break; }
          } catch {
            hasAmbiguous = true;
          }
        }
        if (found) {
          if (op.properly) return CqlBoolean.of(rItems.length > 1);
          return CqlBoolean.TRUE;
        }
        if (hasAmbiguous) return null;
        return CqlBoolean.FALSE;
      }

      default:
        return null;
    }
  }

  /**
   * Evaluate point-to-point temporal comparisons (same X as, before X of, after X of).
   */
  private evalPointTiming(
    left: CqlComparable,
    right: CqlComparable,
    op: TimingOp,
  ): CqlResult {
    const precision = op.precision;

    switch (op.timingKind) {
      case TimingKind.SameAs: {
        if (!precision) {
          // No precision: full equality
          if (op.before) {
            // same or before
            try { return CqlBoolean.of(left.compareTo(right) <= 0); } catch { return null; }
          }
          if (op.after) {
            // same or after
            try { return CqlBoolean.of(left.compareTo(right) >= 0); } catch { return null; }
          }
          return CqlBoolean.of(left.equals(right));
        }
        // Precision-based: compare at given precision
        const cmp = this.compareTemporal(left, right, precision);
        if (cmp === null) return null;
        if (op.before) return CqlBoolean.of(cmp <= 0);  // same or before
        if (op.after) return CqlBoolean.of(cmp >= 0);    // same or after
        return CqlBoolean.of(cmp === 0);
      }

      case TimingKind.BeforeOrAfter: {
        if (!precision) {
          try {
            const cmp = left.compareTo(right);
            return CqlBoolean.of(op.before ? cmp < 0 : cmp > 0);
          } catch {
            return null;
          }
        }
        const cmp = this.compareTemporal(left, right, precision);
        if (cmp === null) return null;
        return CqlBoolean.of(op.before ? cmp < 0 : cmp > 0);
      }

      case TimingKind.Includes: {
        // Point includes point: equality
        if (!precision) return CqlBoolean.of(left.equals(right));
        const cmp = this.compareTemporal(left, right, precision);
        if (cmp === null) return null;
        return CqlBoolean.of(cmp === 0);
      }

      case TimingKind.IncludedIn:
      case TimingKind.During: {
        // Point during/included in point: equality
        if (!precision) return CqlBoolean.of(left.equals(right));
        const cmp = this.compareTemporal(left, right, precision);
        if (cmp === null) return null;
        return CqlBoolean.of(cmp === 0);
      }

      default:
        return null;
    }
  }

  /**
   * Compare two temporal values at a given precision.
   * Returns negative if left < right, 0 if equal, positive if left > right, or null if incompatible.
   */
  private compareTemporal(
    left: CqlComparable,
    right: CqlComparable,
    precision: string,
  ): number | null {
    // DateTime comparison
    if (left instanceof CqlDateTime && right instanceof CqlDateTime) {
      return this.compareDateTimeAtPrecision(left, right, precision);
    }
    // Date comparison
    if (left instanceof CqlDate && right instanceof CqlDate) {
      return this.compareDateAtPrecision(left, right, precision);
    }
    // Time comparison
    if (left instanceof CqlTime && right instanceof CqlTime) {
      return this.compareTimeAtPrecision(left, right, precision);
    }
    // Numeric - no precision semantics, just compare
    try {
      return left.compareTo(right);
    } catch {
      return null;
    }
  }

  private compareDateTimeAtPrecision(a: CqlDateTime, b: CqlDateTime, precision: string): number | null {
    // Normalize to UTC if both have timezone info
    const aNorm = (a.hasTZ && a.tzOffset !== 0) ? this.normalizeToUtc(a) : a;
    const bNorm = (b.hasTZ && b.tzOffset !== 0) ? this.normalizeToUtc(b) : b;

    const components: Array<[string, (dt: CqlDateTime) => number, number]> = [
      ['year', (dt) => dt.year, DateTimePrecision.Year],
      ['month', (dt) => dt.month, DateTimePrecision.Month],
      ['day', (dt) => dt.day, DateTimePrecision.Day],
      ['hour', (dt) => dt.hour, DateTimePrecision.Hour],
      ['minute', (dt) => dt.minute, DateTimePrecision.Minute],
      ['second', (dt) => dt.second, DateTimePrecision.Second],
      ['millisecond', (dt) => dt.millis, DateTimePrecision.Millisecond],
    ];

    for (const [name, getter, precLevel] of components) {
      // If either operand doesn't have this precision, comparison is uncertain
      if (aNorm.precision < precLevel || bNorm.precision < precLevel) {
        return null; // indeterminate
      }
      const av = getter(aNorm);
      const bv = getter(bNorm);
      if (av !== bv) return av - bv;
      if (name === precision) return 0;
    }
    return 0;
  }

  private normalizeToUtc(dt: CqlDateTime): CqlDateTime {
    // Convert to UTC by subtracting the timezone offset
    const d = new Date(Date.UTC(
      dt.year, dt.month - 1, dt.day,
      dt.hour, dt.minute, dt.second, dt.millis,
    ));
    // Subtract offset: if offset is +60 (i.e., +01:00), UTC time = local - 60min
    d.setUTCMinutes(d.getUTCMinutes() - dt.tzOffset);

    const pad = (n: number, w: number) => String(n).padStart(w, '0');
    let s = `${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}`;
    if (dt.precision >= DateTimePrecision.Hour) {
      s += `T${pad(d.getUTCHours(), 2)}`;
    }
    if (dt.precision >= DateTimePrecision.Minute) {
      s += `:${pad(d.getUTCMinutes(), 2)}`;
    }
    if (dt.precision >= DateTimePrecision.Second) {
      s += `:${pad(d.getUTCSeconds(), 2)}`;
    }
    if (dt.precision >= DateTimePrecision.Millisecond) {
      s += `.${pad(d.getUTCMilliseconds(), 3)}`;
    }
    s += 'Z';
    return new CqlDateTime(s);
  }

  private compareDateAtPrecision(a: CqlDate, b: CqlDate, precision: string): number | null {
    const components: Array<[string, (dt: CqlDate) => number, number]> = [
      ['year', (dt) => dt.year, DatePrecision.Year],
      ['month', (dt) => dt.month, DatePrecision.Month],
      ['day', (dt) => dt.day, DatePrecision.Day],
    ];

    for (const [name, getter, precLevel] of components) {
      if (a.precision < precLevel || b.precision < precLevel) {
        return null;
      }
      const av = getter(a);
      const bv = getter(b);
      if (av !== bv) return av - bv;
      if (name === precision) return 0;
    }
    return 0;
  }

  private compareTimeAtPrecision(a: CqlTime, b: CqlTime, precision: string): number | null {
    const components: Array<[string, (t: CqlTime) => number, number]> = [
      ['hour', (t) => t.hour, TimePrecision.Hour],
      ['minute', (t) => t.minute, TimePrecision.Minute],
      ['second', (t) => t.second, TimePrecision.Second],
      ['millisecond', (t) => t.millis, TimePrecision.Millisecond],
    ];

    for (const [name, getter, precLevel] of components) {
      if (a.precision < precLevel || b.precision < precLevel) {
        return null;
      }
      const av = getter(a);
      const bv = getter(b);
      if (av !== bv) return av - bv;
      if (name === precision) return 0;
    }
    return 0;
  }

  async visitSetAggregate(expr: SetAggregateExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    const items = toList(operand);

    switch (expr.setKind) {
      case 'expand': {
        const expandFn = this.registry.resolve('expand');
        if (expandFn) {
          // CQL spec: when input is a single Interval (not a list), return list of points.
          // When input is a list of intervals, return list of unit intervals.
          const isSingleInterval = operand instanceof CqlInterval;
          const per = expr.per !== null ? await this.evaluate(expr.per) : null;

          if (isSingleInterval) {
            // Single interval overload: return points directly
            const expanded = await expandFn([operand, per], this.ctx);
            if (expanded instanceof CqlList) {
              return expanded; // already a list of points from the Expand function
            }
            return new CqlList([]);
          }

          // List of intervals overload: wrap each point in a step-sized unit interval
          const result: CqlValue[] = [];
          for (const item of items) {
            if (item instanceof CqlInterval) {
              const expanded = await expandFn([item, per], this.ctx);
              if (expanded instanceof CqlList) {
                for (const point of expanded.values) {
                  if (point instanceof CqlInterval) {
                    result.push(point);
                  } else {
                    const unitIv = this.makeUnitInterval(point, per);
                    if (unitIv && unitIv.high !== null) {
                      // For list-of-intervals expand, filter out unit intervals
                      // that exceed the original interval bounds (same-type check)
                      const origHigh = item.high as CqlComparable;
                      if (origHigh !== null && unitIv.high.type === origHigh.type) {
                        try {
                          if (unitIv.high.compareTo(origHigh) > 0) continue;
                        } catch { /* skip filtering on comparison error */ }
                      }
                      result.push(unitIv);
                    } else if (unitIv) {
                      result.push(unitIv);
                    }
                  }
                }
              }
            }
          }
          return new CqlList(result);
        }
        return new CqlList([]);
      }

      case 'collapse': {
        const collapseFn = this.registry.resolve('collapse');
        if (collapseFn) {
          return await collapseFn([new CqlList(items)], this.ctx);
        }
        return new CqlList(items);
      }

      default:
        return null;
    }
  }

  // -----------------------------------------------------------------------
  // Private helpers
  // -----------------------------------------------------------------------

  /**
   * Convert a CqlQuantity to a target unit using UCUM service.
   * Returns null if no ucumService is available or units are incompatible.
   */
  private convertQuantityToUnit(qty: CqlQuantity, targetUnit: string): CqlQuantity | null {
    const svc = this.ctx.ucumService;
    if (!svc) return null;
    try {
      if (!svc.isComparable(qty.unit, targetUnit)) return null;
      const converted = svc.convert(qty.value.toNumber(), qty.unit, targetUnit);
      return new CqlQuantity(new Decimal(converted), targetUnit);
    } catch {
      return null;
    }
  }

  /** UCUM-aware Quantity equality: convert to common unit then compare values. */
  private quantityEquals(left: CqlQuantity, right: CqlQuantity): boolean {
    const converted = this.convertQuantityToUnit(right, left.unit);
    if (converted === null) return false;
    return left.value.equals(converted.value);
  }

  /** UCUM-aware Quantity equivalence: convert to canonical form then compare. */
  private quantityEquivalent(left: CqlQuantity, right: CqlQuantity): boolean {
    const converted = this.convertQuantityToUnit(right, left.unit);
    if (converted === null) return false;
    // For equivalence, compare with tolerance (8 decimal digits per CQL spec)
    const diff = left.value.minus(converted.value).abs();
    const tolerance = new Decimal('0.00000001');
    return diff.lessThanOrEqualTo(tolerance);
  }

  private evalArithmetic(
    op: BinaryOp,
    left: CqlValue,
    right: CqlValue,
  ): CqlResult {
    // CqlNull sentinel should be treated as null (return null)
    if (left instanceof CqlNull || right instanceof CqlNull) return null;

    // String concatenation: CQL '+' on strings is concatenation
    if (op === BinaryOp.Add && left instanceof CqlString && right instanceof CqlString) {
      return new CqlString(left.value + right.value);
    }

    // DateTime/Date/Time +/- Quantity (temporal arithmetic)
    if ((op === BinaryOp.Add || op === BinaryOp.Subtract) &&
      (left instanceof CqlDateTime || left instanceof CqlDate || left instanceof CqlTime) &&
      right instanceof CqlQuantity) {
      return this.evalTemporalArithmetic(op, left, right);
    }

    // Quantity arithmetic (same or convertible units)
    if (left instanceof CqlQuantity && right instanceof CqlQuantity) {
      // Multiply and Divide compose units via UCUM
      if (op === BinaryOp.Multiply && this.ctx.ucumService?.multiply) {
        const result = this.ctx.ucumService.multiply(
          { value: left.value.toNumber(), code: left.unit },
          { value: right.value.toNumber(), code: right.unit },
        );
        return new CqlQuantity(new Decimal(result.value), result.code);
      }
      if (op === BinaryOp.Divide && this.ctx.ucumService?.divide) {
        if (right.value.isZero()) return null;
        const result = this.ctx.ucumService.divide(
          { value: left.value.toNumber(), code: left.unit },
          { value: right.value.toNumber(), code: right.unit },
        );
        return new CqlQuantity(new Decimal(result.value), result.code);
      }

      let effectiveRight = right;
      if (left.unit !== right.unit) {
        // Try UCUM conversion to left's unit
        const converted = this.convertQuantityToUnit(right, left.unit);
        if (converted === null) {
          return null; // incompatible units → null per CQL spec
        }
        effectiveRight = converted;
      }
      switch (op) {
        case BinaryOp.Add:
          return new CqlQuantity(left.value.plus(effectiveRight.value), left.unit);
        case BinaryOp.Subtract:
          return new CqlQuantity(left.value.minus(effectiveRight.value), left.unit);
        case BinaryOp.Multiply:
          return new CqlQuantity(left.value.times(effectiveRight.value), left.unit);
        case BinaryOp.Divide:
          if (effectiveRight.value.isZero()) return null;
          return new CqlQuantity(left.value.div(effectiveRight.value), left.unit);
        case BinaryOp.Div:
          if (effectiveRight.value.isZero()) return null;
          return new CqlQuantity(left.value.div(effectiveRight.value).truncated(), left.unit);
        case BinaryOp.Mod:
          if (effectiveRight.value.isZero()) return null;
          return new CqlQuantity(left.value.mod(effectiveRight.value), left.unit);
      }
    }

    // Quantity * number or Quantity / number
    if (left instanceof CqlQuantity && isNumericType(right)) {
      const rv = toDecimal(right);
      switch (op) {
        case BinaryOp.Multiply:
          return new CqlQuantity(left.value.times(rv), left.unit);
        case BinaryOp.Divide:
          if (rv.isZero()) return null;
          return new CqlQuantity(left.value.div(rv), left.unit);
      }
    }
    // number * Quantity
    if (right instanceof CqlQuantity && isNumericType(left)) {
      const lv = toDecimal(left);
      if (op === BinaryOp.Multiply) {
        return new CqlQuantity(lv.times(right.value), right.unit);
      }
    }

    // Long arithmetic (Long op Long, or Integer op Long, or Long op Integer)
    if (
      (left instanceof CqlLong || left instanceof CqlInteger) &&
      (right instanceof CqlLong || right instanceof CqlInteger) &&
      (left instanceof CqlLong || right instanceof CqlLong)
    ) {
      const lv = left instanceof CqlLong ? left.value : BigInt(left.value);
      const rv = right instanceof CqlLong ? right.value : BigInt(right.value);
      switch (op) {
        case BinaryOp.Add:
          return new CqlLong(lv + rv);
        case BinaryOp.Subtract:
          return new CqlLong(lv - rv);
        case BinaryOp.Multiply:
          return new CqlLong(lv * rv);
        case BinaryOp.Divide:
          if (rv === 0n) return null;
          return CqlDecimal.of(new Decimal(lv.toString()).div(new Decimal(rv.toString())).toString());
        case BinaryOp.Div:
          if (rv === 0n) return null;
          return new CqlLong(lv / rv);
        case BinaryOp.Mod:
          if (rv === 0n) return null;
          return new CqlLong(lv % rv);
        case BinaryOp.Power:
          return new CqlLong(lv ** rv);
      }
    }

    // Integer arithmetic
    if (left instanceof CqlInteger && right instanceof CqlInteger) {
      const lv = left.value;
      const rv = right.value;
      switch (op) {
        case BinaryOp.Add:
          return new CqlInteger(lv + rv);
        case BinaryOp.Subtract:
          return new CqlInteger(lv - rv);
        case BinaryOp.Multiply:
          return new CqlInteger(lv * rv);
        case BinaryOp.Divide:
          if (rv === 0) return null; // CQL: divide by zero returns null
          return CqlDecimal.of(new Decimal(lv).div(new Decimal(rv)).toString());
        case BinaryOp.Div:
          if (rv === 0) return null;
          return new CqlInteger(Math.trunc(lv / rv));
        case BinaryOp.Mod:
          if (rv === 0) return null;
          return new CqlInteger(lv % rv);
        case BinaryOp.Power:
          return new CqlInteger(Math.pow(lv, rv));
      }
    }

    // Fall back to decimal
    const ld = toDecimal(left);
    const rd = toDecimal(right);
    if (
      ld.isZero() &&
      !(left instanceof CqlInteger) &&
      !isDecimalType(left)
    ) {
      throw new Error(`cannot perform arithmetic on ${left.type}`);
    }

    switch (op) {
      case BinaryOp.Add:
        return CqlDecimal.of(ld.plus(rd).toString());
      case BinaryOp.Subtract:
        return CqlDecimal.of(ld.minus(rd).toString());
      case BinaryOp.Multiply:
        return CqlDecimal.of(ld.times(rd).toString());
      case BinaryOp.Divide:
        if (rd.isZero()) return null;
        return CqlDecimal.of(ld.div(rd).toString());
      case BinaryOp.Div:
        if (rd.isZero()) return null;
        return new CqlInteger(ld.div(rd).truncated().toNumber());
      case BinaryOp.Mod:
        if (rd.isZero()) return null;
        return CqlDecimal.of(ld.mod(rd).toString());
      case BinaryOp.Power: {
        const f = ld.toNumber();
        const p = rd.toNumber();
        return CqlDecimal.of(Math.pow(f, p));
      }
    }
    return null;
  }

  /**
   * Temporal arithmetic: DateTime/Date/Time +/- Quantity
   */
  private evalTemporalArithmetic(
    op: BinaryOp,
    temporal: CqlDateTime | CqlDate | CqlTime,
    quantity: CqlQuantity,
  ): CqlResult {
    const amount = op === BinaryOp.Add
      ? quantity.value.toNumber()
      : -quantity.value.toNumber();
    const unit = quantity.unit.toLowerCase().replace(/s$/, '');
    const pad = (n: number, w: number) => String(n).padStart(w, '0');

    if (temporal instanceof CqlDateTime) {
      let yr = temporal.year;
      let mo = (temporal.month || 1) - 1; // 0-based
      let dy = temporal.day || 1;
      let hr = temporal.hour;
      let mi = temporal.minute;
      let se = temporal.second;
      let ms = temporal.millis;

      switch (unit) {
        case 'year': {
          yr += amount;
          // Clamp day for year changes (e.g., Feb 29 -> Feb 28)
          if (temporal.precision >= DateTimePrecision.Day) {
            const maxDay = new Date(Date.UTC(yr, mo + 1, 0)).getUTCDate();
            if (dy > maxDay) dy = maxDay;
          }
          break;
        }
        case 'month': {
          if (temporal.precision < DateTimePrecision.Month) {
            // Year-only precision: truncate months to years
            yr += Math.trunc(amount / 12);
            break;
          }
          const totalMonths = yr * 12 + mo + amount;
          yr = Math.floor(totalMonths / 12);
          mo = ((totalMonths % 12) + 12) % 12;
          if (temporal.precision >= DateTimePrecision.Day) {
            const maxDay = new Date(Date.UTC(yr, mo + 1, 0)).getUTCDate();
            if (dy > maxDay) dy = maxDay;
          }
          break;
        }
        case 'week':
        case 'day':
        case 'hour':
        case 'minute':
        case 'second':
        case 'millisecond': {
          const d = new Date(Date.UTC(yr, mo, dy, hr, mi, se, ms));
          switch (unit) {
            case 'week': d.setUTCDate(d.getUTCDate() + amount * 7); break;
            case 'day': d.setUTCDate(d.getUTCDate() + amount); break;
            case 'hour': d.setUTCHours(d.getUTCHours() + amount); break;
            case 'minute': d.setUTCMinutes(d.getUTCMinutes() + amount); break;
            case 'second': d.setUTCSeconds(d.getUTCSeconds() + amount); break;
            case 'millisecond': d.setUTCMilliseconds(d.getUTCMilliseconds() + amount); break;
          }
          yr = d.getUTCFullYear();
          mo = d.getUTCMonth();
          dy = d.getUTCDate();
          hr = d.getUTCHours();
          mi = d.getUTCMinutes();
          se = d.getUTCSeconds();
          ms = d.getUTCMilliseconds();
          break;
        }
        default: throw new Error(`unsupported temporal unit: ${quantity.unit}`);
      }

      // Validate year range
      if (yr < 1 || yr > 9999) throw new Error(`DateTime arithmetic result year out of range: ${yr}`);

      // Reconstruct at original precision
      let s = pad(yr, 4);
      if (temporal.precision >= DateTimePrecision.Month) s += `-${pad(mo + 1, 2)}`;
      if (temporal.precision >= DateTimePrecision.Day) s += `-${pad(dy, 2)}`;
      if (temporal.precision >= DateTimePrecision.Hour) s += `T${pad(hr, 2)}`;
      if (temporal.precision >= DateTimePrecision.Minute) s += `:${pad(mi, 2)}`;
      if (temporal.precision >= DateTimePrecision.Second) s += `:${pad(se, 2)}`;
      if (temporal.precision >= DateTimePrecision.Millisecond) s += `.${pad(ms, 3)}`;
      if (temporal.hasTZ) {
        if (temporal.tzOffset === 0) s += 'Z';
        else {
          const sign = temporal.tzOffset < 0 ? '-' : '+';
          const abs = Math.abs(temporal.tzOffset);
          s += `${sign}${pad(Math.floor(abs / 60), 2)}:${pad(abs % 60, 2)}`;
        }
      }
      return new CqlDateTime(s);
    }

    if (temporal instanceof CqlDate) {
      let yr = temporal.year;
      let mo = (temporal.month || 1) - 1; // 0-based
      let dy = temporal.day || 1;

      switch (unit) {
        case 'year': {
          yr += amount;
          if (temporal.precision >= DatePrecision.Day) {
            const maxDay = new Date(Date.UTC(yr, mo + 1, 0)).getUTCDate();
            if (dy > maxDay) dy = maxDay;
          }
          break;
        }
        case 'month': {
          if (temporal.precision < DatePrecision.Month) {
            yr += Math.trunc(amount / 12);
            break;
          }
          const totalMonths = yr * 12 + mo + amount;
          yr = Math.floor(totalMonths / 12);
          mo = ((totalMonths % 12) + 12) % 12;
          if (temporal.precision >= DatePrecision.Day) {
            const maxDay = new Date(Date.UTC(yr, mo + 1, 0)).getUTCDate();
            if (dy > maxDay) dy = maxDay;
          }
          break;
        }
        case 'week':
        case 'day': {
          if (temporal.precision < DatePrecision.Day && unit === 'day') {
            // Month-only precision: truncate days to months
            const totalMonths = yr * 12 + mo + Math.trunc(amount / 30);
            yr = Math.floor(totalMonths / 12);
            mo = ((totalMonths % 12) + 12) % 12;
            break;
          }
          const d = new Date(Date.UTC(yr, mo, dy));
          if (unit === 'week') d.setUTCDate(d.getUTCDate() + amount * 7);
          else d.setUTCDate(d.getUTCDate() + amount);
          yr = d.getUTCFullYear();
          mo = d.getUTCMonth();
          dy = d.getUTCDate();
          break;
        }
        default: throw new Error(`unsupported temporal unit for Date: ${quantity.unit}`);
      }
      let s = pad(yr, 4);
      if (temporal.precision >= DatePrecision.Month) s += `-${pad(mo + 1, 2)}`;
      if (temporal.precision >= DatePrecision.Day) s += `-${pad(dy, 2)}`;
      return new CqlDate(s);
    }

    if (temporal instanceof CqlTime) {
      // Time arithmetic
      let totalMs = temporal.hour * 3600000 + temporal.minute * 60000 +
        temporal.second * 1000 + temporal.millis;
      switch (unit) {
        case 'hour': totalMs += amount * 3600000; break;
        case 'minute': totalMs += amount * 60000; break;
        case 'second': totalMs += amount * 1000; break;
        case 'millisecond': totalMs += amount; break;
        default: throw new Error(`unsupported temporal unit for Time: ${quantity.unit}`);
      }
      // Normalize (keep within 0-24h range)
      totalMs = ((totalMs % 86400000) + 86400000) % 86400000;
      const h = Math.floor(totalMs / 3600000);
      const m = Math.floor((totalMs % 3600000) / 60000);
      const sec = Math.floor((totalMs % 60000) / 1000);
      const ms = totalMs % 1000;

      let s = pad(h, 2);
      if (temporal.precision >= TimePrecision.Minute) s += `:${pad(m, 2)}`;
      if (temporal.precision >= TimePrecision.Second) s += `:${pad(sec, 2)}`;
      if (temporal.precision >= TimePrecision.Millisecond) s += `.${pad(ms, 3)}`;
      return new CqlTime(s);
    }

    return null;
  }

  /** Precision-based includes for intervals. */
  private evalPrecisionIncludes(
    outer: CqlInterval<CqlComparable>,
    inner: CqlInterval<CqlComparable>,
    precision: string,
    properly: boolean,
  ): CqlResult {
    // Check that inner's low >= outer's low and inner's high <= outer's high at given precision
    let lowCmp: number | null = null;
    let highCmp: number | null = null;
    if (outer.low !== null && inner.low !== null) {
      lowCmp = this.compareTemporal(outer.low, inner.low, precision);
      if (lowCmp === null) return null;
      if (lowCmp > 0) return CqlBoolean.FALSE;
    }
    if (outer.high !== null && inner.high !== null) {
      highCmp = this.compareTemporal(outer.high, inner.high, precision);
      if (highCmp === null) return null;
      if (highCmp < 0) return CqlBoolean.FALSE;
    }
    if (properly) {
      // For properly includes at precision: the inner must be strictly inside the outer.
      // Check if inner is a unit interval (point promoted) — if so, both bounds must be strict.
      const isPoint = inner.low !== null && inner.high !== null &&
                      (inner.low === inner.high || inner.low.equals(inner.high));
      const strictLow = lowCmp !== null && lowCmp < 0;
      const strictHigh = highCmp !== null && highCmp > 0;
      if (isPoint) {
        // Point: must be strictly inside on BOTH sides at the given precision
        return CqlBoolean.of(strictLow && strictHigh);
      }
      // Interval: at least one side must be strictly inside
      return CqlBoolean.of(strictLow || strictHigh);
    }
    return CqlBoolean.TRUE;
  }

  /**
   * Multi-source query: compute cross product of all sources.
   */
  private async evalMultiSourceQuery(expr: QueryExpr): Promise<CqlResult> {
    // Evaluate all sources
    const allSourceItems: Array<{ alias: string; items: CqlValue[] }> = [];
    for (const src of expr.sources) {
      const srcVal = await this.evaluate(src.source);
      allSourceItems.push({ alias: src.alias, items: toList(srcVal) });
    }

    // Generate cross product
    let crossRows: Map<string, CqlValue>[] = [new Map()];
    for (const src of allSourceItems) {
      const newCross: Map<string, CqlValue>[] = [];
      for (const existing of crossRows) {
        for (const item of src.items) {
          const row = new Map(existing);
          row.set(src.alias, item);
          newCross.push(row);
        }
      }
      crossRows = newCross;
    }

    let results: CqlValue[] = [];
    for (let i = 0; i < crossRows.length; i++) {
      const child = this.ctx.childScope();
      for (const [alias, val] of crossRows[i]) {
        child.aliases.set(alias, val);
      }
      child.indexValue = i;
      const childEval = this.withContext(child);

      // Process let bindings
      for (const let_ of expr.let) {
        const val = await childEval.evaluate(let_.expression);
        child.letBindings.set(let_.identifier, val);
      }

      // Check with clauses
      let withOk = true;
      for (const w of expr.with) {
        const ok = await childEval.evalWithClause(w);
        if (!ok) { withOk = false; break; }
      }
      if (!withOk) continue;

      // Check without clauses
      let withoutOk = true;
      for (const w of expr.without) {
        const ok = await childEval.evalWithoutClause(w);
        if (!ok) { withoutOk = false; break; }
      }
      if (!withoutOk) continue;

      // Apply where filter
      if (expr.where !== null) {
        const cond = await childEval.evaluate(expr.where);
        if (!isTrue(cond)) continue;
      }

      // Apply return clause
      if (expr.return !== null) {
        const val = await childEval.evaluate(expr.return.expression);
        if (val !== null) results.push(val);
      } else {
        // Default: create a tuple from the cross product row
        const elements = new Map<string, CqlValue | null>();
        for (const [alias, val] of crossRows[i]) {
          elements.set(alias, val);
        }
        results.push(new CqlTuple(elements));
      }
    }

    // Apply distinct if specified
    if (expr.return !== null && expr.return.distinct) {
      const distinct: CqlValue[] = [];
      for (const v of results) {
        if (!distinct.some((d) => d.equals(v))) distinct.push(v);
      }
      results = distinct;
    }

    // Apply sort
    if (expr.sort !== null) {
      // Use simple sort for now
      const sort = expr.sort;
      results.sort((a, b) => {
        const cmp = compareValues(a, b);
        if (sort.direction === SortDirection.Desc) return -cmp;
        return cmp;
      });
    }

    return new CqlList(results);
  }

  /**
   * Arithmetic on uncertainty intervals.
   * Interval[a,b] op x => Interval[a op x, b op x]
   * x op Interval[a,b] => Interval[x op a, x op b]
   * Interval[a,b] op Interval[c,d] => Interval[min(all combos), max(all combos)]
   */
  private evalIntervalArithmetic(op: BinaryOp, left: CqlValue, right: CqlValue): CqlResult {
    if (left instanceof CqlInterval && right instanceof CqlInterval) {
      const ivL = left as CqlInterval<CqlComparable>;
      const ivR = right as CqlInterval<CqlComparable>;
      if (ivL.low === null || ivL.high === null || ivR.low === null || ivR.high === null) return null;
      // Compute all 4 combinations and take min/max
      const combos = [
        this.evalArithmetic(op, ivL.low, ivR.low),
        this.evalArithmetic(op, ivL.low, ivR.high),
        this.evalArithmetic(op, ivL.high, ivR.low),
        this.evalArithmetic(op, ivL.high, ivR.high),
      ].filter((v): v is CqlValue => v !== null);
      if (combos.length === 0) return null;
      let lo = combos[0] as CqlComparable;
      let hi = combos[0] as CqlComparable;
      for (let i = 1; i < combos.length; i++) {
        try {
          if (lo.compareTo(combos[i]) > 0) lo = combos[i] as CqlComparable;
          if (hi.compareTo(combos[i]) < 0) hi = combos[i] as CqlComparable;
        } catch { /* skip incomparable */ }
      }
      return new CqlInterval(lo, hi, true, true);
    }
    if (left instanceof CqlInterval) {
      const iv = left as CqlInterval<CqlComparable>;
      if (iv.low === null || iv.high === null) return null;
      const newLow = this.evalArithmetic(op, iv.low, right);
      const newHigh = this.evalArithmetic(op, iv.high, right);
      if (newLow === null || newHigh === null) return null;
      return new CqlInterval(newLow as CqlComparable, newHigh as CqlComparable, iv.lowClosed, iv.highClosed);
    }
    if (right instanceof CqlInterval) {
      const iv = right as CqlInterval<CqlComparable>;
      if (iv.low === null || iv.high === null) return null;
      const newLow = this.evalArithmetic(op, left, iv.low);
      const newHigh = this.evalArithmetic(op, left, iv.high);
      if (newLow === null || newHigh === null) return null;
      return new CqlInterval(newLow as CqlComparable, newHigh as CqlComparable, iv.lowClosed, iv.highClosed);
    }
    return this.evalArithmetic(op, left, right);
  }

  /**
   * Compare an uncertainty interval with a point value.
   * Returns true if the comparison is definitely true, false if definitely false, null if uncertain.
   */
  private evalUncertaintyComparison(
    op: BinaryOp,
    interval: CqlInterval<CqlComparable>,
    point: CqlValue,
  ): CqlResult {
    const lo = interval.low;
    const hi = interval.high;
    if (lo === null || hi === null) return null;
    const pc = point as CqlComparable;
    try {
      const cmpLo = lo.compareTo(pc);
      const cmpHi = hi.compareTo(pc);
      switch (op) {
        case BinaryOp.Greater:
          // Interval > point: true if lo > point, false if hi <= point, else null
          if (cmpLo > 0) return CqlBoolean.TRUE;
          if (cmpHi <= 0) return CqlBoolean.FALSE;
          return null;
        case BinaryOp.GreaterOrEqual:
          if (cmpLo >= 0) return CqlBoolean.TRUE;
          if (cmpHi < 0) return CqlBoolean.FALSE;
          return null;
        case BinaryOp.Less:
          if (cmpHi < 0) return CqlBoolean.TRUE;
          if (cmpLo >= 0) return CqlBoolean.FALSE;
          return null;
        case BinaryOp.LessOrEqual:
          if (cmpHi <= 0) return CqlBoolean.TRUE;
          if (cmpLo > 0) return CqlBoolean.FALSE;
          return null;
        default:
          return null;
      }
    } catch {
      return null;
    }
  }

  /**
   * Create a unit interval from a point value and a per step.
   * For list-of-intervals expand: each point becomes Interval[point, point + step - 1_unit].
   */
  private makeUnitInterval(point: CqlValue, per: CqlValue | null): CqlInterval<CqlComparable> | null {
    if (point instanceof CqlInteger) {
      const step = per instanceof CqlQuantity ? per.value.toNumber() :
                   per instanceof CqlInteger ? per.value :
                   per instanceof CqlDecimal ? per.value.toNumber() : 1;
      // If step is decimal, produce decimal intervals
      if (per instanceof CqlDecimal || (per instanceof CqlQuantity && !per.value.isInteger())) {
        return new CqlInterval(point, point as CqlComparable, true, true);
      }
      const endVal = new CqlInteger(point.value + step - 1);
      return new CqlInterval(point, endVal as CqlComparable, true, true);
    }
    if (point instanceof CqlDecimal) {
      const step = per instanceof CqlQuantity ? per.value :
                   per instanceof CqlDecimal ? per.value :
                   per instanceof CqlInteger ? new Decimal(per.value) : new Decimal(1);
      if (step.isInteger()) {
        // For decimal expand per integer step (like per 1), produce integer bounds
        if (point.value.isInteger()) {
          const lo = new CqlInteger(point.value.toNumber());
          const hi = new CqlInteger(point.value.plus(step).minus(1).toNumber());
          return new CqlInterval(lo, hi as CqlComparable, true, true);
        }
        const endVal = new CqlDecimal(point.value.plus(step).minus(new Decimal('1e-8')));
        return new CqlInterval(point, endVal as CqlComparable, true, true);
      }
      // For fractional step, unit interval is [point, point]
      return new CqlInterval(point, point as CqlComparable, true, true);
    }
    if (point instanceof CqlDate) {
      // Add step-1 units to get the end of the unit interval
      const unit = per instanceof CqlQuantity ? per.unit.toLowerCase().replace(/s$/, '') : 'day';
      const step = per instanceof CqlQuantity ? per.value.toNumber() :
                   per instanceof CqlInteger ? per.value : 1;
      if (step <= 1) {
        return new CqlInterval(point, point as CqlComparable, true, true);
      }
      // Add (step-1) units to the date
      const d = new Date(Date.UTC(point.year, (point.month || 1) - 1, point.day || 1));
      const pad = (n: number, w: number) => String(n).padStart(w, '0');
      switch (unit) {
        case 'year': d.setUTCFullYear(d.getUTCFullYear() + step - 1); break;
        case 'month': d.setUTCMonth(d.getUTCMonth() + step - 1); break;
        case 'week': d.setUTCDate(d.getUTCDate() + (step - 1) * 7); break;
        default: d.setUTCDate(d.getUTCDate() + step - 1); break;
      }
      const endDate = new CqlDate(`${pad(d.getUTCFullYear(), 4)}-${pad(d.getUTCMonth() + 1, 2)}-${pad(d.getUTCDate(), 2)}`);
      return new CqlInterval(point, endDate as CqlComparable, true, true);
    }
    if (point instanceof CqlTime) {
      return new CqlInterval(point, point as CqlComparable, true, true);
    }
    if (point instanceof CqlDateTime) {
      return new CqlInterval(point, point as CqlComparable, true, true);
    }
    return new CqlInterval(point as CqlComparable, point as CqlComparable, true, true);
  }

  /** Check if successor(a) === b (a is immediately adjacent to b). */
  private evalMeetsAdjacent(a: CqlComparable | null, b: CqlComparable | null): CqlResult {
    if (a === null || b === null) return null;
    try {
      const suc = this.evalSuccessorPredecessor(UnaryOp.SuccessorOf, a);
      if (suc !== null && suc.equals(b)) return CqlBoolean.TRUE;
      return CqlBoolean.FALSE;
    } catch {
      return CqlBoolean.FALSE;
    }
  }

  /** Tuple equality with null propagation: returns true/false/null */
  private tupleEqualWithNull(a: CqlTuple, b: CqlTuple): boolean | null {
    if (a.elements.size !== b.elements.size) return false;
    let hasNull = false;
    for (const [k, v] of a.elements) {
      if (!b.elements.has(k)) return false;
      const ov = b.elements.get(k) ?? null;
      if (v === null && ov === null) continue; // both null = equal for this element
      if (v === null || ov === null) {
        hasNull = true; // one null, one not = null propagation
        continue;
      }
      if (!v.equals(ov)) return false;
    }
    return hasNull ? null : true;
  }

  private evalIntervalSetOp(
    op: BinaryOp,
    a: CqlInterval<CqlComparable>,
    b: CqlInterval<CqlComparable>,
  ): CqlResult {
    switch (op) {
      case BinaryOp.Union: {
        // Union of two intervals: if they overlap or are adjacent, merge; otherwise null
        if (!a.overlaps(b)) {
          // Check adjacency (meets)
          let meets = false;
          if (a.high !== null && b.low !== null) {
            try {
              const suc = this.evalSuccessorPredecessor(UnaryOp.SuccessorOf, a.high);
              if (suc !== null && suc.equals(b.low)) meets = true;
            } catch { /* ignore */ }
            if (!meets) {
              try { if (a.high.equals(b.low)) meets = true; } catch { /* ignore */ }
            }
          }
          if (!meets && b.high !== null && a.low !== null) {
            try {
              const suc = this.evalSuccessorPredecessor(UnaryOp.SuccessorOf, b.high);
              if (suc !== null && suc.equals(a.low)) meets = true;
            } catch { /* ignore */ }
            if (!meets) {
              try { if (b.high.equals(a.low)) meets = true; } catch { /* ignore */ }
            }
          }
          if (!meets) return null;
        }
        // Merge: take min low, max high
        let newLow = a.low;
        let newLowClosed = a.lowClosed;
        let newHigh = a.high;
        let newHighClosed = a.highClosed;
        if (a.low !== null && b.low !== null) {
          const cmp = a.low.compareTo(b.low);
          if (cmp > 0 || (cmp === 0 && b.lowClosed && !a.lowClosed)) {
            newLow = b.low; newLowClosed = b.lowClosed;
          }
        } else if (a.low === null) {
          newLow = a.low; newLowClosed = a.lowClosed;
        } else {
          newLow = b.low; newLowClosed = b.lowClosed;
        }
        if (a.high !== null && b.high !== null) {
          const cmp = a.high.compareTo(b.high);
          if (cmp < 0 || (cmp === 0 && b.highClosed && !a.highClosed)) {
            newHigh = b.high; newHighClosed = b.highClosed;
          }
        } else if (a.high === null) {
          newHigh = a.high; newHighClosed = a.highClosed;
        } else {
          newHigh = b.high; newHighClosed = b.highClosed;
        }
        return new CqlInterval(newLow, newHigh, newLowClosed, newHighClosed);
      }

      case BinaryOp.Intersect: {
        if (!a.overlaps(b)) return null;
        // Take max low, min high
        // When one bound is null (unknown), the result bound is null (unknown)
        // because we can't determine the actual max/min with an unknown value.
        let newLow = a.low;
        let newLowClosed = a.lowClosed;
        let newHigh = a.high;
        let newHighClosed = a.highClosed;
        if (a.low === null || b.low === null) {
          // Unknown low: keep null
          newLow = null; newLowClosed = a.low === null ? a.lowClosed : b.lowClosed;
        } else {
          const cmp = a.low.compareTo(b.low);
          if (cmp < 0 || (cmp === 0 && !b.lowClosed && a.lowClosed)) {
            newLow = b.low; newLowClosed = b.lowClosed;
          }
        }
        if (a.high === null || b.high === null) {
          // Unknown high: keep null
          newHigh = null; newHighClosed = a.high === null ? a.highClosed : b.highClosed;
        } else {
          const cmp = a.high.compareTo(b.high);
          if (cmp > 0 || (cmp === 0 && !b.highClosed && a.highClosed)) {
            newHigh = b.high; newHighClosed = b.highClosed;
          }
        }
        return new CqlInterval(newLow, newHigh, newLowClosed, newHighClosed);
      }

      case BinaryOp.Except: {
        // If B completely contains A, return null
        if (b.includes(a)) return null;
        // If no overlap, return A
        if (!a.overlaps(b)) return a;
        // If B overlaps the start of A, return the right part of A
        if (b.low !== null && a.low !== null) {
          const cmpLow = b.low.compareTo(a.low);
          if (cmpLow <= 0 && b.high !== null) {
            // B covers the left side: return from successor(b.high) to a.high
            const newLow = this.evalSuccessorPredecessor(UnaryOp.SuccessorOf, b.high);
            if (newLow !== null) {
              return new CqlInterval(newLow as CqlComparable, a.high, true, a.highClosed);
            }
          }
        }
        // If B overlaps the end of A, return the left part of A
        if (b.high !== null && a.high !== null) {
          const cmpHigh = b.high.compareTo(a.high);
          if (cmpHigh >= 0 && b.low !== null) {
            // B covers the right side: return from a.low to predecessor(b.low)
            const newHigh = this.evalSuccessorPredecessor(UnaryOp.PredecessorOf, b.low);
            if (newHigh !== null) {
              return new CqlInterval(a.low, newHigh as CqlComparable, a.lowClosed, true);
            }
          }
        }
        // B is in the middle of A: spec says return null (can't represent two disjoint pieces)
        return null;
      }
    }
    return null;
  }

  private evalSetOp(
    op: BinaryOp,
    left: CqlValue,
    right: CqlValue,
  ): CqlResult {
    const lItems = toList(left);
    const rItems = toList(right);

    switch (op) {
      case BinaryOp.Union: {
        // Union: combine and remove duplicates
        const result = [...lItems];
        for (const v of rItems) {
          if (!result.some((r) => r.equals(v))) result.push(v);
        }
        return new CqlList(result);
      }
      case BinaryOp.Intersect: {
        const result: CqlValue[] = [];
        for (const v of lItems) {
          if (rItems.some((r) => r.equals(v))) {
            if (!result.some((r) => r.equals(v))) result.push(v);
          }
        }
        return new CqlList(result);
      }
      case BinaryOp.Except: {
        const result: CqlValue[] = [];
        for (const v of lItems) {
          if (!rItems.some((r) => r.equals(v))) result.push(v);
        }
        return new CqlList(result);
      }
    }
    return null;
  }

  private evalInContains(
    op: BinaryOp,
    left: CqlValue | null,
    right: CqlValue | null,
  ): CqlResult {
    if (op === BinaryOp.In) {
      // left in right
      if (right === null) {
        return left === null ? null : CqlBoolean.FALSE;
      }
      if (right instanceof CqlInterval) {
        if (left === null) return null;
        return CqlBoolean.of(
          (right as CqlInterval<CqlComparable>).contains(
            left as CqlComparable,
          ),
        );
      }
      const rItems = toList(right);
      if (left === null) {
        if (rItems.length === 0) return CqlBoolean.FALSE;
        // CQL: null in list - check if list has a CqlNull element
        return CqlBoolean.of(rItems.some((r) => r instanceof CqlNull));
      }
      return CqlBoolean.of(rItems.some((r) => {
        if (r instanceof CqlNull) return false;
        try { return r.equivalent(left); } catch { return false; }
      }));
    }
    // contains: right in left
    if (left === null) {
      return CqlBoolean.FALSE;
    }
    if (left instanceof CqlInterval) {
      if (right === null) return null;
      return CqlBoolean.of(
        (left as CqlInterval<CqlComparable>).contains(
          right as CqlComparable,
        ),
      );
    }
    const lItems = toList(left);
    if (right === null) {
      // list contains null: check if list has CqlNull element
      return CqlBoolean.of(lItems.some((l) => l instanceof CqlNull));
    }
    return CqlBoolean.of(lItems.some((l) => {
      if (l instanceof CqlNull) return false;
      try { return l.equivalent(right); } catch { return false; }
    }));
  }

  private evalFlatten(val: CqlValue | null): CqlResult {
    const items = toList(val);
    const result: CqlValue[] = [];
    for (const item of items) {
      if (item instanceof CqlList) {
        result.push(...item.values);
      } else {
        result.push(item);
      }
    }
    return new CqlList(result);
  }

  private evalSuccessorPredecessor(
    op: UnaryOp,
    operand: CqlValue | null,
  ): CqlResult {
    if (operand === null) return null;
    const isSuc = op === UnaryOp.SuccessorOf;
    if (operand instanceof CqlInteger) {
      return new CqlInteger(isSuc ? operand.value + 1 : operand.value - 1);
    }
    if (operand instanceof CqlLong) {
      return new CqlLong(isSuc ? operand.value + 1n : operand.value - 1n);
    }
    if (operand instanceof CqlDecimal) {
      const epsilon = new Decimal('1e-8');
      return new CqlDecimal(isSuc ? operand.value.plus(epsilon) : operand.value.minus(epsilon));
    }
    if (operand instanceof CqlQuantity) {
      const epsilon = new Decimal('1e-8');
      return new CqlQuantity(isSuc ? operand.value.plus(epsilon) : operand.value.minus(epsilon), operand.unit);
    }
    if (operand instanceof CqlDateTime) {
      const pad = (n: number, w: number) => String(n).padStart(w, '0');
      const amt = isSuc ? 1 : -1;
      let yr = operand.year;
      let mo = (operand.month || 1) - 1;
      let dy = operand.day || 1;
      let hr = operand.hour;
      let mi = operand.minute;
      let se = operand.second;
      let ms = operand.millis;
      // Helper to create a Date with proper handling of years 0-99
      // (Date.UTC treats 0-99 as 1900+n, so we use setUTCFullYear instead)
      const mkDate = (y: number, m: number, d: number, h=0, mn=0, s=0, ms=0): Date => {
        const dt = new Date(0);
        dt.setUTCFullYear(y, m, d);
        dt.setUTCHours(h, mn, s, ms);
        return dt;
      };
      // Add/subtract at the finest precision of the input
      switch (operand.precision) {
        case DateTimePrecision.Year: yr += amt; break;
        case DateTimePrecision.Month: { const t = yr*12+mo+amt; yr = Math.floor(t/12); mo = ((t%12)+12)%12; break; }
        case DateTimePrecision.Day: { const d = mkDate(yr, mo, dy); d.setUTCDate(d.getUTCDate()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); break; }
        case DateTimePrecision.Hour: { const d = mkDate(yr, mo, dy, hr); d.setUTCHours(d.getUTCHours()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); break; }
        case DateTimePrecision.Minute: { const d = mkDate(yr, mo, dy, hr, mi); d.setUTCMinutes(d.getUTCMinutes()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); mi=d.getUTCMinutes(); break; }
        case DateTimePrecision.Second: { const d = mkDate(yr, mo, dy, hr, mi, se); d.setUTCSeconds(d.getUTCSeconds()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); mi=d.getUTCMinutes(); se=d.getUTCSeconds(); break; }
        default: { const d = mkDate(yr, mo, dy, hr, mi, se, ms); d.setUTCMilliseconds(d.getUTCMilliseconds()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); hr=d.getUTCHours(); mi=d.getUTCMinutes(); se=d.getUTCSeconds(); ms=d.getUTCMilliseconds(); break; }
      }
      // Check for overflow/underflow
      if (isSuc && yr > 9999) throw new Error('successor overflow: DateTime exceeds maximum');
      if (!isSuc && yr < 1) throw new Error('predecessor underflow: DateTime below minimum');
      let s = pad(yr, 4);
      if (operand.precision >= DateTimePrecision.Month) s += `-${pad(mo + 1, 2)}`;
      if (operand.precision >= DateTimePrecision.Day) s += `-${pad(dy, 2)}`;
      if (operand.precision >= DateTimePrecision.Hour) s += `T${pad(hr, 2)}`;
      if (operand.precision >= DateTimePrecision.Minute) s += `:${pad(mi, 2)}`;
      if (operand.precision >= DateTimePrecision.Second) s += `:${pad(se, 2)}`;
      if (operand.precision >= DateTimePrecision.Millisecond) s += `.${pad(ms, 3)}`;
      if (operand.hasTZ) {
        if (operand.tzOffset === 0) s += 'Z';
        else {
          const sign = operand.tzOffset < 0 ? '-' : '+';
          const abs = Math.abs(operand.tzOffset);
          s += `${sign}${pad(Math.floor(abs / 60), 2)}:${pad(abs % 60, 2)}`;
        }
      }
      return new CqlDateTime(s);
    }
    if (operand instanceof CqlDate) {
      const pad = (n: number, w: number) => String(n).padStart(w, '0');
      const amt = isSuc ? 1 : -1;
      let yr = operand.year;
      let mo = (operand.month || 1) - 1;
      let dy = operand.day || 1;
      switch (operand.precision) {
        case DatePrecision.Year: yr += amt; break;
        case DatePrecision.Month: { const t = yr*12+mo+amt; yr = Math.floor(t/12); mo = ((t%12)+12)%12; break; }
        default: { const d = new Date(Date.UTC(yr, mo, dy)); d.setUTCDate(d.getUTCDate()+amt); yr=d.getUTCFullYear(); mo=d.getUTCMonth(); dy=d.getUTCDate(); break; }
      }
      let s = pad(yr, 4);
      if (operand.precision >= DatePrecision.Month) s += `-${pad(mo + 1, 2)}`;
      if (operand.precision >= DatePrecision.Day) s += `-${pad(dy, 2)}`;
      return new CqlDate(s);
    }
    if (operand instanceof CqlTime) {
      const pad = (n: number, w: number) => String(n).padStart(w, '0');
      const amt = isSuc ? 1 : -1;
      const origTotalMs = operand.hour * 3600000 + operand.minute * 60000 + operand.second * 1000 + operand.millis;
      let totalMs = origTotalMs;
      switch (operand.precision) {
        case TimePrecision.Hour: totalMs += amt * 3600000; break;
        case TimePrecision.Minute: totalMs += amt * 60000; break;
        case TimePrecision.Second: totalMs += amt * 1000; break;
        default: totalMs += amt; break;
      }
      // Detect overflow (successor wraps past 23:59:59.999) or underflow (predecessor wraps below 00:00:00.000)
      if (isSuc && totalMs >= 86400000) throw new Error('successor overflow: Time exceeds maximum');
      if (!isSuc && totalMs < 0) throw new Error('predecessor underflow: Time below minimum');
      const h = Math.floor(totalMs / 3600000);
      const m = Math.floor((totalMs % 3600000) / 60000);
      const sec = Math.floor((totalMs % 60000) / 1000);
      const ms = totalMs % 1000;
      let s = pad(h, 2);
      if (operand.precision >= TimePrecision.Minute) s += `:${pad(m, 2)}`;
      if (operand.precision >= TimePrecision.Second) s += `:${pad(sec, 2)}`;
      if (operand.precision >= TimePrecision.Millisecond) s += `.${pad(ms, 3)}`;
      return new CqlTime(s);
    }
    throw new Error(`successor/predecessor not supported for ${operand.type}`);
  }

  private async evalUserFunction(
    fd: FunctionDef,
    args: Expression[],
  ): Promise<CqlResult> {
    if (fd.external) {
      throw new Error(`external function '${fd.name}' not implemented`);
    }
    if (fd.body === null) {
      throw new Error(`function '${fd.name}' has no body`);
    }
    const child = this.ctx.childScope();
    for (let i = 0; i < fd.operands.length; i++) {
      if (i < args.length) {
        const val = await this.evaluate(args[i]);
        child.aliases.set(fd.operands[i].name, val);
      }
    }
    return this.withContext(child).evaluate(fd.body);
  }

  /**
   * Invoke a user-defined function with pre-evaluated argument values.
   * Used when calling functions across library boundaries where arguments
   * were evaluated in the caller's context.
   */
  async evalUserFunctionWithValues(
    fd: FunctionDef,
    argVals: CqlResult[],
  ): Promise<CqlResult> {
    if (fd.external) {
      throw new Error(`external function '${fd.name}' not implemented`);
    }
    if (fd.body === null) {
      throw new Error(`function '${fd.name}' has no body`);
    }
    const child = this.ctx.childScope();
    for (let i = 0; i < fd.operands.length; i++) {
      if (i < argVals.length) {
        child.aliases.set(fd.operands[i].name, argVals[i]);
      }
    }
    return this.withContext(child).evaluate(fd.body);
  }

  private async evalWithClause(w: WithClause): Promise<boolean> {
    const source = await this.evaluate(w.source.source);
    const items = toList(source);
    for (const item of items) {
      this.ctx.aliases.set(w.source.alias, item);
      const cond = await this.evaluate(w.condition);
      if (isTrue(cond)) return true;
    }
    return false;
  }

  private async evalWithoutClause(w: WithoutClause): Promise<boolean> {
    const source = await this.evaluate(w.source.source);
    const items = toList(source);
    for (const item of items) {
      this.ctx.aliases.set(w.source.alias, item);
      const cond = await this.evaluate(w.condition);
      if (isTrue(cond)) return false; // exclude if any match
    }
    return true;
  }

  /**
   * Inline handling for common built-in functions that need evaluator context.
   */
  private async evalBuiltinFunctionInline(
    expr: FunctionCallExpr,
  ): Promise<CqlResult> {
    const name = expr.name.toLowerCase();

    // Evaluate source if present
    let source: CqlResult = null;
    if (expr.source !== null) {
      source = await this.evaluate(expr.source);
    }

    switch (name) {
      case 'count': {
        const items = toList(source);
        // Count excludes null elements per CQL spec
        return new CqlInteger(items.filter(v => !(v instanceof CqlNull)).length);
      }
      case 'exists': {
        if (expr.operands.length > 0) {
          const val = await this.evaluate(expr.operands[0]);
          const items = toList(val);
          return CqlBoolean.of(items.length > 0);
        }
        const items = toList(source);
        return CqlBoolean.of(items.length > 0);
      }
      case 'first': {
        const items = toList(source);
        if (items.length === 0) return null;
        const v = items[0];
        return v instanceof CqlNull ? null : v;
      }
      case 'last': {
        const items = toList(source);
        if (items.length === 0) return null;
        const v = items[items.length - 1];
        return v instanceof CqlNull ? null : v;
      }
      case 'tostring':
        if (source !== null) return new CqlString(source.toString());
        return null;
      case 'tointeger':
        if (source !== null) return convertToType(source, 'Integer');
        return null;
      case 'todecimal':
        if (source !== null) return convertToType(source, 'Decimal');
        return null;
      case 'toboolean':
        if (source !== null) return convertToType(source, 'Boolean');
        return null;
      case 'not':
        if (source === null) return null;
        return CqlBoolean.of(!isTrue(source));
      case 'length':
        if (source === null) return null;
        if (source instanceof CqlString) return new CqlInteger(source.value.length);
        if (source instanceof CqlList) return new CqlInteger(source.values.length);
        return new CqlInteger(0);
      case 'coalesce': {
        // Coalesce with a list argument: find first non-null in the list
        if (expr.operands.length === 1) {
          const arg = await this.evaluate(expr.operands[0]);
          if (arg instanceof CqlList) {
            for (const item of arg.values) {
              if (item !== null && !(item instanceof CqlNull)) return item;
            }
            return null;
          }
          return arg;
        }
        // Multiple arguments: find first non-null
        for (const arg of expr.operands) {
          const val = await this.evaluate(arg);
          if (val !== null && !(val instanceof CqlNull)) return val;
        }
        return null;
      }
      case 'isnull':
        if (source !== null && source !== undefined) return CqlBoolean.FALSE;
        if (expr.operands.length > 0) {
          const val = await this.evaluate(expr.operands[0]);
          return CqlBoolean.of(val === null);
        }
        return CqlBoolean.TRUE;
      case 'istrue':
        if (expr.operands.length > 0 && source === null) {
          const val = await this.evaluate(expr.operands[0]);
          return CqlBoolean.of(isTrue(val));
        }
        return CqlBoolean.of(isTrue(source));
      case 'isfalse':
        if (expr.operands.length > 0 && source === null) {
          const val = await this.evaluate(expr.operands[0]);
          return CqlBoolean.of(isFalse(val));
        }
        return CqlBoolean.of(isFalse(source));
      case 'now': {
        const now = new Date();
        return new CqlDateTime(now.toISOString());
      }
      case 'today': {
        const today = new Date();
        const y = today.getUTCFullYear();
        const m = String(today.getUTCMonth() + 1).padStart(2, '0');
        const d = String(today.getUTCDate()).padStart(2, '0');
        return new CqlDate(`${y}-${m}-${d}`);
      }
      case 'where':
        return this.evalWhereFunction(source, expr.operands);
      case 'select':
        return this.evalSelectFunction(source, expr.operands);
      case 'flatten':
        return this.evalFlatten(source);
      case 'distinct': {
        const items = toList(source);
        const result: CqlValue[] = [];
        for (const v of items) {
          if (!result.some((r) => r.equals(v))) result.push(v);
        }
        return new CqlList(result);
      }
      case 'abs': {
        if (source === null) return null;
        if (source instanceof CqlInteger) {
          return new CqlInteger(Math.abs(source.value));
        }
        if (source instanceof CqlLong) {
          const val = source.value < 0n ? -source.value : source.value;
          return new CqlLong(val);
        }
        if (source instanceof CqlQuantity) {
          return new CqlQuantity(source.value.abs(), source.unit);
        }
        return CqlDecimal.of(toDecimal(source).abs().toString());
      }
      case 'ceiling': {
        if (source === null) return null;
        return new CqlInteger(toDecimal(source).ceil().toNumber());
      }
      case 'floor': {
        if (source === null) return null;
        return new CqlInteger(toDecimal(source).floor().toNumber());
      }
      case 'truncate': {
        if (source === null) return null;
        return new CqlInteger(toDecimal(source).trunc().toNumber());
      }
      case 'exp': {
        if (source === null) return null;
        const expD = toDecimal(source);
        const expF = expD.toNumber();
        const expResult = Math.exp(expF);
        if (!isFinite(expResult) || isNaN(expResult)) {
          throw new Error(`Exp: overflow for value ${expD}`);
        }
        return new CqlDecimal(new Decimal(expResult));
      }
      case 'ln': {
        if (source === null) return null;
        const d = toDecimal(source);
        // CQL spec: Ln(0) is an error (results in negative infinity)
        if (d.isZero()) throw new Error(`Ln: undefined for zero`);
        // CQL spec: Ln of negative values returns null
        if (d.lt(0)) return null;
        return new CqlDecimal(d.ln());
      }
      case 'round': {
        if (source === null) return null;
        const d = toDecimal(source);
        let prec = 0;
        if (expr.operands.length > 0) {
          const precArg = await this.evaluate(expr.operands[0]);
          if (precArg instanceof CqlInteger) prec = precArg.value;
        }
        return new CqlDecimal(d.toDecimalPlaces(prec, Decimal.ROUND_HALF_CEIL));
      }
      case 'power': {
        if (expr.operands.length > 0) {
          const base = source;
          const expArg = await this.evaluate(expr.operands[0]);
          if (base === null || expArg === null) return null;
          const b = toDecimal(base);
          const e = toDecimal(expArg);
          return new CqlDecimal(b.pow(e));
        }
        return null;
      }
      case 'log': {
        if (expr.operands.length > 0) {
          const val = source;
          const baseArg = await this.evaluate(expr.operands[0]);
          if (val === null || baseArg === null) return null;
          const v = toDecimal(val);
          const b = toDecimal(baseArg);
          if (v.lte(0) || b.lte(0) || b.eq(1)) return null;
          return new CqlDecimal(v.ln().div(b.ln()));
        }
        return null;
      }
      case 'precision': {
        const fn = this.registry.resolve('precision');
        if (fn) {
          const a: (CqlValue | null)[] = [source];
          for (const op of expr.operands) a.push(await this.evaluate(op));
          return await fn(a, this.ctx);
        }
        return null;
      }
      case 'lowboundary': {
        const fn = this.registry.resolve('lowboundary');
        if (fn) {
          const a: (CqlValue | null)[] = [source];
          for (const op of expr.operands) a.push(await this.evaluate(op));
          return await fn(a, this.ctx);
        }
        return null;
      }
      case 'highboundary': {
        const fn = this.registry.resolve('highboundary');
        if (fn) {
          const a: (CqlValue | null)[] = [source];
          for (const op of expr.operands) a.push(await this.evaluate(op));
          return await fn(a, this.ctx);
        }
        return null;
      }
      case 'indexer': {
        if (expr.operands.length > 0) {
          const idx = await this.evaluate(expr.operands[0]);
          if (source === null || idx === null) return null;
          if (source instanceof CqlString && idx instanceof CqlInteger) {
            const i = idx.value;
            if (i < 0 || i >= source.value.length) return null;
            return new CqlString(source.value[i]);
          }
          const items = toList(source);
          if (idx instanceof CqlInteger) {
            const i = idx.value;
            if (i < 0 || i >= items.length) return null;
            return items[i];
          }
        }
        return null;
      }
      case 'concatenate': {
        const parts: string[] = [];
        if (source !== null) parts.push(source.toString());
        for (const op of expr.operands) {
          const val = await this.evaluate(op);
          if (val === null) return null;
          parts.push(val.toString());
        }
        return new CqlString(parts.join(''));
      }
      case 'totime': {
        const fn = this.registry.resolve('totime');
        if (fn) {
          const a: (CqlValue | null)[] = source !== null ? [source] : [];
          for (const op of expr.operands) a.push(await this.evaluate(op));
          return await fn(a, this.ctx);
        }
        return null;
      }
      case 'message': {
        // Message(source, condition, code, severity, message) -> source
        // When called as a function (source is null), operands are [source, condition, code, severity, message]
        // When called as a method (source is not null), operands are [condition, code, severity, message]
        let msgSource: CqlResult;
        let condVal: CqlResult;
        let codeVal: CqlResult;
        let severityVal: CqlResult;
        let messageVal: CqlResult;
        if (source !== null) {
          // Method call: source.Message(condition, code, severity, message)
          msgSource = source;
          condVal = expr.operands.length > 0 ? await this.evaluate(expr.operands[0]) : null;
          codeVal = expr.operands.length > 1 ? await this.evaluate(expr.operands[1]) : null;
          severityVal = expr.operands.length > 2 ? await this.evaluate(expr.operands[2]) : null;
          messageVal = expr.operands.length > 3 ? await this.evaluate(expr.operands[3]) : null;
        } else {
          // Function call: Message(source, condition, code, severity, message)
          msgSource = expr.operands.length > 0 ? await this.evaluate(expr.operands[0]) : null;
          condVal = expr.operands.length > 1 ? await this.evaluate(expr.operands[1]) : null;
          codeVal = expr.operands.length > 2 ? await this.evaluate(expr.operands[2]) : null;
          severityVal = expr.operands.length > 3 ? await this.evaluate(expr.operands[3]) : null;
          messageVal = expr.operands.length > 4 ? await this.evaluate(expr.operands[4]) : null;
        }
        // When condition is true and severity is 'Error', throw
        if (isTrue(condVal)) {
          const sev = severityVal instanceof CqlString ? severityVal.value.toLowerCase() : '';
          if (sev === 'error') {
            const code = codeVal instanceof CqlString ? codeVal.value : '';
            const msg = messageVal instanceof CqlString ? messageVal.value : '';
            throw new Error(`${code}: ${msg}`);
          }
        }
        return msgSource;
      }
      case 'sum': {
        const items = toList(source);
        if (items.length === 0) return null;
        // Detect type from first element
        const first = items[0];
        if (first instanceof CqlLong) {
          let sum = 0n;
          for (const item of items) {
            if (item instanceof CqlLong) sum += item.value;
          }
          return new CqlLong(sum);
        }
        if (first instanceof CqlQuantity) {
          let sum = new Decimal(0);
          const unit = first.unit;
          for (const item of items) {
            if (item instanceof CqlQuantity) sum = sum.plus(item.value);
          }
          return new CqlQuantity(sum, unit);
        }
        if (first instanceof CqlInteger) {
          let sum = 0;
          for (const item of items) {
            if (item instanceof CqlInteger) sum += item.value;
          }
          return new CqlInteger(sum);
        }
        let sum = new Decimal(0);
        for (const item of items) {
          sum = sum.plus(toDecimal(item));
        }
        return CqlDecimal.of(sum.toString());
      }
      case 'avg': {
        const items = toList(source);
        if (items.length === 0) return null;
        let sum = new Decimal(0);
        for (const item of items) {
          sum = sum.plus(toDecimal(item));
        }
        return CqlDecimal.of(sum.div(items.length).toString());
      }
      case 'min': {
        const items = toList(source).filter(v => v !== null && !(v instanceof CqlNull));
        if (items.length === 0) return null;
        let result = items[0];
        for (let i = 1; i < items.length; i++) {
          if (isComparable(result) && result.compareTo(items[i]) > 0) {
            result = items[i];
          }
        }
        return result;
      }
      case 'max': {
        const items = toList(source).filter(v => v !== null && !(v instanceof CqlNull));
        if (items.length === 0) return null;
        let result = items[0];
        for (let i = 1; i < items.length; i++) {
          if (isComparable(result) && result.compareTo(items[i]) < 0) {
            result = items[i];
          }
        }
        return result;
      }
      case 'upper':
        if (source instanceof CqlString) return new CqlString(source.value.toUpperCase());
        return null;
      case 'lower':
        if (source instanceof CqlString) return new CqlString(source.value.toLowerCase());
        return null;
      case 'startswith': {
        if (source instanceof CqlString && expr.operands.length > 0) {
          const arg = await this.evaluate(expr.operands[0]);
          if (arg instanceof CqlString) {
            return CqlBoolean.of(source.value.startsWith(arg.value));
          }
        }
        return CqlBoolean.FALSE;
      }
      case 'endswith': {
        if (source instanceof CqlString && expr.operands.length > 0) {
          const arg = await this.evaluate(expr.operands[0]);
          if (arg instanceof CqlString) {
            return CqlBoolean.of(source.value.endsWith(arg.value));
          }
        }
        return CqlBoolean.FALSE;
      }
      case 'indexof': {
        if (expr.operands.length > 0) {
          // IndexOf(list, element) - the function form takes (list, element)
          // inline form: source.indexOf(arg)
          if (source instanceof CqlString) {
            const arg = await this.evaluate(expr.operands[0]);
            if (arg instanceof CqlString) {
              return new CqlInteger(source.value.indexOf(arg.value));
            }
          }
          if (source instanceof CqlList) {
            const arg = await this.evaluate(expr.operands[0]);
            if (arg === null) return new CqlInteger(-1);
            for (let i = 0; i < source.values.length; i++) {
              if (source.values[i] !== null && source.values[i].equals(arg)) {
                return new CqlInteger(i);
              }
            }
            return new CqlInteger(-1);
          }
        }
        return null;
      }
      case 'substring': {
        if (source instanceof CqlString && expr.operands.length > 0) {
          const startArg = await this.evaluate(expr.operands[0]);
          const startIdx = startArg instanceof CqlInteger ? startArg.value : 0;
          let length = -1;
          if (expr.operands.length > 1) {
            const lenArg = await this.evaluate(expr.operands[1]);
            if (lenArg instanceof CqlInteger) length = lenArg.value;
          }
          if (startIdx < 0 || startIdx >= source.value.length) return null;
          const end = length >= 0 ? startIdx + length : undefined;
          const result = source.value.substring(startIdx, end);
          if (result.length === 0) return null;
          return new CqlString(result);
        }
        return source;
      }
      case 'tail': {
        if (source === null) return null;
        const items = toList(source);
        return new CqlList(items.slice(1));
      }
      case 'take': {
        if (expr.operands.length > 0) {
          const arg = await this.evaluate(expr.operands[0]);
          if (arg instanceof CqlInteger) {
            const items = toList(source);
            return new CqlList(items.slice(0, arg.value));
          }
        }
        return source ?? new CqlList([]);
      }
      case 'skip': {
        if (expr.operands.length > 0) {
          const arg = await this.evaluate(expr.operands[0]);
          if (arg instanceof CqlInteger) {
            const items = toList(source);
            return new CqlList(items.slice(arg.value));
          }
        }
        return source ?? new CqlList([]);
      }
      case 'product': {
        const items = toList(source);
        if (items.length === 0) return null;
        const first = items[0];
        if (first === null) return null;
        if (first instanceof CqlInteger) {
          let product = 1;
          for (const item of items) {
            if (item === null) return null;
            if (item instanceof CqlInteger) product *= item.value;
          }
          return new CqlInteger(product);
        }
        if (first instanceof CqlLong) {
          let product = 1n;
          for (const item of items) {
            if (item === null) return null;
            if (item instanceof CqlLong) product *= item.value;
          }
          return new CqlLong(product);
        }
        if (first instanceof CqlQuantity) {
          let product = first.value;
          for (let i = 1; i < items.length; i++) {
            const item = items[i];
            if (item === null) return null;
            if (item instanceof CqlQuantity) product = product.times(item.value);
          }
          return new CqlQuantity(product, (first as CqlQuantity).unit);
        }
        let product = new Decimal(1);
        for (const item of items) {
          if (item === null) return null;
          product = product.times(toDecimal(item));
        }
        return CqlDecimal.of(product.toString());
      }
      case 'toquantity': {
        const val = source ?? (expr.operands.length > 0 ? await this.evaluate(expr.operands[0]) : null);
        if (val === null) return null;
        if (val instanceof CqlQuantity) return val;
        if (val instanceof CqlInteger) return CqlQuantity.of(val.value, '1');
        if (val instanceof CqlDecimal) return new CqlQuantity(val.value, '1');
        if (val instanceof CqlString) {
          // Try parsing "value 'unit'" or "value unit"
          const m = val.value.match(/^(-?[\d.]+)\s*(.*)$/);
          if (m) {
            let unit = m[2] || '1';
            // Strip surrounding single quotes from unit if present
            if (unit.startsWith("'") && unit.endsWith("'")) {
              unit = unit.slice(1, -1);
            }
            return CqlQuantity.of(m[1], unit);
          }
        }
        return null;
      }
      case 'toconcept': {
        const val = source ?? (expr.operands.length > 0 ? await this.evaluate(expr.operands[0]) : null);
        if (val === null) return null;
        if (val instanceof CqlConcept) return val;
        if (val instanceof CqlCode) return new CqlConcept([val]);
        return null;
      }
      case 'descendents':
      case 'descendants': {
        // FHIRPath function - return null if source is null, else empty list
        const descSource = source ?? (expr.operands.length > 0 ? await this.evaluate(expr.operands[0]) : null);
        if (descSource === null) return null;
        return new CqlList([]);
      }
      default:
        throw new Error(`unknown function: ${expr.name}`);
    }
  }

  private async evalWhereFunction(
    source: CqlResult,
    operands: Expression[],
  ): Promise<CqlResult> {
    if (operands.length === 0) return source;
    const items = toList(source);
    const results: CqlValue[] = [];
    for (let i = 0; i < items.length; i++) {
      const child = this.ctx.childScope();
      child.thisValue = items[i];
      child.indexValue = i;
      const cond = await this.withContext(child).evaluate(operands[0]);
      if (isTrue(cond)) results.push(items[i]);
    }
    return new CqlList(results);
  }

  private async evalSelectFunction(
    source: CqlResult,
    operands: Expression[],
  ): Promise<CqlResult> {
    if (operands.length === 0) return source;
    const items = toList(source);
    const results: CqlValue[] = [];
    for (let i = 0; i < items.length; i++) {
      const child = this.ctx.childScope();
      child.thisValue = items[i];
      child.indexValue = i;
      const val = await this.withContext(child).evaluate(operands[0]);
      if (val !== null) results.push(val);
    }
    return new CqlList(results);
  }

  /**
   * Basic temporal duration calculation fallback.
   */
  private evalTemporalDuration(
    low: CqlValue | null,
    high: CqlValue | null,
    precision: string,
  ): CqlResult {
    if (low === null || high === null) return null;

    // Extract year/month/day components
    let ly = 0, lm = 0, ld = 0;
    let hy = 0, hm = 0, hd = 0;

    if (low instanceof CqlDate || low instanceof CqlDateTime) {
      ly = low.year;
      lm = low.month || 1;
      ld = (low as CqlDate).day || (low as CqlDateTime).day || 1;
    }
    if (high instanceof CqlDate || high instanceof CqlDateTime) {
      hy = high.year;
      hm = high.month || 1;
      hd = (high as CqlDate).day || (high as CqlDateTime).day || 1;
    }

    if (ly === 0 && hy === 0) return null;

    switch (precision.toLowerCase()) {
      case 'year':
      case 'years':
        return new CqlInteger(hy - ly);
      case 'month':
      case 'months':
        return new CqlInteger((hy - ly) * 12 + (hm - lm));
      case 'day':
      case 'days': {
        const d1 = new Date(Date.UTC(ly, lm - 1, ld));
        const d2 = new Date(Date.UTC(hy, hm - 1, hd));
        const diff = Math.floor(
          (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24),
        );
        return new CqlInteger(diff);
      }
      default:
        return null;
    }
  }

  /**
   * Extract a component from a date/datetime/time value.
   */
  private extractDateTimeComponent(
    operand: CqlValue,
    component: string,
  ): CqlResult {
    const comp = component.toLowerCase();
    // 'timezone' keyword was removed in CQL 1.4; use 'timezoneoffset' instead
    if (comp === 'timezone') {
      throw new Error(`'timezone' component is not valid in CQL 1.4+; use 'timezoneoffset'`);
    }

    if (operand instanceof CqlDate) {
      switch (comp) {
        case 'year':
          return new CqlInteger(operand.year);
        case 'month':
          return operand.month ? new CqlInteger(operand.month) : null;
        case 'day':
          return operand.day ? new CqlInteger(operand.day) : null;
        default:
          return null;
      }
    }

    if (operand instanceof CqlDateTime) {
      switch (comp) {
        case 'year':
          return new CqlInteger(operand.year);
        case 'month':
          return operand.precision >= DateTimePrecision.Month ? new CqlInteger(operand.month) : null;
        case 'day':
          return operand.precision >= DateTimePrecision.Day ? new CqlInteger(operand.day) : null;
        case 'hour':
          return operand.precision >= DateTimePrecision.Hour ? new CqlInteger(operand.hour) : null;
        case 'minute':
          return operand.precision >= DateTimePrecision.Minute ? new CqlInteger(operand.minute) : null;
        case 'second':
          return operand.precision >= DateTimePrecision.Second ? new CqlInteger(operand.second) : null;
        case 'millisecond':
          return operand.precision >= DateTimePrecision.Millisecond ? new CqlInteger(operand.millis) : null;
        case 'timezoneoffset':
          return operand.hasTZ ? new CqlDecimal(new Decimal(operand.tzOffset / 60)) : null;
        case 'date':
          return new CqlDate(operand.toString().split('T')[0]);
        default:
          return null;
      }
    }

    if (operand instanceof CqlTime) {
      switch (comp) {
        case 'hour':
          return new CqlInteger(operand.hour);
        case 'minute':
          return operand.minute ? new CqlInteger(operand.minute) : null;
        case 'second':
          return operand.second ? new CqlInteger(operand.second) : null;
        case 'millisecond':
          return new CqlInteger(operand.millis);
        default:
          return null;
      }
    }

    return null;
  }
}
