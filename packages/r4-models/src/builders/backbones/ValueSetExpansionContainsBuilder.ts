import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetExpansionContains } from '../../models/backbones/ValueSetExpansionContains.js';
import type {
  IValueSetComposeIncludeConceptDesignation,
  IValueSetExpansionContains,
} from '@fhir-toolkit/r4-types';

/**
 * ValueSetExpansionContainsBuilder - Fluent builder for ValueSetExpansionContains backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetExpansionContains = new ValueSetExpansionContainsBuilder()
 *   .setSystem(value)
 *   .addDesignation({ ... })
 *   .build();
 */
export class ValueSetExpansionContainsBuilder extends BackboneElementBuilder<ValueSetExpansionContains, IValueSetExpansionContains> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set system
   * System value for the code
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set abstract
   * If user cannot select this entry
   */
  setAbstract(abstract: boolean): this {
    this.data.abstract = abstract;
    return this;
  }

  /**
   * Set inactive
   * If concept is inactive in the code system
   */
  setInactive(inactive: boolean): this {
    this.data.inactive = inactive;
    return this;
  }

  /**
   * Set version
   * Version in which this code/display is defined
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set code
   * Code - if blank, this is not a selectable code
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set display
   * User display for the concept
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add designation
   * Additional representations for this item
   */
  addDesignation(designation: IValueSetComposeIncludeConceptDesignation): this {
    return this.addToArray('designation', designation);
  }

  /**
   * Add contains
   * Codes contained under this entry
   */
  addContains(contain: IValueSetExpansionContains): this {
    return this.addToArray('contains', contain);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetExpansionContains instance
   */
  build(): ValueSetExpansionContains {
    return new ValueSetExpansionContains(this.data);
  }

  /**
   * Build and validate the ValueSetExpansionContains instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetExpansionContains> {
    const valueSetExpansionContains = this.build();
    await valueSetExpansionContains.validateOrThrow();
    return valueSetExpansionContains;
  }
}
