import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDocumentManifestRelated,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DocumentManifestRelated */
const DOCUMENT_MANIFEST_RELATED_PROPERTIES = [
  'identifier',
  'ref',
] as const;

/**
 * DocumentManifestRelated - Related things
 *
 * @see https://hl7.org/fhir/R4/documentmanifestrelated.html
 *
 * @example
 * const documentManifestRelated = new DocumentManifestRelated({
 *   // ... properties
 * });
 */
export class DocumentManifestRelated extends BackboneElement implements IDocumentManifestRelated {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifiers of things that are related */
  identifier?: IIdentifier;

  /** Related Resource */
  ref?: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDocumentManifestRelated>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_MANIFEST_RELATED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentManifestRelated from a JSON object
   */
  static fromJSON(json: IDocumentManifestRelated): DocumentManifestRelated {
    return new DocumentManifestRelated(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentManifestRelated with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentManifestRelated>): DocumentManifestRelated {
    return new DocumentManifestRelated({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentManifestRelated by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentManifestRelated) => Partial<IDocumentManifestRelated>): DocumentManifestRelated {
    const currentData = this.toJSON();
    return new DocumentManifestRelated({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentManifestRelated)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentManifestRelated {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOCUMENT_MANIFEST_RELATED_PROPERTIES);
    return result as IDocumentManifestRelated;
  }

  /**
   * Create a deep clone of this DocumentManifestRelated
   */
  clone(): DocumentManifestRelated {
    return new DocumentManifestRelated(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentManifestRelated
   */
  toString(): string {
    const parts: string[] = ['DocumentManifestRelated'];
    return parts.join(', ');
  }
}
