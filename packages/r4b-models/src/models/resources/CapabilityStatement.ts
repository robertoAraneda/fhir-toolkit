import { DomainResource } from '../base/DomainResource.js';
import type {
  CapabilityStatementKindType,
  FHIRVersionType,
  ICapabilityStatement,
  ICapabilityStatementDocument,
  ICapabilityStatementImplementation,
  ICapabilityStatementMessaging,
  ICapabilityStatementRest,
  ICapabilityStatementSoftware,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CapabilityStatement */
const CAPABILITY_STATEMENT_PROPERTIES = [
  'url',
  '_url',
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
  'kind',
  '_kind',
  'instantiates',
  '_instantiates',
  'imports',
  '_imports',
  'software',
  'implementation',
  'fhirVersion',
  '_fhirVersion',
  'format',
  '_format',
  'patchFormat',
  '_patchFormat',
  'implementationGuide',
  '_implementationGuide',
  'rest',
  'messaging',
  'document',
] as const;

/**
 * CapabilityStatement - A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatement.html
 *
 * @example
 * const capabilityStatement = new CapabilityStatement({
 *   // ... properties
 * });
 */
export class CapabilityStatement extends DomainResource implements ICapabilityStatement {
  readonly resourceType = 'CapabilityStatement' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this capability statement, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business version of the capability statement */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this capability statement (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this capability statement (human friendly) */
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
  date: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the capability statement */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for capability statement (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this capability statement is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** instance | capability | requirements */
  kind: CapabilityStatementKindType;

  /** Extension for kind */
  _kind?: IElement;

  /** Canonical URL of another capability statement this implements */
  instantiates?: string[];

  /** Extension for instantiates */
  _instantiates?: IElement;

  /** Canonical URL of another capability statement this adds to */
  imports?: string[];

  /** Extension for imports */
  _imports?: IElement;

  /** Software that is covered by this capability statement */
  software?: ICapabilityStatementSoftware;

  /** If this describes a specific instance */
  implementation?: ICapabilityStatementImplementation;

  /** FHIR Version the system supports */
  fhirVersion: FHIRVersionType;

  /** Extension for fhirVersion */
  _fhirVersion?: IElement;

  /** formats supported (xml | json | ttl | mime type) */
  format: string[];

  /** Extension for format */
  _format?: IElement;

  /** Patch formats supported */
  patchFormat?: string[];

  /** Extension for patchFormat */
  _patchFormat?: IElement;

  /** Implementation guides supported */
  implementationGuide?: string[];

  /** Extension for implementationGuide */
  _implementationGuide?: IElement;

  /** If the endpoint is a RESTful one */
  rest?: ICapabilityStatementRest[];

  /** If messaging is supported */
  messaging?: ICapabilityStatementMessaging[];

  /** Document definition */
  document?: ICapabilityStatementDocument[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICapabilityStatement>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatement from a JSON object
   */
  static fromJSON(json: ICapabilityStatement): CapabilityStatement {
    return new CapabilityStatement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatement>): CapabilityStatement {
    return new CapabilityStatement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatement) => Partial<ICapabilityStatement>): CapabilityStatement {
    const currentData = this.toJSON();
    return new CapabilityStatement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatement {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_PROPERTIES);
    return result as ICapabilityStatement;
  }

  /**
   * Create a deep clone of this CapabilityStatement
   */
  clone(): CapabilityStatement {
    return new CapabilityStatement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatement
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatement'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
