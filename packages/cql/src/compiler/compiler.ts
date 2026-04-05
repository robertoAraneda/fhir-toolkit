/**
 * Public entry point for the CQL compiler (CQL text -> AST).
 */

import { CharStream, CommonTokenStream, type ANTLRErrorListener } from 'antlr4ng';
import { cqlLexer } from '../grammar/generated/cqlLexer.js';
import { cqlParser } from '../grammar/generated/cqlParser.js';
import { CqlBuilder } from './builder.js';
import { CqlSyntaxError } from '../errors.js';
import type { Library } from '../ast/library.js';

/** Error listener that throws CqlSyntaxError on the first syntax error. */
class ThrowingErrorListener implements ANTLRErrorListener {
  syntaxError(
    _recognizer: unknown,
    _offendingSymbol: unknown,
    line: number,
    charPositionInLine: number,
    msg: string,
  ): void {
    throw new CqlSyntaxError(msg, line, charPositionInLine);
  }

  reportAmbiguity(): void {
    /* intentionally empty */
  }
  reportAttemptingFullContext(): void {
    /* intentionally empty */
  }
  reportContextSensitivity(): void {
    /* intentionally empty */
  }
}

/**
 * Parse CQL source text and return a Library AST node.
 *
 * @throws CqlSyntaxError when the input has syntax errors.
 */
export function compile(source: string): Library {
  const input = CharStream.fromString(source);
  const lexer = new cqlLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new cqlParser(tokens);

  // Replace the default error listener with one that throws.
  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());

  const tree = parser.library();
  const builder = new CqlBuilder();
  return tree.accept(builder) as Library;
}
