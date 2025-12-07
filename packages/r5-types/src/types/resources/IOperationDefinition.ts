import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IOperationDefinitionOverload } from '../backbones/IOperationDefinitionOverload.js';
import type { IOperationDefinitionParameter } from '../backbones/IOperationDefinitionParameter.js';
import type { OperationKindType, PublicationStatusType, VersionIndependentResourceTypesAllType } from '../../valuesets/index.js';

/**
 * OperationDefinition Interface
 * 
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 * 
 *
 * @see https://hl7.org/fhir/R4/operationdefinition.html
 */
export interface IOperationDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'OperationDefinition';

  /**
   * Canonical identifier for this operation definition, represented as an absolute URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the implementation guide (business identifier)
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the operation definition
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
   * Name for this operation definition (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this operation definition (human friendly)
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
   * operation | query
   */
  kind: OperationKindType;
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
   * Natural language description of the operation definition
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
   * Intended jurisdiction for operation definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this operation definition is defined
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
   * Whether content is changed by the operation
   */
  affectsState?: boolean;
  /**
   * Extension for affectsState
   */
  _affectsState?: IElement;

  /**
   * Recommended name for operation in search url
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Additional information about use
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Marks this as a profile of the base
   */
  base?: string;
  /**
   * Extension for base
   */
  _base?: IElement;

  /**
   * Types this operation applies to
   */
  resource?: VersionIndependentResourceTypesAllType[];
  /**
   * Extension for resource
   */
  _resource?: IElement;

  /**
   * Invoke at the system level?
   */
  system: boolean;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * Invoke at the type level?
   */
  type: boolean;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Invoke on an instance?
   */
  instance: boolean;
  /**
   * Extension for instance
   */
  _instance?: IElement;

  /**
   * Validation information for in parameters
   */
  inputProfile?: string;
  /**
   * Extension for inputProfile
   */
  _inputProfile?: IElement;

  /**
   * Validation information for out parameters
   */
  outputProfile?: string;
  /**
   * Extension for outputProfile
   */
  _outputProfile?: IElement;

  /**
   * Parameters for the operation/query
   */
  parameter?: IOperationDefinitionParameter[];

  /**
   * Define overloaded variants for when  generating code
   */
  overload?: IOperationDefinitionOverload[];

}
