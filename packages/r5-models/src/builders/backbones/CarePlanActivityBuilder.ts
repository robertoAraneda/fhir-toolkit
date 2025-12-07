import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CarePlanActivity } from '../../models/backbones/CarePlanActivity.js';
import type {
  IAnnotation,
  ICarePlanActivity,
  ICodeableReference,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CarePlanActivityBuilder - Fluent builder for CarePlanActivity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const carePlanActivity = new CarePlanActivityBuilder()
 *   .setPlannedActivityReference(value)
 *   .addPerformedActivity({ ... })
 *   .build();
 */
export class CarePlanActivityBuilder extends BackboneElementBuilder<CarePlanActivity, ICarePlanActivity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set plannedActivityReference
   * Activity that is intended to be part of the care plan
   */
  setPlannedActivityReference(plannedActivityReference: IReference<'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription' | 'RequestOrchestration' | 'ImmunizationRecommendation' | 'SupplyRequest'>): this {
    this.data.plannedActivityReference = plannedActivityReference;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add performedActivity
   * Results of the activity (concept, or Appointment, Encounter, Procedure, etc.)
   */
  addPerformedActivity(performedActivity: ICodeableReference): this {
    return this.addToArray('performedActivity', performedActivity);
  }

  /**
   * Add progress
   * Comments about the activity status/progress
   */
  addProgress(progress: IAnnotation): this {
    return this.addToArray('progress', progress);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CarePlanActivity instance
   */
  build(): CarePlanActivity {
    return new CarePlanActivity(this.data);
  }

  /**
   * Build and validate the CarePlanActivity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CarePlanActivity> {
    const carePlanActivity = this.build();
    await carePlanActivity.validateOrThrow();
    return carePlanActivity;
  }
}
