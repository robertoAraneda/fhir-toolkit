import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetComposeIncludeFilter } from '../../models/backbones/ValueSetComposeIncludeFilter.js';
import type {
  FilterOperatorType,
  IValueSetComposeIncludeFilter,
} from '@fhir-toolkit/r5-types';

/**
 * ValueSetComposeIncludeFilterBuilder - Fluent builder for ValueSetComposeIncludeFilter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetComposeIncludeFilter = new ValueSetComposeIncludeFilterBuilder()
 *   .setProperty(value)
 *   .build();
 */
export class ValueSetComposeIncludeFilterBuilder extends BackboneElementBuilder<ValueSetComposeIncludeFilter, IValueSetComposeIncludeFilter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set property
   * A property/filter defined by the code system
   */
  setProperty(property: string): this {
    this.data.property = property;
    return this;
  }

  /**
   * Set op
   * = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists
   */
  setOp(op: FilterOperatorType): this {
    this.data.op = op;
    return this;
  }

  /**
   * Set value
   * Code from the system, or regex criteria, or boolean value for exists
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetComposeIncludeFilter instance
   */
  build(): ValueSetComposeIncludeFilter {
    return new ValueSetComposeIncludeFilter(this.data);
  }

  /**
   * Build and validate the ValueSetComposeIncludeFilter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetComposeIncludeFilter> {
    const valueSetComposeIncludeFilter = this.build();
    await valueSetComposeIncludeFilter.validateOrThrow();
    return valueSetComposeIncludeFilter;
  }
}
