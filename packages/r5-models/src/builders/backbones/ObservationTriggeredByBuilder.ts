import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationTriggeredBy } from '../../models/backbones/ObservationTriggeredBy.js';
import type {
  IObservationTriggeredBy,
  IReference,
  TriggeredBytypeType,
} from '@fhir-toolkit/r5-types';

/**
 * ObservationTriggeredByBuilder - Fluent builder for ObservationTriggeredBy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationTriggeredBy = new ObservationTriggeredByBuilder()
 *   .setObservation(value)
 *   .build();
 */
export class ObservationTriggeredByBuilder extends BackboneElementBuilder<ObservationTriggeredBy, IObservationTriggeredBy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set observation
   * Triggering observation
   */
  setObservation(observation: IReference<'Observation'>): this {
    this.data.observation = observation;
    return this;
  }

  /**
   * Set type
   * reflex | repeat | re-run
   */
  setType(type: TriggeredBytypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set reason
   * Reason that the observation was triggered
   */
  setReason(reason: string): this {
    this.data.reason = reason;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationTriggeredBy instance
   */
  build(): ObservationTriggeredBy {
    return new ObservationTriggeredBy(this.data);
  }

  /**
   * Build and validate the ObservationTriggeredBy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationTriggeredBy> {
    const observationTriggeredBy = this.build();
    await observationTriggeredBy.validateOrThrow();
    return observationTriggeredBy;
  }
}
