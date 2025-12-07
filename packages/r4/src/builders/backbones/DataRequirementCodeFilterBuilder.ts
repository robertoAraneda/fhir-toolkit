import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DataRequirementCodeFilter } from '../../models/backbones/DataRequirementCodeFilter.js';
import type {
  ICoding,
  IDataRequirementCodeFilter,
} from '@fhir-toolkit/r4-types';

/**
 * DataRequirementCodeFilterBuilder - Fluent builder for DataRequirementCodeFilter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const dataRequirementCodeFilter = new DataRequirementCodeFilterBuilder()
 *   .setPath(value)
 *   .addCode({ ... })
 *   .build();
 */
export class DataRequirementCodeFilterBuilder extends BackboneElementBuilder<DataRequirementCodeFilter, IDataRequirementCodeFilter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * A code-valued attribute to filter on
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set searchParam
   * A coded (token) parameter to search on
   */
  setSearchParam(searchParam: string): this {
    this.data.searchParam = searchParam;
    return this;
  }

  /**
   * Set valueSet
   * Valueset for the filter
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * What code is expected
   */
  addCode(code: ICoding): this {
    return this.addToArray('code', code);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DataRequirementCodeFilter instance
   */
  build(): DataRequirementCodeFilter {
    return new DataRequirementCodeFilter(this.data);
  }

  /**
   * Build and validate the DataRequirementCodeFilter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DataRequirementCodeFilter> {
    const dataRequirementCodeFilter = this.build();
    await dataRequirementCodeFilter.validateOrThrow();
    return dataRequirementCodeFilter;
  }
}
