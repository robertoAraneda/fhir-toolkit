import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDispensePerformer } from '../../models/backbones/DeviceDispensePerformer.js';
import type {
  ICodeableConcept,
  IDeviceDispensePerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDispensePerformerBuilder - Fluent builder for DeviceDispensePerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDispensePerformer = new DeviceDispensePerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class DeviceDispensePerformerBuilder extends BackboneElementBuilder<DeviceDispensePerformer, IDeviceDispensePerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Who performed the dispense and what they did
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Individual who was performing
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDispensePerformer instance
   */
  build(): DeviceDispensePerformer {
    return new DeviceDispensePerformer(this.data);
  }

  /**
   * Build and validate the DeviceDispensePerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDispensePerformer> {
    const deviceDispensePerformer = this.build();
    await deviceDispensePerformer.validateOrThrow();
    return deviceDispensePerformer;
  }
}
