import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DataRequirementValueFilter } from '../../models/backbones/DataRequirementValueFilter.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IDataRequirementValueFilter,
  IDuration,
  IPeriod,
  ValueFilterComparatorType,
} from '@fhir-toolkit/r5-types';

/**
 * DataRequirementValueFilterBuilder - Fluent builder for DataRequirementValueFilter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const dataRequirementValueFilter = new DataRequirementValueFilterBuilder()
 *   .setPath(value)
 *   .build();
 */
export class DataRequirementValueFilterBuilder extends BackboneElementBuilder<DataRequirementValueFilter, IDataRequirementValueFilter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * An attribute to filter on
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set searchParam
   * A parameter to search on
   */
  setSearchParam(searchParam: string): this {
    this.data.searchParam = searchParam;
    return this;
  }

  /**
   * Set comparator
   * eq | gt | lt | ge | le | sa | eb
   */
  setComparator(comparator: ValueFilterComparatorType): this {
    this.data.comparator = comparator;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueDateTime, valuePeriod, valueDuration)
   * @param type - 'DateTime' | 'Period' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('DateTime', value)
   */
  setValue<T extends 'DateTime' | 'Period' | 'Duration'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IDataRequirementValueFilter;
    const otherKeys: (keyof IDataRequirementValueFilter)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IDataRequirementValueFilter);
      otherKeys.push('_valueDateTime' as keyof IDataRequirementValueFilter);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IDataRequirementValueFilter);
      otherKeys.push('_valuePeriod' as keyof IDataRequirementValueFilter);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof IDataRequirementValueFilter);
      otherKeys.push('_valueDuration' as keyof IDataRequirementValueFilter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DataRequirementValueFilter instance
   */
  build(): DataRequirementValueFilter {
    return new DataRequirementValueFilter(this.data);
  }

  /**
   * Build and validate the DataRequirementValueFilter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DataRequirementValueFilter> {
    const dataRequirementValueFilter = this.build();
    await dataRequirementValueFilter.validateOrThrow();
    return dataRequirementValueFilter;
  }
}
