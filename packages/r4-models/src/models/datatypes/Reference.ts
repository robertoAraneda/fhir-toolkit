import { Element } from '../base/Element.js';
import type {
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Reference */
const REFERENCE_PROPERTIES = [
  'reference',
  '_reference',
  'type',
  '_type',
  'identifier',
  'display',
  '_display',
] as const;

/**
 * Reference - A reference from one resource to another.
 *
 * @see https://hl7.org/fhir/R4/reference.html
 *
 * @example
 * const reference = new Reference({
 *   // ... properties
 * });
 */
export class Reference extends Element implements IReference {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Literal reference, Relative, internal or absolute URL */
  reference?: string;

  /** Extension for reference */
  _reference?: IElement;

  /** Type the reference refers to (e.g. "Patient") */
  type?: string;

  /** Extension for type */
  _type?: IElement;

  /** Logical reference, when literal reference is not known */
  identifier?: IIdentifier;

  /** Text alternative for the resource */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IReference>) {
    super(data);
    if (data) {
      this.assignProps(data, REFERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Reference from a JSON object
   */
  static fromJSON(json: IReference): Reference {
    return new Reference(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Reference with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IReference>): Reference {
    return new Reference({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Reference by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IReference) => Partial<IReference>): Reference {
    const currentData = this.toJSON();
    return new Reference({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IReference)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IReference {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, REFERENCE_PROPERTIES);
    return result as IReference;
  }

  /**
   * Create a deep clone of this Reference
   */
  clone(): Reference {
    return new Reference(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Reference
   */
  toString(): string {
    const parts: string[] = ['Reference'];
    return parts.join(', ');
  }
}
