import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionHasPart } from '../../models/backbones/DeviceDefinitionHasPart.js';
import type {
  IDeviceDefinitionHasPart,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionHasPartBuilder - Fluent builder for DeviceDefinitionHasPart backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionHasPart = new DeviceDefinitionHasPartBuilder()
 *   .setReference(value)
 *   .build();
 */
export class DeviceDefinitionHasPartBuilder extends BackboneElementBuilder<DeviceDefinitionHasPart, IDeviceDefinitionHasPart> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Reference to the part
   */
  setReference(reference: IReference<'DeviceDefinition'>): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set count
   * Number of occurrences of the part
   */
  setCount(count: number): this {
    this.data.count = count;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionHasPart instance
   */
  build(): DeviceDefinitionHasPart {
    return new DeviceDefinitionHasPart(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionHasPart instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionHasPart> {
    const deviceDefinitionHasPart = this.build();
    await deviceDefinitionHasPart.validateOrThrow();
    return deviceDefinitionHasPart;
  }
}
