import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMessageDefinitionAllowedResponse,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MessageDefinitionAllowedResponse */
const MESSAGE_DEFINITION_ALLOWED_RESPONSE_PROPERTIES = [
  'message',
  '_message',
  'situation',
  '_situation',
] as const;

/**
 * MessageDefinitionAllowedResponse - Responses to this message
 *
 * @see https://hl7.org/fhir/R4/messagedefinitionallowedresponse.html
 *
 * @example
 * const messageDefinitionAllowedResponse = new MessageDefinitionAllowedResponse({
 *   // ... properties
 * });
 */
export class MessageDefinitionAllowedResponse extends BackboneElement implements IMessageDefinitionAllowedResponse {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to allowed message definition response */
  message: string;

  /** Extension for message */
  _message?: IElement;

  /** When should this response be used */
  situation?: string;

  /** Extension for situation */
  _situation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMessageDefinitionAllowedResponse>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_DEFINITION_ALLOWED_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageDefinitionAllowedResponse from a JSON object
   */
  static fromJSON(json: IMessageDefinitionAllowedResponse): MessageDefinitionAllowedResponse {
    return new MessageDefinitionAllowedResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageDefinitionAllowedResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageDefinitionAllowedResponse>): MessageDefinitionAllowedResponse {
    return new MessageDefinitionAllowedResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageDefinitionAllowedResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageDefinitionAllowedResponse) => Partial<IMessageDefinitionAllowedResponse>): MessageDefinitionAllowedResponse {
    const currentData = this.toJSON();
    return new MessageDefinitionAllowedResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageDefinitionAllowedResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageDefinitionAllowedResponse {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MESSAGE_DEFINITION_ALLOWED_RESPONSE_PROPERTIES);
    return result as IMessageDefinitionAllowedResponse;
  }

  /**
   * Create a deep clone of this MessageDefinitionAllowedResponse
   */
  clone(): MessageDefinitionAllowedResponse {
    return new MessageDefinitionAllowedResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageDefinitionAllowedResponse
   */
  toString(): string {
    const parts: string[] = ['MessageDefinitionAllowedResponse'];
    return parts.join(', ');
  }
}
