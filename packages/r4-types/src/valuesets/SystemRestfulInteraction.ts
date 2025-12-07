/**
 * SystemRestfulInteraction
 * 
 * Operations supported by REST at the system level.
 *
 * @see http://hl7.org/fhir/ValueSet/system-restful-interaction
 */

export type SystemRestfulInteractionType = 'transaction' | 'batch' | 'search-system' | 'history-system';

export enum SystemRestfulInteractionEnum {
  Transaction = 'transaction',
  Batch = 'batch',
  SearchSystem = 'search-system',
  HistorySystem = 'history-system',
}

export const SystemRestfulInteractionValues = ['transaction', 'batch', 'search-system', 'history-system'] as const;
