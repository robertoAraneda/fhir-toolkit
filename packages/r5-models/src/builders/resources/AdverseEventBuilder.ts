import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AdverseEvent } from '../../models/resources/AdverseEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  AdverseEventActualityType,
  AdverseEventStatusType,
  IAdverseEvent,
  IAdverseEventContributingFactor,
  IAdverseEventMitigatingAction,
  IAdverseEventParticipant,
  IAdverseEventPreventiveAction,
  IAdverseEventSupportingInfo,
  IAdverseEventSuspectEntity,
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

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
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class AdverseEventBuilder extends DomainResourceBuilder<AdverseEvent, IAdverseEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * in-progress | completed | entered-in-error | unknown
   */
  setStatus(status: AdverseEventStatusType): this {
    this.data.status = status;
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
   * Set code
   * Event or incident that occurred or was averted
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Subject impacted by event
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson' | 'ResearchSubject'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * The Encounter associated with the start of the AdverseEvent
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
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
   * Seriousness or gravity of the event
   */
  setSeriousness(seriousness: ICodeableConcept): this {
    this.data.seriousness = seriousness;
    return this;
  }

  /**
   * Set recorder
   * Who recorded the adverse event
   */
  setRecorder(recorder: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'ResearchSubject'>): this {
    this.data.recorder = recorder;
    return this;
  }

  /**
   * Set expectedInResearchStudy
   * Considered likely or probable or anticipated in the research study
   */
  setExpectedInResearchStudy(expectedInResearchStudy: boolean): this {
    this.data.expectedInResearchStudy = expectedInResearchStudy;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod, occurrenceTiming)
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof IAdverseEvent;
    const otherKeys: (keyof IAdverseEvent)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IAdverseEvent);
      otherKeys.push('_occurrenceDateTime' as keyof IAdverseEvent);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IAdverseEvent);
      otherKeys.push('_occurrencePeriod' as keyof IAdverseEvent);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof IAdverseEvent);
      otherKeys.push('_occurrenceTiming' as keyof IAdverseEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for the event
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add resultingEffect
   * Effect on the subject due to this event
   */
  addResultingEffect(resultingEffect: IReference<'Condition' | 'Observation'>): this {
    return this.addToArray('resultingEffect', resultingEffect);
  }

  /**
   * Add outcome
   * Type of outcome from the adverse event
   */
  addOutcome(outcome: ICodeableConcept): this {
    return this.addToArray('outcome', outcome);
  }

  /**
   * Add participant
   * Who was involved in the adverse event or the potential adverse event and what they did
   */
  addParticipant(participant: IAdverseEventParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add study
   * Research study that the subject is enrolled in
   */
  addStudy(study: IReference<'ResearchStudy'>): this {
    return this.addToArray('study', study);
  }

  /**
   * Add suspectEntity
   * The suspected agent causing the adverse event
   */
  addSuspectEntity(suspectEntity: IAdverseEventSuspectEntity): this {
    return this.addToArray('suspectEntity', suspectEntity);
  }

  /**
   * Add contributingFactor
   * Contributing factors suspected to have increased the probability or severity of the adverse event
   */
  addContributingFactor(contributingFactor: IAdverseEventContributingFactor): this {
    return this.addToArray('contributingFactor', contributingFactor);
  }

  /**
   * Add preventiveAction
   * Preventive actions that contributed to avoiding the adverse event
   */
  addPreventiveAction(preventiveAction: IAdverseEventPreventiveAction): this {
    return this.addToArray('preventiveAction', preventiveAction);
  }

  /**
   * Add mitigatingAction
   * Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
   */
  addMitigatingAction(mitigatingAction: IAdverseEventMitigatingAction): this {
    return this.addToArray('mitigatingAction', mitigatingAction);
  }

  /**
   * Add supportingInfo
   * Supporting information relevant to the event
   */
  addSupportingInfo(supportingInfo: IAdverseEventSupportingInfo): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add note
   * Comment on adverse event
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
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
