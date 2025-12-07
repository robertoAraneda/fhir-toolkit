import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionClassification } from '../../models/backbones/DeviceDefinitionClassification.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionClassification,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionClassificationBuilder - Fluent builder for DeviceDefinitionClassification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionClassification = new DeviceDefinitionClassificationBuilder()
 *   .setType(value)
 *   .addJustification({ ... })
 *   .build();
 */
export class DeviceDefinitionClassificationBuilder extends BackboneElementBuilder<DeviceDefinitionClassification, IDeviceDefinitionClassification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * A classification or risk class of the device model
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add justification
   * Further information qualifying this classification of the device model
   */
  addJustification(justification: IRelatedArtifact): this {
    return this.addToArray('justification', justification);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionClassification instance
   */
  build(): DeviceDefinitionClassification {
    return new DeviceDefinitionClassification(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionClassification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionClassification> {
    const deviceDefinitionClassification = this.build();
    await deviceDefinitionClassification.validateOrThrow();
    return deviceDefinitionClassification;
  }
}
