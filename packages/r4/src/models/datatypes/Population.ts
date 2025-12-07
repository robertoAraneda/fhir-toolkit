import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IPopulation,
  IRange,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Population */
const POPULATION_PROPERTIES = [
  'ageRange',
  'ageCodeableConcept',
  'gender',
  'race',
  'physiologicalCondition',
] as const;

/**
 * Population - A populatioof people with some set of grouping criteria.
 *
 * @see https://hl7.org/fhir/R4/population.html
 *
 * @example
 * const population = new Population({
 *   // ... properties
 * });
 */
export class Population extends Element implements IPopulation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The age of the specific population */
  ageRange?: IRange;

  /** The age of the specific population */
  ageCodeableConcept?: ICodeableConcept;

  /** The gender of the specific population */
  gender?: ICodeableConcept;

  /** Race of the specific population */
  race?: ICodeableConcept;

  /** The existing physiological conditions of the specific population to which this applies */
  physiologicalCondition?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPopulation>) {
    super(data);
    if (data) {
      this.assignProps(data, POPULATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Population from a JSON object
   */
  static fromJSON(json: IPopulation): Population {
    return new Population(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Population with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPopulation>): Population {
    return new Population({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Population by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPopulation) => Partial<IPopulation>): Population {
    const currentData = this.toJSON();
    return new Population({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPopulation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPopulation {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, POPULATION_PROPERTIES);
    return result as IPopulation;
  }

  /**
   * Create a deep clone of this Population
   */
  clone(): Population {
    return new Population(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Population
   */
  toString(): string {
    const parts: string[] = ['Population'];
    return parts.join(', ');
  }
}
