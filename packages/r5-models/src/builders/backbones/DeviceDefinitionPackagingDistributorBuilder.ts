import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionPackagingDistributor } from '../../models/backbones/DeviceDefinitionPackagingDistributor.js';
import type {
  IDeviceDefinitionPackagingDistributor,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionPackagingDistributorBuilder - Fluent builder for DeviceDefinitionPackagingDistributor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionPackagingDistributor = new DeviceDefinitionPackagingDistributorBuilder()
 *   .setName(value)
 *   .addOrganizationReference({ ... })
 *   .build();
 */
export class DeviceDefinitionPackagingDistributorBuilder extends BackboneElementBuilder<DeviceDefinitionPackagingDistributor, IDeviceDefinitionPackagingDistributor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Distributor's human-readable name
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add organizationReference
   * Distributor as an Organization resource
   */
  addOrganizationReference(organizationReference: IReference<'Organization'>): this {
    return this.addToArray('organizationReference', organizationReference);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionPackagingDistributor instance
   */
  build(): DeviceDefinitionPackagingDistributor {
    return new DeviceDefinitionPackagingDistributor(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionPackagingDistributor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionPackagingDistributor> {
    const deviceDefinitionPackagingDistributor = this.build();
    await deviceDefinitionPackagingDistributor.validateOrThrow();
    return deviceDefinitionPackagingDistributor;
  }
}
