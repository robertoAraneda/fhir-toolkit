/**
 * CDSHooksIndicator
 * 
 * This value set captures the set of indicator codes defined by the CDS Hooks specification.
 *
 * @see http://hl7.org/fhir/ValueSet/cdshooks-indicator
 */

export type IndicatorType = 'info' | 'warning' | 'critical';

export enum IndicatorEnum {
  /** The response is informational */
  Info = 'info',
  /** The response is a warning */
  Warning = 'warning',
  /** The response is critical and indicates the workflow should not be allowed to proceed */
  Critical = 'critical',
}

export const IndicatorValues = ['info', 'warning', 'critical'] as const;
