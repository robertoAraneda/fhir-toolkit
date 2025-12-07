import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentReferenceRelatesTo } from '../../models/backbones/DocumentReferenceRelatesTo.js';
import type {
  DocumentRelationshipTypeType,
  IDocumentReferenceRelatesTo,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * DocumentReferenceRelatesToBuilder - Fluent builder for DocumentReferenceRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReferenceRelatesTo = new DocumentReferenceRelatesToBuilder()
 *   .setCode(value)
 *   .build();
 */
export class DocumentReferenceRelatesToBuilder extends BackboneElementBuilder<DocumentReferenceRelatesTo, IDocumentReferenceRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * replaces | transforms | signs | appends
   */
  setCode(code: DocumentRelationshipTypeType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set target
   * Target of the relationship
   */
  setTarget(target: IReference<'DocumentReference'>): this {
    this.data.target = target;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReferenceRelatesTo instance
   */
  build(): DocumentReferenceRelatesTo {
    return new DocumentReferenceRelatesTo(this.data);
  }

  /**
   * Build and validate the DocumentReferenceRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReferenceRelatesTo> {
    const documentReferenceRelatesTo = this.build();
    await documentReferenceRelatesTo.validateOrThrow();
    return documentReferenceRelatesTo;
  }
}
