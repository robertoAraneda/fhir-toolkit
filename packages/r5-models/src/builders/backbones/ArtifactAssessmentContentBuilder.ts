import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ArtifactAssessmentContent } from '../../models/backbones/ArtifactAssessmentContent.js';
import type {
  ArtifactAssessmentInformationTypeType,
  IArtifactAssessmentContent,
  ICodeableConcept,
  IQuantity,
  IReference,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/**
 * ArtifactAssessmentContentBuilder - Fluent builder for ArtifactAssessmentContent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const artifactAssessmentContent = new ArtifactAssessmentContentBuilder()
 *   .setInformationType(value)
 *   .addClassifier({ ... })
 *   .build();
 */
export class ArtifactAssessmentContentBuilder extends BackboneElementBuilder<ArtifactAssessmentContent, IArtifactAssessmentContent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set informationType
   * comment | classifier | rating | container | response | change-request
   */
  setInformationType(informationType: ArtifactAssessmentInformationTypeType): this {
    this.data.informationType = informationType;
    return this;
  }

  /**
   * Set summary
   * Brief summary of the content
   */
  setSummary(summary: string): this {
    this.data.summary = summary;
    return this;
  }

  /**
   * Set type
   * What type of content
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set quantity
   * Quantitative rating
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set author
   * Who authored the content
   */
  setAuthor(author: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set freeToShare
   * Acceptable to publicly share the resource content
   */
  setFreeToShare(freeToShare: boolean): this {
    this.data.freeToShare = freeToShare;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add classifier
   * Rating, classifier, or assessment
   */
  addClassifier(classifier: ICodeableConcept): this {
    return this.addToArray('classifier', classifier);
  }

  /**
   * Add path
   * What the comment is directed to
   */
  addPath(path: string): this {
    return this.addToArray('path', path);
  }

  /**
   * Add relatedArtifact
   * Additional information
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add component
   * Contained content
   */
  addComponent(component: IArtifactAssessmentContent): this {
    return this.addToArray('component', component);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ArtifactAssessmentContent instance
   */
  build(): ArtifactAssessmentContent {
    return new ArtifactAssessmentContent(this.data);
  }

  /**
   * Build and validate the ArtifactAssessmentContent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ArtifactAssessmentContent> {
    const artifactAssessmentContent = this.build();
    await artifactAssessmentContent.validateOrThrow();
    return artifactAssessmentContent;
  }
}
