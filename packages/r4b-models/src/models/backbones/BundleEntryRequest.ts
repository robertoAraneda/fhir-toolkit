import { BackboneElement } from '../base/BackboneElement.js';
import type {
  HTTPVerbType,
  IBundleEntryRequest,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BundleEntryRequest */
const BUNDLE_ENTRY_REQUEST_PROPERTIES = [
  'method',
  '_method',
  'url',
  '_url',
  'ifNoneMatch',
  '_ifNoneMatch',
  'ifModifiedSince',
  '_ifModifiedSince',
  'ifMatch',
  '_ifMatch',
  'ifNoneExist',
  '_ifNoneExist',
] as const;

/**
 * BundleEntryRequest - Additional execution information (transaction/batch/history)
 *
 * @see https://hl7.org/fhir/R4/bundleentryrequest.html
 *
 * @example
 * const bundleEntryRequest = new BundleEntryRequest({
 *   // ... properties
 * });
 */
export class BundleEntryRequest extends BackboneElement implements IBundleEntryRequest {

  // ============================================================================
  // Properties
  // ============================================================================

  /** GET | HEAD | POST | PUT | DELETE | PATCH */
  method: HTTPVerbType;

  /** Extension for method */
  _method?: IElement;

  /** URL for HTTP equivalent of this entry */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** For managing cache currency */
  ifNoneMatch?: string;

  /** Extension for ifNoneMatch */
  _ifNoneMatch?: IElement;

  /** For managing cache currency */
  ifModifiedSince?: string;

  /** Extension for ifModifiedSince */
  _ifModifiedSince?: IElement;

  /** For managing update contention */
  ifMatch?: string;

  /** Extension for ifMatch */
  _ifMatch?: IElement;

  /** For conditional creates */
  ifNoneExist?: string;

  /** Extension for ifNoneExist */
  _ifNoneExist?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBundleEntryRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, BUNDLE_ENTRY_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BundleEntryRequest from a JSON object
   */
  static fromJSON(json: IBundleEntryRequest): BundleEntryRequest {
    return new BundleEntryRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BundleEntryRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBundleEntryRequest>): BundleEntryRequest {
    return new BundleEntryRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BundleEntryRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBundleEntryRequest) => Partial<IBundleEntryRequest>): BundleEntryRequest {
    const currentData = this.toJSON();
    return new BundleEntryRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBundleEntryRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBundleEntryRequest {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BUNDLE_ENTRY_REQUEST_PROPERTIES);
    return result as IBundleEntryRequest;
  }

  /**
   * Create a deep clone of this BundleEntryRequest
   */
  clone(): BundleEntryRequest {
    return new BundleEntryRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BundleEntryRequest
   */
  toString(): string {
    const parts: string[] = ['BundleEntryRequest'];
    return parts.join(', ');
  }
}
