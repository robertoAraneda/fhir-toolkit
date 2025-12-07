import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionSlicing } from '../../models/backbones/ElementDefinitionSlicing.js';
import type {
  IElementDefinitionSlicing,
  IElementDefinitionSlicingDiscriminator,
  SlicingRulesType,
} from '@fhir-toolkit/r4-types';

/**
 * ElementDefinitionSlicingBuilder - Fluent builder for ElementDefinitionSlicing backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionSlicing = new ElementDefinitionSlicingBuilder()
 *   .setDescription(value)
 *   .addDiscriminator({ ... })
 *   .build();
 */
export class ElementDefinitionSlicingBuilder extends BackboneElementBuilder<ElementDefinitionSlicing, IElementDefinitionSlicing> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Text description of how slicing works (or not)
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set ordered
   * If elements must be in same order as slices
   */
  setOrdered(ordered: boolean): this {
    this.data.ordered = ordered;
    return this;
  }

  /**
   * Set rules
   * closed | open | openAtEnd
   */
  setRules(rules: SlicingRulesType): this {
    this.data.rules = rules;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add discriminator
   * Element values that are used to distinguish the slices
   */
  addDiscriminator(discriminator: IElementDefinitionSlicingDiscriminator): this {
    return this.addToArray('discriminator', discriminator);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionSlicing instance
   */
  build(): ElementDefinitionSlicing {
    return new ElementDefinitionSlicing(this.data);
  }

  /**
   * Build and validate the ElementDefinitionSlicing instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionSlicing> {
    const elementDefinitionSlicing = this.build();
    await elementDefinitionSlicing.validateOrThrow();
    return elementDefinitionSlicing;
  }
}
