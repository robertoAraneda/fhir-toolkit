import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CodeableReference */
const CODEABLE_REFERENCE_PROPERTIES = [
  'concept',
  'reference',
] as const;

/**
 * CodeableReference - A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).
 *
 * @see https://hl7.org/fhir/R4/codeablereference.html
 *
 * @example
 * const codeableReference = new CodeableReference({
 *   // ... properties
 * });
 */
export class CodeableReference extends Element implements ICodeableReference {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to a concept (by class) */
  concept?: ICodeableConcept;

  /** Reference to a resource (by instance) */
  reference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeableReference>) {
    super(data);
    if (data) {
      this.assignProps(data, CODEABLE_REFERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeableReference from a JSON object
   */
  static fromJSON(json: ICodeableReference): CodeableReference {
    return new CodeableReference(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeableReference with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeableReference>): CodeableReference {
    return new CodeableReference({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeableReference by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeableReference) => Partial<ICodeableReference>): CodeableReference {
    const currentData = this.toJSON();
    return new CodeableReference({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeableReference)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeableReference {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, CODEABLE_REFERENCE_PROPERTIES);
    return result as ICodeableReference;
  }

  /**
   * Create a deep clone of this CodeableReference
   */
  clone(): CodeableReference {
    return new CodeableReference(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeableReference
   */
  toString(): string {
    const parts: string[] = ['CodeableReference'];
    return parts.join(', ');
  }
}
