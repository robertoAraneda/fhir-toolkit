import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IEffectEvidenceSynthesis,
  IEffectEvidenceSynthesisCertainty,
  IEffectEvidenceSynthesisEffectEstimate,
  IEffectEvidenceSynthesisResultsByExposure,
  IEffectEvidenceSynthesisSampleSize,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesis */
const EFFECT_EVIDENCE_SYNTHESIS_PROPERTIES = [
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
  'exposureAlternative',
  'outcome',
  'sampleSize',
  'resultsByExposure',
  'effectEstimate',
  'certainty',
] as const;

/**
 * EffectEvidenceSynthesis - The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesis.html
 *
 * @example
 * const effectEvidenceSynthesis = new EffectEvidenceSynthesis({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesis extends DomainResource implements IEffectEvidenceSynthesis {
  readonly resourceType = 'EffectEvidenceSynthesis' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the effect evidence synthesis */
  identifier?: IIdentifier[];

  /** Business version of the effect evidence synthesis */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this effect evidence synthesis (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this effect evidence synthesis (human friendly) */
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

  /** Natural language description of the effect evidence synthesis */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for effect evidence synthesis (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the effect evidence synthesis was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the effect evidence synthesis was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the effect evidence synthesis is expected to be used */
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
  exposure: IReference<'EvidenceVariable'>;

  /** What comparison exposure? */
  exposureAlternative: IReference<'EvidenceVariable'>;

  /** What outcome? */
  outcome: IReference<'EvidenceVariable'>;

  /** What sample size was involved? */
  sampleSize?: IEffectEvidenceSynthesisSampleSize;

  /** What was the result per exposure? */
  resultsByExposure?: IEffectEvidenceSynthesisResultsByExposure[];

  /** What was the estimated effect */
  effectEstimate?: IEffectEvidenceSynthesisEffectEstimate[];

  /** How certain is the effect */
  certainty?: IEffectEvidenceSynthesisCertainty[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEffectEvidenceSynthesis>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesis from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesis): EffectEvidenceSynthesis {
    return new EffectEvidenceSynthesis(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesis with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesis>): EffectEvidenceSynthesis {
    return new EffectEvidenceSynthesis({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesis by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesis) => Partial<IEffectEvidenceSynthesis>): EffectEvidenceSynthesis {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesis({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesis)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesis {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_PROPERTIES);
    return result as IEffectEvidenceSynthesis;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesis
   */
  clone(): EffectEvidenceSynthesis {
    return new EffectEvidenceSynthesis(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesis
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesis'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
