/**
 * CQL expression evaluator.
 *
 * Implements {@link ExpressionVisitor} for async evaluation of CQL AST nodes.
 * Ported from Go: eval/evaluator.go
 */

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
} from '../types/primitives.js';
import {
  CqlInterval,
  CqlList,
  CqlTuple,
  CqlCode,
  CqlConcept,
} from '../types/complex.js';
import { Decimal } from 'decimal.js';

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
  return a.compareTo(b);
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
      if (v instanceof CqlDate) return new CqlDateTime(v.toString() + 'T00:00:00');
      if (v instanceof CqlString) {
        try { return new CqlDateTime(v.value); } catch { return null; }
      }
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
    if (!this.ctx.library) throw new Error('no library to evaluate');
    const results: Record<string, CqlResult> = {};
    for (const stmt of this.ctx.library.statements) {
      const val = await this.evaluate(stmt.expression);
      this.ctx.definitions.set(stmt.name, val);
      results[stmt.name] = val;
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
          const val = await this.evaluate(stmt.expression);
          this.ctx.definitions.set(name, val);
          return val;
        }
      }
    }
    throw new Error(`expression '${name}' not found`);
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
        return new CqlInteger(v);
      }
      case LiteralType.Long: {
        return new CqlLong(BigInt(expr.value));
      }
      case LiteralType.Decimal:
        return CqlDecimal.of(expr.value);
      case LiteralType.Date:
        return new CqlDate(expr.value);
      case LiteralType.DateTime:
        return new CqlDateTime(expr.value);
      case LiteralType.Time:
        return new CqlTime(expr.value);
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
        case BinaryOp.Union:
          return left === null ? right : left;
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
      case BinaryOp.Equal:
        return CqlBoolean.of(left.equals(right));
      case BinaryOp.NotEqual:
        return CqlBoolean.of(!left.equals(right));
      case BinaryOp.Equivalent:
        return CqlBoolean.of(left.equivalent(right));
      case BinaryOp.NotEquivalent:
        return CqlBoolean.of(!left.equivalent(right));

      case BinaryOp.Less:
      case BinaryOp.LessOrEqual:
      case BinaryOp.Greater:
      case BinaryOp.GreaterOrEqual: {
        if (!isComparable(left)) {
          throw new Error(`cannot compare ${left.type}`);
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
        break;
      }

      case BinaryOp.Add:
      case BinaryOp.Subtract:
      case BinaryOp.Multiply:
      case BinaryOp.Divide:
      case BinaryOp.Div:
      case BinaryOp.Mod:
      case BinaryOp.Power:
        return this.evalArithmetic(expr.operator, left, right);

      case BinaryOp.Concatenate:
        return new CqlString(left.toString() + right.toString());

      case BinaryOp.Xor:
        return CqlBoolean.of(isTrue(left) !== isTrue(right));

      case BinaryOp.Union:
      case BinaryOp.Intersect:
      case BinaryOp.Except:
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
        if (operand instanceof CqlList) return CqlBoolean.of(!operand.isEmpty());
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
        if (items.length === 1) return items[0];
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
        if (operand instanceof CqlInterval) {
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
    return CqlBoolean.of(
      operand.type.toLowerCase() === expr.type.name.toLowerCase(),
    );
  }

  async visitAs(expr: AsExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    if (expr.type.specKind !== 'NamedType') return null;
    if (operand.type.toLowerCase() === expr.type.name.toLowerCase()) {
      return operand;
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
    // Check user-defined functions first
    const userFn = this.userFunctions.get(expr.name);
    if (userFn) {
      return this.evalUserFunction(userFn, expr.operands);
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

    // List member access: map over collection
    if (source instanceof CqlList) {
      const result: CqlValue[] = [];
      for (const item of source.values) {
        if (item instanceof CqlTuple) {
          const v = item.get(expr.member);
          if (v !== null && v !== undefined) result.push(v);
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

    // Wrap each result as a CqlTuple (generic JSON object representation)
    const values: CqlValue[] = [];
    for (const raw of results) {
      if (raw !== null && typeof raw === 'object') {
        const elements = new Map<string, CqlValue | null>();
        for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
          if (typeof v === 'string') elements.set(k, new CqlString(v));
          else if (typeof v === 'number')
            elements.set(k, Number.isInteger(v) ? new CqlInteger(v) : CqlDecimal.of(v));
          else if (typeof v === 'boolean') elements.set(k, CqlBoolean.of(v));
          else if (v === null) elements.set(k, null);
          else elements.set(k, new CqlString(String(v)));
        }
        values.push(new CqlTuple(elements));
      }
    }
    return new CqlList(values);
  }

  async visitQuery(expr: QueryExpr): Promise<CqlResult> {
    if (expr.sources.length === 0) return new CqlList([]);

    // Evaluate first source
    const source = await this.evaluate(expr.sources[0].source);
    const items = toList(source);

    let results: CqlValue[] = [];

    // Process aggregate clause if present
    if (expr.aggregate !== null) {
      let total: CqlResult = null;
      if (expr.aggregate.starting !== null) {
        total = await this.evaluate(expr.aggregate.starting);
      }

      for (let i = 0; i < items.length; i++) {
        const child = this.ctx.childScope();
        child.aliases.set(expr.sources[0].alias, items[i]);
        child.thisValue = items[i];
        child.indexValue = i;
        child.totalValue = total;
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

    return new CqlList(results);
  }

  async visitInterval(expr: IntervalExpr): Promise<CqlResult> {
    const low = await this.evaluate(expr.low);
    const high = await this.evaluate(expr.high);
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
      if (val !== null) values.push(val);
    }
    return new CqlList(values);
  }

  async visitInstance(expr: InstanceExpr): Promise<CqlResult> {
    const elements = new Map<string, CqlValue | null>();
    for (const elem of expr.elements) {
      const val = await this.evaluate(elem.expression);
      elements.set(elem.name, val);
    }
    return new CqlTuple(elements);
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
    const fn = this.registry.resolve('datetimecomponentfrom');
    if (fn) return await fn([operand, new CqlString(expr.component)], this.ctx);
    // Inline fallback
    if (operand === null) return null;
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
        case 'decimal':
          return CqlDecimal.of(-1e28);
        default:
          return null;
      }
    }
    // maximum
    switch (typeName) {
      case 'integer':
        return new CqlInteger(2147483647);
      case 'decimal':
        return CqlDecimal.of(1e28);
      default:
        return null;
    }
  }

  async visitTiming(expr: TimingExpr): Promise<CqlResult> {
    const left = await this.evaluate(expr.left);
    const right = await this.evaluate(expr.right);

    if (!(left instanceof CqlInterval) || !(right instanceof CqlInterval)) {
      return null;
    }

    const leftIv = left as CqlInterval<CqlComparable>;
    const rightIv = right as CqlInterval<CqlComparable>;
    const op = expr.operator;

    switch (op.timingKind) {
      case TimingKind.SameAs:
        return CqlBoolean.of(leftIv.equals(rightIv));

      case TimingKind.Includes:
        return CqlBoolean.of(leftIv.includes(rightIv));

      case TimingKind.IncludedIn:
      case TimingKind.During:
        return CqlBoolean.of(rightIv.includes(leftIv));

      case TimingKind.BeforeOrAfter: {
        if (op.before) {
          if (leftIv.high === null || rightIv.low === null) return null;
          return CqlBoolean.of(leftIv.high.compareTo(rightIv.low) < 0);
        }
        if (leftIv.low === null || rightIv.high === null) return null;
        return CqlBoolean.of(leftIv.low.compareTo(rightIv.high) > 0);
      }

      case TimingKind.Meets: {
        if (leftIv.high !== null && rightIv.low !== null && leftIv.high.equals(rightIv.low)) {
          return CqlBoolean.TRUE;
        }
        if (leftIv.low !== null && rightIv.high !== null && leftIv.low.equals(rightIv.high)) {
          return CqlBoolean.TRUE;
        }
        return CqlBoolean.FALSE;
      }

      case TimingKind.Overlaps:
        return CqlBoolean.of(leftIv.overlaps(rightIv));

      case TimingKind.Starts: {
        if (leftIv.low === null || rightIv.low === null) return null;
        return CqlBoolean.of(leftIv.low.equals(rightIv.low));
      }

      case TimingKind.Ends: {
        if (leftIv.high === null || rightIv.high === null) return null;
        return CqlBoolean.of(leftIv.high.equals(rightIv.high));
      }

      case TimingKind.Within:
        return CqlBoolean.of(rightIv.includes(leftIv));

      default:
        return null;
    }
  }

  async visitSetAggregate(expr: SetAggregateExpr): Promise<CqlResult> {
    const operand = await this.evaluate(expr.operand);
    if (operand === null) return null;
    const items = toList(operand);

    switch (expr.setKind) {
      case 'expand': {
        const expandFn = this.registry.resolve('expand');
        if (expandFn) {
          const result: CqlValue[] = [];
          for (const item of items) {
            if (item instanceof CqlInterval) {
              const per = expr.per !== null ? await this.evaluate(expr.per) : null;
              const expanded = await expandFn([item, per], this.ctx);
              if (expanded instanceof CqlList) {
                result.push(...expanded.values);
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

  private evalArithmetic(
    op: BinaryOp,
    left: CqlValue,
    right: CqlValue,
  ): CqlResult {
    // String concatenation: CQL '+' on strings is concatenation
    if (op === BinaryOp.Add && left instanceof CqlString && right instanceof CqlString) {
      return new CqlString(left.value + right.value);
    }

    // Quantity arithmetic (same unit)
    if (left instanceof CqlQuantity && right instanceof CqlQuantity) {
      if (left.unit !== right.unit) {
        throw new Error(`incompatible units: ${left.unit} and ${right.unit}`);
      }
      switch (op) {
        case BinaryOp.Add:
          return new CqlQuantity(left.value.plus(right.value), left.unit);
        case BinaryOp.Subtract:
          return new CqlQuantity(left.value.minus(right.value), left.unit);
        case BinaryOp.Multiply:
          return new CqlQuantity(left.value.times(right.value), left.unit);
        case BinaryOp.Divide:
          if (right.value.isZero()) return null;
          return new CqlQuantity(left.value.div(right.value), left.unit);
        case BinaryOp.Div:
          if (right.value.isZero()) return null;
          return new CqlQuantity(left.value.div(right.value).truncated(), left.unit);
        case BinaryOp.Mod:
          if (right.value.isZero()) return null;
          return new CqlQuantity(left.value.mod(right.value), left.unit);
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

    // Long arithmetic
    if (left instanceof CqlLong && right instanceof CqlLong) {
      const lv = left.value;
      const rv = right.value;
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
      if (left === null || right === null) return null;
      if (right instanceof CqlInterval) {
        return CqlBoolean.of(
          (right as CqlInterval<CqlComparable>).contains(
            left as CqlComparable,
          ),
        );
      }
      const rItems = toList(right);
      return CqlBoolean.of(rItems.some((r) => r.equals(left)));
    }
    // contains: right in left
    if (left === null || right === null) return null;
    if (left instanceof CqlInterval) {
      return CqlBoolean.of(
        (left as CqlInterval<CqlComparable>).contains(
          right as CqlComparable,
        ),
      );
    }
    const lItems = toList(left);
    return CqlBoolean.of(lItems.some((l) => l.equals(right)));
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
    if (operand instanceof CqlInteger) {
      return new CqlInteger(
        op === UnaryOp.SuccessorOf ? operand.value + 1 : operand.value - 1,
      );
    }
    if (operand instanceof CqlDecimal) {
      const epsilon = new Decimal('1e-8');
      return new CqlDecimal(
        op === UnaryOp.SuccessorOf
          ? operand.value.plus(epsilon)
          : operand.value.minus(epsilon),
      );
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
        return new CqlInteger(items.length);
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
        return items.length > 0 ? items[0] : null;
      }
      case 'last': {
        const items = toList(source);
        return items.length > 0 ? items[items.length - 1] : null;
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
        if (source instanceof CqlString) return new CqlInteger(source.value.length);
        return new CqlInteger(0);
      case 'coalesce':
        for (const arg of expr.operands) {
          const val = await this.evaluate(arg);
          if (val !== null) return val;
        }
        return null;
      case 'isnull':
        return CqlBoolean.of(source === null);
      case 'istrue':
        return CqlBoolean.of(isTrue(source));
      case 'isfalse':
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
        return new CqlDecimal(toDecimal(source).exp());
      }
      case 'ln': {
        if (source === null) return null;
        const d = toDecimal(source);
        if (d.lte(0)) return null;
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
        return source ?? (expr.operands.length > 0 ? await this.evaluate(expr.operands[0]) : null);
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
        const items = toList(source);
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
        const items = toList(source);
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
        if (source instanceof CqlString && expr.operands.length > 0) {
          const arg = await this.evaluate(expr.operands[0]);
          if (arg instanceof CqlString) {
            return new CqlInteger(source.value.indexOf(arg.value));
          }
        }
        return new CqlInteger(-1);
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
          return new CqlString(source.value.substring(startIdx, end));
        }
        return source;
      }
      case 'tail': {
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
          return operand.month ? new CqlInteger(operand.month) : null;
        case 'day':
          return operand.day ? new CqlInteger(operand.day) : null;
        case 'hour':
          return new CqlInteger(operand.hour);
        case 'minute':
          return new CqlInteger(operand.minute);
        case 'second':
          return new CqlInteger(operand.second);
        case 'millisecond':
          return new CqlInteger(operand.millis);
        case 'timezoneoffset':
          return operand.hasTZ ? new CqlDecimal(new Decimal(operand.tzOffset / 60)) : null;
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
