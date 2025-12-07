/**
 * DeviceMetricCategory
 * 
 * Describes the category of the metric.
 *
 * @see http://hl7.org/fhir/ValueSet/metric-category
 */

export type DeviceMetricCategoryType = 'measurement' | 'setting' | 'calculation' | 'unspecified';

export enum DeviceMetricCategoryEnum {
  /** Measurement */
  Measurement = 'measurement',
  /** Setting */
  Setting = 'setting',
  /** Calculation */
  Calculation = 'calculation',
  /** Unspecified */
  Unspecified = 'unspecified',
}

export const DeviceMetricCategoryValues = ['measurement', 'setting', 'calculation', 'unspecified'] as const;
