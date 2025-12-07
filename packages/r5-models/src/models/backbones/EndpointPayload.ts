import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IEndpointPayload,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EndpointPayload */
const ENDPOINT_PAYLOAD_PROPERTIES = [
  'type',
  'mimeType',
  '_mimeType',
] as const;

/**
 * EndpointPayload - Set of payloads that are provided by this endpoint
 *
 * @see https://hl7.org/fhir/R4/endpointpayload.html
 *
 * @example
 * const endpointPayload = new EndpointPayload({
 *   // ... properties
 * });
 */
export class EndpointPayload extends BackboneElement implements IEndpointPayload {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
  type?: ICodeableConcept[];

  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
  mimeType?: string[];

  /** Extension for mimeType */
  _mimeType?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEndpointPayload>) {
    super(data);
    if (data) {
      this.assignProps(data, ENDPOINT_PAYLOAD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EndpointPayload from a JSON object
   */
  static fromJSON(json: IEndpointPayload): EndpointPayload {
    return new EndpointPayload(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EndpointPayload with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEndpointPayload>): EndpointPayload {
    return new EndpointPayload({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EndpointPayload by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEndpointPayload) => Partial<IEndpointPayload>): EndpointPayload {
    const currentData = this.toJSON();
    return new EndpointPayload({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEndpointPayload)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEndpointPayload {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENDPOINT_PAYLOAD_PROPERTIES);
    return result as IEndpointPayload;
  }

  /**
   * Create a deep clone of this EndpointPayload
   */
  clone(): EndpointPayload {
    return new EndpointPayload(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EndpointPayload
   */
  toString(): string {
    const parts: string[] = ['EndpointPayload'];
    return parts.join(', ');
  }
}
