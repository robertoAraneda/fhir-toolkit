/**
 * BiologicallyDerivedProductDispense Status Codes
 * 
 * BiologicallyDerivedProductDispense Status Codes
 *
 * @see http://hl7.org/fhir/ValueSet/biologicallyderivedproductdispense-status
 */

export type BiologicallyDerivedProductDispenseType = 'preparation' | 'in-progress' | 'allocated' | 'issued' | 'unfulfilled' | 'returned' | 'entered-in-error' | 'unknown';

export enum BiologicallyDerivedProductDispenseEnum {
  /** Preparation */
  Preparation = 'preparation',
  /** In Progress */
  InProgress = 'in-progress',
  /** Allocated */
  Allocated = 'allocated',
  /** Issued */
  Issued = 'issued',
  /** Unfulfilled */
  Unfulfilled = 'unfulfilled',
  /** Returned */
  Returned = 'returned',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const BiologicallyDerivedProductDispenseValues = ['preparation', 'in-progress', 'allocated', 'issued', 'unfulfilled', 'returned', 'entered-in-error', 'unknown'] as const;
