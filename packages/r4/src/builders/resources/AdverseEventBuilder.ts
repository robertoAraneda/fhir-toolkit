import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AdverseEvent } from '../../models/resources/AdverseEvent.js';
import type {
  AdverseEventActualityType,
  AdverseEventOutcomeType,
  AdverseEventSeverityType,
  IAdverseEvent,
  IAdverseEventSuspectEntity,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * AdverseEventBuilder - Fluent builder for AdverseEvent resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEvent = new AdverseEventBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addCategory({ ... })
 *   .build();
 */
export class AdverseEventBuilder extends DomainResourceBuilder<AdverseEvent, IAdverseEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Business identifier for the event
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set actuality
   * actual | potential
   */
  setActuality(actuality: AdverseEventActualityType): this {
    this.data.actuality = actuality;
    return this;
  }

  /**
   * Set event
   * Type of the event itself in relation to the subject
   */
  setEvent(event: ICodeableConcept): this {
    this.data.event = event;
    return this;
  }

  /**
   * Set subject
   * Subject impacted by event
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson'>): this {
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
   * Set date
   * When the event occurred
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set detected
   * When the event was detected
   */
  setDetected(detected: string): this {
    this.data.detected = detected;
    return this;
  }

  /**
   * Set recordedDate
   * When the event was recorded
   */
  setRecordedDate(recordedDate: string): this {
    this.data.recordedDate = recordedDate;
    return this;
  }

  /**
   * Set location
   * Location where adverse event occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set seriousness
   * Seriousness of the event
   */
  setSeriousness(seriousness: ICodeableConcept): this {
    this.data.seriousness = seriousness;
    return this;
  }

  /**
   * Set severity
   * mild | moderate | severe
   */
  setSeverity(severity: ICodeableConcept<AdverseEventSeverityType>): this {
    this.data.severity = severity;
    return this;
  }

  /**
   * Set outcome
   * resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown
   */
  setOutcome(outcome: ICodeableConcept<AdverseEventOutcomeType>): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set recorder
   * Who recorded the adverse event
   */
  setRecorder(recorder: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.recorder = recorder;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add category
   * product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add resultingCondition
   * Effect on the subject due to this event
   */
  addResultingCondition(resultingCondition: IReference<'Condition'>): this {
    return this.addToArray('resultingCondition', resultingCondition);
  }

  /**
   * Add contributor
   * Who  was involved in the adverse event or the potential adverse event
   */
  addContributor(contributor: IReference<'Practitioner' | 'PractitionerRole' | 'Device'>): this {
    return this.addToArray('contributor', contributor);
  }

  /**
   * Add suspectEntity
   * The suspected agent causing the adverse event
   */
  addSuspectEntity(suspectEntity: IAdverseEventSuspectEntity): this {
    return this.addToArray('suspectEntity', suspectEntity);
  }

  /**
   * Add subjectMedicalHistory
   * AdverseEvent.subjectMedicalHistory
   */
  addSubjectMedicalHistory(subjectMedicalHistory: IReference<'Condition' | 'Observation' | 'AllergyIntolerance' | 'FamilyMemberHistory' | 'Immunization' | 'Procedure' | 'Media' | 'DocumentReference'>): this {
    return this.addToArray('subjectMedicalHistory', subjectMedicalHistory);
  }

  /**
   * Add referenceDocument
   * AdverseEvent.referenceDocument
   */
  addReferenceDocument(referenceDocument: IReference<'DocumentReference'>): this {
    return this.addToArray('referenceDocument', referenceDocument);
  }

  /**
   * Add study
   * AdverseEvent.study
   */
  addStudy(study: IReference<'ResearchStudy'>): this {
    return this.addToArray('study', study);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEvent instance
   */
  build(): AdverseEvent {
    return new AdverseEvent(this.data);
  }

  /**
   * Build and validate the AdverseEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEvent> {
    const adverseEvent = this.build();
    await adverseEvent.validateOrThrow();
    return adverseEvent;
  }
}
