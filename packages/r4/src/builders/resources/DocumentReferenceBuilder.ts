import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DocumentReference } from '../../models/resources/DocumentReference.js';
import type {
  CompositionStatusType,
  DocumentReferenceStatusType,
  ICodeableConcept,
  IDocumentReference,
  IDocumentReferenceContent,
  IDocumentReferenceContext,
  IDocumentReferenceRelatesTo,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * DocumentReferenceBuilder - Fluent builder for DocumentReference resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReference = new DocumentReferenceBuilder()
 *   .setId('123')
 *   .setMasterIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DocumentReferenceBuilder extends DomainResourceBuilder<DocumentReference, IDocumentReference> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set masterIdentifier
   * Master Version Specific Identifier
   */
  setMasterIdentifier(masterIdentifier: IIdentifier): this {
    this.data.masterIdentifier = masterIdentifier;
    return this;
  }

  /**
   * Set status
   * current | superseded | entered-in-error
   */
  setStatus(status: DocumentReferenceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set docStatus
   * preliminary | final | amended | entered-in-error
   */
  setDocStatus(docStatus: CompositionStatusType): this {
    this.data.docStatus = docStatus;
    return this;
  }

  /**
   * Set type
   * Kind of document (LOINC if possible)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * Who/what is the subject of the document
   */
  setSubject(subject: IReference<'Patient' | 'Practitioner' | 'Group' | 'Device'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set date
   * When this document reference was created
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set authenticator
   * Who/what authenticated the document
   */
  setAuthenticator(authenticator: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.authenticator = authenticator;
    return this;
  }

  /**
   * Set custodian
   * Organization which maintains the document
   */
  setCustodian(custodian: IReference<'Organization'>): this {
    this.data.custodian = custodian;
    return this;
  }

  /**
   * Set description
   * Human-readable description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set context
   * Clinical context of document
   */
  setContext(context: IDocumentReferenceContext): this {
    this.data.context = context;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Other identifiers for the document
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Categorization of document
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add author
   * Who and/or what authored the document
   */
  addAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add relatesTo
   * Relationships to other documents
   */
  addRelatesTo(relatesTo: IDocumentReferenceRelatesTo): this {
    return this.addToArray('relatesTo', relatesTo);
  }

  /**
   * Add securityLabel
   * Document security-tags
   */
  addSecurityLabel(securityLabel: ICodeableConcept): this {
    return this.addToArray('securityLabel', securityLabel);
  }

  /**
   * Add content
   * Document referenced
   */
  addContent(content: IDocumentReferenceContent): this {
    return this.addToArray('content', content);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReference instance
   */
  build(): DocumentReference {
    return new DocumentReference(this.data);
  }

  /**
   * Build and validate the DocumentReference instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReference> {
    const documentReference = this.build();
    await documentReference.validateOrThrow();
    return documentReference;
  }
}
