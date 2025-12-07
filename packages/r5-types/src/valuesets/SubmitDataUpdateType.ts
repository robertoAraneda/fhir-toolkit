/**
 * Submit Data Update Type
 * 
 * Concepts for how a measure report consumer and receiver coordinate data exchange updates. The choices are snapshot or incremental updates
 *
 * @see http://hl7.org/fhir/ValueSet/submit-data-update-type
 */

export type SubmitDataUpdateTypeType = 'incremental' | 'snapshot';

export enum SubmitDataUpdateTypeEnum {
  /** Incremental */
  Incremental = 'incremental',
  /** Snapshot */
  Snapshot = 'snapshot',
}

export const SubmitDataUpdateTypeValues = ['incremental', 'snapshot'] as const;
