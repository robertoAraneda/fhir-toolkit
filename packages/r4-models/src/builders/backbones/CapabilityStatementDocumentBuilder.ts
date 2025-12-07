import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementDocument } from '../../models/backbones/CapabilityStatementDocument.js';
import type {
  DocumentModeType,
  ICapabilityStatementDocument,
} from '@fhir-toolkit/r4-types';

/**
 * CapabilityStatementDocumentBuilder - Fluent builder for CapabilityStatementDocument backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementDocument = new CapabilityStatementDocumentBuilder()
 *   .setMode(value)
 *   .build();
 */
export class CapabilityStatementDocumentBuilder extends BackboneElementBuilder<CapabilityStatementDocument, ICapabilityStatementDocument> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * producer | consumer
   */
  setMode(mode: DocumentModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set documentation
   * Description of document support
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set profile
   * Constraint on the resources used in the document
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementDocument instance
   */
  build(): CapabilityStatementDocument {
    return new CapabilityStatementDocument(this.data);
  }

  /**
   * Build and validate the CapabilityStatementDocument instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementDocument> {
    const capabilityStatementDocument = this.build();
    await capabilityStatementDocument.validateOrThrow();
    return capabilityStatementDocument;
  }
}
