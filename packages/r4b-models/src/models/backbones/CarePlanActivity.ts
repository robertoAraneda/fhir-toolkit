import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICarePlanActivity,
  ICarePlanActivityDetail,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CarePlanActivity */
const CARE_PLAN_ACTIVITY_PROPERTIES = [
  'outcomeCodeableConcept',
  'outcomeReference',
  'progress',
  'reference',
  'detail',
] as const;

/**
 * CarePlanActivity - Action to occur as part of plan
 *
 * @see https://hl7.org/fhir/R4B/careplanactivity.html
 *
 * @example
 * const carePlanActivity = new CarePlanActivity({
 *   // ... properties
 * });
 */
export class CarePlanActivity extends BackboneElement implements ICarePlanActivity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Results of the activity */
  outcomeCodeableConcept?: ICodeableConcept[];

  /** Appointment, Encounter, Procedure, etc. */
  outcomeReference?: IReference<'Resource'>[];

  /** Comments about the activity status/progress */
  progress?: IAnnotation[];

  /** Activity details defined in specific resource */
  reference?: IReference<'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription' | 'RequestGroup'>;

  /** In-line definition of activity */
  detail?: ICarePlanActivityDetail;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICarePlanActivity>) {
    super(data);
    if (data) {
      this.assignProps(data, CARE_PLAN_ACTIVITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CarePlanActivity from a JSON object
   */
  static fromJSON(json: ICarePlanActivity): CarePlanActivity {
    return new CarePlanActivity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CarePlanActivity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICarePlanActivity>): CarePlanActivity {
    return new CarePlanActivity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CarePlanActivity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICarePlanActivity) => Partial<ICarePlanActivity>): CarePlanActivity {
    const currentData = this.toJSON();
    return new CarePlanActivity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICarePlanActivity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICarePlanActivity {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CARE_PLAN_ACTIVITY_PROPERTIES);
    return result as ICarePlanActivity;
  }

  /**
   * Create a deep clone of this CarePlanActivity
   */
  clone(): CarePlanActivity {
    return new CarePlanActivity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CarePlanActivity
   */
  toString(): string {
    const parts: string[] = ['CarePlanActivity'];
    return parts.join(', ');
  }
}
