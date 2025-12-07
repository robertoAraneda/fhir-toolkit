import { ElementBuilder } from '../base/ElementBuilder.js';
import { Expression } from '../../models/datatypes/Expression.js';
import type {
  IExpression,
} from '@fhir-toolkit/r4b-types';

/**
 * ExpressionBuilder - Fluent builder for Expression datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const expression = new ExpressionBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class ExpressionBuilder extends ElementBuilder<Expression, IExpression> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Natural language description of the condition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set name
   * Short name assigned to expression for reuse
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set language
   * text/cql | text/fhirpath | application/x-fhir-query | text/cql-identifier | text/cql-expression | etc.
   */
  setLanguage(language: string): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set expression
   * Expression in specified language
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  /**
   * Set reference
   * Where the expression is found
   */
  setReference(reference: string): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Expression instance
   */
  build(): Expression {
    return new Expression(this.data);
  }

  /**
   * Build and validate the Expression instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Expression> {
    const expression = this.build();
    await expression.validateOrThrow();
    return expression;
  }
}
