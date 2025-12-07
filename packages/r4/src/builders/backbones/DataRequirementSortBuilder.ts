import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DataRequirementSort } from '../../models/backbones/DataRequirementSort.js';
import type {
  IDataRequirementSort,
  SortDirectionType,
} from '@fhir-toolkit/r4-types';

/**
 * DataRequirementSortBuilder - Fluent builder for DataRequirementSort backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const dataRequirementSort = new DataRequirementSortBuilder()
 *   .setPath(value)
 *   .build();
 */
export class DataRequirementSortBuilder extends BackboneElementBuilder<DataRequirementSort, IDataRequirementSort> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * The name of the attribute to perform the sort
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set direction
   * ascending | descending
   */
  setDirection(direction: SortDirectionType): this {
    this.data.direction = direction;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DataRequirementSort instance
   */
  build(): DataRequirementSort {
    return new DataRequirementSort(this.data);
  }

  /**
   * Build and validate the DataRequirementSort instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DataRequirementSort> {
    const dataRequirementSort = this.build();
    await dataRequirementSort.validateOrThrow();
    return dataRequirementSort;
  }
}
