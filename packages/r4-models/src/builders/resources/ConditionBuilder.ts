import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Condition } from '../../models/resources/Condition.js';
import type {
  ConditionClinicalStatusType,
  ConditionVerificationStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  ICondition,
  IConditionEvidence,
  IConditionStage,
  IIdentifier,
  IPeriod,
  IRange,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ConditionBuilder - Fluent builder for Condition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const condition = new ConditionBuilder()
 *   .setId('123')
 *   .setClinicalStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ConditionBuilder extends DomainResourceBuilder<Condition, ICondition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set clinicalStatus
   * active | recurrence | relapse | inactive | remission | resolved
   */
  setClinicalStatus(clinicalStatus: ICodeableConcept<ConditionClinicalStatusType>): this {
    this.data.clinicalStatus = clinicalStatus;
    return this;
  }

  /**
   * Set verificationStatus
   * unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
   */
  setVerificationStatus(verificationStatus: ICodeableConcept<ConditionVerificationStatusType>): this {
    this.data.verificationStatus = verificationStatus;
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
   * Set code
   * Identification of the condition, problem or diagnosis
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who has the condition?
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
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
   * Set recordedDate
   * Date record was first recorded
   */
  setRecordedDate(recordedDate: string): this {
    this.data.recordedDate = recordedDate;
    return this;
  }

  /**
   * Set recorder
   * Who recorded the condition
   */
  setRecorder(recorder: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>): this {
    this.data.recorder = recorder;
    return this;
  }

  /**
   * Set asserter
   * Person who asserts this condition
   */
  setAsserter(asserter: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>): this {
    this.data.asserter = asserter;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set onset choice type
   * @param type - 'DateTime' | 'Age' | 'Period' | 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOnset('DateTime', value)
   */
  setOnset<T extends 'DateTime' | 'Age' | 'Period' | 'Range' | 'String'>(
    type: T,
    value: string
  ): this {
    const key = `onset${type}` as keyof ICondition;
    const otherKeys: (keyof ICondition)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('onsetDateTime' as keyof ICondition);
      otherKeys.push('_onsetDateTime' as keyof ICondition);
    }
    if (type !== 'Age') {
      otherKeys.push('onsetAge' as keyof ICondition);
      otherKeys.push('_onsetAge' as keyof ICondition);
    }
    if (type !== 'Period') {
      otherKeys.push('onsetPeriod' as keyof ICondition);
      otherKeys.push('_onsetPeriod' as keyof ICondition);
    }
    if (type !== 'Range') {
      otherKeys.push('onsetRange' as keyof ICondition);
      otherKeys.push('_onsetRange' as keyof ICondition);
    }
    if (type !== 'String') {
      otherKeys.push('onsetString' as keyof ICondition);
      otherKeys.push('_onsetString' as keyof ICondition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set abatement choice type
   * @param type - 'DateTime' | 'Age' | 'Period' | 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAbatement('DateTime', value)
   */
  setAbatement<T extends 'DateTime' | 'Age' | 'Period' | 'Range' | 'String'>(
    type: T,
    value: string
  ): this {
    const key = `abatement${type}` as keyof ICondition;
    const otherKeys: (keyof ICondition)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('abatementDateTime' as keyof ICondition);
      otherKeys.push('_abatementDateTime' as keyof ICondition);
    }
    if (type !== 'Age') {
      otherKeys.push('abatementAge' as keyof ICondition);
      otherKeys.push('_abatementAge' as keyof ICondition);
    }
    if (type !== 'Period') {
      otherKeys.push('abatementPeriod' as keyof ICondition);
      otherKeys.push('_abatementPeriod' as keyof ICondition);
    }
    if (type !== 'Range') {
      otherKeys.push('abatementRange' as keyof ICondition);
      otherKeys.push('_abatementRange' as keyof ICondition);
    }
    if (type !== 'String') {
      otherKeys.push('abatementString' as keyof ICondition);
      otherKeys.push('_abatementString' as keyof ICondition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Ids for this condition
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * problem-list-item | encounter-diagnosis
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add bodySite
   * Anatomical location, if relevant
   */
  addBodySite(bodySite: ICodeableConcept): this {
    return this.addToArray('bodySite', bodySite);
  }

  /**
   * Add stage
   * Stage/grade, usually assessed formally
   */
  addStage(stage: IConditionStage): this {
    return this.addToArray('stage', stage);
  }

  /**
   * Add evidence
   * Supporting evidence
   */
  addEvidence(evidence: IConditionEvidence): this {
    return this.addToArray('evidence', evidence);
  }

  /**
   * Add note
   * Additional information about the Condition
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Condition instance
   */
  build(): Condition {
    return new Condition(this.data);
  }

  /**
   * Build and validate the Condition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Condition> {
    const condition = this.build();
    await condition.validateOrThrow();
    return condition;
  }
}
