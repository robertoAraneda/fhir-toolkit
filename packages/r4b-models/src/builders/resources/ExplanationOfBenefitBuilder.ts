import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ExplanationOfBenefit } from '../../models/resources/ExplanationOfBenefit.js';
import type {
  ExplanationOfBenefitStatusType,
  IAttachment,
  ICodeableConcept,
  IExplanationOfBenefit,
  IExplanationOfBenefitAccident,
  IExplanationOfBenefitAddItem,
  IExplanationOfBenefitBenefitBalance,
  IExplanationOfBenefitCareTeam,
  IExplanationOfBenefitDiagnosis,
  IExplanationOfBenefitInsurance,
  IExplanationOfBenefitItem,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitPayee,
  IExplanationOfBenefitPayment,
  IExplanationOfBenefitProcedure,
  IExplanationOfBenefitProcessNote,
  IExplanationOfBenefitRelated,
  IExplanationOfBenefitSupportingInfo,
  IExplanationOfBenefitTotal,
  IIdentifier,
  IPeriod,
  IReference,
  RemittanceOutcomeType,
  UseType,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitBuilder - Fluent builder for ExplanationOfBenefit resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefit = new ExplanationOfBenefitBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ExplanationOfBenefitBuilder extends DomainResourceBuilder<ExplanationOfBenefit, IExplanationOfBenefit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: ExplanationOfBenefitStatusType): this {
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
   * Response creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set enterer
   * Author of the claim
   */
  setEnterer(enterer: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.enterer = enterer;
    return this;
  }

  /**
   * Set insurer
   * Party responsible for reimbursement
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
   * Set fundsReserveRequested
   * For whom to reserve funds
   */
  setFundsReserveRequested(fundsReserveRequested: ICodeableConcept): this {
    this.data.fundsReserveRequested = fundsReserveRequested;
    return this;
  }

  /**
   * Set fundsReserve
   * Funds reserved status
   */
  setFundsReserve(fundsReserve: ICodeableConcept): this {
    this.data.fundsReserve = fundsReserve;
    return this;
  }

  /**
   * Set prescription
   * Prescription authorizing services or products
   */
  setPrescription(prescription: IReference<'MedicationRequest' | 'VisionPrescription'>): this {
    this.data.prescription = prescription;
    return this;
  }

  /**
   * Set originalPrescription
   * Original prescription if superceded by fulfiller
   */
  setOriginalPrescription(originalPrescription: IReference<'MedicationRequest'>): this {
    this.data.originalPrescription = originalPrescription;
    return this;
  }

  /**
   * Set payee
   * Recipient of benefits payable
   */
  setPayee(payee: IExplanationOfBenefitPayee): this {
    this.data.payee = payee;
    return this;
  }

  /**
   * Set referral
   * Treatment Referral
   */
  setReferral(referral: IReference<'ServiceRequest'>): this {
    this.data.referral = referral;
    return this;
  }

  /**
   * Set facility
   * Servicing Facility
   */
  setFacility(facility: IReference<'Location'>): this {
    this.data.facility = facility;
    return this;
  }

  /**
   * Set claim
   * Claim reference
   */
  setClaim(claim: IReference<'Claim'>): this {
    this.data.claim = claim;
    return this;
  }

  /**
   * Set claimResponse
   * Claim response reference
   */
  setClaimResponse(claimResponse: IReference<'ClaimResponse'>): this {
    this.data.claimResponse = claimResponse;
    return this;
  }

  /**
   * Set outcome
   * queued | complete | error | partial
   */
  setOutcome(outcome: RemittanceOutcomeType): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set disposition
   * Disposition Message
   */
  setDisposition(disposition: string): this {
    this.data.disposition = disposition;
    return this;
  }

  /**
   * Set precedence
   * Precedence (primary, secondary, etc.)
   */
  setPrecedence(precedence: number): this {
    this.data.precedence = precedence;
    return this;
  }

  /**
   * Set accident
   * Details of the event
   */
  setAccident(accident: IExplanationOfBenefitAccident): this {
    this.data.accident = accident;
    return this;
  }

  /**
   * Set payment
   * Payment Details
   */
  setPayment(payment: IExplanationOfBenefitPayment): this {
    this.data.payment = payment;
    return this;
  }

  /**
   * Set formCode
   * Printed form identifier
   */
  setFormCode(formCode: ICodeableConcept): this {
    this.data.formCode = formCode;
    return this;
  }

  /**
   * Set form
   * Printed reference or actual form
   */
  setForm(form: IAttachment): this {
    this.data.form = form;
    return this;
  }

  /**
   * Set benefitPeriod
   * When the benefits are applicable
   */
  setBenefitPeriod(benefitPeriod: IPeriod): this {
    this.data.benefitPeriod = benefitPeriod;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for the resource
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add related
   * Prior or corollary claims
   */
  addRelated(related: IExplanationOfBenefitRelated): this {
    return this.addToArray('related', related);
  }

  /**
   * Add preAuthRef
   * Preauthorization reference
   */
  addPreAuthRef(preAuthRef: string): this {
    return this.addToArray('preAuthRef', preAuthRef);
  }

  /**
   * Add preAuthRefPeriod
   * Preauthorization in-effect period
   */
  addPreAuthRefPeriod(preAuthRefPeriod: IPeriod): this {
    return this.addToArray('preAuthRefPeriod', preAuthRefPeriod);
  }

  /**
   * Add careTeam
   * Care Team members
   */
  addCareTeam(careTeam: IExplanationOfBenefitCareTeam): this {
    return this.addToArray('careTeam', careTeam);
  }

  /**
   * Add supportingInfo
   * Supporting information
   */
  addSupportingInfo(supportingInfo: IExplanationOfBenefitSupportingInfo): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add diagnosis
   * Pertinent diagnosis information
   */
  addDiagnosis(diagnosi: IExplanationOfBenefitDiagnosis): this {
    return this.addToArray('diagnosis', diagnosi);
  }

  /**
   * Add procedure
   * Clinical procedures performed
   */
  addProcedure(procedure: IExplanationOfBenefitProcedure): this {
    return this.addToArray('procedure', procedure);
  }

  /**
   * Add insurance
   * Patient insurance information
   */
  addInsurance(insurance: IExplanationOfBenefitInsurance): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add item
   * Product or service provided
   */
  addItem(item: IExplanationOfBenefitItem): this {
    return this.addToArray('item', item);
  }

  /**
   * Add addItem
   * Insurer added line items
   */
  addAddItem(addItem: IExplanationOfBenefitAddItem): this {
    return this.addToArray('addItem', addItem);
  }

  /**
   * Add adjudication
   * Header-level adjudication
   */
  addAdjudication(adjudication: IExplanationOfBenefitItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add total
   * Adjudication totals
   */
  addTotal(total: IExplanationOfBenefitTotal): this {
    return this.addToArray('total', total);
  }

  /**
   * Add processNote
   * Note concerning adjudication
   */
  addProcessNote(processNote: IExplanationOfBenefitProcessNote): this {
    return this.addToArray('processNote', processNote);
  }

  /**
   * Add benefitBalance
   * Balance by Benefit Category
   */
  addBenefitBalance(benefitBalance: IExplanationOfBenefitBenefitBalance): this {
    return this.addToArray('benefitBalance', benefitBalance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefit instance
   */
  build(): ExplanationOfBenefit {
    return new ExplanationOfBenefit(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefit> {
    const explanationOfBenefit = this.build();
    await explanationOfBenefit.validateOrThrow();
    return explanationOfBenefit;
  }
}
