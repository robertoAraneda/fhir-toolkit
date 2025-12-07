import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Claim } from '../../models/resources/Claim.js';
import type {
  FinancialResourceStatusType,
  IClaim,
  IClaimAccident,
  IClaimCareTeam,
  IClaimDiagnosis,
  IClaimEvent,
  IClaimInsurance,
  IClaimItem,
  IClaimPayee,
  IClaimProcedure,
  IClaimRelated,
  IClaimSupportingInfo,
  ICodeableConcept,
  IIdentifier,
  IMoney,
  IPeriod,
  IReference,
  UseType,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimBuilder - Fluent builder for Claim resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const claim = new ClaimBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ClaimBuilder extends DomainResourceBuilder<Claim, IClaim> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: FinancialResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set type
   * Category or discipline
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subType
   * More granular claim type
   */
  setSubType(subType: ICodeableConcept): this {
    this.data.subType = subType;
    return this;
  }

  /**
   * Set use
   * claim | preauthorization | predetermination
   */
  setUse(use: UseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set patient
   * The recipient of the products and services
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set billablePeriod
   * Relevant time frame for the claim
   */
  setBillablePeriod(billablePeriod: IPeriod): this {
    this.data.billablePeriod = billablePeriod;
    return this;
  }

  /**
   * Set created
   * Resource creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set enterer
   * Author of the claim
   */
  setEnterer(enterer: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>): this {
    this.data.enterer = enterer;
    return this;
  }

  /**
   * Set insurer
   * Target
   */
  setInsurer(insurer: IReference<'Organization'>): this {
    this.data.insurer = insurer;
    return this;
  }

  /**
   * Set provider
   * Party responsible for the claim
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.provider = provider;
    return this;
  }

  /**
   * Set priority
   * Desired processing urgency
   */
  setPriority(priority: ICodeableConcept): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set fundsReserve
   * For whom to reserve funds
   */
  setFundsReserve(fundsReserve: ICodeableConcept): this {
    this.data.fundsReserve = fundsReserve;
    return this;
  }

  /**
   * Set prescription
   * Prescription authorizing services and products
   */
  setPrescription(prescription: IReference<'DeviceRequest' | 'MedicationRequest' | 'VisionPrescription'>): this {
    this.data.prescription = prescription;
    return this;
  }

  /**
   * Set originalPrescription
   * Original prescription if superseded by fulfiller
   */
  setOriginalPrescription(originalPrescription: IReference<'DeviceRequest' | 'MedicationRequest' | 'VisionPrescription'>): this {
    this.data.originalPrescription = originalPrescription;
    return this;
  }

  /**
   * Set payee
   * Recipient of benefits payable
   */
  setPayee(payee: IClaimPayee): this {
    this.data.payee = payee;
    return this;
  }

  /**
   * Set referral
   * Treatment referral
   */
  setReferral(referral: IReference<'ServiceRequest'>): this {
    this.data.referral = referral;
    return this;
  }

  /**
   * Set facility
   * Servicing facility
   */
  setFacility(facility: IReference<'Location' | 'Organization'>): this {
    this.data.facility = facility;
    return this;
  }

  /**
   * Set diagnosisRelatedGroup
   * Package billing code
   */
  setDiagnosisRelatedGroup(diagnosisRelatedGroup: ICodeableConcept): this {
    this.data.diagnosisRelatedGroup = diagnosisRelatedGroup;
    return this;
  }

  /**
   * Set accident
   * Details of the event
   */
  setAccident(accident: IClaimAccident): this {
    this.data.accident = accident;
    return this;
  }

  /**
   * Set patientPaid
   * Paid by the patient
   */
  setPatientPaid(patientPaid: IMoney): this {
    this.data.patientPaid = patientPaid;
    return this;
  }

  /**
   * Set total
   * Total claim cost
   */
  setTotal(total: IMoney): this {
    this.data.total = total;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for claim
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add traceNumber
   * Number for tracking
   */
  addTraceNumber(traceNumber: IIdentifier): this {
    return this.addToArray('traceNumber', traceNumber);
  }

  /**
   * Add related
   * Prior or corollary claims
   */
  addRelated(related: IClaimRelated): this {
    return this.addToArray('related', related);
  }

  /**
   * Add encounter
   * Encounters associated with the listed treatments
   */
  addEncounter(encounter: IReference<'Encounter'>): this {
    return this.addToArray('encounter', encounter);
  }

  /**
   * Add event
   * Event information
   */
  addEvent(event: IClaimEvent): this {
    return this.addToArray('event', event);
  }

  /**
   * Add careTeam
   * Members of the care team
   */
  addCareTeam(careTeam: IClaimCareTeam): this {
    return this.addToArray('careTeam', careTeam);
  }

  /**
   * Add supportingInfo
   * Supporting information
   */
  addSupportingInfo(supportingInfo: IClaimSupportingInfo): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add diagnosis
   * Pertinent diagnosis information
   */
  addDiagnosis(diagnosi: IClaimDiagnosis): this {
    return this.addToArray('diagnosis', diagnosi);
  }

  /**
   * Add procedure
   * Clinical procedures performed
   */
  addProcedure(procedure: IClaimProcedure): this {
    return this.addToArray('procedure', procedure);
  }

  /**
   * Add insurance
   * Patient insurance information
   */
  addInsurance(insurance: IClaimInsurance): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add item
   * Product or service provided
   */
  addItem(item: IClaimItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Claim instance
   */
  build(): Claim {
    return new Claim(this.data);
  }

  /**
   * Build and validate the Claim instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Claim> {
    const claim = this.build();
    await claim.validateOrThrow();
    return claim;
  }
}
