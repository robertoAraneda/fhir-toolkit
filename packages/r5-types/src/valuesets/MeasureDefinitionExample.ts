/**
 * Measure Definition Example
 * 
 * Example Measure Definitions for the Measure Resource.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-definition-example
 */

export type MeasureDefinitionExampleType = 'screening' | 'standardized-depression-screening-tool';

export enum MeasureDefinitionExampleEnum {
  /** Screening */
  Screening = 'screening',
  /** Standardized Depression Screening Tool */
  StandardizedDepressionScreeningTool = 'standardized-depression-screening-tool',
}

export const MeasureDefinitionExampleValues = ['screening', 'standardized-depression-screening-tool'] as const;
