/**
 * TransactionMode
 * 
 * A code that indicates how transactions are supported.
 *
 * @see http://hl7.org/fhir/ValueSet/transaction-mode
 */

export type TransactionModeType = 'not-supported' | 'batch' | 'transaction' | 'both';

export enum TransactionModeEnum {
  /** None */
  NotSupported = 'not-supported',
  /** Batches supported */
  Batch = 'batch',
  /** Transactions Supported */
  Transaction = 'transaction',
  /** Batches & Transactions */
  Both = 'both',
}

export const TransactionModeValues = ['not-supported', 'batch', 'transaction', 'both'] as const;
