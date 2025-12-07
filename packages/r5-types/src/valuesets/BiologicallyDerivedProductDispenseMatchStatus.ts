/**
 * Biologically derived product dispense - match status
 * 
 * Biologically derived product dispense - match status
 *
 * @see http://hl7.org/fhir/ValueSet/biologicallyderivedproductdispense-match-status
 */

export type BiologicallyDerivedProductDispenseMatchStatusType = 'crossmatched' | 'selected' | 'unmatched' | 'least-incompatible';

export enum BiologicallyDerivedProductDispenseMatchStatusEnum {
  /** Crossmatched */
  Crossmatched = 'crossmatched',
  /** Selected */
  Selected = 'selected',
  /** Unmatched */
  Unmatched = 'unmatched',
  /** Least incompatible */
  LeastIncompatible = 'least-incompatible',
}

export const BiologicallyDerivedProductDispenseMatchStatusValues = ['crossmatched', 'selected', 'unmatched', 'least-incompatible'] as const;
