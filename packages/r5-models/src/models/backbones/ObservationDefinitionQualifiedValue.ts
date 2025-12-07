import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AdministrativeGenderType,
  ICodeableConcept,
  IElement,
  IObservationDefinitionQualifiedValue,
  IRange,
  ObservationRangeCategoryType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ObservationDefinitionQualifiedValue */
const OBSERVATION_DEFINITION_QUALIFIED_VALUE_PROPERTIES = [
  'context',
  'appliesTo',
  'gender',
  '_gender',
  'age',
  'gestationalAge',
  'condition',
  '_condition',
  'rangeCategory',
  '_rangeCategory',
  'range',
  'validCodedValueSet',
  '_validCodedValueSet',
  'normalCodedValueSet',
  '_normalCodedValueSet',
  'abnormalCodedValueSet',
  '_abnormalCodedValueSet',
  'criticalCodedValueSet',
  '_criticalCodedValueSet',
] as const;

/**
 * ObservationDefinitionQualifiedValue - Set of qualified values for observation results
 *
 * @see https://hl7.org/fhir/R4/observationdefinitionqualifiedvalue.html
 *
 * @example
 * const observationDefinitionQualifiedValue = new ObservationDefinitionQualifiedValue({
 *   // ... properties
 * });
 */
export class ObservationDefinitionQualifiedValue extends BackboneElement implements IObservationDefinitionQualifiedValue {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Context qualifier for the set of qualified values */
  context?: ICodeableConcept;

  /** Targetted population for the set of qualified values */
  appliesTo?: ICodeableConcept[];

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** Applicable age range for the set of qualified values */
  age?: IRange;

  /** Applicable gestational age range for the set of qualified values */
  gestationalAge?: IRange;

  /** Condition associated with the set of qualified values */
  condition?: string;

  /** Extension for condition */
  _condition?: IElement;

  /** reference | critical | absolute */
  rangeCategory?: ObservationRangeCategoryType;

  /** Extension for rangeCategory */
  _rangeCategory?: IElement;

  /** The range for continuous or ordinal observations */
  range?: IRange;

  /** Value set of valid coded values as part of this set of qualified values */
  validCodedValueSet?: string;

  /** Extension for validCodedValueSet */
  _validCodedValueSet?: IElement;

  /** Value set of normal coded values as part of this set of qualified values */
  normalCodedValueSet?: string;

  /** Extension for normalCodedValueSet */
  _normalCodedValueSet?: IElement;

  /** Value set of abnormal coded values as part of this set of qualified values */
  abnormalCodedValueSet?: string;

  /** Extension for abnormalCodedValueSet */
  _abnormalCodedValueSet?: IElement;

  /** Value set of critical coded values as part of this set of qualified values */
  criticalCodedValueSet?: string;

  /** Extension for criticalCodedValueSet */
  _criticalCodedValueSet?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationDefinitionQualifiedValue>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_DEFINITION_QUALIFIED_VALUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationDefinitionQualifiedValue from a JSON object
   */
  static fromJSON(json: IObservationDefinitionQualifiedValue): ObservationDefinitionQualifiedValue {
    return new ObservationDefinitionQualifiedValue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationDefinitionQualifiedValue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationDefinitionQualifiedValue>): ObservationDefinitionQualifiedValue {
    return new ObservationDefinitionQualifiedValue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationDefinitionQualifiedValue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationDefinitionQualifiedValue) => Partial<IObservationDefinitionQualifiedValue>): ObservationDefinitionQualifiedValue {
    const currentData = this.toJSON();
    return new ObservationDefinitionQualifiedValue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationDefinitionQualifiedValue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationDefinitionQualifiedValue {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_DEFINITION_QUALIFIED_VALUE_PROPERTIES);
    return result as IObservationDefinitionQualifiedValue;
  }

  /**
   * Create a deep clone of this ObservationDefinitionQualifiedValue
   */
  clone(): ObservationDefinitionQualifiedValue {
    return new ObservationDefinitionQualifiedValue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationDefinitionQualifiedValue
   */
  toString(): string {
    const parts: string[] = ['ObservationDefinitionQualifiedValue'];
    return parts.join(', ');
  }
}
