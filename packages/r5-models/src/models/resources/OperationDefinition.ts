import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IOperationDefinition,
  IOperationDefinitionOverload,
  IOperationDefinitionParameter,
  IUsageContext,
  OperationKindType,
  PublicationStatusType,
  VersionIndependentResourceTypesAllType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to OperationDefinition */
const OPERATION_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
  'name',
  '_name',
  'title',
  '_title',
  'status',
  '_status',
  'kind',
  '_kind',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'copyrightLabel',
  '_copyrightLabel',
  'affectsState',
  '_affectsState',
  'code',
  '_code',
  'comment',
  '_comment',
  'base',
  '_base',
  'resource',
  '_resource',
  'system',
  '_system',
  'type',
  '_type',
  'instance',
  '_instance',
  'inputProfile',
  '_inputProfile',
  'outputProfile',
  '_outputProfile',
  'parameter',
  'overload',
] as const;

/**
 * OperationDefinition - A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 *
 * @see https://hl7.org/fhir/R4/operationdefinition.html
 *
 * @example
 * const operationDefinition = new OperationDefinition({
 *   resourceType: 'OperationDefinition',
 *   // ... properties
 * });
 */
export class OperationDefinition extends DomainResource implements IOperationDefinition {
  readonly resourceType = 'OperationDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this operation definition, represented as an absolute URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the implementation guide (business identifier) */
  identifier?: IIdentifier[];

  /** Business version of the operation definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this operation definition (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this operation definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** operation | query */
  kind: OperationKindType;

  /** Extension for kind */
  _kind?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the operation definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for operation definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this operation definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** Whether content is changed by the operation */
  affectsState?: boolean;

  /** Extension for affectsState */
  _affectsState?: IElement;

  /** Recommended name for operation in search url */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Additional information about use */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Marks this as a profile of the base */
  base?: string;

  /** Extension for base */
  _base?: IElement;

  /** Types this operation applies to */
  resource?: VersionIndependentResourceTypesAllType[];

  /** Extension for resource */
  _resource?: IElement;

  /** Invoke at the system level? */
  system: boolean;

  /** Extension for system */
  _system?: IElement;

  /** Invoke at the type level? */
  type: boolean;

  /** Extension for type */
  _type?: IElement;

  /** Invoke on an instance? */
  instance: boolean;

  /** Extension for instance */
  _instance?: IElement;

  /** Validation information for in parameters */
  inputProfile?: string;

  /** Extension for inputProfile */
  _inputProfile?: IElement;

  /** Validation information for out parameters */
  outputProfile?: string;

  /** Extension for outputProfile */
  _outputProfile?: IElement;

  /** Parameters for the operation/query */
  parameter?: IOperationDefinitionParameter[];

  /** Define overloaded variants for when  generating code */
  overload?: IOperationDefinitionOverload[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationDefinition from a JSON object
   */
  static fromJSON(json: IOperationDefinition): OperationDefinition {
    return new OperationDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationDefinition>): OperationDefinition {
    return new OperationDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationDefinition) => Partial<IOperationDefinition>): OperationDefinition {
    const currentData = this.toJSON();
    return new OperationDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, OPERATION_DEFINITION_PROPERTIES);
    return result as IOperationDefinition;
  }

  /**
   * Create a deep clone of this OperationDefinition
   */
  clone(): OperationDefinition {
    return new OperationDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationDefinition
   */
  toString(): string {
    const parts: string[] = ['OperationDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
