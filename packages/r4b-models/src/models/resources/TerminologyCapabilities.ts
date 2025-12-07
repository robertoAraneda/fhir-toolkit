import { DomainResource } from '../base/DomainResource.js';
import type {
  CapabilityStatementKindType,
  CodeSearchSupportType,
  ICodeableConcept,
  IContactDetail,
  IElement,
  ITerminologyCapabilities,
  ITerminologyCapabilitiesClosure,
  ITerminologyCapabilitiesCodeSystem,
  ITerminologyCapabilitiesExpansion,
  ITerminologyCapabilitiesImplementation,
  ITerminologyCapabilitiesSoftware,
  ITerminologyCapabilitiesTranslation,
  ITerminologyCapabilitiesValidateCode,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilities */
const TERMINOLOGY_CAPABILITIES_PROPERTIES = [
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
  'software',
  'implementation',
  'lockedDate',
  '_lockedDate',
  'codeSystem',
  'expansion',
  'codeSearch',
  '_codeSearch',
  'validateCode',
  'translation',
  'closure',
] as const;

/**
 * TerminologyCapabilities - A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilities.html
 *
 * @example
 * const terminologyCapabilities = new TerminologyCapabilities({
 *   // ... properties
 * });
 */
export class TerminologyCapabilities extends DomainResource implements ITerminologyCapabilities {
  readonly resourceType = 'TerminologyCapabilities' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business version of the terminology capabilities */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this terminology capabilities (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this terminology capabilities (human friendly) */
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

  /** Natural language description of the terminology capabilities */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for terminology capabilities (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this terminology capabilities is defined */
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

  /** Software that is covered by this terminology capability statement */
  software?: ITerminologyCapabilitiesSoftware;

  /** If this describes a specific instance */
  implementation?: ITerminologyCapabilitiesImplementation;

  /** Whether lockedDate is supported */
  lockedDate?: boolean;

  /** Extension for lockedDate */
  _lockedDate?: IElement;

  /** A code system supported by the server */
  codeSystem?: ITerminologyCapabilitiesCodeSystem[];

  /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation */
  expansion?: ITerminologyCapabilitiesExpansion;

  /** explicit | all */
  codeSearch?: CodeSearchSupportType;

  /** Extension for codeSearch */
  _codeSearch?: IElement;

  /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation */
  validateCode?: ITerminologyCapabilitiesValidateCode;

  /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation */
  translation?: ITerminologyCapabilitiesTranslation;

  /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation */
  closure?: ITerminologyCapabilitiesClosure;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ITerminologyCapabilities>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilities from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilities): TerminologyCapabilities {
    return new TerminologyCapabilities(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilities with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilities>): TerminologyCapabilities {
    return new TerminologyCapabilities({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilities by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilities) => Partial<ITerminologyCapabilities>): TerminologyCapabilities {
    const currentData = this.toJSON();
    return new TerminologyCapabilities({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilities)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilities {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_PROPERTIES);
    return result as ITerminologyCapabilities;
  }

  /**
   * Create a deep clone of this TerminologyCapabilities
   */
  clone(): TerminologyCapabilities {
    return new TerminologyCapabilities(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilities
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilities'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
