import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationRequest } from '../../models/resources/MedicationRequest.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDosage,
  IIdentifier,
  IMedicationRequest,
  IMedicationRequestDispenseRequest,
  IMedicationRequestSubstitution,
  IPeriod,
  IReference,
  MedicationRequestIntentType,
  MedicationrequestStatusType,
  RequestPriorityType,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationRequestBuilder - Fluent builder for MedicationRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationRequest = new MedicationRequestBuilder()
 *   .setId('123')
 *   .setPriorPrescription(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationRequestBuilder extends DomainResourceBuilder<MedicationRequest, IMedicationRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set priorPrescription
   * Reference to an order/prescription that is being replaced by this MedicationRequest
   */
  setPriorPrescription(priorPrescription: IReference<'MedicationRequest'>): this {
    this.data.priorPrescription = priorPrescription;
    return this;
  }

  /**
   * Set groupIdentifier
   * Composite request this is part of
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
    return this;
  }

  /**
   * Set status
   * active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown
   */
  setStatus(status: MedicationrequestStatusType): this {
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
   * Set statusChanged
   * When the status was changed
   */
  setStatusChanged(statusChanged: string): this {
    this.data.statusChanged = statusChanged;
    return this;
  }

  /**
   * Set intent
   * proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: MedicationRequestIntentType): this {
    this.data.intent = intent;
    return this;
  }

  /**
   * Set priority
   * routine | urgent | asap | stat
   */
  setPriority(priority: RequestPriorityType): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set doNotPerform
   * True if patient is to stop taking or not to start taking the medication
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set medication
   * Medication to be taken
   */
  setMedication(medication: ICodeableReference): this {
    this.data.medication = medication;
    return this;
  }

  /**
   * Set subject
   * Individual or group for whom the medication has been requested
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter created as part of encounter/admission/stay
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set authoredOn
   * When request was initially authored
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set requester
   * Who/What requested the Request
   */
  setRequester(requester: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set reported
   * Reported rather than primary record
   */
  setReported(reported: boolean): this {
    this.data.reported = reported;
    return this;
  }

  /**
   * Set performerType
   * Desired kind of performer of the medication administration
   */
  setPerformerType(performerType: ICodeableConcept): this {
    this.data.performerType = performerType;
    return this;
  }

  /**
   * Set recorder
   * Person who entered the request
   */
  setRecorder(recorder: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.recorder = recorder;
    return this;
  }

  /**
   * Set courseOfTherapyType
   * Overall pattern of medication administration
   */
  setCourseOfTherapyType(courseOfTherapyType: ICodeableConcept): this {
    this.data.courseOfTherapyType = courseOfTherapyType;
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
   * Set effectiveDosePeriod
   * Period over which the medication is to be taken
   */
  setEffectiveDosePeriod(effectiveDosePeriod: IPeriod): this {
    this.data.effectiveDosePeriod = effectiveDosePeriod;
    return this;
  }

  /**
   * Set dispenseRequest
   * Medication supply authorization
   */
  setDispenseRequest(dispenseRequest: IMedicationRequestDispenseRequest): this {
    this.data.dispenseRequest = dispenseRequest;
    return this;
  }

  /**
   * Set substitution
   * Any restrictions on medication substitution
   */
  setSubstitution(substitution: IMedicationRequestSubstitution): this {
    this.data.substitution = substitution;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External ids for this request
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * A plan or request that is fulfilled in whole or in part by this medication request
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add category
   * Grouping or category of medication request
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add informationSource
   * The person or organization who provided the information about this request, if the source is someone other than the requestor
   */
  addInformationSource(informationSource: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>): this {
    return this.addToArray('informationSource', informationSource);
  }

  /**
   * Add supportingInformation
   * Information to support fulfilling of the medication
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add performer
   * Intended performer of administration
   */
  addPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'DeviceDefinition' | 'RelatedPerson' | 'CareTeam' | 'HealthcareService'>): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add device
   * Intended type of device for the administration
   */
  addDevice(device: ICodeableReference): this {
    return this.addToArray('device', device);
  }

  /**
   * Add reason
   * Reason or indication for ordering or not ordering the medication
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add insurance
   * Associated insurance coverage
   */
  addInsurance(insurance: IReference<'Coverage' | 'ClaimResponse'>): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add note
   * Information about the prescription
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add dosageInstruction
   * Specific instructions for how the medication should be taken
   */
  addDosageInstruction(dosageInstruction: IDosage): this {
    return this.addToArray('dosageInstruction', dosageInstruction);
  }

  /**
   * Add eventHistory
   * A list of events of interest in the lifecycle
   */
  addEventHistory(eventHistory: IReference<'Provenance'>): this {
    return this.addToArray('eventHistory', eventHistory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationRequest instance
   */
  build(): MedicationRequest {
    return new MedicationRequest(this.data);
  }

  /**
   * Build and validate the MedicationRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationRequest> {
    const medicationRequest = this.build();
    await medicationRequest.validateOrThrow();
    return medicationRequest;
  }
}
