import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ICitationCitedArtifact } from '../backbones/ICitationCitedArtifact.js';
import type { ICitationClassification } from '../backbones/ICitationClassification.js';
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
   * Canonical identifier for this citation record, represented as a globally unique URI
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Identifier for the citation record itself
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the citation record
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * How to compare versions
   */
  versionAlgorithmString?: string;
  /**
   * Extension for versionAlgorithmString
   */
  _versionAlgorithmString?: IElement;

  /**
   * How to compare versions
   */
  versionAlgorithmCoding?: ICoding;

  /**
   * Name for this citation record (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this citation record (human friendly)
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
   * The publisher of the citation record, not the publisher of the article or artifact being cited
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher of the citation record
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
   * The context that the citation record content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for citation record (if applicable)
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
   * Use and/or publishing restrictions for the citation record, not for the cited artifact
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * Copyright holder and year(s) for the ciation record, not for the cited artifact
   */
  copyrightLabel?: string;
  /**
   * Extension for copyrightLabel
   */
  _copyrightLabel?: IElement;

  /**
   * When the citation record was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the citation record was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the citation record is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * Who authored the citation record
   */
  author?: IContactDetail[];

  /**
   * Who edited the citation record
   */
  editor?: IContactDetail[];

  /**
   * Who reviewed the citation record
   */
  reviewer?: IContactDetail[];

  /**
   * Who endorsed the citation record
   */
  endorser?: IContactDetail[];

  /**
   * A human-readable display of key concepts to represent the citation
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
   * The status of the citation record
   */
  currentState?: ICodeableConcept[];

  /**
   * An effective date or period for a status of the citation record
   */
  statusDate?: ICitationStatusDate[];

  /**
   * Artifact related to the citation record
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * The article or artifact being described
   */
  citedArtifact?: ICitationCitedArtifact;

}
