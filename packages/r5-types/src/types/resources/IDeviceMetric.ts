import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IDeviceMetricCalibration } from '../backbones/IDeviceMetricCalibration.js';
import type { DeviceMetricCategoryType, DeviceMetricOperationalStatusType } from '../../valuesets/index.js';

/**
 * DeviceMetric Interface
 * 
 * Describes a measurement, calculation or setting capability of a device.
 * 
 *
 * @see https://hl7.org/fhir/R5/devicemetric.html
 */
export interface IDeviceMetric extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceMetric';

  /**
   * Instance identifier
   */
  identifier?: IIdentifier[];

  /**
   * Identity of metric, for example Heart Rate or PEEP Setting
   */
  type: ICodeableConcept;

  /**
   * Unit of Measure for the Metric
   */
  unit?: ICodeableConcept;

  /**
   * Describes the link to the Device
   */
  device: IReference<'Device'>;

  /**
   * on | off | standby | entered-in-error
   */
  operationalStatus?: DeviceMetricOperationalStatusType;
  /**
   * Extension for operationalStatus
   */
  _operationalStatus?: IElement;

  /**
   * Color name (from CSS4) or #RRGGBB code
   */
  color?: string;
  /**
   * Extension for color
   */
  _color?: IElement;

  /**
   * measurement | setting | calculation | unspecified
   */
  category: DeviceMetricCategoryType;
  /**
   * Extension for category
   */
  _category?: IElement;

  /**
   * Indicates how often the metric is taken or recorded
   */
  measurementFrequency?: IQuantity;

  /**
   * Describes the calibrations that have been performed or that are required to be performed
   */
  calibration?: IDeviceMetricCalibration[];

}
