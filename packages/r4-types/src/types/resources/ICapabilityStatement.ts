import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ICapabilityStatementDocument } from '../backbones/ICapabilityStatementDocument.js';
import type { ICapabilityStatementImplementation } from '../backbones/ICapabilityStatementImplementation.js';
import type { ICapabilityStatementMessaging } from '../backbones/ICapabilityStatementMessaging.js';
import type { ICapabilityStatementRest } from '../backbones/ICapabilityStatementRest.js';
import type { ICapabilityStatementSoftware } from '../backbones/ICapabilityStatementSoftware.js';
import type { CapabilityStatementKindType, FHIRVersionType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * CapabilityStatement Interface
 * 
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 * 
 *
 * @see https://hl7.org/fhir/R4/capabilitystatement.html
 */
export interface ICapabilityStatement extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CapabilityStatement';

  /**
   * Canonical identifier for this capability statement, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business version of the capability statement
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this capability statement (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this capability statement (human friendly)
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
  date: string;
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
   * Natural language description of the capability statement
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
   * Intended jurisdiction for capability statement (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this capability statement is defined
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
   * instance | capability | requirements
   */
  kind: CapabilityStatementKindType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

  /**
   * Canonical URL of another capability statement this implements
   */
  instantiates?: string[];
  /**
   * Extension for instantiates
   */
  _instantiates?: IElement;

  /**
   * Canonical URL of another capability statement this adds to
   */
  imports?: string[];
  /**
   * Extension for imports
   */
  _imports?: IElement;

  /**
   * Software that is covered by this capability statement
   */
  software?: ICapabilityStatementSoftware;

  /**
   * If this describes a specific instance
   */
  implementation?: ICapabilityStatementImplementation;

  /**
   * FHIR Version the system supports
   */
  fhirVersion: FHIRVersionType;
  /**
   * Extension for fhirVersion
   */
  _fhirVersion?: IElement;

  /**
   * formats supported (xml | json | ttl | mime type)
   */
  format: string[];
  /**
   * Extension for format
   */
  _format?: IElement;

  /**
   * Patch formats supported
   */
  patchFormat?: string[];
  /**
   * Extension for patchFormat
   */
  _patchFormat?: IElement;

  /**
   * Implementation guides supported
   */
  implementationGuide?: string[];
  /**
   * Extension for implementationGuide
   */
  _implementationGuide?: IElement;

  /**
   * If the endpoint is a RESTful one
   */
  rest?: ICapabilityStatementRest[];

  /**
   * If messaging is supported
   */
  messaging?: ICapabilityStatementMessaging[];

  /**
   * Document definition
   */
  document?: ICapabilityStatementDocument[];

}
