import { ElementBuilder } from '../base/ElementBuilder.js';
import { RelatedArtifact } from '../../models/datatypes/RelatedArtifact.js';
import type {
  IAttachment,
  ICodeableConcept,
  IReference,
  IRelatedArtifact,
  PublicationStatusType,
  RelatedArtifactTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * RelatedArtifactBuilder - Fluent builder for RelatedArtifact datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const relatedArtifact = new RelatedArtifactBuilder()
 *   .setType(value)
 *   .addClassifier({ ... })
 *   .build();
 */
export class RelatedArtifactBuilder extends ElementBuilder<RelatedArtifact, IRelatedArtifact> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as
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
   * Set document
   * What document is being referenced
   */
  setDocument(document: IAttachment): this {
    this.data.document = document;
    return this;
  }

  /**
   * Set resource
   * What artifact is being referenced
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  /**
   * Set resourceReference
   * What artifact, if not a conformance resource
   */
  setResourceReference(resourceReference: IReference<'Resource'>): this {
    this.data.resourceReference = resourceReference;
    return this;
  }

  /**
   * Set publicationStatus
   * draft | active | retired | unknown
   */
  setPublicationStatus(publicationStatus: PublicationStatusType): this {
    this.data.publicationStatus = publicationStatus;
    return this;
  }

  /**
   * Set publicationDate
   * Date of publication of the artifact being referred to
   */
  setPublicationDate(publicationDate: string): this {
    this.data.publicationDate = publicationDate;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add classifier
   * Additional classifiers
   */
  addClassifier(classifier: ICodeableConcept): this {
    return this.addToArray('classifier', classifier);
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
