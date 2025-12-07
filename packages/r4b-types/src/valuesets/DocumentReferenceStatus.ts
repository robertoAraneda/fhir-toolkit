/**
 * DocumentReferenceStatus
 * 
 * The status of the document reference.
 *
 * @see http://hl7.org/fhir/ValueSet/document-reference-status
 */

export type DocumentReferenceStatusType = 'current' | 'superseded' | 'entered-in-error';

export enum DocumentReferenceStatusEnum {
  /** Current */
  Current = 'current',
  /** Superseded */
  Superseded = 'superseded',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
}

export const DocumentReferenceStatusValues = ['current', 'superseded', 'entered-in-error'] as const;
