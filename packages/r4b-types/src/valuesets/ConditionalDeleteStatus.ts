/**
 * ConditionalDeleteStatus
 * 
 * A code that indicates how the server supports conditional delete.
 *
 * @see http://hl7.org/fhir/ValueSet/conditional-delete-status
 */

export type ConditionalDeleteStatusType = 'not-supported' | 'single' | 'multiple';

export enum ConditionalDeleteStatusEnum {
  /** Not Supported */
  NotSupported = 'not-supported',
  /** Single Deletes Supported */
  Single = 'single',
  /** Multiple Deletes Supported */
  Multiple = 'multiple',
}

export const ConditionalDeleteStatusValues = ['not-supported', 'single', 'multiple'] as const;
