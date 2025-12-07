/**
 * SupplyRequestReason
 * 
 * The reason why the supply item was requested.
 *
 * @see http://hl7.org/fhir/ValueSet/supplyrequest-reason
 */

export type SupplyRequestReasonType = 'patient-care' | 'ward-stock';

export enum SupplyRequestReasonEnum {
  /** Patient Care */
  PatientCare = 'patient-care',
  /** Ward Stock */
  WardStock = 'ward-stock',
}

export const SupplyRequestReasonValues = ['patient-care', 'ward-stock'] as const;
