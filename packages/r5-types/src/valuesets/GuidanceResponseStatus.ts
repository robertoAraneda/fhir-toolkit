/**
 * Guidance Response Status
 * 
 * The status of a guidance response.
 *
 * @see http://hl7.org/fhir/ValueSet/guidance-response-status
 */

export type GuidanceResponseStatusType = 'success' | 'data-requested' | 'data-required' | 'in-progress' | 'failure' | 'entered-in-error';

export enum GuidanceResponseStatusEnum {
  /** Success */
  Success = 'success',
  /** Data Requested */
  DataRequested = 'data-requested',
  /** Data Required */
  DataRequired = 'data-required',
  /** In Progress */
  InProgress = 'in-progress',
  /** Failure */
  Failure = 'failure',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const GuidanceResponseStatusValues = ['success', 'data-requested', 'data-required', 'in-progress', 'failure', 'entered-in-error'] as const;
