import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationStatement } from '../../models/resources/MedicationStatement.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDosage,
  IIdentifier,
  IMedicationStatement,
  IMedicationStatementAdherence,
  IPeriod,
  IReference,
  ITiming,
  MedicationStatementStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationStatementBuilder - Fluent builder for MedicationStatement resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationStatement = new MedicationStatementBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationStatementBuilder extends DomainResourceBuilder<MedicationStatement, IMedicationStatement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * recorded | entered-in-error | draft
   */
  setStatus(status: MedicationStatementStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set medication
   * What medication was taken
   */
  setMedication(medication: ICodeableReference): this {
    this.data.medication = medication;
    return this;
  }

  /**
   * Set subject
   * Who is/was taking  the medication
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter associated with MedicationStatement
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set dateAsserted
   * When the usage was asserted?
   */
  setDateAsserted(dateAsserted: string): this {
    this.data.dateAsserted = dateAsserted;
    return this;
  }

  /**
   * Set renderedDosageInstruction
   * Full representation of the dosage instructions
   */
  setRenderedDosageInstruction(renderedDosageInstruction: string): this {
    this.data.renderedDosageInstruction = renderedDosageInstruction;
    return this;
  }

  /**
   * Set adherence
   * Indicates whether the medication is or is not being consumed or administered
   */
  setAdherence(adherence: IMedicationStatementAdherence): this {
    this.data.adherence = adherence;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set effective choice type (effectiveDateTime, effectivePeriod, effectiveTiming)
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEffective('DateTime', value)
   */
  setEffective<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `effective${type}` as keyof IMedicationStatement;
    const otherKeys: (keyof IMedicationStatement)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('effectiveDateTime' as keyof IMedicationStatement);
      otherKeys.push('_effectiveDateTime' as keyof IMedicationStatement);
    }
    if (type !== 'Period') {
      otherKeys.push('effectivePeriod' as keyof IMedicationStatement);
      otherKeys.push('_effectivePeriod' as keyof IMedicationStatement);
    }
    if (type !== 'Timing') {
      otherKeys.push('effectiveTiming' as keyof IMedicationStatement);
      otherKeys.push('_effectiveTiming' as keyof IMedicationStatement);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'Procedure' | 'MedicationStatement'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add category
   * Type of medication statement
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add informationSource
   * Person or organization that provided the information about the taking of this medication
   */
  addInformationSource(informationSource: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>): this {
    return this.addToArray('informationSource', informationSource);
  }

  /**
   * Add derivedFrom
   * Link to information used to derive the MedicationStatement
   */
  addDerivedFrom(derivedFrom: IReference<'Resource'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add reason
   * Reason for why the medication is being/was taken
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add note
   * Further information about the usage
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add relatedClinicalInformation
   * Link to information relevant to the usage of a medication
   */
  addRelatedClinicalInformation(relatedClinicalInformation: IReference<'Observation' | 'Condition'>): this {
    return this.addToArray('relatedClinicalInformation', relatedClinicalInformation);
  }

  /**
   * Add dosage
   * Details of how medication is/was taken or should be taken
   */
  addDosage(dosage: IDosage): this {
    return this.addToArray('dosage', dosage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationStatement instance
   */
  build(): MedicationStatement {
    return new MedicationStatement(this.data);
  }

  /**
   * Build and validate the MedicationStatement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationStatement> {
    const medicationStatement = this.build();
    await medicationStatement.validateOrThrow();
    return medicationStatement;
  }
}
