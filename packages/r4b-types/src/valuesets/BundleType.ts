/**
 * BundleType
 * 
 * Indicates the purpose of a bundle - how it is intended to be used.
 *
 * @see http://hl7.org/fhir/ValueSet/bundle-type
 */

export type BundleTypeType = 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection';

export enum BundleTypeEnum {
  /** Document */
  Document = 'document',
  /** Message */
  Message = 'message',
  /** Transaction */
  Transaction = 'transaction',
  /** Transaction Response */
  TransactionResponse = 'transaction-response',
  /** Batch */
  Batch = 'batch',
  /** Batch Response */
  BatchResponse = 'batch-response',
  /** History List */
  History = 'history',
  /** Search Results */
  Searchset = 'searchset',
  /** Collection */
  Collection = 'collection',
}

export const BundleTypeValues = ['document', 'message', 'transaction', 'transaction-response', 'batch', 'batch-response', 'history', 'searchset', 'collection'] as const;
