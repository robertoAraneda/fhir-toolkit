import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
  IElement,
  IResource,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BundleEntry */
const BUNDLE_ENTRY_PROPERTIES = [
  'link',
  'fullUrl',
  '_fullUrl',
  'resource',
  'search',
  'request',
  'response',
] as const;

/**
 * BundleEntry - Entry in the bundle - will have a resource or information
 *
 * @see https://hl7.org/fhir/R5/bundleentry.html
 *
 * @example
 * const bundleEntry = new BundleEntry({
 *   // ... properties
 * });
 */
export class BundleEntry extends BackboneElement implements IBundleEntry {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Links related to this entry */
  link?: IBundleLink[];

  /** URI for resource (e.g. the absolute URL server address, URI for UUID/OID, etc.) */
  fullUrl?: string;

  /** Extension for fullUrl */
  _fullUrl?: IElement;

  /** A resource in the bundle */
  resource?: IResource;

  /** Search related information */
  search?: IBundleEntrySearch;

  /** Additional execution information (transaction/batch/history) */
  request?: IBundleEntryRequest;

  /** Results of execution (transaction/batch/history) */
  response?: IBundleEntryResponse;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBundleEntry>) {
    super(data);
    if (data) {
      this.assignProps(data, BUNDLE_ENTRY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BundleEntry from a JSON object
   */
  static fromJSON(json: IBundleEntry): BundleEntry {
    return new BundleEntry(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BundleEntry with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBundleEntry>): BundleEntry {
    return new BundleEntry({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BundleEntry by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBundleEntry) => Partial<IBundleEntry>): BundleEntry {
    const currentData = this.toJSON();
    return new BundleEntry({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBundleEntry)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBundleEntry {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BUNDLE_ENTRY_PROPERTIES);
    return result as IBundleEntry;
  }

  /**
   * Create a deep clone of this BundleEntry
   */
  clone(): BundleEntry {
    return new BundleEntry(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BundleEntry
   */
  toString(): string {
    const parts: string[] = ['BundleEntry'];
    return parts.join(', ');
  }
}
