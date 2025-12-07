/**
 * Measure Report Stratifier Value Example
 * 
 * Example Measure Stratification Value for MeasureReports Resource.
 *
 * @see http://hl7.org/fhir/ValueSet/measurereport-stratifier-value-example
 */

export type MeasureReportStratifierValueExampleType = 'northwest' | 'northeast' | 'southwest' | 'southeast';

export enum MeasureReportStratifierValueExampleEnum {
  /** Northwest */
  Northwest = 'northwest',
  /** Northeast */
  Northeast = 'northeast',
  /** Soutwest */
  Southwest = 'southwest',
  /** Southeast */
  Southeast = 'southeast',
}

export const MeasureReportStratifierValueExampleValues = ['northwest', 'northeast', 'southwest', 'southeast'] as const;
