import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationDefinitionQualifiedInterval } from '../../models/backbones/ObservationDefinitionQualifiedInterval.js';
import type {
  AdministrativeGenderType,
  ICodeableConcept,
  IObservationDefinitionQualifiedInterval,
  IRange,
  ObservationRangeCategoryType,
} from '@fhir-toolkit/r4-types';

/**
 * ObservationDefinitionQualifiedIntervalBuilder - Fluent builder for ObservationDefinitionQualifiedInterval backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationDefinitionQualifiedInterval = new ObservationDefinitionQualifiedIntervalBuilder()
 *   .setCategory(value)
 *   .addAppliesTo({ ... })
 *   .build();
 */
export class ObservationDefinitionQualifiedIntervalBuilder extends BackboneElementBuilder<ObservationDefinitionQualifiedInterval, IObservationDefinitionQualifiedInterval> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * reference | critical | absolute
   */
  setCategory(category: ObservationRangeCategoryType): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set range
   * The interval itself, for continuous or ordinal observations
   */
  setRange(range: IRange): this {
    this.data.range = range;
    return this;
  }

  /**
   * Set context
   * Range context qualifier
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
   * Applicable age range, if relevant
   */
  setAge(age: IRange): this {
    this.data.age = age;
    return this;
  }

  /**
   * Set gestationalAge
   * Applicable gestational age range, if relevant
   */
  setGestationalAge(gestationalAge: IRange): this {
    this.data.gestationalAge = gestationalAge;
    return this;
  }

  /**
   * Set condition
   * Condition associated with the reference range
   */
  setCondition(condition: string): this {
    this.data.condition = condition;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add appliesTo
   * Targetted population of the range
   */
  addAppliesTo(appliesTo: ICodeableConcept): this {
    return this.addToArray('appliesTo', appliesTo);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationDefinitionQualifiedInterval instance
   */
  build(): ObservationDefinitionQualifiedInterval {
    return new ObservationDefinitionQualifiedInterval(this.data);
  }

  /**
   * Build and validate the ObservationDefinitionQualifiedInterval instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationDefinitionQualifiedInterval> {
    const observationDefinitionQualifiedInterval = this.build();
    await observationDefinitionQualifiedInterval.validateOrThrow();
    return observationDefinitionQualifiedInterval;
  }
}
