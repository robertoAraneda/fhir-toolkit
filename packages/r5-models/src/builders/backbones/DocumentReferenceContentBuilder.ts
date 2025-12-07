import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentReferenceContent } from '../../models/backbones/DocumentReferenceContent.js';
import type {
  IAttachment,
  IDocumentReferenceContent,
  IDocumentReferenceContentProfile,
} from '@fhir-toolkit/r5-types';

/**
 * DocumentReferenceContentBuilder - Fluent builder for DocumentReferenceContent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReferenceContent = new DocumentReferenceContentBuilder()
 *   .setAttachment(value)
 *   .addProfile({ ... })
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add profile
   * Content profile rules for the document
   */
  addProfile(profile: IDocumentReferenceContentProfile): this {
    return this.addToArray('profile', profile);
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
