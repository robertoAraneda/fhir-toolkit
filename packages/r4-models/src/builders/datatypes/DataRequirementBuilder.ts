import { ElementBuilder } from '../base/ElementBuilder.js';
import { DataRequirement } from '../../models/datatypes/DataRequirement.js';
import type {
  ICodeableConcept,
  IDataRequirement,
  IDataRequirementCodeFilter,
  IDataRequirementDateFilter,
  IDataRequirementSort,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * DataRequirementBuilder - Fluent builder for DataRequirement datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const dataRequirement = new DataRequirementBuilder()
 *   .setType(value)
 *   .addProfile({ ... })
 *   .build();
 */
export class DataRequirementBuilder extends ElementBuilder<DataRequirement, IDataRequirement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of the required data
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set limit
   * Number of results
   */
  setLimit(limit: number): this {
    this.data.limit = limit;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `subject${type}` as keyof IDataRequirement;
    const otherKeys: (keyof IDataRequirement)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof IDataRequirement);
      otherKeys.push('_subjectCodeableConcept' as keyof IDataRequirement);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof IDataRequirement);
      otherKeys.push('_subjectReference' as keyof IDataRequirement);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add profile
   * The profile of the required data
   */
  addProfile(profile: string): this {
    return this.addToArray('profile', profile);
  }

  /**
   * Add mustSupport
   * Indicates specific structure elements that are referenced by the knowledge module
   */
  addMustSupport(mustSupport: string): this {
    return this.addToArray('mustSupport', mustSupport);
  }

  /**
   * Add codeFilter
   * What codes are expected
   */
  addCodeFilter(codeFilter: IDataRequirementCodeFilter): this {
    return this.addToArray('codeFilter', codeFilter);
  }

  /**
   * Add dateFilter
   * What dates/date ranges are expected
   */
  addDateFilter(dateFilter: IDataRequirementDateFilter): this {
    return this.addToArray('dateFilter', dateFilter);
  }

  /**
   * Add sort
   * Order of the results
   */
  addSort(sort: IDataRequirementSort): this {
    return this.addToArray('sort', sort);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DataRequirement instance
   */
  build(): DataRequirement {
    return new DataRequirement(this.data);
  }

  /**
   * Build and validate the DataRequirement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DataRequirement> {
    const dataRequirement = this.build();
    await dataRequirement.validateOrThrow();
    return dataRequirement;
  }
}
