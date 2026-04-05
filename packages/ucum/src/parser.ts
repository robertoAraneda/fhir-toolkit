import type { Component, Term, Symbol as UcumSymbol } from './ast.js';
import { Operator } from './ast.js';
import { Lexer, TokenType } from './lexer.js';
import type { Model, Prefix } from './model.js';

/**
 * Recursive-descent parser for UCUM expressions. Converts a UCUM code string
 * into an AST of Term/Symbol/Factor nodes.
 *
 * Port of Go's parser (which itself is a port of Java's ExpressionParser.java).
 */
export class Parser {
  private readonly model: Model;
  /** Prefixes sorted longest-code-first for deterministic longest-match. */
  private readonly sortedPrefixes: Prefix[];

  constructor(model: Model) {
    this.model = model;
    this.sortedPrefixes = [...model.prefixes].sort((a, b) => b.code.length - a.code.length);
  }

  parse(code: string): Term {
    if (code === '') {
      throw new Error('UCUM expression is empty');
    }

    const lex = new Lexer(code);
    const t = this.parseTerm(lex);

    if (!lex.finished()) {
      throw new Error(`parse "${code}": unexpected token "${lex.getToken()}" at end of expression`);
    }

    return t;
  }

  private parseCompOrAnnotation(lex: Lexer): Component {
    if (lex.getType() === TokenType.Annotation) {
      lex.consume();
      return { kind: 'factor', value: 1 };
    }
    const comp = this.parseComp(lex);
    // Consume optional trailing annotation
    if (lex.getType() === TokenType.Annotation) {
      lex.consume();
    }
    return comp;
  }

  /**
   * parseTerm parses:
   *   term = "/" compOrAnnotation [ ("/" | ".") compOrAnnotation ]*
   *        | compOrAnnotation [ ("/" | ".") compOrAnnotation ]*
   * Operators are left-associative: a/b/c = (a/b)/c.
   */
  private parseTerm(lex: Lexer): Term {
    let result: Term;

    // Leading "/" -> implicit factor(1) divided by the next comp
    if (lex.getType() === TokenType.Solidus) {
      lex.consume();
      const right = this.parseCompOrAnnotation(lex);
      result = {
        kind: 'term',
        comp: { kind: 'factor', value: 1 },
        op: Operator.Division,
        term: { kind: 'term', comp: right, op: Operator.Multiplication, term: null },
      };
    } else {
      const comp = this.parseCompOrAnnotation(lex);
      result = { kind: 'term', comp, op: Operator.Multiplication, term: null };
    }

    // Iteratively parse operators for left-associativity
    while (lex.getType() === TokenType.Solidus || lex.getType() === TokenType.Period) {
      const op =
        lex.getType() === TokenType.Solidus ? Operator.Division : Operator.Multiplication;
      lex.consume();
      const right = this.parseCompOrAnnotation(lex);
      result = {
        kind: 'term',
        comp: result,
        op,
        term: { kind: 'term', comp: right, op: Operator.Multiplication, term: null },
      };
    }

    return result;
  }

  private parseComp(lex: Lexer): Component {
    switch (lex.getType()) {
      case TokenType.Number: {
        const n = lex.getTokenAsInt();
        lex.consume();
        return { kind: 'factor', value: n };
      }

      case TokenType.Symbol:
        return this.parseSymbol(lex);

      case TokenType.Open: {
        lex.consume();
        const t = this.parseTerm(lex);
        if (lex.getType() !== TokenType.Close) {
          throw new Error(`expected ')' but got ${lex.getType()}`);
        }
        lex.consume();
        return t;
      }

      case TokenType.None:
        throw new Error('unexpected end of expression');

      default:
        throw new Error(
          `unexpected token "${lex.getToken()}" (${lex.getType()})`,
        );
    }
  }

  private parseSymbol(lex: Lexer): UcumSymbol {
    const tok = lex.getToken();
    lex.consume();

    // Check if next token is a bracket-symbol
    let bracket = '';
    if (lex.getType() === TokenType.Symbol && lex.getToken().length > 0 && lex.getToken()[0] === '[') {
      bracket = lex.getToken();
    }

    // Try prefix + metric unit resolution (longest prefix first)
    const withPrefix = this.resolveWithPrefix(lex, tok, bracket);
    if (withPrefix) return withPrefix;

    // Exact prefix + bracket unit
    const exactPfx = this.resolveExactPrefixBracket(lex, tok, bracket);
    if (exactPfx) return exactPfx;

    // Full symbol with bracket suffix
    const fullBracket = this.resolveFullWithBracket(lex, tok, bracket);
    if (fullBracket) return fullBracket;

    // No prefix match; look up the full symbol as a unit
    const u = this.model.getUnit(tok);
    if (u) {
      const exp = this.parseExponent(lex);
      return { kind: 'symbol', unit: u, prefix: null, exponent: exp };
    }

    throw new Error(`unknown unit "${tok}"`);
  }

  private resolveWithPrefix(lex: Lexer, tok: string, bracket: string): UcumSymbol | null {
    for (const pfx of this.sortedPrefixes) {
      if (!tok.startsWith(pfx.code) || pfx.code.length >= tok.length) {
        continue;
      }
      const remainder = tok.slice(pfx.code.length);

      // Try with bracket suffix first
      if (bracket) {
        const u = this.model.getUnit(remainder + bracket);
        if (u && (u.isMetric || u.isBase || (remainder + bracket).startsWith('['))) {
          lex.consume(); // consume bracket token
          const exp = this.parseExponent(lex);
          return { kind: 'symbol', unit: u, prefix: pfx, exponent: exp };
        }
      }

      const u = this.model.getUnit(remainder);
      if (u && (u.isMetric || u.isBase)) {
        const exp = this.parseExponent(lex);
        return { kind: 'symbol', unit: u, prefix: pfx, exponent: exp };
      }
    }
    return null;
  }

  private resolveExactPrefixBracket(lex: Lexer, tok: string, bracket: string): UcumSymbol | null {
    if (!bracket) return null;
    for (const pfx of this.sortedPrefixes) {
      if (tok !== pfx.code) continue;
      const u = this.model.getUnit(bracket);
      if (u && (u.isMetric || u.isBase || bracket.startsWith('['))) {
        lex.consume(); // consume bracket token
        const exp = this.parseExponent(lex);
        return { kind: 'symbol', unit: u, prefix: pfx, exponent: exp };
      }
    }
    return null;
  }

  private resolveFullWithBracket(lex: Lexer, tok: string, bracket: string): UcumSymbol | null {
    if (!bracket) return null;
    const u = this.model.getUnit(tok + bracket);
    if (!u) return null;
    lex.consume(); // consume bracket token
    const exp = this.parseExponent(lex);
    return { kind: 'symbol', unit: u, prefix: null, exponent: exp };
  }

  private parseExponent(lex: Lexer): number {
    if (lex.getType() === TokenType.Number) {
      const n = lex.getTokenAsInt();
      lex.consume();
      return n;
    }
    return 1;
  }
}
