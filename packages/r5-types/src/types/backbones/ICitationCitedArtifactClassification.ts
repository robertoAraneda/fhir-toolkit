import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * CitationCitedArtifactClassification Interface
 * 
 * The assignment to an organizing scheme
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactclassification.html
 */
export interface ICitationCitedArtifactClassification extends IBackboneElement {
  /**
   * The kind of classifier (e.g. publication type, keyword)
   */
  type?: ICodeableConcept;

  /**
   * The specific classification value
   */
  classifier?: ICodeableConcept[];

  /**
   * Complex or externally created classification
   */
  artifactAssessment?: IReference<'ArtifactAssessment'>[];

}
