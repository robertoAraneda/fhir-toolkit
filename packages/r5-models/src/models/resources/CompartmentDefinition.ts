import { DomainResource } from '../base/DomainResource.js';
import type {
  CompartmentTypeType,
  ICoding,
  ICompartmentDefinition,
  ICompartmentDefinitionResource,
  IContactDetail,
  IElement,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CompartmentDefinition */
const COMPARTMENT_DEFINITION_PROPERTIES = [
  'url',
  '_url',
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
  'purpose',
  '_purpose',
  'code',
  '_code',
  'search',
  '_search',
  'resource',
] as const;

/**
 * CompartmentDefinition - A compartment definition that defines how resources are accessed on a server.
 *
 * @see https://hl7.org/fhir/R4/compartmentdefinition.html
 *
 * @example
 * const compartmentDefinition = new CompartmentDefinition({
 *   // ... properties
 * });
 */
export class CompartmentDefinition extends DomainResource implements ICompartmentDefinition {
  readonly resourceType = 'CompartmentDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this compartment definition, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Business version of the compartment definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this compartment definition (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this compartment definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

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

  /** Natural language description of the compartment definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Why this compartment definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare */
  code: CompartmentTypeType;

  /** Extension for code */
  _code?: IElement;

  /** Whether the search syntax is supported */
  search: boolean;

  /** Extension for search */
  _search?: IElement;

  /** How a resource is related to the compartment */
  resource?: ICompartmentDefinitionResource[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICompartmentDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPARTMENT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CompartmentDefinition from a JSON object
   */
  static fromJSON(json: ICompartmentDefinition): CompartmentDefinition {
    return new CompartmentDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CompartmentDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICompartmentDefinition>): CompartmentDefinition {
    return new CompartmentDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CompartmentDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICompartmentDefinition) => Partial<ICompartmentDefinition>): CompartmentDefinition {
    const currentData = this.toJSON();
    return new CompartmentDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICompartmentDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICompartmentDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COMPARTMENT_DEFINITION_PROPERTIES);
    return result as ICompartmentDefinition;
  }

  /**
   * Create a deep clone of this CompartmentDefinition
   */
  clone(): CompartmentDefinition {
    return new CompartmentDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CompartmentDefinition
   */
  toString(): string {
    const parts: string[] = ['CompartmentDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
