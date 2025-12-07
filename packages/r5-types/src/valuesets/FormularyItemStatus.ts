/**
 * FormularyItem Status Codes
 * 
 * FormularyItem Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/formularyitem-status
 */

export type FormularyItemStatusType = 'active' | 'entered-in-error' | 'inactive';

export enum FormularyItemStatusEnum {
  /** Active */
  Active = 'active',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Inactive */
  Inactive = 'inactive',
}

export const FormularyItemStatusValues = ['active', 'entered-in-error', 'inactive'] as const;
