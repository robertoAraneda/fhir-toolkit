/**
 * AggregationMode
 * 
 * How resource references can be aggregated.
 *
 * @see http://hl7.org/fhir/ValueSet/resource-aggregation-mode
 */

export type AggregationModeType = 'contained' | 'referenced' | 'bundled';

export enum AggregationModeEnum {
  /** Contained */
  Contained = 'contained',
  /** Referenced */
  Referenced = 'referenced',
  /** Bundled */
  Bundled = 'bundled',
}

export const AggregationModeValues = ['contained', 'referenced', 'bundled'] as const;
