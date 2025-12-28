import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DocumentRelationshipTypeType,
  ICompositionRelatesTo,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CompositionRelatesTo */
const COMPOSITION_RELATES_TO_PROPERTIES = [
  'code',
  '_code',
  'targetIdentifier',
  'targetReference',
] as const;

/**
 * CompositionRelatesTo - Relationships to other compositions/documents
 *
 * @see https://hl7.org/fhir/R4B/compositionrelatesto.html
 *
 * @example
 * const compositionRelatesTo = new CompositionRelatesTo({
 *   // ... properties
 * });
 */
export class CompositionRelatesTo extends BackboneElement implements ICompositionRelatesTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** replaces | transforms | signs | appends */
  code: DocumentRelationshipTypeType;

  /** Extension for code */
  _code?: IElement;

  /** Target of the relationship */
  targetIdentifier?: IIdentifier;

  /** Target of the relationship */
  targetReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICompositionRelatesTo>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPOSITION_RELATES_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CompositionRelatesTo from a JSON object
   */
  static fromJSON(json: ICompositionRelatesTo): CompositionRelatesTo {
    return new CompositionRelatesTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CompositionRelatesTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICompositionRelatesTo>): CompositionRelatesTo {
    return new CompositionRelatesTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CompositionRelatesTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICompositionRelatesTo) => Partial<ICompositionRelatesTo>): CompositionRelatesTo {
    const currentData = this.toJSON();
    return new CompositionRelatesTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICompositionRelatesTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICompositionRelatesTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMPOSITION_RELATES_TO_PROPERTIES);
    return result as ICompositionRelatesTo;
  }

  /**
   * Create a deep clone of this CompositionRelatesTo
   */
  clone(): CompositionRelatesTo {
    return new CompositionRelatesTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CompositionRelatesTo
   */
  toString(): string {
    const parts: string[] = ['CompositionRelatesTo'];
    return parts.join(', ');
  }
}
