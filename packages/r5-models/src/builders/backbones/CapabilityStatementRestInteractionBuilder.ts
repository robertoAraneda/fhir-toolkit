import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRestInteraction } from '../../models/backbones/CapabilityStatementRestInteraction.js';
import type {
  ICapabilityStatementRestInteraction,
  SystemRestfulInteractionType,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementRestInteractionBuilder - Fluent builder for CapabilityStatementRestInteraction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRestInteraction = new CapabilityStatementRestInteractionBuilder()
 *   .setCode(value)
 *   .build();
 */
export class CapabilityStatementRestInteractionBuilder extends BackboneElementBuilder<CapabilityStatementRestInteraction, ICapabilityStatementRestInteraction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * transaction | batch | search-system | history-system
   */
  setCode(code: SystemRestfulInteractionType): this {
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
   * Build the CapabilityStatementRestInteraction instance
   */
  build(): CapabilityStatementRestInteraction {
    return new CapabilityStatementRestInteraction(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRestInteraction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRestInteraction> {
    const capabilityStatementRestInteraction = this.build();
    await capabilityStatementRestInteraction.validateOrThrow();
    return capabilityStatementRestInteraction;
  }
}
