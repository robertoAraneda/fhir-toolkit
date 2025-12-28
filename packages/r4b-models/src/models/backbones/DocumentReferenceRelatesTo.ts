import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DocumentRelationshipTypeType,
  IDocumentReferenceRelatesTo,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DocumentReferenceRelatesTo */
const DOCUMENT_REFERENCE_RELATES_TO_PROPERTIES = [
  'code',
  '_code',
  'target',
] as const;

/**
 * DocumentReferenceRelatesTo - Relationships to other documents
 *
 * @see https://hl7.org/fhir/R4B/documentreferencerelatesto.html
 *
 * @example
 * const documentReferenceRelatesTo = new DocumentReferenceRelatesTo({
 *   // ... properties
 * });
 */
export class DocumentReferenceRelatesTo extends BackboneElement implements IDocumentReferenceRelatesTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** replaces | transforms | signs | appends */
  code: DocumentRelationshipTypeType;

  /** Extension for code */
  _code?: IElement;

  /** Target of the relationship */
  target: IReference<'DocumentReference'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDocumentReferenceRelatesTo>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_RELATES_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReferenceRelatesTo from a JSON object
   */
  static fromJSON(json: IDocumentReferenceRelatesTo): DocumentReferenceRelatesTo {
    return new DocumentReferenceRelatesTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReferenceRelatesTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReferenceRelatesTo>): DocumentReferenceRelatesTo {
    return new DocumentReferenceRelatesTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReferenceRelatesTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReferenceRelatesTo) => Partial<IDocumentReferenceRelatesTo>): DocumentReferenceRelatesTo {
    const currentData = this.toJSON();
    return new DocumentReferenceRelatesTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReferenceRelatesTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReferenceRelatesTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_RELATES_TO_PROPERTIES);
    return result as IDocumentReferenceRelatesTo;
  }

  /**
   * Create a deep clone of this DocumentReferenceRelatesTo
   */
  clone(): DocumentReferenceRelatesTo {
    return new DocumentReferenceRelatesTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReferenceRelatesTo
   */
  toString(): string {
    const parts: string[] = ['DocumentReferenceRelatesTo'];
    return parts.join(', ');
  }
}
