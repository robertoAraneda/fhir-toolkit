import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceMetric } from '../../models/resources/DeviceMetric.js';
import type {
  DeviceMetricCategoryType,
  DeviceMetricColorType,
  DeviceMetricOperationalStatusType,
  ICodeableConcept,
  IDeviceMetric,
  IDeviceMetricCalibration,
  IIdentifier,
  IReference,
  ITiming,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceMetricBuilder - Fluent builder for DeviceMetric resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceMetric = new DeviceMetricBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceMetricBuilder extends DomainResourceBuilder<DeviceMetric, IDeviceMetric> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Identity of metric, for example Heart Rate or PEEP Setting
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set unit
   * Unit of Measure for the Metric
   */
  setUnit(unit: ICodeableConcept): this {
    this.data.unit = unit;
    return this;
  }

  /**
   * Set source
   * Describes the link to the source Device
   */
  setSource(source: IReference<'Device'>): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set parent
   * Describes the link to the parent Device
   */
  setParent(parent: IReference<'Device'>): this {
    this.data.parent = parent;
    return this;
  }

  /**
   * Set operationalStatus
   * on | off | standby | entered-in-error
   */
  setOperationalStatus(operationalStatus: DeviceMetricOperationalStatusType): this {
    this.data.operationalStatus = operationalStatus;
    return this;
  }

  /**
   * Set color
   * black | red | green | yellow | blue | magenta | cyan | white
   */
  setColor(color: DeviceMetricColorType): this {
    this.data.color = color;
    return this;
  }

  /**
   * Set category
   * measurement | setting | calculation | unspecified
   */
  setCategory(category: DeviceMetricCategoryType): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set measurementPeriod
   * Describes the measurement repetition time
   */
  setMeasurementPeriod(measurementPeriod: ITiming): this {
    this.data.measurementPeriod = measurementPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Instance identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add calibration
   * Describes the calibrations that have been performed or that are required to be performed
   */
  addCalibration(calibration: IDeviceMetricCalibration): this {
    return this.addToArray('calibration', calibration);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceMetric instance
   */
  build(): DeviceMetric {
    return new DeviceMetric(this.data);
  }

  /**
   * Build and validate the DeviceMetric instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceMetric> {
    const deviceMetric = this.build();
    await deviceMetric.validateOrThrow();
    return deviceMetric;
  }
}
