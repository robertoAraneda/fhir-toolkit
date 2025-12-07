import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICommunicationRequestPayload,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CommunicationRequestPayload */
const COMMUNICATION_REQUEST_PAYLOAD_PROPERTIES = [
  'contentString',
  '_contentString',
  'contentAttachment',
  'contentReference',
] as const;

/**
 * CommunicationRequestPayload - Message payload
 *
 * @see https://hl7.org/fhir/R4/communicationrequestpayload.html
 *
 * @example
 * const communicationRequestPayload = new CommunicationRequestPayload({
 *   // ... properties
 * });
 */
export class CommunicationRequestPayload extends BackboneElement implements ICommunicationRequestPayload {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Message part content */
  contentString?: string;

  /** Extension for contentString */
  _contentString?: IElement;

  /** Message part content */
  contentAttachment?: IAttachment;

  /** Message part content */
  contentReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICommunicationRequestPayload>) {
    super(data);
    if (data) {
      this.assignProps(data, COMMUNICATION_REQUEST_PAYLOAD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CommunicationRequestPayload from a JSON object
   */
  static fromJSON(json: ICommunicationRequestPayload): CommunicationRequestPayload {
    return new CommunicationRequestPayload(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CommunicationRequestPayload with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICommunicationRequestPayload>): CommunicationRequestPayload {
    return new CommunicationRequestPayload({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CommunicationRequestPayload by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICommunicationRequestPayload) => Partial<ICommunicationRequestPayload>): CommunicationRequestPayload {
    const currentData = this.toJSON();
    return new CommunicationRequestPayload({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICommunicationRequestPayload)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICommunicationRequestPayload {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMMUNICATION_REQUEST_PAYLOAD_PROPERTIES);
    return result as ICommunicationRequestPayload;
  }

  /**
   * Create a deep clone of this CommunicationRequestPayload
   */
  clone(): CommunicationRequestPayload {
    return new CommunicationRequestPayload(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CommunicationRequestPayload
   */
  toString(): string {
    const parts: string[] = ['CommunicationRequestPayload'];
    return parts.join(', ');
  }
}
