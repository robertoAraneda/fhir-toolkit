import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentManifestRelated } from '../../models/backbones/DocumentManifestRelated.js';
import type {
  IDocumentManifestRelated,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * DocumentManifestRelatedBuilder - Fluent builder for DocumentManifestRelated backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentManifestRelated = new DocumentManifestRelatedBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class DocumentManifestRelatedBuilder extends BackboneElementBuilder<DocumentManifestRelated, IDocumentManifestRelated> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifiers of things that are related
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set ref
   * Related Resource
   */
  setRef(ref: IReference<'Resource'>): this {
    this.data.ref = ref;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentManifestRelated instance
   */
  build(): DocumentManifestRelated {
    return new DocumentManifestRelated(this.data);
  }

  /**
   * Build and validate the DocumentManifestRelated instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentManifestRelated> {
    const documentManifestRelated = this.build();
    await documentManifestRelated.validateOrThrow();
    return documentManifestRelated;
  }
}
