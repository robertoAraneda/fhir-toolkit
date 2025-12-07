import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ListEntry } from '../../models/backbones/ListEntry.js';
import type {
  ICodeableConcept,
  IListEntry,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ListEntryBuilder - Fluent builder for ListEntry backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const listEntry = new ListEntryBuilder()
 *   .setFlag(value)
 *   .build();
 */
export class ListEntryBuilder extends BackboneElementBuilder<ListEntry, IListEntry> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set flag
   * Status/Workflow information about this item
   */
  setFlag(flag: ICodeableConcept): this {
    this.data.flag = flag;
    return this;
  }

  /**
   * Set deleted
   * If this item is actually marked as deleted
   */
  setDeleted(deleted: boolean): this {
    this.data.deleted = deleted;
    return this;
  }

  /**
   * Set date
   * When item added to list
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set item
   * Actual entry
   */
  setItem(item: IReference<'Resource'>): this {
    this.data.item = item;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ListEntry instance
   */
  build(): ListEntry {
    return new ListEntry(this.data);
  }

  /**
   * Build and validate the ListEntry instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ListEntry> {
    const listEntry = this.build();
    await listEntry.validateOrThrow();
    return listEntry;
  }
}
