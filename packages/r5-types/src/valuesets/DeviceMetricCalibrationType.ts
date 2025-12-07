/**
 * Device Metric Calibration Type
 * 
 * Describes the type of a metric calibration.
 *
 * @see http://hl7.org/fhir/ValueSet/metric-calibration-type
 */

export type DeviceMetricCalibrationTypeType = 'unspecified' | 'offset' | 'gain' | 'two-point';

export enum DeviceMetricCalibrationTypeEnum {
  /** Unspecified */
  Unspecified = 'unspecified',
  /** Offset */
  Offset = 'offset',
  /** Gain */
  Gain = 'gain',
  /** Two Point */
  TwoPoint = 'two-point',
}

export const DeviceMetricCalibrationTypeValues = ['unspecified', 'offset', 'gain', 'two-point'] as const;
