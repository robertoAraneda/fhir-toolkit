import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AdministrativeGenderType,
  ICodeableConcept,
  IElement,
  IObservationDefinitionQualifiedInterval,
  IRange,
  ObservationRangeCategoryType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ObservationDefinitionQualifiedInterval */
const OBSERVATION_DEFINITION_QUALIFIED_INTERVAL_PROPERTIES = [
  'category',
  '_category',
  'range',
  'context',
  'appliesTo',
  'gender',
  '_gender',
  'age',
  'gestationalAge',
  'condition',
  '_condition',
] as const;

/**
 * ObservationDefinitionQualifiedInterval - Qualified range for continuous and ordinal observation results
 *
 * @see https://hl7.org/fhir/R4/observationdefinitionqualifiedinterval.html
 *
 * @example
 * const observationDefinitionQualifiedInterval = new ObservationDefinitionQualifiedInterval({
 *   // ... properties
 * });
 */
export class ObservationDefinitionQualifiedInterval extends BackboneElement implements IObservationDefinitionQualifiedInterval {

  // ============================================================================
  // Properties
  // ============================================================================

  /** reference | critical | absolute */
  category?: ObservationRangeCategoryType;

  /** Extension for category */
  _category?: IElement;

  /** The interval itself, for continuous or ordinal observations */
  range?: IRange;

  /** Range context qualifier */
  context?: ICodeableConcept;

  /** Targetted population of the range */
  appliesTo?: ICodeableConcept[];

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** Applicable age range, if relevant */
  age?: IRange;

  /** Applicable gestational age range, if relevant */
  gestationalAge?: IRange;

  /** Condition associated with the reference range */
  condition?: string;

  /** Extension for condition */
  _condition?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationDefinitionQualifiedInterval>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_DEFINITION_QUALIFIED_INTERVAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationDefinitionQualifiedInterval from a JSON object
   */
  static fromJSON(json: IObservationDefinitionQualifiedInterval): ObservationDefinitionQualifiedInterval {
    return new ObservationDefinitionQualifiedInterval(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationDefinitionQualifiedInterval with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationDefinitionQualifiedInterval>): ObservationDefinitionQualifiedInterval {
    return new ObservationDefinitionQualifiedInterval({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationDefinitionQualifiedInterval by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationDefinitionQualifiedInterval) => Partial<IObservationDefinitionQualifiedInterval>): ObservationDefinitionQualifiedInterval {
    const currentData = this.toJSON();
    return new ObservationDefinitionQualifiedInterval({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationDefinitionQualifiedInterval)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationDefinitionQualifiedInterval {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_DEFINITION_QUALIFIED_INTERVAL_PROPERTIES);
    return result as IObservationDefinitionQualifiedInterval;
  }

  /**
   * Create a deep clone of this ObservationDefinitionQualifiedInterval
   */
  clone(): ObservationDefinitionQualifiedInterval {
    return new ObservationDefinitionQualifiedInterval(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationDefinitionQualifiedInterval
   */
  toString(): string {
    const parts: string[] = ['ObservationDefinitionQualifiedInterval'];
    return parts.join(', ');
  }
}
