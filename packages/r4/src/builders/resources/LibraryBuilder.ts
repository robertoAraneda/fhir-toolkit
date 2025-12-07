import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Library } from '../../models/resources/Library.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IContactDetail,
  IDataRequirement,
  IIdentifier,
  ILibrary,
  IParameterDefinition,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * LibraryBuilder - Fluent builder for Library resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const library = new LibraryBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class LibraryBuilder extends DomainResourceBuilder<Library, ILibrary> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this library, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the library
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this library (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this library (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate title of the library
   */
  setSubtitle(subtitle: string): this {
    this.data.subtitle = subtitle;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set experimental
   * For testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set type
   * logic-library | model-definition | asset-collection | module-definition
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the library
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this library is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set usage
   * Describes the clinical usage of the library
   */
  setUsage(usage: string): this {
    this.data.usage = usage;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set approvalDate
   * When the library was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the library was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the library is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set subject choice type (subjectCodeableConcept, subjectReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof ILibrary;
    const otherKeys: (keyof ILibrary)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof ILibrary);
      otherKeys.push('_subjectCodeableConcept' as keyof ILibrary);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof ILibrary);
      otherKeys.push('_subjectReference' as keyof ILibrary);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the library
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for library (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add topic
   * E.g. Education, Treatment, Assessment, etc.
   */
  addTopic(topic: ICodeableConcept): this {
    return this.addToArray('topic', topic);
  }

  /**
   * Add author
   * Who authored the content
   */
  addAuthor(author: IContactDetail): this {
    return this.addToArray('author', author);
  }

  /**
   * Add editor
   * Who edited the content
   */
  addEditor(editor: IContactDetail): this {
    return this.addToArray('editor', editor);
  }

  /**
   * Add reviewer
   * Who reviewed the content
   */
  addReviewer(reviewer: IContactDetail): this {
    return this.addToArray('reviewer', reviewer);
  }

  /**
   * Add endorser
   * Who endorsed the content
   */
  addEndorser(endorser: IContactDetail): this {
    return this.addToArray('endorser', endorser);
  }

  /**
   * Add relatedArtifact
   * Additional documentation, citations, etc.
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add parameter
   * Parameters defined by the library
   */
  addParameter(parameter: IParameterDefinition): this {
    return this.addToArray('parameter', parameter);
  }

  /**
   * Add dataRequirement
   * What data is referenced by this library
   */
  addDataRequirement(dataRequirement: IDataRequirement): this {
    return this.addToArray('dataRequirement', dataRequirement);
  }

  /**
   * Add content
   * Contents of the library, either embedded or referenced
   */
  addContent(content: IAttachment): this {
    return this.addToArray('content', content);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Library instance
   */
  build(): Library {
    return new Library(this.data);
  }

  /**
   * Build and validate the Library instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Library> {
    const library = this.build();
    await library.validateOrThrow();
    return library;
  }
}
