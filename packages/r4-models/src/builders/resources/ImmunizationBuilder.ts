import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Immunization } from '../../models/resources/Immunization.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IImmunization,
  IImmunizationEducation,
  IImmunizationPerformer,
  IImmunizationProtocolApplied,
  IImmunizationReaction,
  IQuantity,
  IReference,
  ImmunizationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * ImmunizationBuilder - Fluent builder for Immunization resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunization = new ImmunizationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ImmunizationBuilder extends DomainResourceBuilder<Immunization, IImmunization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * completed | entered-in-error | not-done
   */
  setStatus(status: ImmunizationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Reason not done
   */
  setStatusReason(statusReason: ICodeableConcept): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set vaccineCode
   * Vaccine product administered
   */
  setVaccineCode(vaccineCode: ICodeableConcept): this {
    this.data.vaccineCode = vaccineCode;
    return this;
  }

  /**
   * Set patient
   * Who was immunized
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set encounter
   * Encounter immunization was part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set recorded
   * When the immunization was first captured in the subject's record
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
    return this;
  }

  /**
   * Set primarySource
   * Indicates context the data was recorded in
   */
  setPrimarySource(primarySource: boolean): this {
    this.data.primarySource = primarySource;
    return this;
  }

  /**
   * Set reportOrigin
   * Indicates the source of a secondarily reported record
   */
  setReportOrigin(reportOrigin: ICodeableConcept): this {
    this.data.reportOrigin = reportOrigin;
    return this;
  }

  /**
   * Set location
   * Where immunization occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set manufacturer
   * Vaccine manufacturer
   */
  setManufacturer(manufacturer: IReference<'Organization'>): this {
    this.data.manufacturer = manufacturer;
    return this;
  }

  /**
   * Set lotNumber
   * Vaccine lot number
   */
  setLotNumber(lotNumber: string): this {
    this.data.lotNumber = lotNumber;
    return this;
  }

  /**
   * Set expirationDate
   * Vaccine expiration date
   */
  setExpirationDate(expirationDate: string): this {
    this.data.expirationDate = expirationDate;
    return this;
  }

  /**
   * Set site
   * Body site vaccine  was administered
   */
  setSite(site: ICodeableConcept): this {
    this.data.site = site;
    return this;
  }

  /**
   * Set route
   * How vaccine entered body
   */
  setRoute(route: ICodeableConcept): this {
    this.data.route = route;
    return this;
  }

  /**
   * Set doseQuantity
   * Amount of vaccine administered
   */
  setDoseQuantity(doseQuantity: IQuantity): this {
    this.data.doseQuantity = doseQuantity;
    return this;
  }

  /**
   * Set isSubpotent
   * Dose potency
   */
  setIsSubpotent(isSubpotent: boolean): this {
    this.data.isSubpotent = isSubpotent;
    return this;
  }

  /**
   * Set fundingSource
   * Funding source for the vaccine
   */
  setFundingSource(fundingSource: ICodeableConcept): this {
    this.data.fundingSource = fundingSource;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrenceString)
   * @param type - 'DateTime' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof IImmunization;
    const otherKeys: (keyof IImmunization)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IImmunization);
      otherKeys.push('_occurrenceDateTime' as keyof IImmunization);
    }
    if (type !== 'String') {
      otherKeys.push('occurrenceString' as keyof IImmunization);
      otherKeys.push('_occurrenceString' as keyof IImmunization);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add performer
   * Who performed event
   */
  addPerformer(performer: IImmunizationPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add note
   * Additional immunization notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add reasonCode
   * Why immunization occurred
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * Why immunization occurred
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>): this {
    return this.addToArray('reasonReference', reasonReference);
  }

  /**
   * Add subpotentReason
   * Reason for being subpotent
   */
  addSubpotentReason(subpotentReason: ICodeableConcept): this {
    return this.addToArray('subpotentReason', subpotentReason);
  }

  /**
   * Add education
   * Educational material presented to patient
   */
  addEducation(education: IImmunizationEducation): this {
    return this.addToArray('education', education);
  }

  /**
   * Add programEligibility
   * Patient eligibility for a vaccination program
   */
  addProgramEligibility(programEligibility: ICodeableConcept): this {
    return this.addToArray('programEligibility', programEligibility);
  }

  /**
   * Add reaction
   * Details of a reaction that follows immunization
   */
  addReaction(reaction: IImmunizationReaction): this {
    return this.addToArray('reaction', reaction);
  }

  /**
   * Add protocolApplied
   * Protocol followed by the provider
   */
  addProtocolApplied(protocolApplied: IImmunizationProtocolApplied): this {
    return this.addToArray('protocolApplied', protocolApplied);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Immunization instance
   */
  build(): Immunization {
    return new Immunization(this.data);
  }

  /**
   * Build and validate the Immunization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Immunization> {
    const immunization = this.build();
    await immunization.validateOrThrow();
    return immunization;
  }
}
