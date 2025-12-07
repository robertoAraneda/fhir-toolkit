import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionGrouping } from '../../models/backbones/ImplementationGuideDefinitionGrouping.js';
import type {
  IImplementationGuideDefinitionGrouping,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideDefinitionGroupingBuilder - Fluent builder for ImplementationGuideDefinitionGrouping backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinitionGrouping = new ImplementationGuideDefinitionGroupingBuilder()
 *   .setName(value)
 *   .build();
 */
export class ImplementationGuideDefinitionGroupingBuilder extends BackboneElementBuilder<ImplementationGuideDefinitionGrouping, IImplementationGuideDefinitionGrouping> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Descriptive name for the package
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Human readable text describing the package
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDefinitionGrouping instance
   */
  build(): ImplementationGuideDefinitionGrouping {
    return new ImplementationGuideDefinitionGrouping(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDefinitionGrouping instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDefinitionGrouping> {
    const implementationGuideDefinitionGrouping = this.build();
    await implementationGuideDefinitionGrouping.validateOrThrow();
    return implementationGuideDefinitionGrouping;
  }
}
