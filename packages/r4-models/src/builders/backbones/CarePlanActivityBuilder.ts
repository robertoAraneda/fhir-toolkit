import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CarePlanActivity } from '../../models/backbones/CarePlanActivity.js';
import type {
  IAnnotation,
  ICarePlanActivity,
  ICarePlanActivityDetail,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CarePlanActivityBuilder - Fluent builder for CarePlanActivity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const carePlanActivity = new CarePlanActivityBuilder()
 *   .setReference(value)
 *   .addProgress({ ... })
 *   .build();
 */
export class CarePlanActivityBuilder extends BackboneElementBuilder<CarePlanActivity, ICarePlanActivity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Activity details defined in specific resource
   */
  setReference(reference: IReference<'Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription' | 'RequestGroup'>): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set detail
   * In-line definition of activity
   */
  setDetail(detail: ICarePlanActivityDetail): this {
    this.data.detail = detail;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set outcome choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOutcome('CodeableConcept', value)
   */
  setOutcome<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `outcome${type}` as keyof ICarePlanActivity;
    const otherKeys: (keyof ICarePlanActivity)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('outcomeCodeableConcept' as keyof ICarePlanActivity);
      otherKeys.push('_outcomeCodeableConcept' as keyof ICarePlanActivity);
    }
    if (type !== 'Reference') {
      otherKeys.push('outcomeReference' as keyof ICarePlanActivity);
      otherKeys.push('_outcomeReference' as keyof ICarePlanActivity);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

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
