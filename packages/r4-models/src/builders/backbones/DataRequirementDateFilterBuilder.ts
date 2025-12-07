import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DataRequirementDateFilter } from '../../models/backbones/DataRequirementDateFilter.js';
import type {
  IDataRequirementDateFilter,
  IDuration,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * DataRequirementDateFilterBuilder - Fluent builder for DataRequirementDateFilter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const dataRequirementDateFilter = new DataRequirementDateFilterBuilder()
 *   .setPath(value)
 *   .build();
 */
export class DataRequirementDateFilterBuilder extends BackboneElementBuilder<DataRequirementDateFilter, IDataRequirementDateFilter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * A date-valued attribute to filter on
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set searchParam
   * A date valued parameter to search on
   */
  setSearchParam(searchParam: string): this {
    this.data.searchParam = searchParam;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'DateTime' | 'Period' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('DateTime', value)
   */
  setValue<T extends 'DateTime' | 'Period' | 'Duration'>(
    type: T,
    value: string
  ): this {
    const key = `value${type}` as keyof IDataRequirementDateFilter;
    const otherKeys: (keyof IDataRequirementDateFilter)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IDataRequirementDateFilter);
      otherKeys.push('_valueDateTime' as keyof IDataRequirementDateFilter);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IDataRequirementDateFilter);
      otherKeys.push('_valuePeriod' as keyof IDataRequirementDateFilter);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof IDataRequirementDateFilter);
      otherKeys.push('_valueDuration' as keyof IDataRequirementDateFilter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DataRequirementDateFilter instance
   */
  build(): DataRequirementDateFilter {
    return new DataRequirementDateFilter(this.data);
  }

  /**
   * Build and validate the DataRequirementDateFilter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DataRequirementDateFilter> {
    const dataRequirementDateFilter = this.build();
    await dataRequirementDateFilter.validateOrThrow();
    return dataRequirementDateFilter;
  }
}
