import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IListEntry,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ListEntry */
const LIST_ENTRY_PROPERTIES = [
  'flag',
  'deleted',
  '_deleted',
  'date',
  '_date',
  'item',
] as const;

/**
 * ListEntry - Entries in the list
 *
 * @see https://hl7.org/fhir/R4/listentry.html
 *
 * @example
 * const listEntry = new ListEntry({
 *   // ... properties
 * });
 */
export class ListEntry extends BackboneElement implements IListEntry {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Status/Workflow information about this item */
  flag?: ICodeableConcept;

  /** If this item is actually marked as deleted */
  deleted?: boolean;

  /** Extension for deleted */
  _deleted?: IElement;

  /** When item added to list */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Actual entry */
  item: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IListEntry>) {
    super(data);
    if (data) {
      this.assignProps(data, LIST_ENTRY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ListEntry from a JSON object
   */
  static fromJSON(json: IListEntry): ListEntry {
    return new ListEntry(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ListEntry with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IListEntry>): ListEntry {
    return new ListEntry({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ListEntry by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IListEntry) => Partial<IListEntry>): ListEntry {
    const currentData = this.toJSON();
    return new ListEntry({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IListEntry)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IListEntry {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, LIST_ENTRY_PROPERTIES);
    return result as IListEntry;
  }

  /**
   * Create a deep clone of this ListEntry
   */
  clone(): ListEntry {
    return new ListEntry(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ListEntry
   */
  toString(): string {
    const parts: string[] = ['ListEntry'];
    return parts.join(', ');
  }
}
