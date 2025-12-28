import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CatalogEntryRelationTypeType,
  ICatalogEntryRelatedEntry,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CatalogEntryRelatedEntry */
const CATALOG_ENTRY_RELATED_ENTRY_PROPERTIES = [
  'relationtype',
  '_relationtype',
  'item',
] as const;

/**
 * CatalogEntryRelatedEntry - An item that this catalog entry is related to
 *
 * @see https://hl7.org/fhir/R4B/catalogentryrelatedentry.html
 *
 * @example
 * const catalogEntryRelatedEntry = new CatalogEntryRelatedEntry({
 *   // ... properties
 * });
 */
export class CatalogEntryRelatedEntry extends BackboneElement implements ICatalogEntryRelatedEntry {

  // ============================================================================
  // Properties
  // ============================================================================

  /** triggers | is-replaced-by */
  relationtype: CatalogEntryRelationTypeType;

  /** Extension for relationtype */
  _relationtype?: IElement;

  /** The reference to the related item */
  item: IReference<'CatalogEntry'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICatalogEntryRelatedEntry>) {
    super(data);
    if (data) {
      this.assignProps(data, CATALOG_ENTRY_RELATED_ENTRY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CatalogEntryRelatedEntry from a JSON object
   */
  static fromJSON(json: ICatalogEntryRelatedEntry): CatalogEntryRelatedEntry {
    return new CatalogEntryRelatedEntry(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CatalogEntryRelatedEntry with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICatalogEntryRelatedEntry>): CatalogEntryRelatedEntry {
    return new CatalogEntryRelatedEntry({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CatalogEntryRelatedEntry by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICatalogEntryRelatedEntry) => Partial<ICatalogEntryRelatedEntry>): CatalogEntryRelatedEntry {
    const currentData = this.toJSON();
    return new CatalogEntryRelatedEntry({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICatalogEntryRelatedEntry)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICatalogEntryRelatedEntry {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CATALOG_ENTRY_RELATED_ENTRY_PROPERTIES);
    return result as ICatalogEntryRelatedEntry;
  }

  /**
   * Create a deep clone of this CatalogEntryRelatedEntry
   */
  clone(): CatalogEntryRelatedEntry {
    return new CatalogEntryRelatedEntry(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CatalogEntryRelatedEntry
   */
  toString(): string {
    const parts: string[] = ['CatalogEntryRelatedEntry'];
    return parts.join(', ');
  }
}
