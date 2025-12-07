import { ElementBuilder } from '../base/ElementBuilder.js';
import { RelatedArtifact } from '../../models/datatypes/RelatedArtifact.js';
import type {
  IAttachment,
  IRelatedArtifact,
  RelatedArtifactTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * RelatedArtifactBuilder - Fluent builder for RelatedArtifact datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const relatedArtifact = new RelatedArtifactBuilder()
 *   .setType(value)
 *   .build();
 */
export class RelatedArtifactBuilder extends ElementBuilder<RelatedArtifact, IRelatedArtifact> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
   */
  setType(type: RelatedArtifactTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set label
   * Short label
   */
  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Set display
   * Brief description of the related artifact
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  /**
   * Set citation
   * Bibliographic citation for the artifact
   */
  setCitation(citation: string): this {
    this.data.citation = citation;
    return this;
  }

  /**
   * Set url
   * Where the artifact can be accessed
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set document
   * What document is being referenced
   */
  setDocument(document: IAttachment): this {
    this.data.document = document;
    return this;
  }

  /**
   * Set resource
   * What resource is being referenced
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RelatedArtifact instance
   */
  build(): RelatedArtifact {
    return new RelatedArtifact(this.data);
  }

  /**
   * Build and validate the RelatedArtifact instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RelatedArtifact> {
    const relatedArtifact = this.build();
    await relatedArtifact.validateOrThrow();
    return relatedArtifact;
  }
}
