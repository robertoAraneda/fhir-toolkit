import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * CitationCitedArtifactContributorshipEntryAffiliationInfo Interface
 * 
 * Organizational affiliation
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactcontributorshipentryaffiliationinfo.html
 */
export interface ICitationCitedArtifactContributorshipEntryAffiliationInfo extends IBackboneElement {
  /**
   * Display for the organization
   */
  affiliation?: string;
  /**
   * Extension for affiliation
   */
  _affiliation?: IElement;

  /**
   * Role within the organization, such as professional title
   */
  role?: string;
  /**
   * Extension for role
   */
  _role?: IElement;

  /**
   * Identifier for the organization
   */
  identifier?: IIdentifier[];

}
