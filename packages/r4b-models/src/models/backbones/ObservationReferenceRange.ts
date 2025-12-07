import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IObservationReferenceRange,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ObservationReferenceRange */
const OBSERVATION_REFERENCE_RANGE_PROPERTIES = [
  'low',
  'high',
  'type',
  'appliesTo',
  'age',
  'text',
  '_text',
] as const;

/**
 * ObservationReferenceRange - Provides guide for interpretation
 *
 * @see https://hl7.org/fhir/R4/observationreferencerange.html
 *
 * @example
 * const observationReferenceRange = new ObservationReferenceRange({
 *   // ... properties
 * });
 */
export class ObservationReferenceRange extends BackboneElement implements IObservationReferenceRange {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Low Range, if relevant */
  low?: IQuantity;

  /** High Range, if relevant */
  high?: IQuantity;

  /** Reference range qualifier */
  type?: ICodeableConcept;

  /** Reference range population */
  appliesTo?: ICodeableConcept[];

  /** Applicable age range, if relevant */
  age?: IRange;

  /** Text based reference range in an observation */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationReferenceRange>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_REFERENCE_RANGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationReferenceRange from a JSON object
   */
  static fromJSON(json: IObservationReferenceRange): ObservationReferenceRange {
    return new ObservationReferenceRange(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationReferenceRange with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationReferenceRange>): ObservationReferenceRange {
    return new ObservationReferenceRange({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationReferenceRange by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationReferenceRange) => Partial<IObservationReferenceRange>): ObservationReferenceRange {
    const currentData = this.toJSON();
    return new ObservationReferenceRange({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationReferenceRange)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationReferenceRange {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_REFERENCE_RANGE_PROPERTIES);
    return result as IObservationReferenceRange;
  }

  /**
   * Create a deep clone of this ObservationReferenceRange
   */
  clone(): ObservationReferenceRange {
    return new ObservationReferenceRange(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationReferenceRange
   */
  toString(): string {
    const parts: string[] = ['ObservationReferenceRange'];
    return parts.join(', ');
  }
}
