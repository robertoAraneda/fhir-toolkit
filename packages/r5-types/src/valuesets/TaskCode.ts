/**
 * Task Codes
 * 
 * Codes indicating the type of action that is expected to be performed
 *
 * @see http://hl7.org/fhir/ValueSet/task-code
 */

export type TaskCodeType = 'approve' | 'fulfill' | 'instantiate' | 'abort' | 'replace' | 'change' | 'suspend' | 'resume';

export enum TaskCodeEnum {
  /** Activate/approve the focal resource */
  Approve = 'approve',
  /** Fulfill the focal request */
  Fulfill = 'fulfill',
  /** Instantiate the focal definition */
  Instantiate = 'instantiate',
  /** Mark the focal resource as no longer active */
  Abort = 'abort',
  /** Replace the focal resource with the input resource */
  Replace = 'replace',
  /** Change the focal resource */
  Change = 'change',
  /** Suspend the focal resource */
  Suspend = 'suspend',
  /** Re-activate the focal resource */
  Resume = 'resume',
}

export const TaskCodeValues = ['approve', 'fulfill', 'instantiate', 'abort', 'replace', 'change', 'suspend', 'resume'] as const;
