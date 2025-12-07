import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ICitationCitedArtifact } from '../backbones/ICitationCitedArtifact.js';
import type { ICitationClassification } from '../backbones/ICitationClassification.js';
import type { ICitationRelatesTo } from '../backbones/ICitationRelatesTo.js';
import type { ICitationStatusDate } from '../backbones/ICitationStatusDate.js';
import type { ICitationSummary } from '../backbones/ICitationSummary.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Citation Interface
 * 
 * The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 * 
 *
 * @see https://hl7.org/fhir/R4/citation.html
 */
export interface ICitation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Citation';

  /**
   * Canonical identifier for this citation, represented as a globally unique URI
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Identifier for the Citation resource itself
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the citation
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this citation (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this citation (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * The publisher of the Citation, not the publisher of the article or artifact being cited
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher of the Citation Resource
   */
  contact?: IContactDetail[];

  /**
   * Natural language description of the citation
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the Citation Resource content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for citation (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this citation is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions for the Citation, not for the cited artifact
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * When the citation was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the citation was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the citation is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * Who authored the Citation
   */
  author?: IContactDetail[];

  /**
   * Who edited the Citation
   */
  editor?: IContactDetail[];

  /**
   * Who reviewed the Citation
   */
  reviewer?: IContactDetail[];

  /**
   * Who endorsed the Citation
   */
  endorser?: IContactDetail[];

  /**
   * A human-readable display of the citation
   */
  summary?: ICitationSummary[];

  /**
   * The assignment to an organizing scheme
   */
  classification?: ICitationClassification[];

  /**
   * Used for general notes and annotations not coded elsewhere
   */
  note?: IAnnotation[];

  /**
   * The status of the citation
   */
  currentState?: ICodeableConcept[];

  /**
   * An effective date or period for a status of the citation
   */
  statusDate?: ICitationStatusDate[];

  /**
   * Artifact related to the Citation Resource
   */
  relatesTo?: ICitationRelatesTo[];

  /**
   * The article or artifact being described
   */
  citedArtifact?: ICitationCitedArtifact;

}
