import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ProcedureFocalDevice } from '../../models/backbones/ProcedureFocalDevice.js';
import type {
  ICodeableConcept,
  IProcedureFocalDevice,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ProcedureFocalDeviceBuilder - Fluent builder for ProcedureFocalDevice backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const procedureFocalDevice = new ProcedureFocalDeviceBuilder()
 *   .setAction(value)
 *   .build();
 */
export class ProcedureFocalDeviceBuilder extends BackboneElementBuilder<ProcedureFocalDevice, IProcedureFocalDevice> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set action
   * Kind of change to device
   */
  setAction(action: ICodeableConcept): this {
    this.data.action = action;
    return this;
  }

  /**
   * Set manipulated
   * Device that was changed
   */
  setManipulated(manipulated: IReference<'Device'>): this {
    this.data.manipulated = manipulated;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ProcedureFocalDevice instance
   */
  build(): ProcedureFocalDevice {
    return new ProcedureFocalDevice(this.data);
  }

  /**
   * Build and validate the ProcedureFocalDevice instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ProcedureFocalDevice> {
    const procedureFocalDevice = this.build();
    await procedureFocalDevice.validateOrThrow();
    return procedureFocalDevice;
  }
}
