import { ElementBuilder } from '../base/ElementBuilder.js';
import { Population } from '../../models/datatypes/Population.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IPopulation,
  IRange,
} from '@fhir-toolkit/r4b-types';

/**
 * PopulationBuilder - Fluent builder for Population datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const population = new PopulationBuilder()
 *   .setGender(value)
 *   .build();
 */
export class PopulationBuilder extends ElementBuilder<Population, IPopulation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set gender
   * The gender of the specific population
   */
  setGender(gender: ICodeableConcept): this {
    this.data.gender = gender;
    return this;
  }

  /**
   * Set race
   * Race of the specific population
   */
  setRace(race: ICodeableConcept): this {
    this.data.race = race;
    return this;
  }

  /**
   * Set physiologicalCondition
   * The existing physiological conditions of the specific population to which this applies
   */
  setPhysiologicalCondition(physiologicalCondition: ICodeableConcept): this {
    this.data.physiologicalCondition = physiologicalCondition;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set age choice type (ageRange, ageCodeableConcept)
   * @param type - 'Range' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAge('Range', value)
   */
  setAge<T extends 'Range' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `age${type}` as keyof IPopulation;
    const otherKeys: (keyof IPopulation)[] = [];
    if (type !== 'Range') {
      otherKeys.push('ageRange' as keyof IPopulation);
      otherKeys.push('_ageRange' as keyof IPopulation);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('ageCodeableConcept' as keyof IPopulation);
      otherKeys.push('_ageCodeableConcept' as keyof IPopulation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Population instance
   */
  build(): Population {
    return new Population(this.data);
  }

  /**
   * Build and validate the Population instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Population> {
    const population = this.build();
    await population.validateOrThrow();
    return population;
  }
}
