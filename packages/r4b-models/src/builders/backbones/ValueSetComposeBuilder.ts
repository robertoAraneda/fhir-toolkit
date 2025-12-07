import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetCompose } from '../../models/backbones/ValueSetCompose.js';
import type {
  IValueSetCompose,
  IValueSetComposeInclude,
} from '@fhir-toolkit/r4b-types';

/**
 * ValueSetComposeBuilder - Fluent builder for ValueSetCompose backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetCompose = new ValueSetComposeBuilder()
 *   .setLockedDate(value)
 *   .addInclude({ ... })
 *   .build();
 */
export class ValueSetComposeBuilder extends BackboneElementBuilder<ValueSetCompose, IValueSetCompose> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set lockedDate
   * Fixed date for references with no specified version (transitive)
   */
  setLockedDate(lockedDate: string): this {
    this.data.lockedDate = lockedDate;
    return this;
  }

  /**
   * Set inactive
   * Whether inactive codes are in the value set
   */
  setInactive(inactive: boolean): this {
    this.data.inactive = inactive;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add include
   * Include one or more codes from a code system or other value set(s)
   */
  addInclude(include: IValueSetComposeInclude): this {
    return this.addToArray('include', include);
  }

  /**
   * Add exclude
   * Explicitly exclude codes from a code system or other value sets
   */
  addExclude(exclude: IValueSetComposeInclude): this {
    return this.addToArray('exclude', exclude);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetCompose instance
   */
  build(): ValueSetCompose {
    return new ValueSetCompose(this.data);
  }

  /**
   * Build and validate the ValueSetCompose instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetCompose> {
    const valueSetCompose = this.build();
    await valueSetCompose.validateOrThrow();
    return valueSetCompose;
  }
}
