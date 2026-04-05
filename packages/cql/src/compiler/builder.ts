/**
 * CQL AST builder — an ANTLR visitor that converts a parse tree into AST nodes.
 *
 * Ported from the Go reference implementation (go-cql/compiler/builder.go).
 */

import type { ParserRuleContext, TerminalNode } from 'antlr4ng';
import { cqlVisitor } from '../grammar/generated/cqlVisitor.js';
import {
  type LibraryContext,
  type LibraryDefinitionContext,
  type DefinitionContext,
  type StatementContext,
  type UsingDefinitionContext,
  type IncludeDefinitionContext,
  type CodesystemDefinitionContext,
  type ValuesetDefinitionContext,
  type CodeDefinitionContext,
  type ConceptDefinitionContext,
  type ParameterDefinitionContext,
  type ExpressionDefinitionContext,
  type ContextDefinitionContext,
  type FunctionDefinitionContext,
  type OperandDefinitionContext,
  type TypeSpecifierContext,
  type NamedTypeSpecifierContext,
  type ListTypeSpecifierContext,
  type IntervalTypeSpecifierContext,
  type TupleTypeSpecifierContext,
  type TupleElementDefinitionContext,
  type ChoiceTypeSpecifierContext,
  type ExpressionContext,
  type ExpressionTermContext,
  type TermExpressionContext,
  type RetrieveExpressionContext,
  type QueryExpressionContext,
  type BooleanExpressionContext,
  type TypeExpressionContext,
  type CastExpressionContext,
  type NotExpressionContext,
  type ExistenceExpressionContext,
  type BetweenExpressionContext,
  type DurationBetweenExpressionContext,
  type DifferenceBetweenExpressionContext,
  type InFixSetExpressionContext,
  type InequalityExpressionContext,
  type EqualityExpressionContext,
  type MembershipExpressionContext,
  type AndExpressionContext,
  type OrExpressionContext,
  type ImpliesExpressionContext,
  type TimingExpressionContext,
  type TermExpressionTermContext,
  type InvocationExpressionTermContext,
  type IndexedExpressionTermContext,
  type PolarityExpressionTermContext,
  type TimeBoundaryExpressionTermContext,
  type TimeUnitExpressionTermContext,
  type DurationExpressionTermContext,
  type DifferenceExpressionTermContext,
  type WidthExpressionTermContext,
  type SuccessorExpressionTermContext,
  type PredecessorExpressionTermContext,
  type ElementExtractorExpressionTermContext,
  type PointExtractorExpressionTermContext,
  type TypeExtentExpressionTermContext,
  type ConversionExpressionTermContext,
  type PowerExpressionTermContext,
  type MultiplicationExpressionTermContext,
  type AdditionExpressionTermContext,
  type IfThenElseExpressionTermContext,
  type CaseExpressionTermContext,
  type CaseExpressionItemContext,
  type AggregateExpressionTermContext,
  type SetAggregateExpressionTermContext,
  type InvocationTermContext,
  type LiteralTermContext,
  type ExternalConstantTermContext,
  type IntervalSelectorTermContext,
  type TupleSelectorTermContext,
  type InstanceSelectorTermContext,
  type ListSelectorTermContext,
  type CodeSelectorTermContext,
  type ConceptSelectorTermContext,
  type ParenthesizedTermContext,
  type MemberInvocationContext,
  type FunctionInvocationContext,
  type ThisInvocationContext,
  type IndexInvocationContext,
  type TotalInvocationContext,
  type FunctionContext,
  type QualifiedMemberInvocationContext,
  type QualifiedFunctionInvocationContext,
  type QualifiedFunctionContext,
  type BooleanLiteralContext,
  type NullLiteralContext,
  type StringLiteralContext,
  type NumberLiteralContext,
  type LongNumberLiteralContext,
  type DateTimeLiteralContext,
  type DateLiteralContext,
  type TimeLiteralContext,
  type QuantityLiteralContext,
  type RatioLiteralContext,
  type ExternalConstantContext,
  type IntervalSelectorContext,
  type TupleSelectorContext,
  type TupleElementSelectorContext,
  type InstanceSelectorContext,
  type InstanceElementSelectorContext,
  type ListSelectorContext,
  type CodeSelectorContext,
  type ConceptSelectorContext,
  type RetrieveContext,
  type QueryContext,
  type AliasedQuerySourceContext,
  type LetClauseItemContext,
  type WithClauseContext,
  type WithoutClauseContext,
  type ReturnClauseContext,
  type AggregateClauseContext,
  type SortClauseContext,
  type SortByItemContext,
  type AccessModifierContext,
  type IdentifierContext,
  type ReferentialIdentifierContext,
  ConcurrentWithIntervalOperatorPhraseContext,
  BeforeOrAfterIntervalOperatorPhraseContext,
  IncludesIntervalOperatorPhraseContext,
  IncludedInIntervalOperatorPhraseContext,
  OverlapsIntervalOperatorPhraseContext,
  MeetsIntervalOperatorPhraseContext,
  StartsIntervalOperatorPhraseContext,
  EndsIntervalOperatorPhraseContext,
  WithinIntervalOperatorPhraseContext,
  cqlParser,
} from '../grammar/generated/cqlParser.js';

import type {
  Library,
  LibraryIdentifier,
  UsingDef,
  IncludeDef,
  CodeSystemDef,
  ValueSetDef,
  CodeDef,
  ConceptDef,
  ParameterDef,
  ContextDef,
  ExpressionDef,
  FunctionDef,
  OperandDef,
} from '../ast/library.js';

import {
  type Expression,
  type TypeSpecifier,
  type NamedType,
  type AliasedSource,
  type WithClause as WithClauseNode,
  type WithoutClause as WithoutClauseNode,
  type LetClause as LetClauseNode,
  type ReturnClause as ReturnClauseNode,
  type AggregateClause as AggregateClauseNode,
  type SortClause as SortClauseNode,
  type SortByItem as SortByItemNode,
  type CaseItem,
  type TupleElement,
  type TimingOp,
  LiteralType,
  BinaryOp,
  UnaryOp,
  SortDirection,
  TimingKind,
  AccessLevel,
} from '../ast/nodes.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function unquoteString(s: string): string {
  if (s.length >= 2) {
    if ((s[0] === "'" && s[s.length - 1] === "'") || (s[0] === '"' && s[s.length - 1] === '"')) {
      s = s.slice(1, -1);
    }
  }
  s = s.replace(/\\u([0-9A-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  s = s.replace(/\\'/g, "'");
  s = s.replace(/\\"/g, '"');
  s = s.replace(/\\\\/g, '\\');
  s = s.replace(/\\n/g, '\n');
  s = s.replace(/\\r/g, '\r');
  s = s.replace(/\\t/g, '\t');
  return s;
}

function identifierText(ctx: IdentifierContext | null): string {
  if (!ctx) return '';
  const text = ctx.getText();
  if (text.startsWith('`') && text.endsWith('`')) return text.slice(1, -1);
  if (text.startsWith('"') && text.endsWith('"')) return text.slice(1, -1);
  return text;
}

function referentialIdentifierText(ctx: ReferentialIdentifierContext | null): string {
  if (!ctx) return '';
  const id = ctx.identifier();
  if (id) return identifierText(id);
  const kw = ctx.keywordIdentifier();
  if (kw) return kw.getText();
  return ctx.getText();
}

// ---------------------------------------------------------------------------
// Builder (Visitor)
// ---------------------------------------------------------------------------

export class CqlBuilder extends cqlVisitor<unknown> {
  private currentContext = '';

  // -------------------------------------------------------------------------
  // Expression helpers
  // -------------------------------------------------------------------------

  private visitExpr(ctx: ExpressionContext | null): Expression | null {
    if (!ctx) return null;
    const result = ctx.accept(this);
    return (result as Expression) ?? null;
  }

  private visitExprTerm(ctx: ExpressionTermContext | null): Expression | null {
    if (!ctx) return null;
    const result = ctx.accept(this);
    return (result as Expression) ?? null;
  }

  private visitTypeSpec(ctx: TypeSpecifierContext | null): TypeSpecifier | null {
    if (!ctx) return null;
    const result = ctx.accept(this);
    return (result as TypeSpecifier) ?? null;
  }

  private visitAccessMod(ctx: AccessModifierContext | null): AccessLevel {
    if (!ctx) return AccessLevel.Public;
    return ctx.getText() === 'private' ? AccessLevel.Private : AccessLevel.Public;
  }

  // =========================================================================
  // Library (top-level)
  // =========================================================================

  override visitLibrary = (ctx: LibraryContext): Library => {
    const lib: Library = {
      identifier: null,
      usings: [],
      includes: [],
      codeSystems: [],
      valueSets: [],
      codes: [],
      concepts: [],
      parameters: [],
      contexts: [],
      statements: [],
      functions: [],
    };

    const ld = ctx.libraryDefinition();
    if (ld) {
      const id = ld.accept(this) as LibraryIdentifier | null;
      if (id) (lib as { identifier: LibraryIdentifier | null }).identifier = id;
    }

    for (const def of ctx.definition()) {
      this.visitDefinitionInto(def, lib);
    }

    for (const stmt of ctx.statement()) {
      this.visitStatementInto(stmt, lib);
    }

    return lib;
  };

  override visitLibraryDefinition = (ctx: LibraryDefinitionContext): LibraryIdentifier => {
    const qi = ctx.qualifiedIdentifier();
    const vs = ctx.versionSpecifier();
    return {
      name: qi ? qi.getText() : '',
      version: vs ? unquoteString(vs.getText()) : '',
    };
  };

  // =========================================================================
  // Definitions
  // =========================================================================

  private visitDefinitionInto(ctx: DefinitionContext, lib: Library): void {
    const ud = ctx.usingDefinition();
    if (ud) {
      const u = ud.accept(this) as UsingDef | null;
      if (u) (lib.usings as UsingDef[]).push(u);
    }
    const id = ctx.includeDefinition();
    if (id) {
      const i = id.accept(this) as IncludeDef | null;
      if (i) (lib.includes as IncludeDef[]).push(i);
    }
    const csd = ctx.codesystemDefinition();
    if (csd) {
      const cs = csd.accept(this) as CodeSystemDef | null;
      if (cs) (lib.codeSystems as CodeSystemDef[]).push(cs);
    }
    const vsd = ctx.valuesetDefinition();
    if (vsd) {
      const vs = vsd.accept(this) as ValueSetDef | null;
      if (vs) (lib.valueSets as ValueSetDef[]).push(vs);
    }
    const cd = ctx.codeDefinition();
    if (cd) {
      const c = cd.accept(this) as CodeDef | null;
      if (c) (lib.codes as CodeDef[]).push(c);
    }
    const cpd = ctx.conceptDefinition();
    if (cpd) {
      const cp = cpd.accept(this) as ConceptDef | null;
      if (cp) (lib.concepts as ConceptDef[]).push(cp);
    }
    const pd = ctx.parameterDefinition();
    if (pd) {
      const p = pd.accept(this) as ParameterDef | null;
      if (p) (lib.parameters as ParameterDef[]).push(p);
    }
  }

  override visitUsingDefinition = (ctx: UsingDefinitionContext): UsingDef => {
    const qi = ctx.qualifiedIdentifier();
    const vs = ctx.versionSpecifier();
    const li = ctx.localIdentifier();
    return {
      name: qi ? qi.getText() : '',
      version: vs ? unquoteString(vs.getText()) : '',
      alias: li ? li.getText() : '',
    };
  };

  override visitIncludeDefinition = (ctx: IncludeDefinitionContext): IncludeDef => {
    const qi = ctx.qualifiedIdentifier();
    const vs = ctx.versionSpecifier();
    const li = ctx.localIdentifier();
    return {
      name: qi ? qi.getText() : '',
      version: vs ? unquoteString(vs.getText()) : '',
      alias: li ? li.getText() : '',
    };
  };

  override visitCodesystemDefinition = (ctx: CodesystemDefinitionContext): CodeSystemDef => {
    return {
      name: identifierText(ctx.identifier()),
      id: unquoteString(ctx.codesystemId().getText()),
      version: ctx.versionSpecifier() ? unquoteString(ctx.versionSpecifier()!.getText()) : '',
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
    };
  };

  override visitValuesetDefinition = (ctx: ValuesetDefinitionContext): ValueSetDef => {
    const codeSystems: string[] = [];
    const css = ctx.codesystems();
    if (css) {
      for (const csid of css.codesystemIdentifier()) {
        codeSystems.push(csid.getText());
      }
    }
    return {
      name: identifierText(ctx.identifier()),
      id: unquoteString(ctx.valuesetId().getText()),
      version: ctx.versionSpecifier() ? unquoteString(ctx.versionSpecifier()!.getText()) : '',
      codeSystems,
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
    };
  };

  override visitCodeDefinition = (ctx: CodeDefinitionContext): CodeDef => {
    const dc = ctx.displayClause();
    return {
      name: identifierText(ctx.identifier()),
      id: unquoteString(ctx.codeId().getText()),
      system: ctx.codesystemIdentifier().getText(),
      display: dc ? unquoteString(dc.STRING()!.getText()) : '',
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
    };
  };

  override visitConceptDefinition = (ctx: ConceptDefinitionContext): ConceptDef => {
    const codes: string[] = [];
    for (const cid of ctx.codeIdentifier()) {
      codes.push(cid.getText());
    }
    const dc = ctx.displayClause();
    return {
      name: identifierText(ctx.identifier()),
      codes,
      display: dc ? unquoteString(dc.STRING()!.getText()) : '',
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
    };
  };

  override visitParameterDefinition = (ctx: ParameterDefinitionContext): ParameterDef => {
    return {
      name: identifierText(ctx.identifier()),
      type: this.visitTypeSpec(ctx.typeSpecifier()),
      default: this.visitExpr(ctx.expression()),
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
    };
  };

  // =========================================================================
  // Statements
  // =========================================================================

  private visitStatementInto(ctx: StatementContext, lib: Library): void {
    const ed = ctx.expressionDefinition();
    if (ed) {
      const e = ed.accept(this) as ExpressionDef | null;
      if (e) {
        (lib.statements as ExpressionDef[]).push({
          ...e,
          context: this.currentContext,
        });
      }
    }
    const cd = ctx.contextDefinition();
    if (cd) {
      const c = cd.accept(this) as ContextDef | null;
      if (c) {
        this.currentContext = c.name;
        (lib.contexts as ContextDef[]).push(c);
      }
    }
    const fd = ctx.functionDefinition();
    if (fd) {
      const f = fd.accept(this) as FunctionDef | null;
      if (f) (lib.functions as FunctionDef[]).push(f);
    }
  }

  override visitExpressionDefinition = (ctx: ExpressionDefinitionContext): ExpressionDef => {
    return {
      name: identifierText(ctx.identifier()),
      expression: this.visitExpr(ctx.expression())!,
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
      context: '',
    };
  };

  override visitContextDefinition = (ctx: ContextDefinitionContext): ContextDef => {
    const mi = ctx.modelIdentifier();
    return {
      model: mi ? mi.getText() : '',
      name: identifierText(ctx.identifier()),
    };
  };

  override visitFunctionDefinition = (ctx: FunctionDefinitionContext): FunctionDef => {
    const operands: OperandDef[] = [];
    for (const od of ctx.operandDefinition()) {
      const o = od.accept(this) as OperandDef | null;
      if (o) operands.push(o);
    }
    const fb = ctx.functionBody();
    const text = ctx.getText();
    const iof = ctx.identifierOrFunctionIdentifier();
    const fnName = iof.identifier() ? identifierText(iof.identifier()) : iof.getText();
    return {
      name: fnName,
      operands,
      returnType: this.visitTypeSpec(ctx.typeSpecifier()),
      body: fb ? this.visitExpr(fb.expression()) : null,
      external: text.includes('external'),
      fluent: ctx.fluentModifier() !== null,
      accessLevel: this.visitAccessMod(ctx.accessModifier()),
    };
  };

  override visitOperandDefinition = (ctx: OperandDefinitionContext): OperandDef => {
    return {
      name: referentialIdentifierText(ctx.referentialIdentifier()),
      type: this.visitTypeSpec(ctx.typeSpecifier())!,
    };
  };

  // =========================================================================
  // Type Specifiers
  // =========================================================================

  override visitTypeSpecifier = (ctx: TypeSpecifierContext): TypeSpecifier | null => {
    const n = ctx.namedTypeSpecifier();
    if (n) return n.accept(this) as TypeSpecifier;
    const l = ctx.listTypeSpecifier();
    if (l) return l.accept(this) as TypeSpecifier;
    const i = ctx.intervalTypeSpecifier();
    if (i) return i.accept(this) as TypeSpecifier;
    const t = ctx.tupleTypeSpecifier();
    if (t) return t.accept(this) as TypeSpecifier;
    const c = ctx.choiceTypeSpecifier();
    if (c) return c.accept(this) as TypeSpecifier;
    return null;
  };

  override visitNamedTypeSpecifier = (ctx: NamedTypeSpecifierContext): NamedType => {
    const qualifiers = ctx.qualifier();
    const ns = qualifiers.length > 0 ? qualifiers.map((q) => q.getText()).join('.') : '';
    return {
      specKind: 'NamedType',
      namespace: ns,
      name: ctx.referentialOrTypeNameIdentifier().getText(),
    };
  };

  override visitListTypeSpecifier = (ctx: ListTypeSpecifierContext): TypeSpecifier => {
    return {
      specKind: 'ListType',
      elementType: this.visitTypeSpec(ctx.typeSpecifier())!,
    };
  };

  override visitIntervalTypeSpecifier = (ctx: IntervalTypeSpecifierContext): TypeSpecifier => {
    return {
      specKind: 'IntervalType',
      pointType: this.visitTypeSpec(ctx.typeSpecifier())!,
    };
  };

  override visitTupleTypeSpecifier = (ctx: TupleTypeSpecifierContext): TypeSpecifier => {
    const elements = ctx.tupleElementDefinition().map((ted) => {
      return ted.accept(this) as { name: string; type: TypeSpecifier };
    });
    return { specKind: 'TupleType', elements };
  };

  override visitTupleElementDefinition = (ctx: TupleElementDefinitionContext) => {
    return {
      name: referentialIdentifierText(ctx.referentialIdentifier()),
      type: this.visitTypeSpec(ctx.typeSpecifier())!,
    };
  };

  override visitChoiceTypeSpecifier = (ctx: ChoiceTypeSpecifierContext): TypeSpecifier => {
    return {
      specKind: 'ChoiceType',
      types: ctx.typeSpecifier().map((ts) => this.visitTypeSpec(ts)!),
    };
  };

  // =========================================================================
  // Expressions
  // =========================================================================

  override visitTermExpression = (ctx: TermExpressionContext): Expression | null => {
    return this.visitExprTerm(ctx.expressionTerm());
  };

  override visitRetrieveExpression = (ctx: RetrieveExpressionContext): Expression | null => {
    return ctx.retrieve().accept(this) as Expression;
  };

  override visitQueryExpression = (ctx: QueryExpressionContext): Expression | null => {
    return ctx.query().accept(this) as Expression;
  };

  override visitBooleanExpression = (ctx: BooleanExpressionContext): Expression => {
    const expr = this.visitExpr(ctx.expression())!;
    const text = ctx.getText();
    const not = text.includes('not');
    let testVal = 'null';
    if (text.endsWith('true')) testVal = 'true';
    else if (text.endsWith('false')) testVal = 'false';
    return { kind: 'BooleanTest', operand: expr, testValue: testVal, not };
  };

  override visitTypeExpression = (ctx: TypeExpressionContext): Expression => {
    const expr = this.visitExpr(ctx.expression())!;
    const ts = this.visitTypeSpec(ctx.typeSpecifier())!;
    // Look for the 'is' or 'as' keyword token between expression and type specifier
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if ('symbol' in (child as object)) {
        const tokenText = (child as TerminalNode).getText();
        if (tokenText === 'is') {
          return { kind: 'Is', operand: expr, type: ts };
        }
      }
    }
    return { kind: 'As', operand: expr, type: ts };
  };

  override visitCastExpression = (ctx: CastExpressionContext): Expression => {
    return {
      kind: 'Cast',
      operand: this.visitExpr(ctx.expression())!,
      type: this.visitTypeSpec(ctx.typeSpecifier())!,
    };
  };

  override visitNotExpression = (ctx: NotExpressionContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.Not, operand: this.visitExpr(ctx.expression())! };
  };

  override visitExistenceExpression = (ctx: ExistenceExpressionContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.Exists, operand: this.visitExpr(ctx.expression())! };
  };

  override visitBetweenExpression = (ctx: BetweenExpressionContext): Expression => {
    const terms = ctx.expressionTerm();
    const properly = ctx.getText().includes('properly');
    return {
      kind: 'Between',
      operand: this.visitExpr(ctx.expression())!,
      low: terms.length >= 1 ? this.visitExprTerm(terms[0])! : null!,
      high: terms.length >= 2 ? this.visitExprTerm(terms[1])! : null!,
      properly,
    };
  };

  override visitDurationBetweenExpression = (ctx: DurationBetweenExpressionContext): Expression => {
    const terms = ctx.expressionTerm();
    const pdtp = ctx.pluralDateTimePrecision();
    return {
      kind: 'DurationBetween',
      precision: pdtp ? pdtp.getText() : '',
      low: terms.length >= 1 ? this.visitExprTerm(terms[0])! : null!,
      high: terms.length >= 2 ? this.visitExprTerm(terms[1])! : null!,
    };
  };

  override visitDifferenceBetweenExpression = (ctx: DifferenceBetweenExpressionContext): Expression => {
    const terms = ctx.expressionTerm();
    const pdtp = ctx.pluralDateTimePrecision();
    return {
      kind: 'DifferenceBetween',
      precision: pdtp ? pdtp.getText() : '',
      low: terms.length >= 1 ? this.visitExprTerm(terms[0])! : null!,
      high: terms.length >= 2 ? this.visitExprTerm(terms[1])! : null!,
    };
  };

  override visitInFixSetExpression = (ctx: InFixSetExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    const left = this.visitExpr(exprs[0])!;
    const right = this.visitExpr(exprs[1])!;
    const text = ctx.getText();
    let op: BinaryOp;
    if (text.includes('union') || text.includes('|')) op = BinaryOp.Union;
    else if (text.includes('intersect')) op = BinaryOp.Intersect;
    else op = BinaryOp.Except;
    return { kind: 'Binary', operator: op, left, right };
  };

  override visitInequalityExpression = (ctx: InequalityExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    const left = this.visitExpr(exprs[0])!;
    const right = this.visitExpr(exprs[1])!;
    let op = BinaryOp.Less;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if ('symbol' in (child as object)) {
        const tn = child as TerminalNode;
        switch (tn.getText()) {
          case '<=':
            op = BinaryOp.LessOrEqual;
            break;
          case '<':
            op = BinaryOp.Less;
            break;
          case '>':
            op = BinaryOp.Greater;
            break;
          case '>=':
            op = BinaryOp.GreaterOrEqual;
            break;
        }
      }
    }
    return { kind: 'Binary', operator: op, left, right };
  };

  override visitEqualityExpression = (ctx: EqualityExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    const left = this.visitExpr(exprs[0])!;
    const right = this.visitExpr(exprs[1])!;
    let op = BinaryOp.Equal;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if ('symbol' in (child as object)) {
        const tn = child as TerminalNode;
        switch (tn.getText()) {
          case '=':
            op = BinaryOp.Equal;
            break;
          case '!=':
            op = BinaryOp.NotEqual;
            break;
          case '~':
            op = BinaryOp.Equivalent;
            break;
          case '!~':
            op = BinaryOp.NotEquivalent;
            break;
        }
      }
    }
    return { kind: 'Binary', operator: op, left, right };
  };

  override visitMembershipExpression = (ctx: MembershipExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    const left = this.visitExpr(exprs[0])!;
    const right = this.visitExpr(exprs[1])!;
    let operator = 'in';
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if ('symbol' in (child as object)) {
        const tn = child as TerminalNode;
        if (tn.getText() === 'contains') operator = 'contains';
      }
    }
    let precision = '';
    const dtps = ctx.dateTimePrecisionSpecifier();
    if (dtps) {
      const dtp = dtps.dateTimePrecision();
      if (dtp) precision = dtp.getText();
    }
    return { kind: 'Membership', left, right, operator, precision };
  };

  override visitAndExpression = (ctx: AndExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    return {
      kind: 'Binary',
      operator: BinaryOp.And,
      left: this.visitExpr(exprs[0])!,
      right: this.visitExpr(exprs[1])!,
    };
  };

  override visitOrExpression = (ctx: OrExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    const text = ctx.getText();
    const op = text.includes('xor') ? BinaryOp.Xor : BinaryOp.Or;
    return {
      kind: 'Binary',
      operator: op,
      left: this.visitExpr(exprs[0])!,
      right: this.visitExpr(exprs[1])!,
    };
  };

  override visitImpliesExpression = (ctx: ImpliesExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    return {
      kind: 'Binary',
      operator: BinaryOp.Implies,
      left: this.visitExpr(exprs[0])!,
      right: this.visitExpr(exprs[1])!,
    };
  };

  override visitTimingExpression = (ctx: TimingExpressionContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    const phrase = ctx.intervalOperatorPhrase();
    const timingOp = this.parseTimingOp(phrase);
    return {
      kind: 'Timing',
      left: this.visitExpr(exprs[0])!,
      right: this.visitExpr(exprs[1])!,
      operator: timingOp,
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private parseTimingOp(phrase: any): TimingOp {
    const text = phrase.getText().toLowerCase();

    // Extract precision from text (year, month, day, hour, minute, second, millisecond)
    // Note: getText() concatenates tokens without spaces, so \b may not work
    const precMatch = text.match(/(millisecond|second|minute|hour|day|month|year)s?/);
    const precision = precMatch ? precMatch[1] : '';
    const properly = text.includes('properly');

    if (phrase instanceof ConcurrentWithIntervalOperatorPhraseContext) {
      // "same <precision> as", "same <precision> or before", "same <precision> or after"
      return {
        timingKind: TimingKind.SameAs,
        precision,
        properly: false,
        before: text.includes('before'),
        after: text.includes('after'),
      };
    }

    if (phrase instanceof BeforeOrAfterIntervalOperatorPhraseContext) {
      const isBefore = text.includes('before');
      const isOnOr = text.includes('on or') || text.includes('or on') || text.includes('onor') || text.includes('oron');
      // "on or before" = SameOrBefore (<=), "on or after" = SameOrAfter (>=)
      // plain "before" = strictly before (<), plain "after" = strictly after (>)
      if (isOnOr) {
        // "on or before/after" maps to SameAs with before/after flag (same or before/after)
        return {
          timingKind: TimingKind.SameAs,
          precision,
          properly: false,
          before: isBefore,
          after: !isBefore,
        };
      }
      return {
        timingKind: TimingKind.BeforeOrAfter,
        precision,
        properly,
        before: isBefore,
        after: !isBefore,
      };
    }

    if (phrase instanceof IncludesIntervalOperatorPhraseContext) {
      return {
        timingKind: TimingKind.Includes,
        precision,
        properly,
        before: false,
        after: false,
      };
    }

    if (phrase instanceof IncludedInIntervalOperatorPhraseContext) {
      // "included in" or "during"
      const kind = text.includes('during') ? TimingKind.During : TimingKind.IncludedIn;
      return {
        timingKind: kind,
        precision,
        properly,
        before: false,
        after: false,
      };
    }

    if (phrase instanceof OverlapsIntervalOperatorPhraseContext) {
      return {
        timingKind: TimingKind.Overlaps,
        precision,
        properly: false,
        before: text.includes('before'),
        after: text.includes('after'),
      };
    }

    if (phrase instanceof MeetsIntervalOperatorPhraseContext) {
      return {
        timingKind: TimingKind.Meets,
        precision,
        properly: false,
        before: text.includes('before'),
        after: text.includes('after'),
      };
    }

    if (phrase instanceof StartsIntervalOperatorPhraseContext) {
      return {
        timingKind: TimingKind.Starts,
        precision,
        properly: false,
        before: false,
        after: false,
      };
    }

    if (phrase instanceof EndsIntervalOperatorPhraseContext) {
      return {
        timingKind: TimingKind.Ends,
        precision,
        properly: false,
        before: false,
        after: false,
      };
    }

    if (phrase instanceof WithinIntervalOperatorPhraseContext) {
      return {
        timingKind: TimingKind.Within,
        precision,
        properly,
        before: false,
        after: false,
      };
    }

    // Fallback: try to infer from text
    let timingKind = TimingKind.SameAs;
    if (text.includes('before') || text.includes('after')) {
      timingKind = TimingKind.BeforeOrAfter;
    } else if (text.includes('includes')) {
      timingKind = TimingKind.Includes;
    } else if (text.includes('during') || text.includes('included in')) {
      timingKind = TimingKind.During;
    } else if (text.includes('overlaps')) {
      timingKind = TimingKind.Overlaps;
    } else if (text.includes('meets')) {
      timingKind = TimingKind.Meets;
    } else if (text.includes('starts')) {
      timingKind = TimingKind.Starts;
    } else if (text.includes('ends')) {
      timingKind = TimingKind.Ends;
    } else if (text.includes('within')) {
      timingKind = TimingKind.Within;
    }

    return {
      timingKind,
      precision,
      properly,
      before: text.includes('before'),
      after: text.includes('after'),
    };
  };

  // =========================================================================
  // Expression Terms
  // =========================================================================

  override visitTermExpressionTerm = (ctx: TermExpressionTermContext): unknown => {
    return ctx.term().accept(this);
  };

  override visitInvocationExpressionTerm = (ctx: InvocationExpressionTermContext): Expression | null => {
    const source = this.visitExprTerm(ctx.expressionTerm());
    const qi = ctx.qualifiedInvocation();
    if (!qi) return source;
    const result = qi.accept(this);
    if (result && typeof result === 'object' && 'kind' in result) {
      const node = result as Expression;
      if (node.kind === 'MemberAccess') {
        return { ...node, source: source! };
      }
      if (node.kind === 'FunctionCall') {
        return { ...node, source };
      }
    }
    return source;
  };

  override visitIndexedExpressionTerm = (ctx: IndexedExpressionTermContext): Expression => {
    return {
      kind: 'IndexAccess',
      source: this.visitExprTerm(ctx.expressionTerm())!,
      index: this.visitExpr(ctx.expression())!,
    };
  };

  override visitPolarityExpressionTerm = (ctx: PolarityExpressionTermContext): Expression => {
    const operand = this.visitExprTerm(ctx.expressionTerm())!;
    const text = ctx.getText().trimStart();
    const op = text.startsWith('-') ? UnaryOp.Negate : UnaryOp.Positive;
    return { kind: 'Unary', operator: op, operand };
  };

  override visitTimeBoundaryExpressionTerm = (ctx: TimeBoundaryExpressionTermContext): Expression => {
    const operand = this.visitExprTerm(ctx.expressionTerm())!;
    const text = ctx.getText();
    const op = text.startsWith('start') ? UnaryOp.StartOf : UnaryOp.EndOf;
    return { kind: 'Unary', operator: op, operand };
  };

  override visitTimeUnitExpressionTerm = (ctx: TimeUnitExpressionTermContext): Expression => {
    const operand = this.visitExprTerm(ctx.expressionTerm())!;
    const dtc = ctx.dateTimeComponent();
    return {
      kind: 'DateTimeComponentFrom',
      component: dtc ? dtc.getText() : '',
      operand,
    };
  };

  override visitDurationExpressionTerm = (ctx: DurationExpressionTermContext): Expression => {
    const operand = this.visitExprTerm(ctx.expressionTerm())!;
    const pdtp = ctx.pluralDateTimePrecision();
    return {
      kind: 'DurationOf',
      precision: pdtp ? pdtp.getText() : '',
      operand,
    };
  };

  override visitDifferenceExpressionTerm = (ctx: DifferenceExpressionTermContext): Expression => {
    const operand = this.visitExprTerm(ctx.expressionTerm())!;
    const pdtp = ctx.pluralDateTimePrecision();
    return {
      kind: 'DifferenceOf',
      precision: pdtp ? pdtp.getText() : '',
      operand,
    };
  };

  override visitWidthExpressionTerm = (ctx: WidthExpressionTermContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.WidthOf, operand: this.visitExprTerm(ctx.expressionTerm())! };
  };

  override visitSuccessorExpressionTerm = (ctx: SuccessorExpressionTermContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.SuccessorOf, operand: this.visitExprTerm(ctx.expressionTerm())! };
  };

  override visitPredecessorExpressionTerm = (ctx: PredecessorExpressionTermContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.PredecessorOf, operand: this.visitExprTerm(ctx.expressionTerm())! };
  };

  override visitElementExtractorExpressionTerm = (ctx: ElementExtractorExpressionTermContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.SingletonFrom, operand: this.visitExprTerm(ctx.expressionTerm())! };
  };

  override visitPointExtractorExpressionTerm = (ctx: PointExtractorExpressionTermContext): Expression => {
    return { kind: 'Unary', operator: UnaryOp.PointFrom, operand: this.visitExprTerm(ctx.expressionTerm())! };
  };

  override visitTypeExtentExpressionTerm = (ctx: TypeExtentExpressionTermContext): Expression => {
    const text = ctx.getText();
    const extent = text.startsWith('maximum') ? 'maximum' : 'minimum';
    const nts = ctx.namedTypeSpecifier();
    let nt: NamedType = { specKind: 'NamedType', namespace: '', name: '' };
    if (nts) {
      nt = nts.accept(this) as NamedType;
    }
    return { kind: 'TypeExtent', extent, type: nt };
  };

  override visitConversionExpressionTerm = (ctx: ConversionExpressionTermContext): Expression => {
    const expr = this.visitExpr(ctx.expression())!;
    const ts = ctx.typeSpecifier();
    const u = ctx.unit();
    return {
      kind: 'Convert',
      operand: expr,
      toType: ts ? this.visitTypeSpec(ts) : null,
      toUnit: u ? u.getText() : '',
    };
  };

  override visitPowerExpressionTerm = (ctx: PowerExpressionTermContext): Expression | null => {
    const terms = ctx.expressionTerm();
    if (terms.length < 2) return null;
    return {
      kind: 'Binary',
      operator: BinaryOp.Power,
      left: this.visitExprTerm(terms[0])!,
      right: this.visitExprTerm(terms[1])!,
    };
  };

  override visitMultiplicationExpressionTerm = (ctx: MultiplicationExpressionTermContext): Expression | null => {
    const terms = ctx.expressionTerm();
    if (terms.length < 2) return null;
    let op = BinaryOp.Multiply;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if ('symbol' in (child as object)) {
        const tn = child as TerminalNode;
        switch (tn.getText()) {
          case '*':
            op = BinaryOp.Multiply;
            break;
          case '/':
            op = BinaryOp.Divide;
            break;
          case 'div':
            op = BinaryOp.Div;
            break;
          case 'mod':
            op = BinaryOp.Mod;
            break;
        }
      }
    }
    return {
      kind: 'Binary',
      operator: op,
      left: this.visitExprTerm(terms[0])!,
      right: this.visitExprTerm(terms[1])!,
    };
  };

  override visitAdditionExpressionTerm = (ctx: AdditionExpressionTermContext): Expression | null => {
    const terms = ctx.expressionTerm();
    if (terms.length < 2) return null;
    let op = BinaryOp.Add;
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if ('symbol' in (child as object)) {
        const tn = child as TerminalNode;
        switch (tn.getText()) {
          case '+':
            op = BinaryOp.Add;
            break;
          case '-':
            op = BinaryOp.Subtract;
            break;
          case '&':
            op = BinaryOp.Concatenate;
            break;
        }
      }
    }
    return {
      kind: 'Binary',
      operator: op,
      left: this.visitExprTerm(terms[0])!,
      right: this.visitExprTerm(terms[1])!,
    };
  };

  override visitIfThenElseExpressionTerm = (ctx: IfThenElseExpressionTermContext): Expression | null => {
    const exprs = ctx.expression();
    if (exprs.length < 3) return null;
    return {
      kind: 'IfThenElse',
      condition: this.visitExpr(exprs[0])!,
      then: this.visitExpr(exprs[1])!,
      else: this.visitExpr(exprs[2])!,
    };
  };

  override visitCaseExpressionTerm = (ctx: CaseExpressionTermContext): Expression => {
    const exprs = ctx.expression();
    const items = ctx.caseExpressionItem();
    const caseItems: CaseItem[] = [];
    for (const item of items) {
      const ci = item.accept(this) as CaseItem | null;
      if (ci) caseItems.push(ci);
    }
    // Determine if there's a comparand: expressions = items*2 (when+then) + 1 (else) [+ 1 comparand]
    let comparand: Expression | null = null;
    const expectedWithoutComparand = 1; // just the else
    if (exprs.length > expectedWithoutComparand) {
      // First expression might be comparand if it's not the else
      // Actually: if more expressions than just 'else', the first expression is comparand
      // The else is always the last expression in ctx.expression()
      if (exprs.length > 1) {
        comparand = this.visitExpr(exprs[0]);
      }
    }
    // Last expression is always the 'else'
    const elseExpr = exprs.length > 0 ? this.visitExpr(exprs[exprs.length - 1])! : null!;

    return {
      kind: 'Case',
      comparand,
      items: caseItems,
      else: elseExpr,
    };
  };

  override visitCaseExpressionItem = (ctx: CaseExpressionItemContext): CaseItem | null => {
    const exprs = ctx.expression();
    if (exprs.length < 2) return null;
    return {
      when: this.visitExpr(exprs[0])!,
      then: this.visitExpr(exprs[1])!,
    };
  };

  override visitAggregateExpressionTerm = (ctx: AggregateExpressionTermContext): Expression => {
    const expr = this.visitExpr(ctx.expression())!;
    const text = ctx.getText();
    const op = text.startsWith('distinct') ? UnaryOp.Distinct : UnaryOp.Flatten;
    return { kind: 'Unary', operator: op, operand: expr };
  };

  override visitSetAggregateExpressionTerm = (ctx: SetAggregateExpressionTermContext): Expression => {
    const exprs = ctx.expression();
    const text = ctx.getText();

    // per can be either an expression or a dateTimePrecision keyword (e.g., 'per day', 'per minute')
    let per: Expression | null = exprs.length > 1 ? this.visitExpr(exprs[1]) : null;
    if (per === null) {
      const dtp = ctx.dateTimePrecision();
      if (dtp) {
        // Convert dateTimePrecision keyword to a Quantity literal: 1 <unit>
        const unit = dtp.getText(); // e.g., 'day', 'minute', 'hour'
        per = {
          kind: 'Literal',
          valueType: LiteralType.Quantity,
          value: `1 ${unit}`,
        };
      }
    }

    return {
      kind: 'SetAggregate',
      setKind: text.startsWith('expand') ? 'expand' : 'collapse',
      operand: exprs.length > 0 ? this.visitExpr(exprs[0])! : null!,
      per,
    };
  };

  // =========================================================================
  // Terms
  // =========================================================================

  override visitInvocationTerm = (ctx: InvocationTermContext): unknown => {
    return ctx.invocation().accept(this);
  };

  override visitLiteralTerm = (ctx: LiteralTermContext): unknown => {
    return ctx.literal().accept(this);
  };

  override visitExternalConstantTerm = (ctx: ExternalConstantTermContext): unknown => {
    return ctx.externalConstant().accept(this);
  };

  override visitIntervalSelectorTerm = (ctx: IntervalSelectorTermContext): unknown => {
    return ctx.intervalSelector().accept(this);
  };

  override visitTupleSelectorTerm = (ctx: TupleSelectorTermContext): unknown => {
    return ctx.tupleSelector().accept(this);
  };

  override visitInstanceSelectorTerm = (ctx: InstanceSelectorTermContext): unknown => {
    return ctx.instanceSelector().accept(this);
  };

  override visitListSelectorTerm = (ctx: ListSelectorTermContext): unknown => {
    return ctx.listSelector().accept(this);
  };

  override visitCodeSelectorTerm = (ctx: CodeSelectorTermContext): unknown => {
    return ctx.codeSelector().accept(this);
  };

  override visitConceptSelectorTerm = (ctx: ConceptSelectorTermContext): unknown => {
    return ctx.conceptSelector().accept(this);
  };

  override visitParenthesizedTerm = (ctx: ParenthesizedTermContext): Expression | null => {
    return this.visitExpr(ctx.expression());
  };

  // =========================================================================
  // Invocations
  // =========================================================================

  override visitMemberInvocation = (ctx: MemberInvocationContext): Expression => {
    const name = referentialIdentifierText(ctx.referentialIdentifier());
    return { kind: 'IdentifierRef', library: '', name };
  };

  override visitFunctionInvocation = (ctx: FunctionInvocationContext): unknown => {
    // 'function' is a reserved word; access via bracket notation
    return (ctx as any)['function']().accept(this);
  };

  override visitThisInvocation = (_ctx: ThisInvocationContext): Expression => {
    return { kind: 'This' };
  };

  override visitIndexInvocation = (_ctx: IndexInvocationContext): Expression => {
    return { kind: 'IndexRef' };
  };

  override visitTotalInvocation = (_ctx: TotalInvocationContext): Expression => {
    return { kind: 'Total' };
  };

  override visitFunction = (ctx: FunctionContext): Expression => {
    const operands: Expression[] = [];
    const pl = ctx.paramList();
    if (pl) {
      for (const expr of pl.expression()) {
        const e = this.visitExpr(expr);
        if (e) operands.push(e);
      }
    }
    return {
      kind: 'FunctionCall',
      source: null,
      name: referentialIdentifierText(ctx.referentialIdentifier()),
      library: '',
      operands,
    };
  };

  override visitQualifiedMemberInvocation = (ctx: QualifiedMemberInvocationContext): Expression => {
    return {
      kind: 'MemberAccess',
      source: null! as Expression,
      member: referentialIdentifierText(ctx.referentialIdentifier()),
    };
  };

  override visitQualifiedFunctionInvocation = (ctx: QualifiedFunctionInvocationContext): unknown => {
    return ctx.qualifiedFunction().accept(this);
  };

  override visitQualifiedFunction = (ctx: QualifiedFunctionContext): Expression => {
    const operands: Expression[] = [];
    const pl = ctx.paramList();
    if (pl) {
      for (const expr of pl.expression()) {
        const e = this.visitExpr(expr);
        if (e) operands.push(e);
      }
    }
    return {
      kind: 'FunctionCall',
      source: null,
      name: ctx.identifierOrFunctionIdentifier().getText(),
      library: '',
      operands,
    };
  };

  // =========================================================================
  // Literals
  // =========================================================================

  override visitBooleanLiteral = (ctx: BooleanLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.Boolean, value: ctx.getText() };
  };

  override visitNullLiteral = (_ctx: NullLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.Null, value: 'null' };
  };

  override visitStringLiteral = (ctx: StringLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.String, value: unquoteString(ctx.getText()) };
  };

  override visitNumberLiteral = (ctx: NumberLiteralContext): Expression => {
    const text = ctx.getText();
    return {
      kind: 'Literal',
      valueType: text.includes('.') ? LiteralType.Decimal : LiteralType.Integer,
      value: text,
    };
  };

  override visitLongNumberLiteral = (ctx: LongNumberLiteralContext): Expression => {
    const text = ctx.getText().replace(/L$/, '');
    return { kind: 'Literal', valueType: LiteralType.Long, value: text };
  };

  override visitDateTimeLiteral = (ctx: DateTimeLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.DateTime, value: ctx.getText().replace(/^@/, '') };
  };

  override visitDateLiteral = (ctx: DateLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.Date, value: ctx.getText().replace(/^@/, '') };
  };

  override visitTimeLiteral = (ctx: TimeLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.Time, value: ctx.getText().replace(/^@T/, '') };
  };

  override visitQuantityLiteral = (ctx: QuantityLiteralContext): Expression => {
    const qctx = ctx.quantity();
    const numStr = qctx.NUMBER().getText();
    const unitCtx = qctx.unit();
    let unit = '';
    if (unitCtx) {
      const s = unitCtx.STRING();
      if (s) {
        // STRING token includes surrounding quotes — strip them
        const raw = s.getText();
        unit = raw.replace(/^'|'$/g, '');
      } else {
        unit = unitCtx.getText();
      }
    }
    // Encode as "value unit" separated by space for the evaluator
    const value = unit ? `${numStr} ${unit}` : numStr;
    return { kind: 'Literal', valueType: LiteralType.Quantity, value };
  };

  override visitRatioLiteral = (ctx: RatioLiteralContext): Expression => {
    return { kind: 'Literal', valueType: LiteralType.Ratio, value: ctx.getText() };
  };

  // =========================================================================
  // External Constants
  // =========================================================================

  override visitExternalConstant = (ctx: ExternalConstantContext): Expression => {
    let name = '';
    const id = ctx.identifier();
    if (id) {
      name = identifierText(id);
    } else {
      const kw = ctx.keywordIdentifier();
      if (kw) {
        name = kw.getText();
      } else {
        const s = ctx.STRING();
        if (s) name = unquoteString(s.getText());
      }
    }
    return { kind: 'ExternalConstant', name };
  };

  // =========================================================================
  // Constructors
  // =========================================================================

  override visitIntervalSelector = (ctx: IntervalSelectorContext): Expression => {
    const exprs = ctx.expression();
    const text = ctx.getText();
    return {
      kind: 'Interval',
      low: exprs.length >= 1 ? this.visitExpr(exprs[0])! : null!,
      high: exprs.length >= 2 ? this.visitExpr(exprs[1])! : null!,
      lowClosed: text.includes('Interval['),
      highClosed: text.trimEnd().endsWith(']'),
    };
  };

  override visitTupleSelector = (ctx: TupleSelectorContext): Expression => {
    const elements: TupleElement[] = [];
    for (const tes of ctx.tupleElementSelector()) {
      const e = tes.accept(this) as TupleElement | null;
      if (e) elements.push(e);
    }
    return { kind: 'Tuple', elements };
  };

  override visitTupleElementSelector = (ctx: TupleElementSelectorContext): TupleElement => {
    return {
      name: referentialIdentifierText(ctx.referentialIdentifier()),
      expression: this.visitExpr(ctx.expression())!,
    };
  };

  override visitInstanceSelector = (ctx: InstanceSelectorContext): Expression => {
    const nts = ctx.namedTypeSpecifier();
    let type: NamedType = { specKind: 'NamedType', namespace: '', name: '' };
    if (nts) type = nts.accept(this) as NamedType;
    const elements: TupleElement[] = [];
    for (const ies of ctx.instanceElementSelector()) {
      const e = ies.accept(this) as TupleElement | null;
      if (e) elements.push(e);
    }
    return { kind: 'Instance', type, elements };
  };

  override visitInstanceElementSelector = (ctx: InstanceElementSelectorContext): TupleElement => {
    return {
      name: referentialIdentifierText(ctx.referentialIdentifier()),
      expression: this.visitExpr(ctx.expression())!,
    };
  };

  override visitListSelector = (ctx: ListSelectorContext): Expression => {
    const elements: Expression[] = [];
    for (const expr of ctx.expression()) {
      const e = this.visitExpr(expr);
      if (e) elements.push(e);
    }
    const ts = ctx.typeSpecifier();
    return {
      kind: 'List',
      typeSpec: ts ? this.visitTypeSpec(ts) : null,
      elements,
    };
  };

  override visitCodeSelector = (ctx: CodeSelectorContext): Expression => {
    const dc = ctx.displayClause();
    return {
      kind: 'Code',
      code: unquoteString(ctx.STRING()!.getText()),
      system: ctx.codesystemIdentifier().getText(),
      display: dc ? unquoteString(dc.STRING()!.getText()) : '',
    };
  };

  override visitConceptSelector = (ctx: ConceptSelectorContext): Expression => {
    const codes: Expression[] = [];
    for (const cs of ctx.codeSelector()) {
      const c = cs.accept(this);
      if (c) codes.push(c as Expression);
    }
    const dc = ctx.displayClause();
    return {
      kind: 'Concept',
      codes: codes as any,
      display: dc ? unquoteString(dc.STRING()!.getText()) : '',
    };
  };

  // =========================================================================
  // Retrieve
  // =========================================================================

  override visitRetrieve = (ctx: RetrieveContext): Expression => {
    const nts = ctx.namedTypeSpecifier();
    const resourceType = nts
      ? (nts.accept(this) as NamedType)
      : { specKind: 'NamedType' as const, namespace: '', name: '' };

    const cp = ctx.codePath();
    const cc = ctx.codeComparator();

    let codes: Expression | null = null;
    const t = ctx.terminology();
    if (t) {
      const qie = t.qualifiedIdentifierExpression();
      if (qie) {
        codes = { kind: 'IdentifierRef', library: '', name: qie.getText() };
      } else {
        const expr = t.expression();
        if (expr) codes = this.visitExpr(expr);
      }
    }

    let context: Expression | null = null;
    const ci = ctx.contextIdentifier();
    if (ci) {
      const qie = ci.qualifiedIdentifierExpression();
      if (qie) {
        context = { kind: 'IdentifierRef', library: '', name: qie.getText() };
      }
    }

    return {
      kind: 'Retrieve',
      resourceType,
      codePath: cp ? cp.getText() : '',
      codeComparator: cc ? cc.getText() : '',
      codes,
      context,
      datePath: '',
      dateRange: null,
    };
  };

  // =========================================================================
  // Query
  // =========================================================================

  override visitQuery = (ctx: QueryContext): Expression => {
    const sources: AliasedSource[] = [];
    const sc = ctx.sourceClause();
    if (sc) {
      for (const aqs of sc.aliasedQuerySource()) {
        const s = aqs.accept(this) as AliasedSource | null;
        if (s) sources.push(s);
      }
    }

    const letItems: LetClauseNode[] = [];
    const lc = ctx.letClause();
    if (lc) {
      for (const lci of lc.letClauseItem()) {
        const l = lci.accept(this) as LetClauseNode | null;
        if (l) letItems.push(l);
      }
    }

    const withItems: WithClauseNode[] = [];
    const withoutItems: WithoutClauseNode[] = [];
    for (const qic of ctx.queryInclusionClause()) {
      const wc = qic.withClause();
      if (wc) {
        const w = wc.accept(this) as WithClauseNode | null;
        if (w) withItems.push(w);
      }
      const woc = qic.withoutClause();
      if (woc) {
        const w = woc.accept(this) as WithoutClauseNode | null;
        if (w) withoutItems.push(w);
      }
    }

    const wh = ctx.whereClause();
    const where = wh ? this.visitExpr(wh.expression()) : null;

    const rc = ctx.returnClause();
    const returnClause = rc ? (rc.accept(this) as ReturnClauseNode) : null;

    const ac = ctx.aggregateClause();
    const aggregate = ac ? (ac.accept(this) as AggregateClauseNode) : null;

    const sortC = ctx.sortClause();
    const sort = sortC ? (sortC.accept(this) as SortClauseNode) : null;

    return {
      kind: 'Query',
      sources,
      let: letItems,
      with: withItems,
      without: withoutItems,
      where,
      return: returnClause,
      aggregate,
      sort,
    };
  };

  override visitAliasedQuerySource = (ctx: AliasedQuerySourceContext): AliasedSource => {
    const qs = ctx.querySource();
    let source: Expression;
    const r = qs.retrieve();
    if (r) {
      source = r.accept(this) as Expression;
    } else {
      const qie = qs.qualifiedIdentifierExpression();
      if (qie) {
        source = { kind: 'IdentifierRef', library: '', name: qie.getText() };
      } else {
        source = this.visitExpr(qs.expression())!;
      }
    }
    const a = ctx.alias();
    return {
      source,
      alias: a ? identifierText(a.identifier()) : '',
    };
  };

  override visitLetClauseItem = (ctx: LetClauseItemContext): LetClauseNode => {
    return {
      identifier: identifierText(ctx.identifier()),
      expression: this.visitExpr(ctx.expression())!,
    };
  };

  override visitWithClause = (ctx: WithClauseContext): WithClauseNode => {
    const aqs = ctx.aliasedQuerySource();
    const source = aqs.accept(this) as AliasedSource;
    return {
      source,
      condition: this.visitExpr(ctx.expression())!,
    };
  };

  override visitWithoutClause = (ctx: WithoutClauseContext): WithoutClauseNode => {
    const aqs = ctx.aliasedQuerySource();
    const source = aqs.accept(this) as AliasedSource;
    return {
      source,
      condition: this.visitExpr(ctx.expression())!,
    };
  };

  override visitReturnClause = (ctx: ReturnClauseContext): ReturnClauseNode => {
    const text = ctx.getText();
    return {
      distinct: text.includes('distinct'),
      all: text.includes('all'),
      expression: this.visitExpr(ctx.expression())!,
    };
  };

  override visitAggregateClause = (ctx: AggregateClauseContext): AggregateClauseNode => {
    const text = ctx.getText();
    const startC = ctx.startingClause();
    let starting: Expression | null = null;
    if (startC) {
      const expr = startC.expression();
      if (expr) {
        starting = this.visitExpr(expr);
      } else {
        const sl = startC.simpleLiteral();
        if (sl) {
          const slText = sl.getText();
          // Detect if it's a number or string literal
          if (slText.startsWith("'") && slText.endsWith("'")) {
            starting = { kind: 'Literal', valueType: LiteralType.String, value: slText.slice(1, -1) };
          } else if (/^-?\d+$/.test(slText)) {
            starting = { kind: 'Literal', valueType: LiteralType.Integer, value: slText };
          } else if (/^-?[\d.]+$/.test(slText)) {
            starting = { kind: 'Literal', valueType: LiteralType.Decimal, value: slText };
          } else {
            starting = { kind: 'Literal', valueType: LiteralType.String, value: slText };
          }
        }
      }
    }
    return {
      identifier: identifierText(ctx.identifier()),
      distinct: text.includes('distinct'),
      all: text.includes('all'),
      starting,
      expression: this.visitExpr(ctx.expression())!,
    };
  };

  override visitSortClause = (ctx: SortClauseContext): SortClauseNode => {
    const sd = ctx.sortDirection();
    const byItems: SortByItemNode[] = [];
    for (const sbi of ctx.sortByItem()) {
      const item = sbi.accept(this) as SortByItemNode | null;
      if (item) byItems.push(item);
    }
    return {
      byItems,
      direction: sd && sd.getText().includes('desc') ? SortDirection.Desc : SortDirection.Asc,
    };
  };

  override visitSortByItem = (ctx: SortByItemContext): SortByItemNode => {
    const sd = ctx.sortDirection();
    return {
      expression: this.visitExprTerm(ctx.expressionTerm())!,
      direction: sd && sd.getText().includes('desc') ? SortDirection.Desc : SortDirection.Asc,
    };
  };
}
