import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentReferenceContent } from '../../models/backbones/DocumentReferenceContent.js';
import type {
  IAttachment,
  ICoding,
  IDocumentReferenceContent,
} from '@fhir-toolkit/r4b-types';

/**
 * DocumentReferenceContentBuilder - Fluent builder for DocumentReferenceContent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReferenceContent = new DocumentReferenceContentBuilder()
 *   .setAttachment(value)
 *   .build();
 */
export class DocumentReferenceContentBuilder extends BackboneElementBuilder<DocumentReferenceContent, IDocumentReferenceContent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set attachment
   * Where to access the document
   */
  setAttachment(attachment: IAttachment): this {
    this.data.attachment = attachment;
    return this;
  }

  /**
   * Set format
   * Format/content rules for the document
   */
  setFormat(format: ICoding): this {
    this.data.format = format;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReferenceContent instance
   */
  build(): DocumentReferenceContent {
    return new DocumentReferenceContent(this.data);
  }

  /**
   * Build and validate the DocumentReferenceContent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReferenceContent> {
    const documentReferenceContent = this.build();
    await documentReferenceContent.validateOrThrow();
    return documentReferenceContent;
  }
}
