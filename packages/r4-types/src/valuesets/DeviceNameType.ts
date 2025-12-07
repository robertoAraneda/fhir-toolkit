/**
 * DeviceNameType
 * 
 * The type of name the device is referred by.
 *
 * @see http://hl7.org/fhir/ValueSet/device-nametype
 */

export type DeviceNameTypeType = 'udi-label-name' | 'user-friendly-name' | 'patient-reported-name' | 'manufacturer-name' | 'model-name' | 'other';

export enum DeviceNameTypeEnum {
  /** UDI Label name */
  UdiLabelName = 'udi-label-name',
  /** User Friendly name */
  UserFriendlyName = 'user-friendly-name',
  /** Patient Reported name */
  PatientReportedName = 'patient-reported-name',
  /** Manufacturer name */
  ManufacturerName = 'manufacturer-name',
  /** Model name */
  ModelName = 'model-name',
  /** other */
  Other = 'other',
}

export const DeviceNameTypeValues = ['udi-label-name', 'user-friendly-name', 'patient-reported-name', 'manufacturer-name', 'model-name', 'other'] as const;
