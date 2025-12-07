import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CatalogEntryRelatedEntry } from '../../models/backbones/CatalogEntryRelatedEntry.js';
import type {
  CatalogEntryRelationTypeType,
  ICatalogEntryRelatedEntry,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CatalogEntryRelatedEntryBuilder - Fluent builder for CatalogEntryRelatedEntry backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const catalogEntryRelatedEntry = new CatalogEntryRelatedEntryBuilder()
 *   .setRelationtype(value)
 *   .build();
 */
export class CatalogEntryRelatedEntryBuilder extends BackboneElementBuilder<CatalogEntryRelatedEntry, ICatalogEntryRelatedEntry> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relationtype
   * triggers | is-replaced-by
   */
  setRelationtype(relationtype: CatalogEntryRelationTypeType): this {
    this.data.relationtype = relationtype;
    return this;
  }

  /**
   * Set item
   * The reference to the related item
   */
  setItem(item: IReference<'CatalogEntry'>): this {
    this.data.item = item;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CatalogEntryRelatedEntry instance
   */
  build(): CatalogEntryRelatedEntry {
    return new CatalogEntryRelatedEntry(this.data);
  }

  /**
   * Build and validate the CatalogEntryRelatedEntry instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CatalogEntryRelatedEntry> {
    const catalogEntryRelatedEntry = this.build();
    await catalogEntryRelatedEntry.validateOrThrow();
    return catalogEntryRelatedEntry;
  }
}
