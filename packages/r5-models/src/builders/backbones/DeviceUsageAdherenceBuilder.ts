import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceUsageAdherence } from '../../models/backbones/DeviceUsageAdherence.js';
import type {
  ICodeableConcept,
  IDeviceUsageAdherence,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceUsageAdherenceBuilder - Fluent builder for DeviceUsageAdherence backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceUsageAdherence = new DeviceUsageAdherenceBuilder()
 *   .setCode(value)
 *   .addReason({ ... })
 *   .build();
 */
export class DeviceUsageAdherenceBuilder extends BackboneElementBuilder<DeviceUsageAdherence, IDeviceUsageAdherence> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * always | never | sometimes
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add reason
   * lost | stolen | prescribed | broken | burned | forgot
   */
  addReason(reason: ICodeableConcept): this {
    return this.addToArray('reason', reason);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceUsageAdherence instance
   */
  build(): DeviceUsageAdherence {
    return new DeviceUsageAdherence(this.data);
  }

  /**
   * Build and validate the DeviceUsageAdherence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceUsageAdherence> {
    const deviceUsageAdherence = this.build();
    await deviceUsageAdherence.validateOrThrow();
    return deviceUsageAdherence;
  }
}
