import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationRequest } from '../../models/resources/MedicationRequest.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDosage,
  IIdentifier,
  IMedicationRequest,
  IMedicationRequestDispenseRequest,
  IMedicationRequestSubstitution,
  IReference,
  MedicationRequestIntentType,
  MedicationrequestStatusType,
  RequestPriorityType,
} from '@fhir-toolkit/r4-types';

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
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationRequestBuilder extends DomainResourceBuilder<MedicationRequest, IMedicationRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
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
   * True if request is prohibiting action
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set subject
   * Who or group medication request is for
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
   * Set performer
   * Intended performer of administration
   */
  setPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>): this {
    this.data.performer = performer;
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
   * Set groupIdentifier
   * Composite request this is part of
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
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

  /**
   * Set priorPrescription
   * An order/prescription that is being replaced
   */
  setPriorPrescription(priorPrescription: IReference<'MedicationRequest'>): this {
    this.data.priorPrescription = priorPrescription;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set reported choice type
   * @param type - 'Boolean' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReported('Boolean', value)
   */
  setReported<T extends 'Boolean' | 'Reference'>(
    type: T,
    value: T extends 'Boolean' ? boolean : string
  ): this {
    const key = `reported${type}` as keyof IMedicationRequest;
    const otherKeys: (keyof IMedicationRequest)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('reportedBoolean' as keyof IMedicationRequest);
      otherKeys.push('_reportedBoolean' as keyof IMedicationRequest);
    }
    if (type !== 'Reference') {
      otherKeys.push('reportedReference' as keyof IMedicationRequest);
      otherKeys.push('_reportedReference' as keyof IMedicationRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set medication choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMedication('CodeableConcept', value)
   */
  setMedication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `medication${type}` as keyof IMedicationRequest;
    const otherKeys: (keyof IMedicationRequest)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('medicationCodeableConcept' as keyof IMedicationRequest);
      otherKeys.push('_medicationCodeableConcept' as keyof IMedicationRequest);
    }
    if (type !== 'Reference') {
      otherKeys.push('medicationReference' as keyof IMedicationRequest);
      otherKeys.push('_medicationReference' as keyof IMedicationRequest);
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
    const key = `reason${type}` as keyof IMedicationRequest;
    const otherKeys: (keyof IMedicationRequest)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IMedicationRequest);
      otherKeys.push('_reasonCode' as keyof IMedicationRequest);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IMedicationRequest);
      otherKeys.push('_reasonReference' as keyof IMedicationRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

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
    const key = `instantiates${type}` as keyof IMedicationRequest;
    const otherKeys: (keyof IMedicationRequest)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof IMedicationRequest);
      otherKeys.push('_instantiatesCanonical' as keyof IMedicationRequest);
    }
    if (type !== 'Uri') {
      otherKeys.push('instantiatesUri' as keyof IMedicationRequest);
      otherKeys.push('_instantiatesUri' as keyof IMedicationRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
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
   * Add category
   * Type of medication usage
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add supportingInformation
   * Information to support ordering of the medication
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add basedOn
   * What request fulfills
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>): this {
    return this.addToArray('basedOn', basedOn);
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
   * How the medication should be taken
   */
  addDosageInstruction(dosageInstruction: IDosage): this {
    return this.addToArray('dosageInstruction', dosageInstruction);
  }

  /**
   * Add detectedIssue
   * Clinical Issue with action
   */
  addDetectedIssue(detectedIssue: IReference<'DetectedIssue'>): this {
    return this.addToArray('detectedIssue', detectedIssue);
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
