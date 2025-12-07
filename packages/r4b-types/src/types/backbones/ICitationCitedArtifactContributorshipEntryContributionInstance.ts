import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CitationCitedArtifactContributorshipEntryContributionInstance Interface
 * 
 * Contributions with accounting for time or number
 * 
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactcontributorshipentrycontributioninstance.html
 */
export interface ICitationCitedArtifactContributorshipEntryContributionInstance extends IBackboneElement {
  /**
   * The specific contribution
   */
  type: ICodeableConcept;

  /**
   * The time that the contribution was made
   */
  time?: string;
  /**
   * Extension for time
   */
  _time?: IElement;

}
