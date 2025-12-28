import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMessageDefinitionFocus,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MessageDefinitionFocus */
const MESSAGE_DEFINITION_FOCUS_PROPERTIES = [
  'code',
  '_code',
  'profile',
  '_profile',
  'min',
  '_min',
  'max',
  '_max',
] as const;

/**
 * MessageDefinitionFocus - Resource(s) that are the subject of the event
 *
 * @see https://hl7.org/fhir/R5/messagedefinitionfocus.html
 *
 * @example
 * const messageDefinitionFocus = new MessageDefinitionFocus({
 *   // ... properties
 * });
 */
export class MessageDefinitionFocus extends BackboneElement implements IMessageDefinitionFocus {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of resource */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Profile that must be adhered to by focus */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  /** Minimum number of focuses of this type */
  min: number;

  /** Extension for min */
  _min?: IElement;

  /** Maximum number of focuses of this type */
  max?: string;

  /** Extension for max */
  _max?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMessageDefinitionFocus>) {
    super(data);
    if (data) {
      this.assignProps(data, MESSAGE_DEFINITION_FOCUS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MessageDefinitionFocus from a JSON object
   */
  static fromJSON(json: IMessageDefinitionFocus): MessageDefinitionFocus {
    return new MessageDefinitionFocus(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MessageDefinitionFocus with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMessageDefinitionFocus>): MessageDefinitionFocus {
    return new MessageDefinitionFocus({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MessageDefinitionFocus by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMessageDefinitionFocus) => Partial<IMessageDefinitionFocus>): MessageDefinitionFocus {
    const currentData = this.toJSON();
    return new MessageDefinitionFocus({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMessageDefinitionFocus)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMessageDefinitionFocus {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MESSAGE_DEFINITION_FOCUS_PROPERTIES);
    return result as IMessageDefinitionFocus;
  }

  /**
   * Create a deep clone of this MessageDefinitionFocus
   */
  clone(): MessageDefinitionFocus {
    return new MessageDefinitionFocus(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MessageDefinitionFocus
   */
  toString(): string {
    const parts: string[] = ['MessageDefinitionFocus'];
    return parts.join(', ');
  }
}
