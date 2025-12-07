/**
 * NarrativeStatus
 * 
 * The status of a resource narrative.
 *
 * @see http://hl7.org/fhir/ValueSet/narrative-status
 */

export type NarrativeStatusType = 'generated' | 'extensions' | 'additional' | 'empty';

export enum NarrativeStatusEnum {
  /** Generated */
  Generated = 'generated',
  /** Extensions */
  Extensions = 'extensions',
  /** Additional */
  Additional = 'additional',
  /** Empty */
  Empty = 'empty',
}

export const NarrativeStatusValues = ['generated', 'extensions', 'additional', 'empty'] as const;
