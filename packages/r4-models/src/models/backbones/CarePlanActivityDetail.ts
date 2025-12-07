import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CarePlanActivityKindType,
  CarePlanActivityStatusType,
  ICarePlanActivityDetail,
  ICodeableConcept,
  IElement,
  IPeriod,
  IQuantity,
  IReference,
  ITiming,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CarePlanActivityDetail */
const CARE_PLAN_ACTIVITY_DETAIL_PROPERTIES = [
  'kind',
  '_kind',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'code',
  'reasonCode',
  'reasonReference',
  'goal',
  'status',
  '_status',
  'statusReason',
  'doNotPerform',
  '_doNotPerform',
  'scheduledTiming',
  'scheduledPeriod',
  'scheduledString',
  '_scheduledString',
  'location',
  'performer',
  'productCodeableConcept',
  'productReference',
  'dailyAmount',
  'quantity',
  'description',
  '_description',
] as const;

/**
 * CarePlanActivityDetail - In-line definition of activity
 *
 * @see https://hl7.org/fhir/R4/careplanactivitydetail.html
 *
 * @example
 * const carePlanActivityDetail = new CarePlanActivityDetail({
 *   // ... properties
 * });
 */
export class CarePlanActivityDetail extends BackboneElement implements ICarePlanActivityDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ServiceRequest | VisionPrescription */
  kind?: CarePlanActivityKindType;

  /** Extension for kind */
  _kind?: IElement;

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Detail type of activity */
  code?: ICodeableConcept;

  /** Why activity should be done or why activity was prohibited */
  reasonCode?: ICodeableConcept[];

  /** Why activity is needed */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Goals this activity relates to */
  goal?: IReference<'Goal'>[];

  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
  status: CarePlanActivityStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** If true, activity is prohibiting action */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** When activity is to occur */
  scheduledTiming?: ITiming;

  /** When activity is to occur */
  scheduledPeriod?: IPeriod;

  /** When activity is to occur */
  scheduledString?: string;

  /** Extension for scheduledString */
  _scheduledString?: IElement;

  /** Where it should happen */
  location?: IReference<'Location'>;

  /** Who will be responsible? */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'RelatedPerson' | 'Patient' | 'CareTeam' | 'HealthcareService' | 'Device'>[];

  /** What is to be administered/supplied */
  productCodeableConcept?: ICodeableConcept;

  /** What is to be administered/supplied */
  productReference?: IReference;

  /** How to consume/day? */
  dailyAmount?: IQuantity;

  /** How much to administer/supply/consume */
  quantity?: IQuantity;

  /** Extra info describing activity to perform */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICarePlanActivityDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CARE_PLAN_ACTIVITY_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CarePlanActivityDetail from a JSON object
   */
  static fromJSON(json: ICarePlanActivityDetail): CarePlanActivityDetail {
    return new CarePlanActivityDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CarePlanActivityDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICarePlanActivityDetail>): CarePlanActivityDetail {
    return new CarePlanActivityDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CarePlanActivityDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICarePlanActivityDetail) => Partial<ICarePlanActivityDetail>): CarePlanActivityDetail {
    const currentData = this.toJSON();
    return new CarePlanActivityDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICarePlanActivityDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICarePlanActivityDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CARE_PLAN_ACTIVITY_DETAIL_PROPERTIES);
    return result as ICarePlanActivityDetail;
  }

  /**
   * Create a deep clone of this CarePlanActivityDetail
   */
  clone(): CarePlanActivityDetail {
    return new CarePlanActivityDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CarePlanActivityDetail
   */
  toString(): string {
    const parts: string[] = ['CarePlanActivityDetail'];
    return parts.join(', ');
  }
}
