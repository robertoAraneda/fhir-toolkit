import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetComposeInclude } from '../../models/backbones/ValueSetComposeInclude.js';
import type {
  IValueSetComposeInclude,
  IValueSetComposeIncludeConcept,
  IValueSetComposeIncludeFilter,
} from '@fhir-toolkit/r4-types';

/**
 * ValueSetComposeIncludeBuilder - Fluent builder for ValueSetComposeInclude backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetComposeInclude = new ValueSetComposeIncludeBuilder()
 *   .setSystem(value)
 *   .addConcept({ ... })
 *   .build();
 */
export class ValueSetComposeIncludeBuilder extends BackboneElementBuilder<ValueSetComposeInclude, IValueSetComposeInclude> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set system
   * The system the codes come from
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set version
   * Specific version of the code system referred to
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add concept
   * A concept defined in the system
   */
  addConcept(concept: IValueSetComposeIncludeConcept): this {
    return this.addToArray('concept', concept);
  }

  /**
   * Add filter
   * Select codes/concepts by their properties (including relationships)
   */
  addFilter(filter: IValueSetComposeIncludeFilter): this {
    return this.addToArray('filter', filter);
  }

  /**
   * Add valueSet
   * Select the contents included in this value set
   */
  addValueSet(valueSet: string): this {
    return this.addToArray('valueSet', valueSet);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetComposeInclude instance
   */
  build(): ValueSetComposeInclude {
    return new ValueSetComposeInclude(this.data);
  }

  /**
   * Build and validate the ValueSetComposeInclude instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetComposeInclude> {
    const valueSetComposeInclude = this.build();
    await valueSetComposeInclude.validateOrThrow();
    return valueSetComposeInclude;
  }
}
