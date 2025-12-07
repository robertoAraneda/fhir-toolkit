import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionUdiDeviceIdentifierMarketDistribution } from '../../models/backbones/DeviceDefinitionUdiDeviceIdentifierMarketDistribution.js';
import type {
  IDeviceDefinitionUdiDeviceIdentifierMarketDistribution,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionUdiDeviceIdentifierMarketDistributionBuilder - Fluent builder for DeviceDefinitionUdiDeviceIdentifierMarketDistribution backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionUdiDeviceIdentifierMarketDistribution = new DeviceDefinitionUdiDeviceIdentifierMarketDistributionBuilder()
 *   .setMarketPeriod(value)
 *   .build();
 */
export class DeviceDefinitionUdiDeviceIdentifierMarketDistributionBuilder extends BackboneElementBuilder<DeviceDefinitionUdiDeviceIdentifierMarketDistribution, IDeviceDefinitionUdiDeviceIdentifierMarketDistribution> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set marketPeriod
   * Begin and end dates for the commercial distribution of the device
   */
  setMarketPeriod(marketPeriod: IPeriod): this {
    this.data.marketPeriod = marketPeriod;
    return this;
  }

  /**
   * Set subJurisdiction
   * National state or territory where the device is commercialized
   */
  setSubJurisdiction(subJurisdiction: string): this {
    this.data.subJurisdiction = subJurisdiction;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionUdiDeviceIdentifierMarketDistribution instance
   */
  build(): DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    return new DeviceDefinitionUdiDeviceIdentifierMarketDistribution(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionUdiDeviceIdentifierMarketDistribution instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionUdiDeviceIdentifierMarketDistribution> {
    const deviceDefinitionUdiDeviceIdentifierMarketDistribution = this.build();
    await deviceDefinitionUdiDeviceIdentifierMarketDistribution.validateOrThrow();
    return deviceDefinitionUdiDeviceIdentifierMarketDistribution;
  }
}
