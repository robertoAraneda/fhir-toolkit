/**
 * FHIR Device Operation Mode
 * 
 * The operation mode of the device.
 *
 * @see http://hl7.org/fhir/ValueSet/device-operation-mode
 */

export type FHIRDeviceOperationModeType = 'normal' | 'demo' | 'service' | 'maintenance' | 'test';

export enum FHIRDeviceOperationModeEnum {
  /** Normal */
  Normal = 'normal',
  /** Demo */
  Demo = 'demo',
  /** Service */
  Service = 'service',
  /** Maintenance */
  Maintenance = 'maintenance',
  /** Test */
  Test = 'test',
}

export const FHIRDeviceOperationModeValues = ['normal', 'demo', 'service', 'maintenance', 'test'] as const;
