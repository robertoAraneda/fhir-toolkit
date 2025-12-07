import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMeasureGroup,
  IMeasureGroupPopulation,
  IMeasureGroupStratifier,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MeasureGroup */
const MEASURE_GROUP_PROPERTIES = [
  'code',
  'description',
  '_description',
  'population',
  'stratifier',
] as const;

/**
 * MeasureGroup - Population criteria group
 *
 * @see https://hl7.org/fhir/R4/measuregroup.html
 *
 * @example
 * const measureGroup = new MeasureGroup({
 *   // ... properties
 * });
 */
export class MeasureGroup extends BackboneElement implements IMeasureGroup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Meaning of the group */
  code?: ICodeableConcept;

  /** Summary description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Population criteria */
  population?: IMeasureGroupPopulation[];

  /** Stratifier criteria for the measure */
  stratifier?: IMeasureGroupStratifier[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureGroup>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureGroup from a JSON object
   */
  static fromJSON(json: IMeasureGroup): MeasureGroup {
    return new MeasureGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureGroup>): MeasureGroup {
    return new MeasureGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureGroup) => Partial<IMeasureGroup>): MeasureGroup {
    const currentData = this.toJSON();
    return new MeasureGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureGroup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_GROUP_PROPERTIES);
    return result as IMeasureGroup;
  }

  /**
   * Create a deep clone of this MeasureGroup
   */
  clone(): MeasureGroup {
    return new MeasureGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureGroup
   */
  toString(): string {
    const parts: string[] = ['MeasureGroup'];
    return parts.join(', ');
  }
}
