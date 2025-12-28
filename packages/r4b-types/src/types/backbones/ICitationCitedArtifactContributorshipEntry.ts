import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ICitationCitedArtifactContributorshipEntryAffiliationInfo } from './ICitationCitedArtifactContributorshipEntryAffiliationInfo.js';
import type { ICitationCitedArtifactContributorshipEntryContributionInstance } from './ICitationCitedArtifactContributorshipEntryContributionInstance.js';

/**
 * CitationCitedArtifactContributorshipEntry Interface
 * 
 * An individual entity named in the list
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactcontributorshipentry.html
 */
export interface ICitationCitedArtifactContributorshipEntry extends IBackboneElement {
  /**
   * A name associated with the person
   */
  name?: IHumanName;

  /**
   * Initials for forename
   */
  initials?: string;
  /**
   * Extension for initials
   */
  _initials?: IElement;

  /**
   * Used for collective or corporate name as an author
   */
  collectiveName?: string;
  /**
   * Extension for collectiveName
   */
  _collectiveName?: IElement;

  /**
   * Author identifier, eg ORCID
   */
  identifier?: IIdentifier[];

  /**
   * Organizational affiliation
   */
  affiliationInfo?: ICitationCitedArtifactContributorshipEntryAffiliationInfo[];

  /**
   * Physical mailing address
   */
  address?: IAddress[];

  /**
   * Email or telephone contact methods for the author or contributor
   */
  telecom?: IContactPoint[];

  /**
   * The specific contribution
   */
  contributionType?: ICodeableConcept[];

  /**
   * The role of the contributor (e.g. author, editor, reviewer)
   */
  role?: ICodeableConcept;

  /**
   * Contributions with accounting for time or number
   */
  contributionInstance?: ICitationCitedArtifactContributorshipEntryContributionInstance[];

  /**
   * Indication of which contributor is the corresponding contributor for the role
   */
  correspondingContact?: boolean;
  /**
   * Extension for correspondingContact
   */
  _correspondingContact?: IElement;

  /**
   * Used to code order of authors
   */
  listOrder?: number;
  /**
   * Extension for listOrder
   */
  _listOrder?: IElement;

}
