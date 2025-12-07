/**
 * FHIR Device Association Operation Status
 * 
 * The status for the device association operation.
 *
 * @see http://hl7.org/fhir/ValueSet/deviceassociation-operationstatus
 */

export type FHIRDeviceAssociationOperationStatusType = 'on' | 'off' | 'standby' | 'defective' | 'unknown';

export enum FHIRDeviceAssociationOperationStatusEnum {
  /** On */
  On = 'on',
  /** Off */
  Off = 'off',
  /** Stand By */
  Standby = 'standby',
  /** Stand By */
  Defective = 'defective',
  /** Unknown */
  Unknown = 'unknown',
}

export const FHIRDeviceAssociationOperationStatusValues = ['on', 'off', 'standby', 'defective', 'unknown'] as const;
