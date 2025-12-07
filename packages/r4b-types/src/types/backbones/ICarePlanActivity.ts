import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICarePlanActivityDetail } from './ICarePlanActivityDetail.js';

/**
 * CarePlanActivity Interface
 * 
 * Action to occur as part of plan
 * 
 *
 * @see https://hl7.org/fhir/R4/careplanactivity.html
 */
export interface ICarePlanActivity extends IBackboneElement {
  /**
   * Results of the activity
   */
  outcomeCodeableConcept?: ICodeableConcept[];

  /**
   * Appointment, Encounter, Procedure, etc.
   */
  outcomeReference?: IReference<'Resource'>[];

  /**
   * Comments about the activity status/progress
   */
  progress?: IAnnotation[];

  /**
   * Activity details defined in specific resource
   */
  reference?: IReference<'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription' | 'RequestGroup'>;

  /**
   * In-line definition of activity
   */
  detail?: ICarePlanActivityDetail;

}
