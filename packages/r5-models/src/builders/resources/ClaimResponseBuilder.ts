import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ClaimResponse } from '../../models/resources/ClaimResponse.js';
import type {
  ClaimProcessingType,
  FinancialResourceStatusType,
  IAttachment,
  IClaimResponse,
  IClaimResponseAddItem,
  IClaimResponseError,
  IClaimResponseEvent,
  IClaimResponseInsurance,
  IClaimResponseItem,
  IClaimResponseItemAdjudication,
  IClaimResponsePayment,
  IClaimResponseProcessNote,
  IClaimResponseTotal,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  UseType,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseBuilder - Fluent builder for ClaimResponse resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponse = new ClaimResponseBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ClaimResponseBuilder extends DomainResourceBuilder<ClaimResponse, IClaimResponse> {
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
   * More granular claim type
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
   * Set created
   * Response creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
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
   * Set requestor
   * Party responsible for the claim
   */
  setRequestor(requestor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.requestor = requestor;
    return this;
  }

  /**
   * Set request
   * Id of resource triggering adjudication
   */
  setRequest(request: IReference<'Claim'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set outcome
   * queued | complete | error | partial
   */
  setOutcome(outcome: ClaimProcessingType): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set decision
   * Result of the adjudication
   */
  setDecision(decision: ICodeableConcept): this {
    this.data.decision = decision;
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
   * Set preAuthRef
   * Preauthorization reference
   */
  setPreAuthRef(preAuthRef: string): this {
    this.data.preAuthRef = preAuthRef;
    return this;
  }

  /**
   * Set preAuthPeriod
   * Preauthorization reference effective period
   */
  setPreAuthPeriod(preAuthPeriod: IPeriod): this {
    this.data.preAuthPeriod = preAuthPeriod;
    return this;
  }

  /**
   * Set payeeType
   * Party to be paid any benefits payable
   */
  setPayeeType(payeeType: ICodeableConcept): this {
    this.data.payeeType = payeeType;
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
   * Set payment
   * Payment Details
   */
  setPayment(payment: IClaimResponsePayment): this {
    this.data.payment = payment;
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for a claim response
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
   * Add event
   * Event information
   */
  addEvent(event: IClaimResponseEvent): this {
    return this.addToArray('event', event);
  }

  /**
   * Add encounter
   * Encounters associated with the listed treatments
   */
  addEncounter(encounter: IReference<'Encounter'>): this {
    return this.addToArray('encounter', encounter);
  }

  /**
   * Add item
   * Adjudication for claim line items
   */
  addItem(item: IClaimResponseItem): this {
    return this.addToArray('item', item);
  }

  /**
   * Add addItem
   * Insurer added line items
   */
  addAddItem(addItem: IClaimResponseAddItem): this {
    return this.addToArray('addItem', addItem);
  }

  /**
   * Add adjudication
   * Header-level adjudication
   */
  addAdjudication(adjudication: IClaimResponseItemAdjudication): this {
    return this.addToArray('adjudication', adjudication);
  }

  /**
   * Add total
   * Adjudication totals
   */
  addTotal(total: IClaimResponseTotal): this {
    return this.addToArray('total', total);
  }

  /**
   * Add processNote
   * Note concerning adjudication
   */
  addProcessNote(processNote: IClaimResponseProcessNote): this {
    return this.addToArray('processNote', processNote);
  }

  /**
   * Add communicationRequest
   * Request for additional information
   */
  addCommunicationRequest(communicationRequest: IReference<'CommunicationRequest'>): this {
    return this.addToArray('communicationRequest', communicationRequest);
  }

  /**
   * Add insurance
   * Patient insurance information
   */
  addInsurance(insurance: IClaimResponseInsurance): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add error
   * Processing errors
   */
  addError(error: IClaimResponseError): this {
    return this.addToArray('error', error);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimResponse instance
   */
  build(): ClaimResponse {
    return new ClaimResponse(this.data);
  }

  /**
   * Build and validate the ClaimResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponse> {
    const claimResponse = this.build();
    await claimResponse.validateOrThrow();
    return claimResponse;
  }
}
