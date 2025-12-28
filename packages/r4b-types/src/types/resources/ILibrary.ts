import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IParameterDefinition } from '../datatypes/IParameterDefinition.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * Library Interface
 * 
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 * 
 *
 * @see https://hl7.org/fhir/R4B/library.html
 */
export interface ILibrary extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Library';

  /**
   * Canonical identifier for this library, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the library
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the library
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this library (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this library (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Subordinate title of the library
   */
  subtitle?: string;
  /**
   * Extension for subtitle
   */
  _subtitle?: IElement;

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
   * logic-library | model-definition | asset-collection | module-definition
   */
  type: ICodeableConcept;

  /**
   * Type of individual the library content is focused on
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * Type of individual the library content is focused on
   */
  subjectReference?: IReference;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher (organization or individual)
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
   * Natural language description of the library
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
   * Intended jurisdiction for library (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this library is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Describes the clinical usage of the library
   */
  usage?: string;
  /**
   * Extension for usage
   */
  _usage?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * When the library was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the library was last reviewed
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * When the library is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * E.g. Education, Treatment, Assessment, etc.
   */
  topic?: ICodeableConcept[];

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
   * Additional documentation, citations, etc.
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Parameters defined by the library
   */
  parameter?: IParameterDefinition[];

  /**
   * What data is referenced by this library
   */
  dataRequirement?: IDataRequirement[];

  /**
   * Contents of the library, either embedded or referenced
   */
  content?: IAttachment[];

}
