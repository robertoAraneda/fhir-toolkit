import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExpression,
  IMeasureGroupPopulation,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MeasureGroupPopulation */
const MEASURE_GROUP_POPULATION_PROPERTIES = [
  'code',
  'description',
  '_description',
  'criteria',
] as const;

/**
 * MeasureGroupPopulation - Population criteria
 *
 * @see https://hl7.org/fhir/R4/measuregrouppopulation.html
 *
 * @example
 * const measureGroupPopulation = new MeasureGroupPopulation({
 *   // ... properties
 * });
 */
export class MeasureGroupPopulation extends BackboneElement implements IMeasureGroupPopulation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: ICodeableConcept;

  /** The human readable description of this population criteria */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The criteria that defines this population */
  criteria: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureGroupPopulation>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_GROUP_POPULATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureGroupPopulation from a JSON object
   */
  static fromJSON(json: IMeasureGroupPopulation): MeasureGroupPopulation {
    return new MeasureGroupPopulation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureGroupPopulation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureGroupPopulation>): MeasureGroupPopulation {
    return new MeasureGroupPopulation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureGroupPopulation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureGroupPopulation) => Partial<IMeasureGroupPopulation>): MeasureGroupPopulation {
    const currentData = this.toJSON();
    return new MeasureGroupPopulation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureGroupPopulation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureGroupPopulation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_GROUP_POPULATION_PROPERTIES);
    return result as IMeasureGroupPopulation;
  }

  /**
   * Create a deep clone of this MeasureGroupPopulation
   */
  clone(): MeasureGroupPopulation {
    return new MeasureGroupPopulation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureGroupPopulation
   */
  toString(): string {
    const parts: string[] = ['MeasureGroupPopulation'];
    return parts.join(', ');
  }
}
