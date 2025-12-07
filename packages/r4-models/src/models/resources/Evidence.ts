import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IEvidence,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Evidence */
const EVIDENCE_PROPERTIES = [
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
  'exposureBackground',
  'exposureVariant',
  'outcome',
] as const;

/**
 * Evidence - The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 *
 * @see https://hl7.org/fhir/R4/evidence.html
 *
 * @example
 * const evidence = new Evidence({
 *   // ... properties
 * });
 */
export class Evidence extends DomainResource implements IEvidence {
  readonly resourceType = 'Evidence' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this evidence, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the evidence */
  identifier?: IIdentifier[];

  /** Business version of the evidence */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this evidence (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this evidence (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Title for use in informal contexts */
  shortTitle?: string;

  /** Extension for shortTitle */
  _shortTitle?: IElement;

  /** Subordinate title of the Evidence */
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

  /** Natural language description of the evidence */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for evidence (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the evidence was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the evidence was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the evidence is expected to be used */
  effectivePeriod?: IPeriod;

  /** The category of the Evidence, such as Education, Treatment, Assessment, etc. */
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

  /** What population? */
  exposureBackground: IReference<'EvidenceVariable'>;

  /** What exposure? */
  exposureVariant?: IReference<'EvidenceVariable'>[];

  /** What outcome? */
  outcome?: IReference<'EvidenceVariable'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEvidence>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Evidence from a JSON object
   */
  static fromJSON(json: IEvidence): Evidence {
    return new Evidence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Evidence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidence>): Evidence {
    return new Evidence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Evidence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidence) => Partial<IEvidence>): Evidence {
    const currentData = this.toJSON();
    return new Evidence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidence {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EVIDENCE_PROPERTIES);
    return result as IEvidence;
  }

  /**
   * Create a deep clone of this Evidence
   */
  clone(): Evidence {
    return new Evidence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Evidence
   */
  toString(): string {
    const parts: string[] = ['Evidence'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
