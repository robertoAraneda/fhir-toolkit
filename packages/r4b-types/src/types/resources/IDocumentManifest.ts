import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IDocumentManifestRelated } from '../backbones/IDocumentManifestRelated.js';
import type { DocumentReferenceStatusType } from '../../valuesets/index.js';

/**
 * DocumentManifest Interface
 * 
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 * 
 *
 * @see https://hl7.org/fhir/R4B/documentmanifest.html
 */
export interface IDocumentManifest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DocumentManifest';

  /**
   * Unique Identifier for the set of documents
   */
  masterIdentifier?: IIdentifier;

  /**
   * Other identifiers for the manifest
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
   * Kind of document set
   */
  type?: ICodeableConcept;

  /**
   * The subject of the set of documents
   */
  subject?: IReference<'Patient' | 'Practitioner' | 'Group' | 'Device'>;

  /**
   * When this document manifest created
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Who and/or what authored the DocumentManifest
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>[];

  /**
   * Intended to get notified about this set of documents
   */
  recipient?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>[];

  /**
   * The source system/application/software
   */
  source?: string;
  /**
   * Extension for source
   */
  _source?: IElement;

  /**
   * Human-readable description (title)
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Items in manifest
   */
  content: IReference<'Resource'>[];

  /**
   * Related things
   */
  related?: IDocumentManifestRelated[];

}
