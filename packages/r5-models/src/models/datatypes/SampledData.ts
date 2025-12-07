import { Element } from '../base/Element.js';
import type {
  IElement,
  IQuantity,
  ISampledData,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SampledData */
const SAMPLED_DATA_PROPERTIES = [
  'origin',
  'interval',
  '_interval',
  'intervalUnit',
  '_intervalUnit',
  'factor',
  '_factor',
  'lowerLimit',
  '_lowerLimit',
  'upperLimit',
  '_upperLimit',
  'dimensions',
  '_dimensions',
  'codeMap',
  '_codeMap',
  'offsets',
  '_offsets',
  'data',
  '_data',
] as const;

/**
 * SampledData - A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 *
 * @see https://hl7.org/fhir/R4/sampleddata.html
 *
 * @example
 * const sampledData = new SampledData({
 *   // ... properties
 * });
 */
export class SampledData extends Element implements ISampledData {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Zero value and units */
  origin: IQuantity;

  /** Number of intervalUnits between samples */
  interval?: number;

  /** Extension for interval */
  _interval?: IElement;

  /** The measurement unit of the interval between samples */
  intervalUnit: string;

  /** Extension for intervalUnit */
  _intervalUnit?: IElement;

  /** Multiply data by this before adding to origin */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Lower limit of detection */
  lowerLimit?: number;

  /** Extension for lowerLimit */
  _lowerLimit?: IElement;

  /** Upper limit of detection */
  upperLimit?: number;

  /** Extension for upperLimit */
  _upperLimit?: IElement;

  /** Number of sample points at each time point */
  dimensions: number;

  /** Extension for dimensions */
  _dimensions?: IElement;

  /** Defines the codes used in the data */
  codeMap?: string;

  /** Extension for codeMap */
  _codeMap?: IElement;

  /** Offsets, typically in time, at which data values were taken */
  offsets?: string;

  /** Extension for offsets */
  _offsets?: IElement;

  /** Decimal values with spaces, or "E" | "U" | "L", or another code */
  data?: string;

  /** Extension for data */
  _data?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISampledData>) {
    super(data);
    if (data) {
      this.assignProps(data, SAMPLED_DATA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SampledData from a JSON object
   */
  static fromJSON(json: ISampledData): SampledData {
    return new SampledData(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SampledData with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISampledData>): SampledData {
    return new SampledData({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SampledData by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISampledData) => Partial<ISampledData>): SampledData {
    const currentData = this.toJSON();
    return new SampledData({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISampledData)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISampledData {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, SAMPLED_DATA_PROPERTIES);
    return result as ISampledData;
  }

  /**
   * Create a deep clone of this SampledData
   */
  clone(): SampledData {
    return new SampledData(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SampledData
   */
  toString(): string {
    const parts: string[] = ['SampledData'];
    return parts.join(', ');
  }
}
