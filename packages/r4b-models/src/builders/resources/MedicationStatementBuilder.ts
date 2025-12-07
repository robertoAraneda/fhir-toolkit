import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationStatement } from '../../models/resources/MedicationStatement.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDosage,
  IIdentifier,
  IMedicationStatement,
  IPeriod,
  IReference,
  MedicationStatementStatusType,
} from '@fhir-toolkit/r4b-types';

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
   * active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
   */
  setStatus(status: MedicationStatementStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set category
   * Type of medication usage
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
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
   * Set context
   * Encounter / Episode associated with MedicationStatement
   */
  setContext(context: IReference<'Encounter' | 'EpisodeOfCare'>): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set dateAsserted
   * When the statement was asserted?
   */
  setDateAsserted(dateAsserted: string): this {
    this.data.dateAsserted = dateAsserted;
    return this;
  }

  /**
   * Set informationSource
   * Person or organization that provided the information about the taking of this medication
   */
  setInformationSource(informationSource: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>): this {
    this.data.informationSource = informationSource;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set medication choice type (medicationCodeableConcept, medicationReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMedication('CodeableConcept', value)
   */
  setMedication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `medication${type}` as keyof IMedicationStatement;
    const otherKeys: (keyof IMedicationStatement)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('medicationCodeableConcept' as keyof IMedicationStatement);
      otherKeys.push('_medicationCodeableConcept' as keyof IMedicationStatement);
    }
    if (type !== 'Reference') {
      otherKeys.push('medicationReference' as keyof IMedicationStatement);
      otherKeys.push('_medicationReference' as keyof IMedicationStatement);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set effective choice type (effectiveDateTime, effectivePeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEffective('DateTime', value)
   */
  setEffective<T extends 'DateTime' | 'Period'>(
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
   * Add basedOn
   * Fulfils plan, proposal or order
   */
  addBasedOn(basedOn: IReference<'MedicationRequest' | 'CarePlan' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'Procedure' | 'Observation'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add statusReason
   * Reason for current status
   */
  addStatusReason(statusReason: ICodeableConcept): this {
    return this.addToArray('statusReason', statusReason);
  }

  /**
   * Add derivedFrom
   * Additional supporting information
   */
  addDerivedFrom(derivedFrom: IReference<'Resource'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add reasonCode
   * Reason for why the medication is being/was taken
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * Condition or observation that supports why the medication is being/was taken
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>): this {
    return this.addToArray('reasonReference', reasonReference);
  }

  /**
   * Add note
   * Further information about the statement
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
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
