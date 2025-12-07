/**
 * MeasureDataUsage
 * 
 * The intended usage for supplemental data elements in the measure.
 *
 * @see http://hl7.org/fhir/ValueSet/measure-data-usage
 */

export type MeasureDataUsageType = 'supplemental-data' | 'risk-adjustment-factor';

export enum MeasureDataUsageEnum {
  /** Supplemental Data */
  SupplementalData = 'supplemental-data',
  /** Risk Adjustment Factor */
  RiskAdjustmentFactor = 'risk-adjustment-factor',
}

export const MeasureDataUsageValues = ['supplemental-data', 'risk-adjustment-factor'] as const;
