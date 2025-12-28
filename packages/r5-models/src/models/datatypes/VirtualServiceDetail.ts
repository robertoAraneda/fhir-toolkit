import { Element } from '../base/Element.js';
import type {
  ICoding,
  IContactPoint,
  IElement,
  IExtendedContactDetail,
  IVirtualServiceDetail,
} from '@fhir-toolkit/r5-types';

/** Properties specific to VirtualServiceDetail */
const VIRTUAL_SERVICE_DETAIL_PROPERTIES = [
  'channelType',
  'addressUrl',
  '_addressUrl',
  'addressString',
  '_addressString',
  'addressContactPoint',
  'addressExtendedContactDetail',
  'additionalInfo',
  '_additionalInfo',
  'maxParticipants',
  '_maxParticipants',
  'sessionKey',
  '_sessionKey',
] as const;

/**
 * VirtualServiceDetail - Virtual Service Contact Details.
 *
 * @see https://hl7.org/fhir/R5/virtualservicedetail.html
 *
 * @example
 * const virtualServiceDetail = new VirtualServiceDetail({
 *   // ... properties
 * });
 */
export class VirtualServiceDetail extends Element implements IVirtualServiceDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Channel Type */
  channelType?: ICoding;

  /** Contact address/number */
  addressUrl?: string;

  /** Extension for addressUrl */
  _addressUrl?: IElement;

  /** Contact address/number */
  addressString?: string;

  /** Extension for addressString */
  _addressString?: IElement;

  /** Contact address/number */
  addressContactPoint?: IContactPoint;

  /** Contact address/number */
  addressExtendedContactDetail?: IExtendedContactDetail;

  /** Address to see alternative connection details */
  additionalInfo?: string[];

  /** Extension for additionalInfo */
  _additionalInfo?: IElement;

  /** Maximum number of participants supported by the virtual service */
  maxParticipants?: number;

  /** Extension for maxParticipants */
  _maxParticipants?: IElement;

  /** Session Key required by the virtual service */
  sessionKey?: string;

  /** Extension for sessionKey */
  _sessionKey?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IVirtualServiceDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, VIRTUAL_SERVICE_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VirtualServiceDetail from a JSON object
   */
  static fromJSON(json: IVirtualServiceDetail): VirtualServiceDetail {
    return new VirtualServiceDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VirtualServiceDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVirtualServiceDetail>): VirtualServiceDetail {
    return new VirtualServiceDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VirtualServiceDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVirtualServiceDetail) => Partial<IVirtualServiceDetail>): VirtualServiceDetail {
    const currentData = this.toJSON();
    return new VirtualServiceDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVirtualServiceDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVirtualServiceDetail {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, VIRTUAL_SERVICE_DETAIL_PROPERTIES);
    return result as IVirtualServiceDetail;
  }

  /**
   * Create a deep clone of this VirtualServiceDetail
   */
  clone(): VirtualServiceDetail {
    return new VirtualServiceDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VirtualServiceDetail
   */
  toString(): string {
    const parts: string[] = ['VirtualServiceDetail'];
    return parts.join(', ');
  }
}
