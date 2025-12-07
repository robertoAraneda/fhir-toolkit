import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * CarePlanActivity Interface
 * 
 * Action to occur or has occurred as part of plan
 * 
 *
 * @see https://hl7.org/fhir/R4/careplanactivity.html
 */
export interface ICarePlanActivity extends IBackboneElement {
  /**
   * Results of the activity (concept, or Appointment, Encounter, Procedure, etc.)
   */
  performedActivity?: ICodeableReference[];

  /**
   * Comments about the activity status/progress
   */
  progress?: IAnnotation[];

  /**
   * Activity that is intended to be part of the care plan
   */
  plannedActivityReference?: IReference<'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription' | 'RequestOrchestration' | 'ImmunizationRecommendation' | 'SupplyRequest'>;

}
