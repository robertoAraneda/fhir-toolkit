import type { IBackboneElement, IElement } from '../../base/index.js';
import type { UDIEntryTypeType } from '../../valuesets/index.js';

/**
 * DeviceUdiCarrier Interface
 * 
 * Unique Device Identifier (UDI) Barcode string
 * 
 *
 * @see https://hl7.org/fhir/R4/deviceudicarrier.html
 */
export interface IDeviceUdiCarrier extends IBackboneElement {
  /**
   * Mandatory fixed portion of UDI
   */
  deviceIdentifier: string;
  /**
   * Extension for deviceIdentifier
   */
  _deviceIdentifier?: IElement;

  /**
   * UDI Issuing Organization
   */
  issuer: string;
  /**
   * Extension for issuer
   */
  _issuer?: IElement;

  /**
   * Regional UDI authority
   */
  jurisdiction?: string;
  /**
   * Extension for jurisdiction
   */
  _jurisdiction?: IElement;

  /**
   * UDI Machine Readable Barcode String
   */
  carrierAIDC?: string;
  /**
   * Extension for carrierAIDC
   */
  _carrierAIDC?: IElement;

  /**
   * UDI Human Readable Barcode String
   */
  carrierHRF?: string;
  /**
   * Extension for carrierHRF
   */
  _carrierHRF?: IElement;

  /**
   * barcode | rfid | manual | card | self-reported | electronic-transmission | unknown
   */
  entryType?: UDIEntryTypeType;
  /**
   * Extension for entryType
   */
  _entryType?: IElement;

}
