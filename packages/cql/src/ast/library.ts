/**
 * Library root and definition types for CQL AST.
 *
 * A Library is the top-level node representing a complete CQL library,
 * including all header definitions (usings, includes, code systems, etc.)
 * and body definitions (named expressions, functions).
 */

import type { AccessLevel, Expression, TypeSpecifier } from './nodes.js';

// ---------------------------------------------------------------------------
// Library root
// ---------------------------------------------------------------------------

/** Root AST node representing a complete CQL library. */
export interface Library {
  readonly identifier: LibraryIdentifier | null;
  readonly usings: UsingDef[];
  readonly includes: IncludeDef[];
  readonly codeSystems: CodeSystemDef[];
  readonly valueSets: ValueSetDef[];
  readonly codes: CodeDef[];
  readonly concepts: ConceptDef[];
  readonly parameters: ParameterDef[];
  readonly contexts: ContextDef[];
  readonly statements: ExpressionDef[];
  readonly functions: FunctionDef[];
}

/** Library name and optional version. */
export interface LibraryIdentifier {
  readonly name: string;
  readonly version: string;
}

// ---------------------------------------------------------------------------
// Header definitions
// ---------------------------------------------------------------------------

/** 'using' declaration (e.g. using FHIR version '4.0.1'). */
export interface UsingDef {
  readonly name: string;
  readonly version: string;
  readonly alias: string;
}

/** 'include' declaration for referencing another library. */
export interface IncludeDef {
  readonly name: string;
  readonly version: string;
  readonly alias: string;
}

/** 'codesystem' definition. */
export interface CodeSystemDef {
  readonly name: string;
  readonly id: string;
  readonly version: string;
  readonly accessLevel: AccessLevel;
}

/** 'valueset' definition. */
export interface ValueSetDef {
  readonly name: string;
  readonly id: string;
  readonly version: string;
  readonly codeSystems: string[];
  readonly accessLevel: AccessLevel;
}

/** 'code' definition. */
export interface CodeDef {
  readonly name: string;
  readonly id: string;
  readonly system: string;
  readonly display: string;
  readonly accessLevel: AccessLevel;
}

/** 'concept' definition. */
export interface ConceptDef {
  readonly name: string;
  readonly codes: string[];
  readonly display: string;
  readonly accessLevel: AccessLevel;
}

/** 'parameter' definition. */
export interface ParameterDef {
  readonly name: string;
  readonly type: TypeSpecifier | null;
  readonly default: Expression | null;
  readonly accessLevel: AccessLevel;
}

/** 'context' definition (e.g. context Patient). */
export interface ContextDef {
  readonly model: string;
  readonly name: string;
}

// ---------------------------------------------------------------------------
// Body definitions
// ---------------------------------------------------------------------------

/** 'define' statement (named expression). */
export interface ExpressionDef {
  readonly name: string;
  readonly expression: Expression;
  readonly accessLevel: AccessLevel;
  readonly context: string;
}

/** 'define function' statement. */
export interface FunctionDef {
  readonly name: string;
  readonly operands: OperandDef[];
  readonly returnType: TypeSpecifier | null;
  readonly body: Expression | null;
  readonly external: boolean;
  readonly fluent: boolean;
  readonly accessLevel: AccessLevel;
}

/** Function operand (parameter name + type). */
export interface OperandDef {
  readonly name: string;
  readonly type: TypeSpecifier;
}
