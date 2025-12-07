import { ElementBuilder } from '../base/ElementBuilder.js';
import { SampledData } from '../../models/datatypes/SampledData.js';
import type {
  IQuantity,
  ISampledData,
} from '@fhir-toolkit/r5-types';

/**
 * SampledDataBuilder - Fluent builder for SampledData datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const sampledData = new SampledDataBuilder()
 *   .setOrigin(value)
 *   .build();
 */
export class SampledDataBuilder extends ElementBuilder<SampledData, ISampledData> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set origin
   * Zero value and units
   */
  setOrigin(origin: IQuantity): this {
    this.data.origin = origin;
    return this;
  }

  /**
   * Set interval
   * Number of intervalUnits between samples
   */
  setInterval(interval: number): this {
    this.data.interval = interval;
    return this;
  }

  /**
   * Set intervalUnit
   * The measurement unit of the interval between samples
   */
  setIntervalUnit(intervalUnit: string): this {
    this.data.intervalUnit = intervalUnit;
    return this;
  }

  /**
   * Set factor
   * Multiply data by this before adding to origin
   */
  setFactor(factor: number): this {
    this.data.factor = factor;
    return this;
  }

  /**
   * Set lowerLimit
   * Lower limit of detection
   */
  setLowerLimit(lowerLimit: number): this {
    this.data.lowerLimit = lowerLimit;
    return this;
  }

  /**
   * Set upperLimit
   * Upper limit of detection
   */
  setUpperLimit(upperLimit: number): this {
    this.data.upperLimit = upperLimit;
    return this;
  }

  /**
   * Set dimensions
   * Number of sample points at each time point
   */
  setDimensions(dimensions: number): this {
    this.data.dimensions = dimensions;
    return this;
  }

  /**
   * Set codeMap
   * Defines the codes used in the data
   */
  setCodeMap(codeMap: string): this {
    this.data.codeMap = codeMap;
    return this;
  }

  /**
   * Set offsets
   * Offsets, typically in time, at which data values were taken
   */
  setOffsets(offsets: string): this {
    this.data.offsets = offsets;
    return this;
  }

  /**
   * Set data
   * Decimal values with spaces, or "E" | "U" | "L", or another code
   */
  setData(data: string): this {
    this.data.data = data;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SampledData instance
   */
  build(): SampledData {
    return new SampledData(this.data);
  }

  /**
   * Build and validate the SampledData instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SampledData> {
    const sampledData = this.build();
    await sampledData.validateOrThrow();
    return sampledData;
  }
}
