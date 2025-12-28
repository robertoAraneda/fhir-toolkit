import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIdentifier,
  IMessageHeaderResponse,
  IReference,
  ResponseTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MessageHeaderResponse */
const MESSAGE_HEADER_RESPONSE_PROPERTIES = [
  'identifier',
  'code',
  '_code',
  'details',
] as const;

/**
 * MessageHeaderResponse - If this is a reply to prior message
 *
 * @see https://hl7.org/fhir/R5/messageheaderresponse.html
 *
 * @example
 * const messageHeaderResponse = new MessageHeaderResponse({
 *   // ... properties
 * });
 */
export class MessageHeaderResponse extends BackboneElement implements IMessageHeaderResponse {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Bundle.identifier of original message */
  identifier: IIdentifier;

  /** ok | transient-error | fatal-error */
  code: ResponseTypeType;

  /** Extension for code */
  _code?: IElement;

  /** Specific list of hints/warnings/errors */
  details?: IReference<'OperationOutcome'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMessageHeaderResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_HEADER_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageHeaderResponse from a JSON object
   */
  static fromJSON(json: IMessageHeaderResponse): MessageHeaderResponse {
    return new MessageHeaderResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageHeaderResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageHeaderResponse>): MessageHeaderResponse {
    return new MessageHeaderResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageHeaderResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageHeaderResponse) => Partial<IMessageHeaderResponse>): MessageHeaderResponse {
    const currentData = this.toJSON();
    return new MessageHeaderResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageHeaderResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageHeaderResponse {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MESSAGE_HEADER_RESPONSE_PROPERTIES);
    return result as IMessageHeaderResponse;
  }

  /**
   * Create a deep clone of this MessageHeaderResponse
   */
  clone(): MessageHeaderResponse {
    return new MessageHeaderResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageHeaderResponse
   */
  toString(): string {
    const parts: string[] = ['MessageHeaderResponse'];
    return parts.join(', ');
  }
}
