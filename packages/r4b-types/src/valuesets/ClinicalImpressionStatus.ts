/**
 * Clinical Impression Status
 * 
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 *
 * @see http://hl7.org/fhir/ValueSet/clinicalimpression-status
 */

export type ClinicalImpressionStatusType = 'in-progress' | 'completed' | 'entered-in-error';

export enum ClinicalImpressionStatusEnum {
  InProgress = 'in-progress',
  Completed = 'completed',
  EnteredInError = 'entered-in-error',
}

export const ClinicalImpressionStatusValues = ['in-progress', 'completed', 'entered-in-error'] as const;
