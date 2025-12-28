import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBundleEntryResponse,
  IElement,
  IResource,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BundleEntryResponse */
const BUNDLE_ENTRY_RESPONSE_PROPERTIES = [
  'status',
  '_status',
  'location',
  '_location',
  'etag',
  '_etag',
  'lastModified',
  '_lastModified',
  'outcome',
] as const;

/**
 * BundleEntryResponse - Results of execution (transaction/batch/history)
 *
 * @see https://hl7.org/fhir/R5/bundleentryresponse.html
 *
 * @example
 * const bundleEntryResponse = new BundleEntryResponse({
 *   // ... properties
 * });
 */
export class BundleEntryResponse extends BackboneElement implements IBundleEntryResponse {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Status response code (text optional) */
  status: string;

  /** Extension for status */
  _status?: IElement;

  /** The location (if the operation returns a location) */
  location?: string;

  /** Extension for location */
  _location?: IElement;

  /** The Etag for the resource (if relevant) */
  etag?: string;

  /** Extension for etag */
  _etag?: IElement;

  /** Server's date time modified */
  lastModified?: string;

  /** Extension for lastModified */
  _lastModified?: IElement;

  /** OperationOutcome with hints and warnings (for batch/transaction) */
  outcome?: IResource;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBundleEntryResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, BUNDLE_ENTRY_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BundleEntryResponse from a JSON object
   */
  static fromJSON(json: IBundleEntryResponse): BundleEntryResponse {
    return new BundleEntryResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BundleEntryResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBundleEntryResponse>): BundleEntryResponse {
    return new BundleEntryResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BundleEntryResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBundleEntryResponse) => Partial<IBundleEntryResponse>): BundleEntryResponse {
    const currentData = this.toJSON();
    return new BundleEntryResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBundleEntryResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBundleEntryResponse {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BUNDLE_ENTRY_RESPONSE_PROPERTIES);
    return result as IBundleEntryResponse;
  }

  /**
   * Create a deep clone of this BundleEntryResponse
   */
  clone(): BundleEntryResponse {
    return new BundleEntryResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BundleEntryResponse
   */
  toString(): string {
    const parts: string[] = ['BundleEntryResponse'];
    return parts.join(', ');
  }
}
