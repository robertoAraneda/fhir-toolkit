/**
 * DocumentMode
 * 
 * Whether the application produces or consumes documents.
 *
 * @see http://hl7.org/fhir/ValueSet/document-mode
 */

export type DocumentModeType = 'producer' | 'consumer';

export enum DocumentModeEnum {
  /** Producer */
  Producer = 'producer',
  /** Consumer */
  Consumer = 'consumer',
}

export const DocumentModeValues = ['producer', 'consumer'] as const;
