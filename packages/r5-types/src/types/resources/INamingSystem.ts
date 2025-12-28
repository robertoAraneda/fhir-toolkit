import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { INamingSystemUniqueId } from '../backbones/INamingSystemUniqueId.js';
import type { NamingSystemTypeType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * NamingSystem Interface
 * 
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 * 
 *
 * @see https://hl7.org/fhir/R5/namingsystem.html
 */
export interface INamingSystem extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'NamingSystem';

  /**
   * Canonical identifier for this naming system, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the naming system (business identifier)
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the naming system
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
   * Name for this naming system (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Title for this naming system (human friendly)
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
   * codesystem | identifier | root
   */
  kind: NamingSystemTypeType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

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
  date: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher/steward (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Who maintains system namespace?
   */
  responsible?: string;
  /**
   * Extension for responsible
   */
  _responsible?: IElement;

  /**
   * e.g. driver,  provider,  patient, bank etc
   */
  type?: ICodeableConcept;

  /**
   * Natural language description of the naming system
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for naming system (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this naming system is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * Copyright holder and year(s)
   */
  copyrightLabel?: string;
  /**
   * Extension for copyrightLabel
   */
  _copyrightLabel?: IElement;

  /**
   * When the NamingSystem was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the NamingSystem was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the NamingSystem is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * E.g. Education, Treatment, Assessment, etc
   */
  topic?: ICodeableConcept[];

  /**
   * Who authored the CodeSystem
   */
  author?: IContactDetail[];

  /**
   * Who edited the NamingSystem
   */
  editor?: IContactDetail[];

  /**
   * Who reviewed the NamingSystem
   */
  reviewer?: IContactDetail[];

  /**
   * Who endorsed the NamingSystem
   */
  endorser?: IContactDetail[];

  /**
   * Additional documentation, citations, etc
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * How/where is it used
   */
  usage?: string;
  /**
   * Extension for usage
   */
  _usage?: IElement;

  /**
   * Unique identifiers used for system
   */
  uniqueId: INamingSystemUniqueId[];

}
