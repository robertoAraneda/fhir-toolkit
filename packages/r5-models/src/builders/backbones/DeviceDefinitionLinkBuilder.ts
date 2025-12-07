import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionLink } from '../../models/backbones/DeviceDefinitionLink.js';
import type {
  ICodeableReference,
  ICoding,
  IDeviceDefinitionLink,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionLinkBuilder - Fluent builder for DeviceDefinitionLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionLink = new DeviceDefinitionLinkBuilder()
 *   .setRelation(value)
 *   .build();
 */
export class DeviceDefinitionLinkBuilder extends BackboneElementBuilder<DeviceDefinitionLink, IDeviceDefinitionLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relation
   * The type indicates the relationship of the related device to the device instance
   */
  setRelation(relation: ICoding): this {
    this.data.relation = relation;
    return this;
  }

  /**
   * Set relatedDevice
   * A reference to the linked device
   */
  setRelatedDevice(relatedDevice: ICodeableReference): this {
    this.data.relatedDevice = relatedDevice;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionLink instance
   */
  build(): DeviceDefinitionLink {
    return new DeviceDefinitionLink(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionLink instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionLink> {
    const deviceDefinitionLink = this.build();
    await deviceDefinitionLink.validateOrThrow();
    return deviceDefinitionLink;
  }
}
