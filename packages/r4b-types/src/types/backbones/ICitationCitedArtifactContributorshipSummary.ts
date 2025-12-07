import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationCitedArtifactContributorshipSummary Interface
 * 
 * Used to record a display of the author/contributor list without separate coding for each list member
 * 
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactcontributorshipsummary.html
 */
export interface ICitationCitedArtifactContributorshipSummary extends IBackboneElement {
  /**
   * Either authorList or contributorshipStatement
   */
  type?: ICodeableConcept;

  /**
   * The format for the display string
   */
  style?: ICodeableConcept;

  /**
   * Used to code the producer or rule for creating the display string
   */
  source?: ICodeableConcept;

  /**
   * The display string for the author list, contributor list, or contributorship statement
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
