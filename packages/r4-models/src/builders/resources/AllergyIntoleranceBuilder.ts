import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AllergyIntolerance } from '../../models/resources/AllergyIntolerance.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  AllergyIntoleranceCategoryType,
  AllergyIntoleranceClinicalStatusType,
  AllergyIntoleranceCriticalityType,
  AllergyIntoleranceTypeType,
  AllergyIntoleranceVerificationStatusType,
  IAge,
  IAllergyIntolerance,
  IAllergyIntoleranceReaction,
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IRange,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * AllergyIntoleranceBuilder - Fluent builder for AllergyIntolerance resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const allergyIntolerance = new AllergyIntoleranceBuilder()
 *   .setId('123')
 *   .setClinicalStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class AllergyIntoleranceBuilder extends DomainResourceBuilder<AllergyIntolerance, IAllergyIntolerance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set clinicalStatus
   * active | inactive | resolved
   */
  setClinicalStatus(clinicalStatus: ICodeableConcept<AllergyIntoleranceClinicalStatusType>): this {
    this.data.clinicalStatus = clinicalStatus;
    return this;
  }

  /**
   * Set verificationStatus
   * unconfirmed | confirmed | refuted | entered-in-error
   */
  setVerificationStatus(verificationStatus: ICodeableConcept<AllergyIntoleranceVerificationStatusType>): this {
    this.data.verificationStatus = verificationStatus;
    return this;
  }

  /**
   * Set type
   * allergy | intolerance - Underlying mechanism (if known)
   */
  setType(type: AllergyIntoleranceTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set criticality
   * low | high | unable-to-assess
   */
  setCriticality(criticality: AllergyIntoleranceCriticalityType): this {
    this.data.criticality = criticality;
    return this;
  }

  /**
   * Set code
   * Code that identifies the allergy or intolerance
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set patient
   * Who the sensitivity is for
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set encounter
   * Encounter when the allergy or intolerance was asserted
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set recordedDate
   * Date first version of the resource instance was recorded
   */
  setRecordedDate(recordedDate: string): this {
    this.data.recordedDate = recordedDate;
    return this;
  }

  /**
   * Set recorder
   * Who recorded the sensitivity
   */
  setRecorder(recorder: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>): this {
    this.data.recorder = recorder;
    return this;
  }

  /**
   * Set asserter
   * Source of the information about the allergy
   */
  setAsserter(asserter: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.asserter = asserter;
    return this;
  }

  /**
   * Set lastOccurrence
   * Date(/time) of last known occurrence of a reaction
   */
  setLastOccurrence(lastOccurrence: string): this {
    this.data.lastOccurrence = lastOccurrence;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set onset choice type (onsetDateTime, onsetAge, onsetPeriod, onsetRange, onsetString)
   * @param type - 'DateTime' | 'Age' | 'Period' | 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOnset('DateTime', value)
   */
  setOnset<T extends 'DateTime' | 'Age' | 'Period' | 'Range' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `onset${type}` as keyof IAllergyIntolerance;
    const otherKeys: (keyof IAllergyIntolerance)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('onsetDateTime' as keyof IAllergyIntolerance);
      otherKeys.push('_onsetDateTime' as keyof IAllergyIntolerance);
    }
    if (type !== 'Age') {
      otherKeys.push('onsetAge' as keyof IAllergyIntolerance);
      otherKeys.push('_onsetAge' as keyof IAllergyIntolerance);
    }
    if (type !== 'Period') {
      otherKeys.push('onsetPeriod' as keyof IAllergyIntolerance);
      otherKeys.push('_onsetPeriod' as keyof IAllergyIntolerance);
    }
    if (type !== 'Range') {
      otherKeys.push('onsetRange' as keyof IAllergyIntolerance);
      otherKeys.push('_onsetRange' as keyof IAllergyIntolerance);
    }
    if (type !== 'String') {
      otherKeys.push('onsetString' as keyof IAllergyIntolerance);
      otherKeys.push('_onsetString' as keyof IAllergyIntolerance);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External ids for this item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * food | medication | environment | biologic
   */
  addCategory(category: AllergyIntoleranceCategoryType): this {
    return this.addToArray('category', category);
  }

  /**
   * Add note
   * Additional text not captured in other fields
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add reaction
   * Adverse Reaction Events linked to exposure to substance
   */
  addReaction(reaction: IAllergyIntoleranceReaction): this {
    return this.addToArray('reaction', reaction);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AllergyIntolerance instance
   */
  build(): AllergyIntolerance {
    return new AllergyIntolerance(this.data);
  }

  /**
   * Build and validate the AllergyIntolerance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AllergyIntolerance> {
    const allergyIntolerance = this.build();
    await allergyIntolerance.validateOrThrow();
    return allergyIntolerance;
  }
}
