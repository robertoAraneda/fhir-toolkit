import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionUdiDeviceIdentifier } from '../../models/backbones/DeviceDefinitionUdiDeviceIdentifier.js';
import type {
  IDeviceDefinitionUdiDeviceIdentifier,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceDefinitionUdiDeviceIdentifierBuilder - Fluent builder for DeviceDefinitionUdiDeviceIdentifier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionUdiDeviceIdentifier = new DeviceDefinitionUdiDeviceIdentifierBuilder()
 *   .setDeviceIdentifier(value)
 *   .build();
 */
export class DeviceDefinitionUdiDeviceIdentifierBuilder extends BackboneElementBuilder<DeviceDefinitionUdiDeviceIdentifier, IDeviceDefinitionUdiDeviceIdentifier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set deviceIdentifier
   * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier
   */
  setDeviceIdentifier(deviceIdentifier: string): this {
    this.data.deviceIdentifier = deviceIdentifier;
    return this;
  }

  /**
   * Set issuer
   * The organization that assigns the identifier algorithm
   */
  setIssuer(issuer: string): this {
    this.data.issuer = issuer;
    return this;
  }

  /**
   * Set jurisdiction
   * The jurisdiction to which the deviceIdentifier applies
   */
  setJurisdiction(jurisdiction: string): this {
    this.data.jurisdiction = jurisdiction;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionUdiDeviceIdentifier instance
   */
  build(): DeviceDefinitionUdiDeviceIdentifier {
    return new DeviceDefinitionUdiDeviceIdentifier(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionUdiDeviceIdentifier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionUdiDeviceIdentifier> {
    const deviceDefinitionUdiDeviceIdentifier = this.build();
    await deviceDefinitionUdiDeviceIdentifier.validateOrThrow();
    return deviceDefinitionUdiDeviceIdentifier;
  }
}
