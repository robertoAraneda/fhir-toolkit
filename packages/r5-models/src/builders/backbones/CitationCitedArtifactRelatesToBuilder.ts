import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactRelatesTo } from '../../models/backbones/CitationCitedArtifactRelatesTo.js';
import type {
  IAttachment,
  ICitationCitedArtifactRelatesTo,
  ICodeableConcept,
  IReference,
  RelatedArtifactTypeExpandedType,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactRelatesToBuilder - Fluent builder for CitationCitedArtifactRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactRelatesTo = new CitationCitedArtifactRelatesToBuilder()
 *   .setType(value)
 *   .addClassifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactRelatesToBuilder extends BackboneElementBuilder<CitationCitedArtifactRelatesTo, ICitationCitedArtifactRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as | reprint | reprint-of
   */
  setType(type: RelatedArtifactTypeExpandedType): this {
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
  setResourceReference(resourceReference: IReference): this {
    this.data.resourceReference = resourceReference;
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
   * Build the CitationCitedArtifactRelatesTo instance
   */
  build(): CitationCitedArtifactRelatesTo {
    return new CitationCitedArtifactRelatesTo(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactRelatesTo> {
    const citationCitedArtifactRelatesTo = this.build();
    await citationCitedArtifactRelatesTo.validateOrThrow();
    return citationCitedArtifactRelatesTo;
  }
}
