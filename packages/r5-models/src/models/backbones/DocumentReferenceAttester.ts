import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDocumentReferenceAttester,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DocumentReferenceAttester */
const DOCUMENT_REFERENCE_ATTESTER_PROPERTIES = [
  'mode',
  'time',
  '_time',
  'party',
] as const;

/**
 * DocumentReferenceAttester - Attests to accuracy of the document
 *
 * @see https://hl7.org/fhir/R5/documentreferenceattester.html
 *
 * @example
 * const documentReferenceAttester = new DocumentReferenceAttester({
 *   // ... properties
 * });
 */
export class DocumentReferenceAttester extends BackboneElement implements IDocumentReferenceAttester {

  // ============================================================================
  // Properties
  // ============================================================================

  /** personal | professional | legal | official */
  mode: ICodeableConcept;

  /** When the document was attested */
  time?: string;

  /** Extension for time */
  _time?: IElement;

  /** Who attested the document */
  party?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDocumentReferenceAttester>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_ATTESTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReferenceAttester from a JSON object
   */
  static fromJSON(json: IDocumentReferenceAttester): DocumentReferenceAttester {
    return new DocumentReferenceAttester(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReferenceAttester with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReferenceAttester>): DocumentReferenceAttester {
    return new DocumentReferenceAttester({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReferenceAttester by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReferenceAttester) => Partial<IDocumentReferenceAttester>): DocumentReferenceAttester {
    const currentData = this.toJSON();
    return new DocumentReferenceAttester({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReferenceAttester)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReferenceAttester {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_ATTESTER_PROPERTIES);
    return result as IDocumentReferenceAttester;
  }

  /**
   * Create a deep clone of this DocumentReferenceAttester
   */
  clone(): DocumentReferenceAttester {
    return new DocumentReferenceAttester(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReferenceAttester
   */
  toString(): string {
    const parts: string[] = ['DocumentReferenceAttester'];
    return parts.join(', ');
  }
}
