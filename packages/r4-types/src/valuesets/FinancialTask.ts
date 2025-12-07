/**
 * Financial Task Codes
 * 
 * This value set includes Financial Task codes.
 *
 * @see http://hl7.org/fhir/ValueSet/financial-taskcode
 */

export type FinancialTaskType = 'cancel' | 'poll' | 'release' | 'reprocess' | 'status';

export enum FinancialTaskEnum {
  /** Cancel */
  Cancel = 'cancel',
  /** Poll */
  Poll = 'poll',
  /** Release */
  Release = 'release',
  /** Reprocess */
  Reprocess = 'reprocess',
  /** Status check */
  Status = 'status',
}

export const FinancialTaskValues = ['cancel', 'poll', 'release', 'reprocess', 'status'] as const;
