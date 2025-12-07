/**
 * DeviceAssociation Status Reason Codes
 * 
 * DeviceAssociation Status Reason Codes
 *
 * @see http://hl7.org/fhir/ValueSet/deviceassociation-status-reason
 */

export type DeviceAssociationType = 'attached' | 'disconnected' | 'failed' | 'placed' | 'replaced';

export enum DeviceAssociationEnum {
  /** Attached */
  Attached = 'attached',
  /** Disconnected */
  Disconnected = 'disconnected',
  /** Failed */
  Failed = 'failed',
  /** placed */
  Placed = 'placed',
  /** Replaced */
  Replaced = 'replaced',
}

export const DeviceAssociationValues = ['attached', 'disconnected', 'failed', 'placed', 'replaced'] as const;
