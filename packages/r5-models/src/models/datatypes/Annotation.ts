import { Element } from '../base/Element.js';
import type {
  IAnnotation,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Annotation */
const ANNOTATION_PROPERTIES = [
  'authorReference',
  'authorString',
  '_authorString',
  'time',
  '_time',
  'text',
  '_text',
] as const;

/**
 * Annotation - A  text note which also  contains information about who made the statement and when.
 *
 * @see https://hl7.org/fhir/R5/annotation.html
 *
 * @example
 * const annotation = new Annotation({
 *   // ... properties
 * });
 */
export class Annotation extends Element implements IAnnotation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Individual responsible for the annotation */
  authorReference?: IReference;

  /** Individual responsible for the annotation */
  authorString?: string;

  /** Extension for authorString */
  _authorString?: IElement;

  /** When the annotation was made */
  time?: string;

  /** Extension for time */
  _time?: IElement;

  /** The annotation  - text content (as markdown) */
  text: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAnnotation>) {
    super(data);
    if (data) {
      this.assignProps(data, ANNOTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Annotation from a JSON object
   */
  static fromJSON(json: IAnnotation): Annotation {
    return new Annotation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Annotation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAnnotation>): Annotation {
    return new Annotation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Annotation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAnnotation) => Partial<IAnnotation>): Annotation {
    const currentData = this.toJSON();
    return new Annotation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAnnotation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAnnotation {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, ANNOTATION_PROPERTIES);
    return result as IAnnotation;
  }

  /**
   * Create a deep clone of this Annotation
   */
  clone(): Annotation {
    return new Annotation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Annotation
   */
  toString(): string {
    const parts: string[] = ['Annotation'];
    return parts.join(', ');
  }
}
