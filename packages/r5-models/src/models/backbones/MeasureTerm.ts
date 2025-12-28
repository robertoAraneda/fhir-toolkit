import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMeasureTerm,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MeasureTerm */
const MEASURE_TERM_PROPERTIES = [
  'code',
  'definition',
  '_definition',
] as const;

/**
 * MeasureTerm - Defined terms used in the measure documentation
 *
 * @see https://hl7.org/fhir/R5/measureterm.html
 *
 * @example
 * const measureTerm = new MeasureTerm({
 *   // ... properties
 * });
 */
export class MeasureTerm extends BackboneElement implements IMeasureTerm {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What term? */
  code?: ICodeableConcept;

  /** Meaning of the term */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureTerm>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_TERM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureTerm from a JSON object
   */
  static fromJSON(json: IMeasureTerm): MeasureTerm {
    return new MeasureTerm(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureTerm with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureTerm>): MeasureTerm {
    return new MeasureTerm({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureTerm by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureTerm) => Partial<IMeasureTerm>): MeasureTerm {
    const currentData = this.toJSON();
    return new MeasureTerm({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureTerm)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureTerm {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_TERM_PROPERTIES);
    return result as IMeasureTerm;
  }

  /**
   * Create a deep clone of this MeasureTerm
   */
  clone(): MeasureTerm {
    return new MeasureTerm(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureTerm
   */
  toString(): string {
    const parts: string[] = ['MeasureTerm'];
    return parts.join(', ');
  }
}
