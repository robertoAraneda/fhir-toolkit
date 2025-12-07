import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ArtifactAssessmentInformationTypeType } from '../../valuesets/index.js';

/**
 * ArtifactAssessmentContent Interface
 * 
 * Comment, classifier, or rating content
 * 
 *
 * @see https://hl7.org/fhir/R4/artifactassessmentcontent.html
 */
export interface IArtifactAssessmentContent extends IBackboneElement {
  /**
   * comment | classifier | rating | container | response | change-request
   */
  informationType?: ArtifactAssessmentInformationTypeType;
  /**
   * Extension for informationType
   */
  _informationType?: IElement;

  /**
   * Brief summary of the content
   */
  summary?: string;
  /**
   * Extension for summary
   */
  _summary?: IElement;

  /**
   * What type of content
   */
  type?: ICodeableConcept;

  /**
   * Rating, classifier, or assessment
   */
  classifier?: ICodeableConcept[];

  /**
   * Quantitative rating
   */
  quantity?: IQuantity;

  /**
   * Who authored the content
   */
  author?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device'>;

  /**
   * What the comment is directed to
   */
  path?: string[];
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * Additional information
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Acceptable to publicly share the resource content
   */
  freeToShare?: boolean;
  /**
   * Extension for freeToShare
   */
  _freeToShare?: IElement;

  /**
   * Contained content
   */
  component?: IArtifactAssessmentContent[];

}
