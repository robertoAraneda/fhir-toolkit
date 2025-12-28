import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICitationCitedArtifactContributorshipEntry } from './ICitationCitedArtifactContributorshipEntry.js';
import type { ICitationCitedArtifactContributorshipSummary } from './ICitationCitedArtifactContributorshipSummary.js';

/**
 * CitationCitedArtifactContributorship Interface
 * 
 * Attribution of authors and other contributors
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactcontributorship.html
 */
export interface ICitationCitedArtifactContributorship extends IBackboneElement {
  /**
   * Indicates if the list includes all authors and/or contributors
   */
  complete?: boolean;
  /**
   * Extension for complete
   */
  _complete?: IElement;

  /**
   * An individual entity named as a contributor
   */
  entry?: ICitationCitedArtifactContributorshipEntry[];

  /**
   * Used to record a display of the author/contributor list without separate data element for each list member
   */
  summary?: ICitationCitedArtifactContributorshipSummary[];

}
