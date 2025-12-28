import { Element } from '../base/Element.js';
import type {
  ICoding,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Coding */
const CODING_PROPERTIES = [
  'system',
  '_system',
  'version',
  '_version',
  'code',
  '_code',
  'display',
  '_display',
  'userSelected',
  '_userSelected',
] as const;

/**
 * Coding - A reference to a code defined by a terminology system.
 *
 * @see https://hl7.org/fhir/R5/coding.html
 *
 * @example
 * const coding = new Coding({
 *   // ... properties
 * });
 */
export class Coding extends Element implements ICoding {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identity of the terminology system */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** Version of the system - if relevant */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Symbol in syntax defined by the system */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  /** Representation defined by the system */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** If this coding was chosen directly by the user */
  userSelected?: boolean;

  /** Extension for userSelected */
  _userSelected?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoding>) {
    super(data);
    if (data) {
      this.assignProps(data, CODING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Coding from a JSON object
   */
  static fromJSON(json: ICoding): Coding {
    return new Coding(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Coding with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoding>): Coding {
    return new Coding({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Coding by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoding) => Partial<ICoding>): Coding {
    const currentData = this.toJSON();
    return new Coding({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoding)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoding {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, CODING_PROPERTIES);
    return result as ICoding;
  }

  /**
   * Create a deep clone of this Coding
   */
  clone(): Coding {
    return new Coding(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Coding
   */
  toString(): string {
    const parts: string[] = ['Coding'];
    return parts.join(', ');
  }
}
