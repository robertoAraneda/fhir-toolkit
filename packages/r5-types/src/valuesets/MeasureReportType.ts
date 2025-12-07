/**
 * Measure Report Type
 * 
 * The type of the measure report.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-report-type
 */

export type MeasureReportTypeType = 'individual' | 'subject-list' | 'summary' | 'data-exchange';

export enum MeasureReportTypeEnum {
  /** Individual */
  Individual = 'individual',
  /** Subject List */
  SubjectList = 'subject-list',
  /** Summary */
  Summary = 'summary',
  /** Data Exchange */
  DataExchange = 'data-exchange',
}

export const MeasureReportTypeValues = ['individual', 'subject-list', 'summary', 'data-exchange'] as const;
