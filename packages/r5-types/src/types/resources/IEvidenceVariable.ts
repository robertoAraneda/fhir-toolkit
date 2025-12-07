import type { ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IEvidenceVariableCategory } from '../backbones/IEvidenceVariableCategory.js';
import type { IEvidenceVariableCharacteristic } from '../backbones/IEvidenceVariableCharacteristic.js';
import type { EvidenceVariableHandlingType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * EvidenceVariable Interface
 * 
 * The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencevariable.html
 */
export interface IEvidenceVariable extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EvidenceVariable';

  /**
   * Canonical identifier for this evidence variable, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the evidence variable
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the evidence variable
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
   * Name for this evidence variable (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this evidence variable (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Title for use in informal contexts
   */
  shortTitle?: string;
  /**
   * Extension for shortTitle
   */
  _shortTitle?: IElement;

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
   * Natural language description of the evidence variable
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Why this EvidenceVariable is defined
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
   * When the resource was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the resource was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the resource is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * Who authored the content
   */
  author?: IContactDetail[];

  /**
   * Who edited the content
   */
  editor?: IContactDetail[];

  /**
   * Who reviewed the content
   */
  reviewer?: IContactDetail[];

  /**
   * Who endorsed the content
   */
  endorser?: IContactDetail[];

  /**
   * Additional documentation, citations, etc
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Actual or conceptual
   */
  actual?: boolean;
  /**
   * Extension for actual
   */
  _actual?: IElement;

  /**
   * A defining factor of the EvidenceVariable
   */
  characteristic?: IEvidenceVariableCharacteristic[];

  /**
   * continuous | dichotomous | ordinal | polychotomous
   */
  handling?: EvidenceVariableHandlingType;
  /**
   * Extension for handling
   */
  _handling?: IElement;

  /**
   * A grouping for ordinal or polychotomous variables
   */
  category?: IEvidenceVariableCategory[];

}
