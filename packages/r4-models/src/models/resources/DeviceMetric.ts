import { DomainResource } from '../base/DomainResource.js';
import type {
  DeviceMetricCategoryType,
  DeviceMetricColorType,
  DeviceMetricOperationalStatusType,
  ICodeableConcept,
  IDeviceMetric,
  IDeviceMetricCalibration,
  IElement,
  IIdentifier,
  IReference,
  ITiming,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceMetric */
const DEVICE_METRIC_PROPERTIES = [
  'identifier',
  'type',
  'unit',
  'source',
  'parent',
  'operationalStatus',
  '_operationalStatus',
  'color',
  '_color',
  'category',
  '_category',
  'measurementPeriod',
  'calibration',
] as const;

/**
 * DeviceMetric - Describes a measurement, calculation or setting capability of a medical device.
 *
 * @see https://hl7.org/fhir/R4/devicemetric.html
 *
 * @example
 * const deviceMetric = new DeviceMetric({
 *   resourceType: 'DeviceMetric',
 *   // ... properties
 * });
 */
export class DeviceMetric extends DomainResource implements IDeviceMetric {
  readonly resourceType = 'DeviceMetric' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Instance identifier */
  identifier?: IIdentifier[];

  /** Identity of metric, for example Heart Rate or PEEP Setting */
  type: ICodeableConcept;

  /** Unit of Measure for the Metric */
  unit?: ICodeableConcept;

  /** Describes the link to the source Device */
  source?: IReference<'Device'>;

  /** Describes the link to the parent Device */
  parent?: IReference<'Device'>;

  /** on | off | standby | entered-in-error */
  operationalStatus?: DeviceMetricOperationalStatusType;

  /** Extension for operationalStatus */
  _operationalStatus?: IElement;

  /** black | red | green | yellow | blue | magenta | cyan | white */
  color?: DeviceMetricColorType;

  /** Extension for color */
  _color?: IElement;

  /** measurement | setting | calculation | unspecified */
  category: DeviceMetricCategoryType;

  /** Extension for category */
  _category?: IElement;

  /** Describes the measurement repetition time */
  measurementPeriod?: ITiming;

  /** Describes the calibrations that have been performed or that are required to be performed */
  calibration?: IDeviceMetricCalibration[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceMetric>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_METRIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceMetric from a JSON object
   */
  static fromJSON(json: IDeviceMetric): DeviceMetric {
    return new DeviceMetric(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceMetric with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceMetric>): DeviceMetric {
    return new DeviceMetric({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceMetric by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceMetric) => Partial<IDeviceMetric>): DeviceMetric {
    const currentData = this.toJSON();
    return new DeviceMetric({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceMetric)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceMetric {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DEVICE_METRIC_PROPERTIES);
    return result as IDeviceMetric;
  }

  /**
   * Create a deep clone of this DeviceMetric
   */
  clone(): DeviceMetric {
    return new DeviceMetric(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceMetric
   */
  toString(): string {
    const parts: string[] = ['DeviceMetric'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
