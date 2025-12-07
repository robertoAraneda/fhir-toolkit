import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IRiskEvidenceSynthesis,
  IRiskEvidenceSynthesisCertainty,
  IRiskEvidenceSynthesisRiskEstimate,
  IRiskEvidenceSynthesisSampleSize,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RiskEvidenceSynthesis */
const RISK_EVIDENCE_SYNTHESIS_PROPERTIES = [
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
  'synthesisType',
  'studyType',
  'population',
  'exposure',
  'outcome',
  'sampleSize',
  'riskEstimate',
  'certainty',
] as const;

/**
 * RiskEvidenceSynthesis - The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesis.html
 *
 * @example
 * const riskEvidenceSynthesis = new RiskEvidenceSynthesis({
 *   // ... properties
 * });
 */
export class RiskEvidenceSynthesis extends DomainResource implements IRiskEvidenceSynthesis {
  readonly resourceType = 'RiskEvidenceSynthesis' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the risk evidence synthesis */
  identifier?: IIdentifier[];

  /** Business version of the risk evidence synthesis */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this risk evidence synthesis (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this risk evidence synthesis (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

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

  /** Natural language description of the risk evidence synthesis */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for risk evidence synthesis (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the risk evidence synthesis was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the risk evidence synthesis was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the risk evidence synthesis is expected to be used */
  effectivePeriod?: IPeriod;

  /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
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

  /** Type of synthesis */
  synthesisType?: ICodeableConcept;

  /** Type of study */
  studyType?: ICodeableConcept;

  /** What population? */
  population: IReference<'EvidenceVariable'>;

  /** What exposure? */
  exposure?: IReference<'EvidenceVariable'>;

  /** What outcome? */
  outcome: IReference<'EvidenceVariable'>;

  /** What sample size was involved? */
  sampleSize?: IRiskEvidenceSynthesisSampleSize;

  /** What was the estimated risk */
  riskEstimate?: IRiskEvidenceSynthesisRiskEstimate;

  /** How certain is the risk */
  certainty?: IRiskEvidenceSynthesisCertainty[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IRiskEvidenceSynthesis>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_EVIDENCE_SYNTHESIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskEvidenceSynthesis from a JSON object
   */
  static fromJSON(json: IRiskEvidenceSynthesis): RiskEvidenceSynthesis {
    return new RiskEvidenceSynthesis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskEvidenceSynthesis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskEvidenceSynthesis>): RiskEvidenceSynthesis {
    return new RiskEvidenceSynthesis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskEvidenceSynthesis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskEvidenceSynthesis) => Partial<IRiskEvidenceSynthesis>): RiskEvidenceSynthesis {
    const currentData = this.toJSON();
    return new RiskEvidenceSynthesis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskEvidenceSynthesis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskEvidenceSynthesis {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RISK_EVIDENCE_SYNTHESIS_PROPERTIES);
    return result as IRiskEvidenceSynthesis;
  }

  /**
   * Create a deep clone of this RiskEvidenceSynthesis
   */
  clone(): RiskEvidenceSynthesis {
    return new RiskEvidenceSynthesis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskEvidenceSynthesis
   */
  toString(): string {
    const parts: string[] = ['RiskEvidenceSynthesis'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
