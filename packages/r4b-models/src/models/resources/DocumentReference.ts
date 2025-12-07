import { DomainResource } from '../base/DomainResource.js';
import type {
  CompositionStatusType,
  DocumentReferenceStatusType,
  ICodeableConcept,
  IDocumentReference,
  IDocumentReferenceContent,
  IDocumentReferenceContext,
  IDocumentReferenceRelatesTo,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DocumentReference */
const DOCUMENT_REFERENCE_PROPERTIES = [
  'masterIdentifier',
  'identifier',
  'status',
  '_status',
  'docStatus',
  '_docStatus',
  'type',
  'category',
  'subject',
  'date',
  '_date',
  'author',
  'authenticator',
  'custodian',
  'relatesTo',
  'description',
  '_description',
  'securityLabel',
  'content',
  'context',
] as const;

/**
 * DocumentReference - A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 *
 * @see https://hl7.org/fhir/R4/documentreference.html
 *
 * @example
 * const documentReference = new DocumentReference({
 *   // ... properties
 * });
 */
export class DocumentReference extends DomainResource implements IDocumentReference {
  readonly resourceType = 'DocumentReference' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Master Version Specific Identifier */
  masterIdentifier?: IIdentifier;

  /** Other identifiers for the document */
  identifier?: IIdentifier[];

  /** current | superseded | entered-in-error */
  status: DocumentReferenceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** preliminary | final | amended | entered-in-error */
  docStatus?: CompositionStatusType;

  /** Extension for docStatus */
  _docStatus?: IElement;

  /** Kind of document (LOINC if possible) */
  type?: ICodeableConcept;

  /** Categorization of document */
  category?: ICodeableConcept[];

  /** Who/what is the subject of the document */
  subject?: IReference<'Patient' | 'Practitioner' | 'Group' | 'Device'>;

  /** When this document reference was created */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who and/or what authored the document */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>[];

  /** Who/what authenticated the document */
  authenticator?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Organization which maintains the document */
  custodian?: IReference<'Organization'>;

  /** Relationships to other documents */
  relatesTo?: IDocumentReferenceRelatesTo[];

  /** Human-readable description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Document security-tags */
  securityLabel?: ICodeableConcept[];

  /** Document referenced */
  content: IDocumentReferenceContent[];

  /** Clinical context of document */
  context?: IDocumentReferenceContext;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IDocumentReference>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReference from a JSON object
   */
  static fromJSON(json: IDocumentReference): DocumentReference {
    return new DocumentReference(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReference with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReference>): DocumentReference {
    return new DocumentReference({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReference by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReference) => Partial<IDocumentReference>): DocumentReference {
    const currentData = this.toJSON();
    return new DocumentReference({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReference)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReference {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_PROPERTIES);
    return result as IDocumentReference;
  }

  /**
   * Create a deep clone of this DocumentReference
   */
  clone(): DocumentReference {
    return new DocumentReference(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReference
   */
  toString(): string {
    const parts: string[] = ['DocumentReference'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
