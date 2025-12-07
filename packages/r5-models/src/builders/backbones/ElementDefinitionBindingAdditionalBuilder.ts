import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionBindingAdditional } from '../../models/backbones/ElementDefinitionBindingAdditional.js';
import type {
  AdditionalBindingPurposeVSType,
  IElementDefinitionBindingAdditional,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/**
 * ElementDefinitionBindingAdditionalBuilder - Fluent builder for ElementDefinitionBindingAdditional backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionBindingAdditional = new ElementDefinitionBindingAdditionalBuilder()
 *   .setPurpose(value)
 *   .addUsage({ ... })
 *   .build();
 */
export class ElementDefinitionBindingAdditionalBuilder extends BackboneElementBuilder<ElementDefinitionBindingAdditional, IElementDefinitionBindingAdditional> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set purpose
   * maximum | minimum | required | extensible | candidate | current | preferred | ui | starter | component
   */
  setPurpose(purpose: AdditionalBindingPurposeVSType): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set valueSet
   * The value set for the additional binding
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  /**
   * Set documentation
   * Documentation of the purpose of use of the binding
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set shortDoco
   * Concise documentation - for summary tables
   */
  setShortDoco(shortDoco: string): this {
    this.data.shortDoco = shortDoco;
    return this;
  }

  /**
   * Set any
   * Whether binding can applies to all repeats, or just one
   */
  setAny(any: boolean): this {
    this.data.any = any;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add usage
   * Qualifies the usage - jurisdiction, gender, workflow status etc.
   */
  addUsage(usage: IUsageContext): this {
    return this.addToArray('usage', usage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionBindingAdditional instance
   */
  build(): ElementDefinitionBindingAdditional {
    return new ElementDefinitionBindingAdditional(this.data);
  }

  /**
   * Build and validate the ElementDefinitionBindingAdditional instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionBindingAdditional> {
    const elementDefinitionBindingAdditional = this.build();
    await elementDefinitionBindingAdditional.validateOrThrow();
    return elementDefinitionBindingAdditional;
  }
}
