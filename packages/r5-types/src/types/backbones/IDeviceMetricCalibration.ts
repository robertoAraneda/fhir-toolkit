import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DeviceMetricCalibrationStateType, DeviceMetricCalibrationTypeType } from '../../valuesets/index.js';

/**
 * DeviceMetricCalibration Interface
 * 
 * Describes the calibrations that have been performed or that are required to be performed
 * 
 *
 * @see https://hl7.org/fhir/R5/devicemetriccalibration.html
 */
export interface IDeviceMetricCalibration extends IBackboneElement {
  /**
   * unspecified | offset | gain | two-point
   */
  type?: DeviceMetricCalibrationTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * not-calibrated | calibration-required | calibrated | unspecified
   */
  state?: DeviceMetricCalibrationStateType;
  /**
   * Extension for state
   */
  _state?: IElement;

  /**
   * Describes the time last calibration has been performed
   */
  time?: string;
  /**
   * Extension for time
   */
  _time?: IElement;

}
