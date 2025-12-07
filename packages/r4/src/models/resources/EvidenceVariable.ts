import { DomainResource } from '../base/DomainResource.js';
import type {
  EvidenceVariableTypeType,
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IEvidenceVariable,
  IEvidenceVariableCharacteristic,
  IIdentifier,
  IPeriod,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EvidenceVariable */
const EVIDENCE_VARIABLE_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'shortTitle',
  '_shortTitle',
  'subtitle',
  '_subtitle',
  'status',
  '_status',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'note',
  'useContext',
  'jurisdiction',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'type',
  '_type',
  'characteristic',
] as const;

/**
 * EvidenceVariable - The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 *
 * @see https://hl7.org/fhir/R4/evidencevariable.html
 *
 * @example
 * const evidenceVariable = new EvidenceVariable({
 *   resourceType: 'EvidenceVariable',
 *   // ... properties
 * });
 */
export class EvidenceVariable extends DomainResource implements IEvidenceVariable {
  readonly resourceType = 'EvidenceVariable' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the evidence variable */
  identifier?: IIdentifier[];

  /** Business version of the evidence variable */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this evidence variable (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this evidence variable (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Title for use in informal contexts */
  shortTitle?: string;

  /** Extension for shortTitle */
  _shortTitle?: IElement;

  /** Subordinate title of the EvidenceVariable */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

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

  /** Natural language description of the evidence variable */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for evidence variable (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the evidence variable was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the evidence variable was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the evidence variable is expected to be used */
  effectivePeriod?: IPeriod;

  /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc. */
  relatedArtifact?: IRelatedArtifact[];

  /** dichotomous | continuous | descriptive */
  type?: EvidenceVariableTypeType;

  /** Extension for type */
  _type?: IElement;

  /** What defines the members of the evidence element */
  characteristic: IEvidenceVariableCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariable>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariable from a JSON object
   */
  static fromJSON(json: IEvidenceVariable): EvidenceVariable {
    return new EvidenceVariable(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariable with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariable>): EvidenceVariable {
    return new EvidenceVariable({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariable by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariable) => Partial<IEvidenceVariable>): EvidenceVariable {
    const currentData = this.toJSON();
    return new EvidenceVariable({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariable)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariable {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_PROPERTIES);
    return result as IEvidenceVariable;
  }

  /**
   * Create a deep clone of this EvidenceVariable
   */
  clone(): EvidenceVariable {
    return new EvidenceVariable(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariable
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariable'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
