import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { QuestionnaireResponse } from '../../models/resources/QuestionnaireResponse.js';
import type {
  IIdentifier,
  IQuestionnaireResponse,
  IQuestionnaireResponseItem,
  IReference,
  QuestionnaireResponseStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * QuestionnaireResponseBuilder - Fluent builder for QuestionnaireResponse resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const questionnaireResponse = new QuestionnaireResponseBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addBasedOn({ ... })
 *   .build();
 */
export class QuestionnaireResponseBuilder extends DomainResourceBuilder<QuestionnaireResponse, IQuestionnaireResponse> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Unique id for this set of answers
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set questionnaire
   * Form being answered
   */
  setQuestionnaire(questionnaire: string): this {
    this.data.questionnaire = questionnaire;
    return this;
  }

  /**
   * Set status
   * in-progress | completed | amended | entered-in-error | stopped
   */
  setStatus(status: QuestionnaireResponseStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * The subject of the questions
   */
  setSubject(subject: IReference<'Resource'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter created as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set authored
   * Date the answers were gathered
   */
  setAuthored(authored: string): this {
    this.data.authored = authored;
    return this;
  }

  /**
   * Set author
   * Person who received and recorded the answers
   */
  setAuthor(author: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Organization'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set source
   * The person who answered the questions
   */
  setSource(source: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.source = source;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add basedOn
   * Request fulfilled by this QuestionnaireResponse
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of this action
   */
  addPartOf(partOf: IReference<'Observation' | 'Procedure'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add item
   * Groups and questions
   */
  addItem(item: IQuestionnaireResponseItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the QuestionnaireResponse instance
   */
  build(): QuestionnaireResponse {
    return new QuestionnaireResponse(this.data);
  }

  /**
   * Build and validate the QuestionnaireResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<QuestionnaireResponse> {
    const questionnaireResponse = this.build();
    await questionnaireResponse.validateOrThrow();
    return questionnaireResponse;
  }
}
