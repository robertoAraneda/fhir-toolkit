import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationDefinitionQualifiedValue } from '../../models/backbones/ObservationDefinitionQualifiedValue.js';
import type {
  AdministrativeGenderType,
  ICodeableConcept,
  IObservationDefinitionQualifiedValue,
  IRange,
  ObservationRangeCategoryType,
} from '@fhir-toolkit/r5-types';

/**
 * ObservationDefinitionQualifiedValueBuilder - Fluent builder for ObservationDefinitionQualifiedValue backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationDefinitionQualifiedValue = new ObservationDefinitionQualifiedValueBuilder()
 *   .setContext(value)
 *   .addAppliesTo({ ... })
 *   .build();
 */
export class ObservationDefinitionQualifiedValueBuilder extends BackboneElementBuilder<ObservationDefinitionQualifiedValue, IObservationDefinitionQualifiedValue> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set context
   * Context qualifier for the set of qualified values
   */
  setContext(context: ICodeableConcept): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set gender
   * male | female | other | unknown
   */
  setGender(gender: AdministrativeGenderType): this {
    this.data.gender = gender;
    return this;
  }

  /**
   * Set age
   * Applicable age range for the set of qualified values
   */
  setAge(age: IRange): this {
    this.data.age = age;
    return this;
  }

  /**
   * Set gestationalAge
   * Applicable gestational age range for the set of qualified values
   */
  setGestationalAge(gestationalAge: IRange): this {
    this.data.gestationalAge = gestationalAge;
    return this;
  }

  /**
   * Set condition
   * Condition associated with the set of qualified values
   */
  setCondition(condition: string): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set rangeCategory
   * reference | critical | absolute
   */
  setRangeCategory(rangeCategory: ObservationRangeCategoryType): this {
    this.data.rangeCategory = rangeCategory;
    return this;
  }

  /**
   * Set range
   * The range for continuous or ordinal observations
   */
  setRange(range: IRange): this {
    this.data.range = range;
    return this;
  }

  /**
   * Set validCodedValueSet
   * Value set of valid coded values as part of this set of qualified values
   */
  setValidCodedValueSet(validCodedValueSet: string): this {
    this.data.validCodedValueSet = validCodedValueSet;
    return this;
  }

  /**
   * Set normalCodedValueSet
   * Value set of normal coded values as part of this set of qualified values
   */
  setNormalCodedValueSet(normalCodedValueSet: string): this {
    this.data.normalCodedValueSet = normalCodedValueSet;
    return this;
  }

  /**
   * Set abnormalCodedValueSet
   * Value set of abnormal coded values as part of this set of qualified values
   */
  setAbnormalCodedValueSet(abnormalCodedValueSet: string): this {
    this.data.abnormalCodedValueSet = abnormalCodedValueSet;
    return this;
  }

  /**
   * Set criticalCodedValueSet
   * Value set of critical coded values as part of this set of qualified values
   */
  setCriticalCodedValueSet(criticalCodedValueSet: string): this {
    this.data.criticalCodedValueSet = criticalCodedValueSet;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add appliesTo
   * Targetted population for the set of qualified values
   */
  addAppliesTo(appliesTo: ICodeableConcept): this {
    return this.addToArray('appliesTo', appliesTo);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationDefinitionQualifiedValue instance
   */
  build(): ObservationDefinitionQualifiedValue {
    return new ObservationDefinitionQualifiedValue(this.data);
  }

  /**
   * Build and validate the ObservationDefinitionQualifiedValue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationDefinitionQualifiedValue> {
    const observationDefinitionQualifiedValue = this.build();
    await observationDefinitionQualifiedValue.validateOrThrow();
    return observationDefinitionQualifiedValue;
  }
}
