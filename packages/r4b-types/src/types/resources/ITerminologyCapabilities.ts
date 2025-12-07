import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ITerminologyCapabilitiesClosure } from '../backbones/ITerminologyCapabilitiesClosure.js';
import type { ITerminologyCapabilitiesCodeSystem } from '../backbones/ITerminologyCapabilitiesCodeSystem.js';
import type { ITerminologyCapabilitiesExpansion } from '../backbones/ITerminologyCapabilitiesExpansion.js';
import type { ITerminologyCapabilitiesImplementation } from '../backbones/ITerminologyCapabilitiesImplementation.js';
import type { ITerminologyCapabilitiesSoftware } from '../backbones/ITerminologyCapabilitiesSoftware.js';
import type { ITerminologyCapabilitiesTranslation } from '../backbones/ITerminologyCapabilitiesTranslation.js';
import type { ITerminologyCapabilitiesValidateCode } from '../backbones/ITerminologyCapabilitiesValidateCode.js';
import type { CapabilityStatementKindType, CodeSearchSupportType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * TerminologyCapabilities Interface
 * 
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 * 
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilities.html
 */
export interface ITerminologyCapabilities extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'TerminologyCapabilities';

  /**
   * Canonical identifier for this terminology capabilities, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business version of the terminology capabilities
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this terminology capabilities (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this terminology capabilities (human friendly)
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
   * Natural language description of the terminology capabilities
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
   * Intended jurisdiction for terminology capabilities (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this terminology capabilities is defined
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
   * Software that is covered by this terminology capability statement
   */
  software?: ITerminologyCapabilitiesSoftware;

  /**
   * If this describes a specific instance
   */
  implementation?: ITerminologyCapabilitiesImplementation;

  /**
   * Whether lockedDate is supported
   */
  lockedDate?: boolean;
  /**
   * Extension for lockedDate
   */
  _lockedDate?: IElement;

  /**
   * A code system supported by the server
   */
  codeSystem?: ITerminologyCapabilitiesCodeSystem[];

  /**
   * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
   */
  expansion?: ITerminologyCapabilitiesExpansion;

  /**
   * explicit | all
   */
  codeSearch?: CodeSearchSupportType;
  /**
   * Extension for codeSearch
   */
  _codeSearch?: IElement;

  /**
   * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
   */
  validateCode?: ITerminologyCapabilitiesValidateCode;

  /**
   * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
   */
  translation?: ITerminologyCapabilitiesTranslation;

  /**
   * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
   */
  closure?: ITerminologyCapabilitiesClosure;

}
