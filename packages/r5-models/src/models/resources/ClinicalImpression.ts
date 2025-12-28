import { DomainResource } from '../base/DomainResource.js';
import type {
  EventStatusType,
  IAnnotation,
  IClinicalImpression,
  IClinicalImpressionFinding,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClinicalImpression */
const CLINICAL_IMPRESSION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'statusReason',
  'description',
  '_description',
  'subject',
  'encounter',
  'effectiveDateTime',
  '_effectiveDateTime',
  'effectivePeriod',
  'date',
  '_date',
  'performer',
  'previous',
  'problem',
  'changePattern',
  'protocol',
  '_protocol',
  'summary',
  '_summary',
  'finding',
  'prognosisCodeableConcept',
  'prognosisReference',
  'supportingInfo',
  'note',
] as const;

/**
 * ClinicalImpression - A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 *
 * @see https://hl7.org/fhir/R5/clinicalimpression.html
 *
 * @example
 * const clinicalImpression = new ClinicalImpression({
 *   // ... properties
 * });
 */
export class ClinicalImpression extends DomainResource implements IClinicalImpression {
  readonly resourceType = 'ClinicalImpression' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
  status: EventStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** Why/how the assessment was performed */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Patient or group assessed */
  subject: IReference<'Patient' | 'Group'>;

  /** The Encounter during which this ClinicalImpression was created */
  encounter?: IReference<'Encounter'>;

  /** Time of assessment */
  effectiveDateTime?: string;

  /** Extension for effectiveDateTime */
  _effectiveDateTime?: IElement;

  /** Time of assessment */
  effectivePeriod?: IPeriod;

  /** When the assessment was documented */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** The clinician performing the assessment */
  performer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Reference to last assessment */
  previous?: IReference<'ClinicalImpression'>;

  /** Relevant impressions of patient state */
  problem?: IReference<'Condition' | 'AllergyIntolerance'>[];

  /** Change in the status/pattern of a subject's condition since previously assessed, such as worsening, improving, or no change */
  changePattern?: ICodeableConcept;

  /** Clinical Protocol followed */
  protocol?: string[];

  /** Extension for protocol */
  _protocol?: IElement;

  /** Summary of the assessment */
  summary?: string;

  /** Extension for summary */
  _summary?: IElement;

  /** Possible or likely findings and diagnoses */
  finding?: IClinicalImpressionFinding[];

  /** Estimate of likely outcome */
  prognosisCodeableConcept?: ICodeableConcept[];

  /** RiskAssessment expressing likely outcome */
  prognosisReference?: IReference<'RiskAssessment'>[];

  /** Information supporting the clinical impression */
  supportingInfo?: IReference<'Resource'>[];

  /** Comments made about the ClinicalImpression */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IClinicalImpression>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_IMPRESSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalImpression from a JSON object
   */
  static fromJSON(json: IClinicalImpression): ClinicalImpression {
    return new ClinicalImpression(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalImpression with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalImpression>): ClinicalImpression {
    return new ClinicalImpression({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalImpression by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalImpression) => Partial<IClinicalImpression>): ClinicalImpression {
    const currentData = this.toJSON();
    return new ClinicalImpression({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalImpression)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalImpression {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CLINICAL_IMPRESSION_PROPERTIES);
    return result as IClinicalImpression;
  }

  /**
   * Create a deep clone of this ClinicalImpression
   */
  clone(): ClinicalImpression {
    return new ClinicalImpression(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalImpression
   */
  toString(): string {
    const parts: string[] = ['ClinicalImpression'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
