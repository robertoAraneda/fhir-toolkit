import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICommunicationPayload,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CommunicationPayload */
const COMMUNICATION_PAYLOAD_PROPERTIES = [
  'contentString',
  '_contentString',
  'contentAttachment',
  'contentReference',
] as const;

/**
 * CommunicationPayload - Message payload
 *
 * @see https://hl7.org/fhir/R4/communicationpayload.html
 *
 * @example
 * const communicationPayload = new CommunicationPayload({
 *   // ... properties
 * });
 */
export class CommunicationPayload extends BackboneElement implements ICommunicationPayload {

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

  constructor(data?: Partial<ICommunicationPayload>) {
    super(data);
    if (data) {
      this.assignProps(data, COMMUNICATION_PAYLOAD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CommunicationPayload from a JSON object
   */
  static fromJSON(json: ICommunicationPayload): CommunicationPayload {
    return new CommunicationPayload(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CommunicationPayload with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICommunicationPayload>): CommunicationPayload {
    return new CommunicationPayload({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CommunicationPayload by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICommunicationPayload) => Partial<ICommunicationPayload>): CommunicationPayload {
    const currentData = this.toJSON();
    return new CommunicationPayload({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICommunicationPayload)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICommunicationPayload {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMMUNICATION_PAYLOAD_PROPERTIES);
    return result as ICommunicationPayload;
  }

  /**
   * Create a deep clone of this CommunicationPayload
   */
  clone(): CommunicationPayload {
    return new CommunicationPayload(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CommunicationPayload
   */
  toString(): string {
    const parts: string[] = ['CommunicationPayload'];
    return parts.join(', ');
  }
}
