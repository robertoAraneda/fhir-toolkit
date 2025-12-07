/**
 * Intervention Codes
 * 
 * This value set includes sample Intervention codes.
 *
 * @see http://hl7.org/fhir/ValueSet/intervention
 */

export type InterventionType = 'unknown' | 'other';

export enum InterventionEnum {
  /** Unknown */
  Unknown = 'unknown',
  /** Other */
  Other = 'other',
}

export const InterventionValues = ['unknown', 'other'] as const;
