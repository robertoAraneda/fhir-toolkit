import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceConformsTo } from '../../models/backbones/DeviceConformsTo.js';
import type {
  ICodeableConcept,
  IDeviceConformsTo,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceConformsToBuilder - Fluent builder for DeviceConformsTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceConformsTo = new DeviceConformsToBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class DeviceConformsToBuilder extends BackboneElementBuilder<DeviceConformsTo, IDeviceConformsTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Describes the common type of the standard, specification, or formal guidance.  communication | performance | measurement
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set specification
   * Identifies the standard, specification, or formal guidance that the device adheres to
   */
  setSpecification(specification: ICodeableConcept): this {
    this.data.specification = specification;
    return this;
  }

  /**
   * Set version
   * Specific form or variant of the standard
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceConformsTo instance
   */
  build(): DeviceConformsTo {
    return new DeviceConformsTo(this.data);
  }

  /**
   * Build and validate the DeviceConformsTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceConformsTo> {
    const deviceConformsTo = this.build();
    await deviceConformsTo.validateOrThrow();
    return deviceConformsTo;
  }
}
