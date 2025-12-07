/**
 * Can-push-updates
 * 
 * Ability of the primary source to push updates/alerts
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-can-push-updates
 */

export type CanPushUpdatesType = 'yes' | 'no' | 'undetermined';

export enum CanPushUpdatesEnum {
  /** Yes */
  Yes = 'yes',
  /** No */
  No = 'no',
  /** Undetermined */
  Undetermined = 'undetermined',
}

export const CanPushUpdatesValues = ['yes', 'no', 'undetermined'] as const;
