import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICoding,
  IDocumentReferenceContent,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DocumentReferenceContent */
const DOCUMENT_REFERENCE_CONTENT_PROPERTIES = [
  'attachment',
  'format',
] as const;

/**
 * DocumentReferenceContent - Document referenced
 *
 * @see https://hl7.org/fhir/R4/documentreferencecontent.html
 *
 * @example
 * const documentReferenceContent = new DocumentReferenceContent({
 *   // ... properties
 * });
 */
export class DocumentReferenceContent extends BackboneElement implements IDocumentReferenceContent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Where to access the document */
  attachment: IAttachment;

  /** Format/content rules for the document */
  format?: ICoding;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDocumentReferenceContent>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_CONTENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReferenceContent from a JSON object
   */
  static fromJSON(json: IDocumentReferenceContent): DocumentReferenceContent {
    return new DocumentReferenceContent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReferenceContent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReferenceContent>): DocumentReferenceContent {
    return new DocumentReferenceContent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReferenceContent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReferenceContent) => Partial<IDocumentReferenceContent>): DocumentReferenceContent {
    const currentData = this.toJSON();
    return new DocumentReferenceContent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReferenceContent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReferenceContent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_CONTENT_PROPERTIES);
    return result as IDocumentReferenceContent;
  }

  /**
   * Create a deep clone of this DocumentReferenceContent
   */
  clone(): DocumentReferenceContent {
    return new DocumentReferenceContent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReferenceContent
   */
  toString(): string {
    const parts: string[] = ['DocumentReferenceContent'];
    return parts.join(', ');
  }
}
