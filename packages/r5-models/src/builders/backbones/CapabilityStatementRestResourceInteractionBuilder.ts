import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRestResourceInteraction } from '../../models/backbones/CapabilityStatementRestResourceInteraction.js';
import type {
  ICapabilityStatementRestResourceInteraction,
  TypeRestfulInteractionType,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementRestResourceInteractionBuilder - Fluent builder for CapabilityStatementRestResourceInteraction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRestResourceInteraction = new CapabilityStatementRestResourceInteractionBuilder()
 *   .setCode(value)
 *   .build();
 */
export class CapabilityStatementRestResourceInteractionBuilder extends BackboneElementBuilder<CapabilityStatementRestResourceInteraction, ICapabilityStatementRestResourceInteraction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * read | vread | update | patch | delete | history-instance | history-type | create | search-type
   */
  setCode(code: TypeRestfulInteractionType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set documentation
   * Anything special about operation behavior
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementRestResourceInteraction instance
   */
  build(): CapabilityStatementRestResourceInteraction {
    return new CapabilityStatementRestResourceInteraction(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRestResourceInteraction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRestResourceInteraction> {
    const capabilityStatementRestResourceInteraction = this.build();
    await capabilityStatementRestResourceInteraction.validateOrThrow();
    return capabilityStatementRestResourceInteraction;
  }
}
