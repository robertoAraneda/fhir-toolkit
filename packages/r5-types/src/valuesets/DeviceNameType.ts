/**
 * Device Name Type
 * 
 * The type of name the device is referred by.
 *
 * @see http://hl7.org/fhir/ValueSet/device-nametype
 */

export type DeviceNameTypeType = 'registered-name' | 'user-friendly-name' | 'patient-reported-name';

export enum DeviceNameTypeEnum {
  /** Registered name */
  RegisteredName = 'registered-name',
  /** User Friendly name */
  UserFriendlyName = 'user-friendly-name',
  /** Patient Reported name */
  PatientReportedName = 'patient-reported-name',
}

export const DeviceNameTypeValues = ['registered-name', 'user-friendly-name', 'patient-reported-name'] as const;
