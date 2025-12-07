/**
 * Supply Delivery Status
 * 
 * Status of the supply delivery.
 *
 * @see http://hl7.org/fhir/ValueSet/supplydelivery-status
 */

export type SupplyDeliveryStatusType = 'in-progress' | 'completed' | 'abandoned' | 'entered-in-error';

export enum SupplyDeliveryStatusEnum {
  /** In Progress */
  InProgress = 'in-progress',
  /** Delivered */
  Completed = 'completed',
  /** Abandoned */
  Abandoned = 'abandoned',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const SupplyDeliveryStatusValues = ['in-progress', 'completed', 'abandoned', 'entered-in-error'] as const;
