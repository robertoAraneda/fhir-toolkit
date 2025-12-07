import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceUdiCarrier } from '../../models/backbones/DeviceUdiCarrier.js';
import type {
  IDeviceUdiCarrier,
  UDIEntryTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceUdiCarrierBuilder - Fluent builder for DeviceUdiCarrier backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceUdiCarrier = new DeviceUdiCarrierBuilder()
 *   .setDeviceIdentifier(value)
 *   .build();
 */
export class DeviceUdiCarrierBuilder extends BackboneElementBuilder<DeviceUdiCarrier, IDeviceUdiCarrier> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set deviceIdentifier
   * Mandatory fixed portion of UDI
   */
  setDeviceIdentifier(deviceIdentifier: string): this {
    this.data.deviceIdentifier = deviceIdentifier;
    return this;
  }

  /**
   * Set issuer
   * UDI Issuing Organization
   */
  setIssuer(issuer: string): this {
    this.data.issuer = issuer;
    return this;
  }

  /**
   * Set jurisdiction
   * Regional UDI authority
   */
  setJurisdiction(jurisdiction: string): this {
    this.data.jurisdiction = jurisdiction;
    return this;
  }

  /**
   * Set carrierAIDC
   * UDI Machine Readable Barcode String
   */
  setCarrierAIDC(carrierAIDC: string): this {
    this.data.carrierAIDC = carrierAIDC;
    return this;
  }

  /**
   * Set carrierHRF
   * UDI Human Readable Barcode String
   */
  setCarrierHRF(carrierHRF: string): this {
    this.data.carrierHRF = carrierHRF;
    return this;
  }

  /**
   * Set entryType
   * barcode | rfid | manual | card | self-reported | electronic-transmission | unknown
   */
  setEntryType(entryType: UDIEntryTypeType): this {
    this.data.entryType = entryType;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceUdiCarrier instance
   */
  build(): DeviceUdiCarrier {
    return new DeviceUdiCarrier(this.data);
  }

  /**
   * Build and validate the DeviceUdiCarrier instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceUdiCarrier> {
    const deviceUdiCarrier = this.build();
    await deviceUdiCarrier.validateOrThrow();
    return deviceUdiCarrier;
  }
}
