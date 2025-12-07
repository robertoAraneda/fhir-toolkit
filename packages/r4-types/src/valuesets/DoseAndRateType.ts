/**
 * DoseAndRateType
 * 
 * The kind of dose or rate specified.
 *
 * @see http://hl7.org/fhir/ValueSet/dose-rate-type
 */

export type DoseAndRateTypeType = 'calculated' | 'ordered';

export enum DoseAndRateTypeEnum {
  /** Calculated */
  Calculated = 'calculated',
  /** Ordered */
  Ordered = 'ordered',
}

export const DoseAndRateTypeValues = ['calculated', 'ordered'] as const;
