import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ICitationCitedArtifactContributorshipEntryContributionInstance } from './ICitationCitedArtifactContributorshipEntryContributionInstance.js';

/**
 * CitationCitedArtifactContributorshipEntry Interface
 * 
 * An individual entity named as a contributor
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactcontributorshipentry.html
 */
export interface ICitationCitedArtifactContributorshipEntry extends IBackboneElement {
  /**
   * The identity of the individual contributor
   */
  contributor: IReference<'Practitioner' | 'Organization'>;

  /**
   * For citation styles that use initials
   */
  forenameInitials?: string;
  /**
   * Extension for forenameInitials
   */
  _forenameInitials?: IElement;

  /**
   * Organizational affiliation
   */
  affiliation?: IReference<'Organization' | 'PractitionerRole'>[];

  /**
   * The specific contribution
   */
  contributionType?: ICodeableConcept[];

  /**
   * The role of the contributor (e.g. author, editor, reviewer, funder)
   */
  role?: ICodeableConcept;

  /**
   * Contributions with accounting for time or number
   */
  contributionInstance?: ICitationCitedArtifactContributorshipEntryContributionInstance[];

  /**
   * Whether the contributor is the corresponding contributor for the role
   */
  correspondingContact?: boolean;
  /**
   * Extension for correspondingContact
   */
  _correspondingContact?: IElement;

  /**
   * Ranked order of contribution
   */
  rankingOrder?: number;
  /**
   * Extension for rankingOrder
   */
  _rankingOrder?: IElement;

}
