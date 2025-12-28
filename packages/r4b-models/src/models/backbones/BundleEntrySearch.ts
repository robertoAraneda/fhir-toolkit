import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBundleEntrySearch,
  IElement,
  SearchEntryModeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BundleEntrySearch */
const BUNDLE_ENTRY_SEARCH_PROPERTIES = [
  'mode',
  '_mode',
  'score',
  '_score',
] as const;

/**
 * BundleEntrySearch - Search related information
 *
 * @see https://hl7.org/fhir/R4B/bundleentrysearch.html
 *
 * @example
 * const bundleEntrySearch = new BundleEntrySearch({
 *   // ... properties
 * });
 */
export class BundleEntrySearch extends BackboneElement implements IBundleEntrySearch {

  // ============================================================================
  // Properties
  // ============================================================================

  /** match | include | outcome - why this is in the result set */
  mode?: SearchEntryModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Search ranking (between 0 and 1) */
  score?: number;

  /** Extension for score */
  _score?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBundleEntrySearch>) {
    super(data);
    if (data) {
      this.assignProps(data, BUNDLE_ENTRY_SEARCH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BundleEntrySearch from a JSON object
   */
  static fromJSON(json: IBundleEntrySearch): BundleEntrySearch {
    return new BundleEntrySearch(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BundleEntrySearch with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBundleEntrySearch>): BundleEntrySearch {
    return new BundleEntrySearch({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BundleEntrySearch by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBundleEntrySearch) => Partial<IBundleEntrySearch>): BundleEntrySearch {
    const currentData = this.toJSON();
    return new BundleEntrySearch({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBundleEntrySearch)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBundleEntrySearch {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BUNDLE_ENTRY_SEARCH_PROPERTIES);
    return result as IBundleEntrySearch;
  }

  /**
   * Create a deep clone of this BundleEntrySearch
   */
  clone(): BundleEntrySearch {
    return new BundleEntrySearch(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BundleEntrySearch
   */
  toString(): string {
    const parts: string[] = ['BundleEntrySearch'];
    return parts.join(', ');
  }
}
