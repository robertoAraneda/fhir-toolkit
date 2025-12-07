import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { FamilyMemberHistory } from '../../models/resources/FamilyMemberHistory.js';
import type {
  FamilyHistoryStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  IFamilyMemberHistory,
  IFamilyMemberHistoryCondition,
  IIdentifier,
  IPeriod,
  IRange,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * FamilyMemberHistoryBuilder - Fluent builder for FamilyMemberHistory resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const familyMemberHistory = new FamilyMemberHistoryBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class FamilyMemberHistoryBuilder extends DomainResourceBuilder<FamilyMemberHistory, IFamilyMemberHistory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * partial | completed | entered-in-error | health-unknown
   */
  setStatus(status: FamilyHistoryStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set dataAbsentReason
   * subject-unknown | withheld | unable-to-obtain | deferred
   */
  setDataAbsentReason(dataAbsentReason: ICodeableConcept): this {
    this.data.dataAbsentReason = dataAbsentReason;
    return this;
  }

  /**
   * Set patient
   * Patient history is about
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set date
   * When history was recorded or last updated
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set name
   * The family member described
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set relationship
   * Relationship to the subject
   */
  setRelationship(relationship: ICodeableConcept): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set sex
   * male | female | other | unknown
   */
  setSex(sex: ICodeableConcept): this {
    this.data.sex = sex;
    return this;
  }

  /**
   * Set estimatedAge
   * Age is estimated?
   */
  setEstimatedAge(estimatedAge: boolean): this {
    this.data.estimatedAge = estimatedAge;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instantiates choice type
   * @param type - 'Canonical' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstantiates('Canonical', value)
   */
  setInstantiates<T extends 'Canonical' | 'Uri'>(
    type: T,
    value: string
  ): this {
    const key = `instantiates${type}` as keyof IFamilyMemberHistory;
    const otherKeys: (keyof IFamilyMemberHistory)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof IFamilyMemberHistory);
      otherKeys.push('_instantiatesCanonical' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Uri') {
      otherKeys.push('instantiatesUri' as keyof IFamilyMemberHistory);
      otherKeys.push('_instantiatesUri' as keyof IFamilyMemberHistory);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set born choice type
   * @param type - 'Period' | 'Date' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setBorn('Period', value)
   */
  setBorn<T extends 'Period' | 'Date' | 'String'>(
    type: T,
    value: string
  ): this {
    const key = `born${type}` as keyof IFamilyMemberHistory;
    const otherKeys: (keyof IFamilyMemberHistory)[] = [];
    if (type !== 'Period') {
      otherKeys.push('bornPeriod' as keyof IFamilyMemberHistory);
      otherKeys.push('_bornPeriod' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Date') {
      otherKeys.push('bornDate' as keyof IFamilyMemberHistory);
      otherKeys.push('_bornDate' as keyof IFamilyMemberHistory);
    }
    if (type !== 'String') {
      otherKeys.push('bornString' as keyof IFamilyMemberHistory);
      otherKeys.push('_bornString' as keyof IFamilyMemberHistory);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set age choice type
   * @param type - 'Age' | 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAge('Age', value)
   */
  setAge<T extends 'Age' | 'Range' | 'String'>(
    type: T,
    value: string
  ): this {
    const key = `age${type}` as keyof IFamilyMemberHistory;
    const otherKeys: (keyof IFamilyMemberHistory)[] = [];
    if (type !== 'Age') {
      otherKeys.push('ageAge' as keyof IFamilyMemberHistory);
      otherKeys.push('_ageAge' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Range') {
      otherKeys.push('ageRange' as keyof IFamilyMemberHistory);
      otherKeys.push('_ageRange' as keyof IFamilyMemberHistory);
    }
    if (type !== 'String') {
      otherKeys.push('ageString' as keyof IFamilyMemberHistory);
      otherKeys.push('_ageString' as keyof IFamilyMemberHistory);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set deceased choice type
   * @param type - 'Boolean' | 'Age' | 'Range' | 'Date' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDeceased('Boolean', value)
   */
  setDeceased<T extends 'Boolean' | 'Age' | 'Range' | 'Date' | 'String'>(
    type: T,
    value: T extends 'Boolean' ? boolean : string
  ): this {
    const key = `deceased${type}` as keyof IFamilyMemberHistory;
    const otherKeys: (keyof IFamilyMemberHistory)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('deceasedBoolean' as keyof IFamilyMemberHistory);
      otherKeys.push('_deceasedBoolean' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Age') {
      otherKeys.push('deceasedAge' as keyof IFamilyMemberHistory);
      otherKeys.push('_deceasedAge' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Range') {
      otherKeys.push('deceasedRange' as keyof IFamilyMemberHistory);
      otherKeys.push('_deceasedRange' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Date') {
      otherKeys.push('deceasedDate' as keyof IFamilyMemberHistory);
      otherKeys.push('_deceasedDate' as keyof IFamilyMemberHistory);
    }
    if (type !== 'String') {
      otherKeys.push('deceasedString' as keyof IFamilyMemberHistory);
      otherKeys.push('_deceasedString' as keyof IFamilyMemberHistory);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set reason choice type
   * @param type - 'Code' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReason('Code', value)
   */
  setReason<T extends 'Code' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `reason${type}` as keyof IFamilyMemberHistory;
    const otherKeys: (keyof IFamilyMemberHistory)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IFamilyMemberHistory);
      otherKeys.push('_reasonCode' as keyof IFamilyMemberHistory);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IFamilyMemberHistory);
      otherKeys.push('_reasonReference' as keyof IFamilyMemberHistory);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Id(s) for this record
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add note
   * General note about related person
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add condition
   * Condition that the related person had
   */
  addCondition(condition: IFamilyMemberHistoryCondition): this {
    return this.addToArray('condition', condition);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the FamilyMemberHistory instance
   */
  build(): FamilyMemberHistory {
    return new FamilyMemberHistory(this.data);
  }

  /**
   * Build and validate the FamilyMemberHistory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<FamilyMemberHistory> {
    const familyMemberHistory = this.build();
    await familyMemberHistory.validateOrThrow();
    return familyMemberHistory;
  }
}
