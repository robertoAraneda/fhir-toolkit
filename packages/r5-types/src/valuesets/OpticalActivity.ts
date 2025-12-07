/**
 * Optical Activity
 * 
 * The optical rotation type of a substance.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-optical-activity
 */

export type OpticalActivityType = '+' | '-';

export enum OpticalActivityEnum {
  /** dextrorotary */
  _Empty = '+',
  /** levorotary */
  _Empty1 = '-',
}

export const OpticalActivityValues = ['+', '-'] as const;
