import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IDeviceMetricCalibration } from '../backbones/IDeviceMetricCalibration.js';
import type { DeviceMetricCategoryType, DeviceMetricColorType, DeviceMetricOperationalStatusType } from '../../valuesets/index.js';

/**
 * DeviceMetric Interface
 * 
 * Describes a measurement, calculation or setting capability of a medical device.
 * 
 *
 * @see https://hl7.org/fhir/R4B/devicemetric.html
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
   * Describes the link to the source Device
   */
  source?: IReference<'Device'>;

  /**
   * Describes the link to the parent Device
   */
  parent?: IReference<'Device'>;

  /**
   * on | off | standby | entered-in-error
   */
  operationalStatus?: DeviceMetricOperationalStatusType;
  /**
   * Extension for operationalStatus
   */
  _operationalStatus?: IElement;

  /**
   * black | red | green | yellow | blue | magenta | cyan | white
   */
  color?: DeviceMetricColorType;
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
   * Describes the measurement repetition time
   */
  measurementPeriod?: ITiming;

  /**
   * Describes the calibrations that have been performed or that are required to be performed
   */
  calibration?: IDeviceMetricCalibration[];

}
