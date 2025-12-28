import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IContactPoint,
  IElement,
  IMessageHeaderSource,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MessageHeaderSource */
const MESSAGE_HEADER_SOURCE_PROPERTIES = [
  'endpointUrl',
  '_endpointUrl',
  'endpointReference',
  'name',
  '_name',
  'software',
  '_software',
  'version',
  '_version',
  'contact',
] as const;

/**
 * MessageHeaderSource - Message source application
 *
 * @see https://hl7.org/fhir/R5/messageheadersource.html
 *
 * @example
 * const messageHeaderSource = new MessageHeaderSource({
 *   // ... properties
 * });
 */
export class MessageHeaderSource extends BackboneElement implements IMessageHeaderSource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Actual source address or Endpoint resource */
  endpointUrl?: string;

  /** Extension for endpointUrl */
  _endpointUrl?: IElement;

  /** Actual source address or Endpoint resource */
  endpointReference?: IReference;

  /** Name of system */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name of software running the system */
  software?: string;

  /** Extension for software */
  _software?: IElement;

  /** Version of software running */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Human contact for problems */
  contact?: IContactPoint;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMessageHeaderSource>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_HEADER_SOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageHeaderSource from a JSON object
   */
  static fromJSON(json: IMessageHeaderSource): MessageHeaderSource {
    return new MessageHeaderSource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageHeaderSource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageHeaderSource>): MessageHeaderSource {
    return new MessageHeaderSource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageHeaderSource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageHeaderSource) => Partial<IMessageHeaderSource>): MessageHeaderSource {
    const currentData = this.toJSON();
    return new MessageHeaderSource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageHeaderSource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageHeaderSource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MESSAGE_HEADER_SOURCE_PROPERTIES);
    return result as IMessageHeaderSource;
  }

  /**
   * Create a deep clone of this MessageHeaderSource
   */
  clone(): MessageHeaderSource {
    return new MessageHeaderSource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageHeaderSource
   */
  toString(): string {
    const parts: string[] = ['MessageHeaderSource'];
    return parts.join(', ');
  }
}
