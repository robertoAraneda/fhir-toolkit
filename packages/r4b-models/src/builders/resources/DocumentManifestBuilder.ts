import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DocumentManifest } from '../../models/resources/DocumentManifest.js';
import type {
  DocumentReferenceStatusType,
  ICodeableConcept,
  IDocumentManifest,
  IDocumentManifestRelated,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * DocumentManifestBuilder - Fluent builder for DocumentManifest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentManifest = new DocumentManifestBuilder()
 *   .setId('123')
 *   .setMasterIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DocumentManifestBuilder extends DomainResourceBuilder<DocumentManifest, IDocumentManifest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set masterIdentifier
   * Unique Identifier for the set of documents
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
   * Set type
   * Kind of document set
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * The subject of the set of documents
   */
  setSubject(subject: IReference<'Patient' | 'Practitioner' | 'Group' | 'Device'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set created
   * When this document manifest created
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set source
   * The source system/application/software
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set description
   * Human-readable description (title)
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Other identifiers for the manifest
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add author
   * Who and/or what authored the DocumentManifest
   */
  addAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add recipient
   * Intended to get notified about this set of documents
   */
  addRecipient(recipient: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>): this {
    return this.addToArray('recipient', recipient);
  }

  /**
   * Add content
   * Items in manifest
   */
  addContent(content: IReference<'Resource'>): this {
    return this.addToArray('content', content);
  }

  /**
   * Add related
   * Related things
   */
  addRelated(related: IDocumentManifestRelated): this {
    return this.addToArray('related', related);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentManifest instance
   */
  build(): DocumentManifest {
    return new DocumentManifest(this.data);
  }

  /**
   * Build and validate the DocumentManifest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentManifest> {
    const documentManifest = this.build();
    await documentManifest.validateOrThrow();
    return documentManifest;
  }
}
