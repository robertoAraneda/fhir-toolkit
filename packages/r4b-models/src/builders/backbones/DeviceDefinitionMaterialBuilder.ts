import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionMaterial } from '../../models/backbones/DeviceDefinitionMaterial.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionMaterial,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceDefinitionMaterialBuilder - Fluent builder for DeviceDefinitionMaterial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionMaterial = new DeviceDefinitionMaterialBuilder()
 *   .setSubstance(value)
 *   .build();
 */
export class DeviceDefinitionMaterialBuilder extends BackboneElementBuilder<DeviceDefinitionMaterial, IDeviceDefinitionMaterial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set substance
   * The substance
   */
  setSubstance(substance: ICodeableConcept): this {
    this.data.substance = substance;
    return this;
  }

  /**
   * Set alternate
   * Indicates an alternative material of the device
   */
  setAlternate(alternate: boolean): this {
    this.data.alternate = alternate;
    return this;
  }

  /**
   * Set allergenicIndicator
   * Whether the substance is a known or suspected allergen
   */
  setAllergenicIndicator(allergenicIndicator: boolean): this {
    this.data.allergenicIndicator = allergenicIndicator;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionMaterial instance
   */
  build(): DeviceDefinitionMaterial {
    return new DeviceDefinitionMaterial(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionMaterial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionMaterial> {
    const deviceDefinitionMaterial = this.build();
    await deviceDefinitionMaterial.validateOrThrow();
    return deviceDefinitionMaterial;
  }
}
