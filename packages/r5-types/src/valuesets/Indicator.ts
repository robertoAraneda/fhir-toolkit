/**
 * Indicator
 * 
 * This value set captures the set of indicator codes defined by the CDS Hooks specification.
 *
 * @see http://hl7.org/fhir/ValueSet/cdshooks-indicator
 */

export type IndicatorType = 'info' | 'warning' | 'critical';

export enum IndicatorEnum {
  /** Information */
  Info = 'info',
  /** Warning */
  Warning = 'warning',
  /** Critical */
  Critical = 'critical',
}

export const IndicatorValues = ['info', 'warning', 'critical'] as const;
