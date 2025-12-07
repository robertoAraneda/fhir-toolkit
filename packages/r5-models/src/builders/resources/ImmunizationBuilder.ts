import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Immunization } from '../../models/resources/Immunization.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IImmunization,
  IImmunizationPerformer,
  IImmunizationProgramEligibility,
  IImmunizationProtocolApplied,
  IImmunizationReaction,
  IQuantity,
  IReference,
  ImmunizationStatusType,
} from '@fhir-toolkit/r5-types';

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
   * Reason for current status
   */
  setStatusReason(statusReason: ICodeableConcept): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set vaccineCode
   * Vaccine administered
   */
  setVaccineCode(vaccineCode: ICodeableConcept): this {
    this.data.vaccineCode = vaccineCode;
    return this;
  }

  /**
   * Set administeredProduct
   * Product that was administered
   */
  setAdministeredProduct(administeredProduct: ICodeableReference): this {
    this.data.administeredProduct = administeredProduct;
    return this;
  }

  /**
   * Set manufacturer
   * Vaccine manufacturer
   */
  setManufacturer(manufacturer: ICodeableReference): this {
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
   * Set primarySource
   * Indicates context the data was captured in
   */
  setPrimarySource(primarySource: boolean): this {
    this.data.primarySource = primarySource;
    return this;
  }

  /**
   * Set informationSource
   * Indicates the source of a  reported record
   */
  setInformationSource(informationSource: ICodeableReference): this {
    this.data.informationSource = informationSource;
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
   * Add basedOn
   * Authority that the immunization event is based on
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add supportingInformation
   * Additional information in support of the immunization
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
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
   * Add reason
   * Why immunization occurred
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add subpotentReason
   * Reason for being subpotent
   */
  addSubpotentReason(subpotentReason: ICodeableConcept): this {
    return this.addToArray('subpotentReason', subpotentReason);
  }

  /**
   * Add programEligibility
   * Patient eligibility for a specific vaccination program
   */
  addProgramEligibility(programEligibility: IImmunizationProgramEligibility): this {
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
