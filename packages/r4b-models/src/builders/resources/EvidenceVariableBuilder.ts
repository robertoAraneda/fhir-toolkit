import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EvidenceVariable } from '../../models/resources/EvidenceVariable.js';
import type {
  CharacteristicCombinationType,
  EvidenceVariableHandlingType,
  IAnnotation,
  IContactDetail,
  IEvidenceVariable,
  IEvidenceVariableCategory,
  IEvidenceVariableCharacteristic,
  IIdentifier,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceVariableBuilder - Fluent builder for EvidenceVariable resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariable = new EvidenceVariableBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EvidenceVariableBuilder extends DomainResourceBuilder<EvidenceVariable, IEvidenceVariable> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this evidence variable, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the evidence variable
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this evidence variable (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this evidence variable (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set shortTitle
   * Title for use in informal contexts
   */
  setShortTitle(shortTitle: string): this {
    this.data.shortTitle = shortTitle;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate title of the EvidenceVariable
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
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set description
   * Natural language description of the evidence variable
   */
  setDescription(description: string): this {
    this.data.description = description;
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
   * Set actual
   * Actual or conceptual
   */
  setActual(actual: boolean): this {
    this.data.actual = actual;
    return this;
  }

  /**
   * Set characteristicCombination
   * intersection | union
   */
  setCharacteristicCombination(characteristicCombination: CharacteristicCombinationType): this {
    this.data.characteristicCombination = characteristicCombination;
    return this;
  }

  /**
   * Set handling
   * continuous | dichotomous | ordinal | polychotomous
   */
  setHandling(handling: EvidenceVariableHandlingType): this {
    this.data.handling = handling;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the evidence variable
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add note
   * Used for footnotes or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
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
   * Add characteristic
   * What defines the members of the evidence element
   */
  addCharacteristic(characteristic: IEvidenceVariableCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  /**
   * Add category
   * A grouping for ordinal or polychotomous variables
   */
  addCategory(category: IEvidenceVariableCategory): this {
    return this.addToArray('category', category);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariable instance
   */
  build(): EvidenceVariable {
    return new EvidenceVariable(this.data);
  }

  /**
   * Build and validate the EvidenceVariable instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariable> {
    const evidenceVariable = this.build();
    await evidenceVariable.validateOrThrow();
    return evidenceVariable;
  }
}
