import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRiskAssessment,
  IRiskAssessmentPrediction,
  ObservationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RiskAssessment */
const RISK_ASSESSMENT_PROPERTIES = [
  'identifier',
  'basedOn',
  'parent',
  'status',
  '_status',
  'method',
  'code',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'condition',
  'performer',
  'reasonCode',
  'reasonReference',
  'basis',
  'prediction',
  'mitigation',
  '_mitigation',
  'note',
] as const;

/**
 * RiskAssessment - An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 *
 * @see https://hl7.org/fhir/R4/riskassessment.html
 *
 * @example
 * const riskAssessment = new RiskAssessment({
 *   resourceType: 'RiskAssessment',
 *   // ... properties
 * });
 */
export class RiskAssessment extends DomainResource implements IRiskAssessment {
  readonly resourceType = 'RiskAssessment' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier for the assessment */
  identifier?: IIdentifier[];

  /** Request fulfilled by this assessment */
  basedOn?: IReference<'Resource'>;

  /** Part of this occurrence */
  parent?: IReference<'Resource'>;

  /** registered | preliminary | final | amended + */
  status: ObservationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Evaluation mechanism */
  method?: ICodeableConcept;

  /** Type of assessment */
  code?: ICodeableConcept;

  /** Who/what does assessment apply to? */
  subject: IReference<'Patient' | 'Group'>;

  /** Where was assessment performed? */
  encounter?: IReference<'Encounter'>;

  /** When was assessment made? */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When was assessment made? */
  occurrencePeriod?: IPeriod;

  /** Condition assessed */
  condition?: IReference<'Condition'>;

  /** Who did assessment? */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Device'>;

  /** Why the assessment was necessary? */
  reasonCode?: ICodeableConcept[];

  /** Why the assessment was necessary? */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Information used in assessment */
  basis?: IReference<'Resource'>[];

  /** Outcome predicted */
  prediction?: IRiskAssessmentPrediction[];

  /** How to reduce risk */
  mitigation?: string;

  /** Extension for mitigation */
  _mitigation?: IElement;

  /** Comments on the risk assessment */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskAssessment>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_ASSESSMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskAssessment from a JSON object
   */
  static fromJSON(json: IRiskAssessment): RiskAssessment {
    return new RiskAssessment(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskAssessment with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskAssessment>): RiskAssessment {
    return new RiskAssessment({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskAssessment by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskAssessment) => Partial<IRiskAssessment>): RiskAssessment {
    const currentData = this.toJSON();
    return new RiskAssessment({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskAssessment)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskAssessment {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RISK_ASSESSMENT_PROPERTIES);
    return result as IRiskAssessment;
  }

  /**
   * Create a deep clone of this RiskAssessment
   */
  clone(): RiskAssessment {
    return new RiskAssessment(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskAssessment
   */
  toString(): string {
    const parts: string[] = ['RiskAssessment'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
