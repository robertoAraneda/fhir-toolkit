import { DomainResource } from '../base/DomainResource.js';
import type {
  DocumentReferenceStatusType,
  ICodeableConcept,
  IDocumentManifest,
  IDocumentManifestRelated,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DocumentManifest */
const DOCUMENT_MANIFEST_PROPERTIES = [
  'masterIdentifier',
  'identifier',
  'status',
  '_status',
  'type',
  'subject',
  'created',
  '_created',
  'author',
  'recipient',
  'source',
  '_source',
  'description',
  '_description',
  'content',
  'related',
] as const;

/**
 * DocumentManifest - A collection of documents compiled for a purpose together with metadata that applies to the collection.
 *
 * @see https://hl7.org/fhir/R4B/documentmanifest.html
 *
 * @example
 * const documentManifest = new DocumentManifest({
 *   // ... properties
 * });
 */
export class DocumentManifest extends DomainResource implements IDocumentManifest {
  readonly resourceType = 'DocumentManifest' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique Identifier for the set of documents */
  masterIdentifier?: IIdentifier;

  /** Other identifiers for the manifest */
  identifier?: IIdentifier[];

  /** current | superseded | entered-in-error */
  status: DocumentReferenceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Kind of document set */
  type?: ICodeableConcept;

  /** The subject of the set of documents */
  subject?: IReference<'Patient' | 'Practitioner' | 'Group' | 'Device'>;

  /** When this document manifest created */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** Who and/or what authored the DocumentManifest */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>[];

  /** Intended to get notified about this set of documents */
  recipient?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>[];

  /** The source system/application/software */
  source?: string;

  /** Extension for source */
  _source?: IElement;

  /** Human-readable description (title) */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Items in manifest */
  content: IReference<'Resource'>[];

  /** Related things */
  related?: IDocumentManifestRelated[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDocumentManifest>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_MANIFEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentManifest from a JSON object
   */
  static fromJSON(json: IDocumentManifest): DocumentManifest {
    return new DocumentManifest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentManifest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentManifest>): DocumentManifest {
    return new DocumentManifest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentManifest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentManifest) => Partial<IDocumentManifest>): DocumentManifest {
    const currentData = this.toJSON();
    return new DocumentManifest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentManifest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentManifest {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DOCUMENT_MANIFEST_PROPERTIES);
    return result as IDocumentManifest;
  }

  /**
   * Create a deep clone of this DocumentManifest
   */
  clone(): DocumentManifest {
    return new DocumentManifest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentManifest
   */
  toString(): string {
    const parts: string[] = ['DocumentManifest'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
