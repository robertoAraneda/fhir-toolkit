import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceAssociationOperation } from '../../models/backbones/DeviceAssociationOperation.js';
import type {
  ICodeableConcept,
  IDeviceAssociationOperation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceAssociationOperationBuilder - Fluent builder for DeviceAssociationOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceAssociationOperation = new DeviceAssociationOperationBuilder()
 *   .setStatus(value)
 *   .addOperator({ ... })
 *   .build();
 */
export class DeviceAssociationOperationBuilder extends BackboneElementBuilder<DeviceAssociationOperation, IDeviceAssociationOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * Device operational condition
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set period
   * Begin and end dates and times for the device's operation
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add operator
   * The individual performing the action enabled by the device
   */
  addOperator(operator: IReference<'Patient' | 'Practitioner' | 'RelatedPerson'>): this {
    return this.addToArray('operator', operator);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceAssociationOperation instance
   */
  build(): DeviceAssociationOperation {
    return new DeviceAssociationOperation(this.data);
  }

  /**
   * Build and validate the DeviceAssociationOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceAssociationOperation> {
    const deviceAssociationOperation = this.build();
    await deviceAssociationOperation.validateOrThrow();
    return deviceAssociationOperation;
  }
}
