import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionRegulatoryIdentifier } from '../../models/backbones/DeviceDefinitionRegulatoryIdentifier.js';
import type {
  DeviceDefinitionRegulatoryIdentifierTypeType,
  IDeviceDefinitionRegulatoryIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionRegulatoryIdentifierBuilder - Fluent builder for DeviceDefinitionRegulatoryIdentifier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionRegulatoryIdentifier = new DeviceDefinitionRegulatoryIdentifierBuilder()
 *   .setType(value)
 *   .build();
 */
export class DeviceDefinitionRegulatoryIdentifierBuilder extends BackboneElementBuilder<DeviceDefinitionRegulatoryIdentifier, IDeviceDefinitionRegulatoryIdentifier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * basic | master | license
   */
  setType(type: DeviceDefinitionRegulatoryIdentifierTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set deviceIdentifier
   * The identifier itself
   */
  setDeviceIdentifier(deviceIdentifier: string): this {
    this.data.deviceIdentifier = deviceIdentifier;
    return this;
  }

  /**
   * Set issuer
   * The organization that issued this identifier
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
   * Build the DeviceDefinitionRegulatoryIdentifier instance
   */
  build(): DeviceDefinitionRegulatoryIdentifier {
    return new DeviceDefinitionRegulatoryIdentifier(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionRegulatoryIdentifier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionRegulatoryIdentifier> {
    const deviceDefinitionRegulatoryIdentifier = this.build();
    await deviceDefinitionRegulatoryIdentifier.validateOrThrow();
    return deviceDefinitionRegulatoryIdentifier;
  }
}
