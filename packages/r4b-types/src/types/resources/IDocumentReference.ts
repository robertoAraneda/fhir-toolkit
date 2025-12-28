import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IDocumentReferenceContent } from '../backbones/IDocumentReferenceContent.js';
import type { IDocumentReferenceContext } from '../backbones/IDocumentReferenceContext.js';
import type { IDocumentReferenceRelatesTo } from '../backbones/IDocumentReferenceRelatesTo.js';
import type { CompositionStatusType, DocumentReferenceStatusType } from '../../valuesets/index.js';

/**
 * DocumentReference Interface
 * 
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 * 
 *
 * @see https://hl7.org/fhir/R4B/documentreference.html
 */
export interface IDocumentReference extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DocumentReference';

  /**
   * Master Version Specific Identifier
   */
  masterIdentifier?: IIdentifier;

  /**
   * Other identifiers for the document
   */
  identifier?: IIdentifier[];

  /**
   * current | superseded | entered-in-error
   */
  status: DocumentReferenceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * preliminary | final | amended | entered-in-error
   */
  docStatus?: CompositionStatusType;
  /**
   * Extension for docStatus
   */
  _docStatus?: IElement;

  /**
   * Kind of document (LOINC if possible)
   */
  type?: ICodeableConcept;

  /**
   * Categorization of document
   */
  category?: ICodeableConcept[];

  /**
   * Who/what is the subject of the document
   */
  subject?: IReference<'Patient' | 'Practitioner' | 'Group' | 'Device'>;

  /**
   * When this document reference was created
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who and/or what authored the document
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>[];

  /**
   * Who/what authenticated the document
   */
  authenticator?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Organization which maintains the document
   */
  custodian?: IReference<'Organization'>;

  /**
   * Relationships to other documents
   */
  relatesTo?: IDocumentReferenceRelatesTo[];

  /**
   * Human-readable description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Document security-tags
   */
  securityLabel?: ICodeableConcept[];

  /**
   * Document referenced
   */
  content: IDocumentReferenceContent[];

  /**
   * Clinical context of document
   */
  context?: IDocumentReferenceContext;

}
