import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CodeSystemFilter } from '../../models/backbones/CodeSystemFilter.js';
import type {
  FilterOperatorType,
  ICodeSystemFilter,
} from '@fhir-toolkit/r4-types';

/**
 * CodeSystemFilterBuilder - Fluent builder for CodeSystemFilter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const codeSystemFilter = new CodeSystemFilterBuilder()
 *   .setCode(value)
 *   .addOperator({ ... })
 *   .build();
 */
export class CodeSystemFilterBuilder extends BackboneElementBuilder<CodeSystemFilter, ICodeSystemFilter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code that identifies the filter
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * How or why the filter is used
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set value
   * What to use for the value
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add operator
   * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
   */
  addOperator(operator: FilterOperatorType): this {
    return this.addToArray('operator', operator);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeSystemFilter instance
   */
  build(): CodeSystemFilter {
    return new CodeSystemFilter(this.data);
  }

  /**
   * Build and validate the CodeSystemFilter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeSystemFilter> {
    const codeSystemFilter = this.build();
    await codeSystemFilter.validateOrThrow();
    return codeSystemFilter;
  }
}
