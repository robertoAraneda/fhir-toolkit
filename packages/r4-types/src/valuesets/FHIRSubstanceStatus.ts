/**
 * FHIRSubstanceStatus
 * 
 * A code to indicate if the substance is actively used.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-status
 */

export type FHIRSubstanceStatusType = 'active' | 'inactive' | 'entered-in-error';

export enum FHIRSubstanceStatusEnum {
  /** Active */
  Active = 'active',
  /** Inactive */
  Inactive = 'inactive',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const FHIRSubstanceStatusValues = ['active', 'inactive', 'entered-in-error'] as const;
