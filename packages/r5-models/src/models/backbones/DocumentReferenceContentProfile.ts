import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IDocumentReferenceContentProfile,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DocumentReferenceContentProfile */
const DOCUMENT_REFERENCE_CONTENT_PROFILE_PROPERTIES = [
  'valueCoding',
  'valueUri',
  '_valueUri',
  'valueCanonical',
  '_valueCanonical',
] as const;

/**
 * DocumentReferenceContentProfile - Content profile rules for the document
 *
 * @see https://hl7.org/fhir/R4/documentreferencecontentprofile.html
 *
 * @example
 * const documentReferenceContentProfile = new DocumentReferenceContentProfile({
 *   // ... properties
 * });
 */
export class DocumentReferenceContentProfile extends BackboneElement implements IDocumentReferenceContentProfile {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code|uri|canonical */
  valueCoding?: ICoding;

  /** Code|uri|canonical */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Code|uri|canonical */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDocumentReferenceContentProfile>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_CONTENT_PROFILE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReferenceContentProfile from a JSON object
   */
  static fromJSON(json: IDocumentReferenceContentProfile): DocumentReferenceContentProfile {
    return new DocumentReferenceContentProfile(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReferenceContentProfile with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReferenceContentProfile>): DocumentReferenceContentProfile {
    return new DocumentReferenceContentProfile({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReferenceContentProfile by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReferenceContentProfile) => Partial<IDocumentReferenceContentProfile>): DocumentReferenceContentProfile {
    const currentData = this.toJSON();
    return new DocumentReferenceContentProfile({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReferenceContentProfile)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReferenceContentProfile {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_CONTENT_PROFILE_PROPERTIES);
    return result as IDocumentReferenceContentProfile;
  }

  /**
   * Create a deep clone of this DocumentReferenceContentProfile
   */
  clone(): DocumentReferenceContentProfile {
    return new DocumentReferenceContentProfile(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReferenceContentProfile
   */
  toString(): string {
    const parts: string[] = ['DocumentReferenceContentProfile'];
    return parts.join(', ');
  }
}
