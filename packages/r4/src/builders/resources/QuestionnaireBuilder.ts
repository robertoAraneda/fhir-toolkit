import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Questionnaire } from '../../models/resources/Questionnaire.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IQuestionnaire,
  IQuestionnaireItem,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * QuestionnaireBuilder - Fluent builder for Questionnaire resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaire = new QuestionnaireBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class QuestionnaireBuilder extends DomainResourceBuilder<Questionnaire, IQuestionnaire> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this questionnaire, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the questionnaire
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this questionnaire (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this questionnaire (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
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
   * Natural language description of the questionnaire
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this questionnaire is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
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
   * When the questionnaire was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the questionnaire was last reviewed
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the questionnaire is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the questionnaire
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add derivedFrom
   * Instantiates protocol or definition
   */
  addDerivedFrom(derivedFrom: string): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add subjectType
   * Resource that can be subject of QuestionnaireResponse
   */
  addSubjectType(subjectType: string): this {
    return this.addToArray('subjectType', subjectType);
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
   * Intended jurisdiction for questionnaire (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add code
   * Concept that represents the overall questionnaire
   */
  addCode(code: ICoding): this {
    return this.addToArray('code', code);
  }

  /**
   * Add item
   * Questions and sections within the Questionnaire
   */
  addItem(item: IQuestionnaireItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Questionnaire instance
   */
  build(): Questionnaire {
    return new Questionnaire(this.data);
  }

  /**
   * Build and validate the Questionnaire instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Questionnaire> {
    const questionnaire = this.build();
    await questionnaire.validateOrThrow();
    return questionnaire;
  }
}
