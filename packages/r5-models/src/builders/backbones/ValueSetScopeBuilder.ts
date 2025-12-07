import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetScope } from '../../models/backbones/ValueSetScope.js';
import type {
  IValueSetScope,
} from '@fhir-toolkit/r5-types';

/**
 * ValueSetScopeBuilder - Fluent builder for ValueSetScope backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetScope = new ValueSetScopeBuilder()
 *   .setInclusionCriteria(value)
 *   .build();
 */
export class ValueSetScopeBuilder extends BackboneElementBuilder<ValueSetScope, IValueSetScope> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set inclusionCriteria
   * Criteria describing which concepts or codes should be included and why
   */
  setInclusionCriteria(inclusionCriteria: string): this {
    this.data.inclusionCriteria = inclusionCriteria;
    return this;
  }

  /**
   * Set exclusionCriteria
   * Criteria describing which concepts or codes should be excluded and why
   */
  setExclusionCriteria(exclusionCriteria: string): this {
    this.data.exclusionCriteria = exclusionCriteria;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetScope instance
   */
  build(): ValueSetScope {
    return new ValueSetScope(this.data);
  }

  /**
   * Build and validate the ValueSetScope instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetScope> {
    const valueSetScope = this.build();
    await valueSetScope.validateOrThrow();
    return valueSetScope;
  }
}
