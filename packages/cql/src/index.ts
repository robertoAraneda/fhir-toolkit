export const VERSION = '0.1.0';

// Engine
export { CqlEngine } from './engine.js';
export type { CqlEngineOptions, UcumServiceLike } from './engine.js';

// Types
export type { CqlValue, CqlComparable, CqlType } from './types/value.js';
export {
  CqlInteger,
  CqlDecimal,
  CqlString,
  CqlBoolean,
  CqlDate,
  CqlDateTime,
  CqlTime,
  CqlQuantity,
  CqlLong,
} from './types/primitives.js';
export {
  CqlInterval,
  CqlList,
  CqlTuple,
  CqlCode,
  CqlConcept,
  CqlRatio,
} from './types/complex.js';

// Errors
export {
  CqlSyntaxError,
  CqlEvalError,
  CqlTimeoutError,
  CqlTooCostlyError,
} from './errors.js';

// Compiler
export { compile } from './compiler/compiler.js';

// ELM
export { importElmLibrary } from './elm/importer.js';
export { translateLibrary } from './elm/translator.js';

// Providers
export type { DataProvider } from './providers/data.js';
export type { TerminologyProvider } from './providers/terminology.js';
export { InMemoryDataProvider } from './providers/in-memory-data.js';

// Model
export type { ModelInfo } from './model/model-info.js';
export { resolveModelInfo } from './model/index.js';

// AST (for advanced users)
export type { Library } from './ast/library.js';
export type { Expression } from './ast/nodes.js';
