/**
 * DeviceMetricCalibrationState
 * 
 * Describes the state of a metric calibration.
 *
 * @see http://hl7.org/fhir/ValueSet/metric-calibration-state
 */

export type DeviceMetricCalibrationStateType = 'not-calibrated' | 'calibration-required' | 'calibrated' | 'unspecified';

export enum DeviceMetricCalibrationStateEnum {
  /** Not Calibrated */
  NotCalibrated = 'not-calibrated',
  /** Calibration Required */
  CalibrationRequired = 'calibration-required',
  /** Calibrated */
  Calibrated = 'calibrated',
  /** Unspecified */
  Unspecified = 'unspecified',
}

export const DeviceMetricCalibrationStateValues = ['not-calibrated', 'calibration-required', 'calibrated', 'unspecified'] as const;
