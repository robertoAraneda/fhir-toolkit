import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ConditionDefinition } from '../../models/resources/ConditionDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IConditionDefinition,
  IConditionDefinitionMedication,
  IConditionDefinitionObservation,
  IConditionDefinitionPlan,
  IConditionDefinitionPrecondition,
  IConditionDefinitionQuestionnaire,
  IContactDetail,
  IIdentifier,
  IReference,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionDefinitionBuilder - Fluent builder for ConditionDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionDefinition = new ConditionDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ConditionDefinitionBuilder extends DomainResourceBuilder<ConditionDefinition, IConditionDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this condition definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the condition definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this condition definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this condition definition (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate title of the event definition
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
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher/steward (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the condition definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set code
   * Identification of the condition, problem or diagnosis
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set severity
   * Subjective severity of condition
   */
  setSeverity(severity: ICodeableConcept): this {
    this.data.severity = severity;
    return this;
  }

  /**
   * Set bodySite
   * Anatomical location, if relevant
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  /**
   * Set stage
   * Stage/grade, usually assessed formally
   */
  setStage(stage: ICodeableConcept): this {
    this.data.stage = stage;
    return this;
  }

  /**
   * Set hasSeverity
   * Whether Severity is appropriate
   */
  setHasSeverity(hasSeverity: boolean): this {
    this.data.hasSeverity = hasSeverity;
    return this;
  }

  /**
   * Set hasBodySite
   * Whether bodySite is appropriate
   */
  setHasBodySite(hasBodySite: boolean): this {
    this.data.hasBodySite = hasBodySite;
    return this;
  }

  /**
   * Set hasStage
   * Whether stage is appropriate
   */
  setHasStage(hasStage: boolean): this {
    this.data.hasStage = hasStage;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set versionAlgorithm choice type (versionAlgorithmString, versionAlgorithmCoding)
   * @param type - 'String' | 'Coding'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setVersionAlgorithm('String', value)
   */
  setVersionAlgorithm<T extends 'String' | 'Coding'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `versionAlgorithm${type}` as keyof IConditionDefinition;
    const otherKeys: (keyof IConditionDefinition)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IConditionDefinition);
      otherKeys.push('_versionAlgorithmString' as keyof IConditionDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IConditionDefinition);
      otherKeys.push('_versionAlgorithmCoding' as keyof IConditionDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the condition definition
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
   * Intended jurisdiction for condition definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add definition
   * Formal Definition for the condition
   */
  addDefinition(definition: string): this {
    return this.addToArray('definition', definition);
  }

  /**
   * Add observation
   * Observations particularly relevant to this condition
   */
  addObservation(observation: IConditionDefinitionObservation): this {
    return this.addToArray('observation', observation);
  }

  /**
   * Add medication
   * Medications particularly relevant for this condition
   */
  addMedication(medication: IConditionDefinitionMedication): this {
    return this.addToArray('medication', medication);
  }

  /**
   * Add precondition
   * Observation that suggets this condition
   */
  addPrecondition(precondition: IConditionDefinitionPrecondition): this {
    return this.addToArray('precondition', precondition);
  }

  /**
   * Add team
   * Appropriate team for this condition
   */
  addTeam(team: IReference<'CareTeam'>): this {
    return this.addToArray('team', team);
  }

  /**
   * Add questionnaire
   * Questionnaire for this condition
   */
  addQuestionnaire(questionnaire: IConditionDefinitionQuestionnaire): this {
    return this.addToArray('questionnaire', questionnaire);
  }

  /**
   * Add plan
   * Plan that is appropriate
   */
  addPlan(plan: IConditionDefinitionPlan): this {
    return this.addToArray('plan', plan);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionDefinition instance
   */
  build(): ConditionDefinition {
    return new ConditionDefinition(this.data);
  }

  /**
   * Build and validate the ConditionDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionDefinition> {
    const conditionDefinition = this.build();
    await conditionDefinition.validateOrThrow();
    return conditionDefinition;
  }
}
