import { DomainResource } from '../base/DomainResource.js';
import type {
  FHIRVersionType,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IStructureDefinition,
  IStructureDefinitionContext,
  IStructureDefinitionDifferential,
  IStructureDefinitionMapping,
  IStructureDefinitionSnapshot,
  IUsageContext,
  PublicationStatusType,
  StructureDefinitionKindType,
  TypeDerivationRuleType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to StructureDefinition */
const STRUCTURE_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
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
  'jurisdiction',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'keyword',
  'fhirVersion',
  '_fhirVersion',
  'mapping',
  'kind',
  '_kind',
  'abstract',
  '_abstract',
  'context',
  'contextInvariant',
  '_contextInvariant',
  'type',
  '_type',
  'baseDefinition',
  '_baseDefinition',
  'derivation',
  '_derivation',
  'snapshot',
  'differential',
] as const;

/**
 * StructureDefinition - A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 *
 * @see https://hl7.org/fhir/R4/structuredefinition.html
 *
 * @example
 * const structureDefinition = new StructureDefinition({
 *   // ... properties
 * });
 */
export class StructureDefinition extends DomainResource implements IStructureDefinition {
  readonly resourceType = 'StructureDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this structure definition, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the structure definition */
  identifier?: IIdentifier[];

  /** Business version of the structure definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this structure definition (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this structure definition (human friendly) */
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

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the structure definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for structure definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this structure definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Assist with indexing and finding */
  keyword?: ICoding[];

  /** FHIR Version this StructureDefinition targets */
  fhirVersion?: FHIRVersionType;

  /** Extension for fhirVersion */
  _fhirVersion?: IElement;

  /** External specification that the content is mapped to */
  mapping?: IStructureDefinitionMapping[];

  /** primitive-type | complex-type | resource | logical */
  kind: StructureDefinitionKindType;

  /** Extension for kind */
  _kind?: IElement;

  /** Whether the structure is abstract */
  abstract: boolean;

  /** Extension for abstract */
  _abstract?: IElement;

  /** If an extension, where it can be used in instances */
  context?: IStructureDefinitionContext[];

  /** FHIRPath invariants - when the extension can be used */
  contextInvariant?: string[];

  /** Extension for contextInvariant */
  _contextInvariant?: IElement;

  /** Type defined or constrained by this structure */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** Definition that this type is constrained/specialized from */
  baseDefinition?: string;

  /** Extension for baseDefinition */
  _baseDefinition?: IElement;

  /** specialization | constraint - How relates to base definition */
  derivation?: TypeDerivationRuleType;

  /** Extension for derivation */
  _derivation?: IElement;

  /** Snapshot view of the structure */
  snapshot?: IStructureDefinitionSnapshot;

  /** Differential view of the structure */
  differential?: IStructureDefinitionDifferential;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IStructureDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureDefinition from a JSON object
   */
  static fromJSON(json: IStructureDefinition): StructureDefinition {
    return new StructureDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureDefinition>): StructureDefinition {
    return new StructureDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureDefinition) => Partial<IStructureDefinition>): StructureDefinition {
    const currentData = this.toJSON();
    return new StructureDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, STRUCTURE_DEFINITION_PROPERTIES);
    return result as IStructureDefinition;
  }

  /**
   * Create a deep clone of this StructureDefinition
   */
  clone(): StructureDefinition {
    return new StructureDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureDefinition
   */
  toString(): string {
    const parts: string[] = ['StructureDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
