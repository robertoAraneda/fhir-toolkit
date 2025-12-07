import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ServiceRequest } from '../../models/resources/ServiceRequest.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IServiceRequest,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * ServiceRequestBuilder - Fluent builder for ServiceRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const serviceRequest = new ServiceRequestBuilder()
 *   .setId('123')
 *   .setRequisition(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ServiceRequestBuilder extends DomainResourceBuilder<ServiceRequest, IServiceRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set requisition
   * Composite Request ID
   */
  setRequisition(requisition: IIdentifier): this {
    this.data.requisition = requisition;
    return this;
  }

  /**
   * Set status
   * draft | active | on-hold | revoked | completed | entered-in-error | unknown
   */
  setStatus(status: RequestStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set intent
   * proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   */
  setIntent(intent: RequestIntentType): this {
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
   * True if service/procedure should not be performed
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set code
   * What is being requested/ordered
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Individual or Entity the service is ordered for
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Location' | 'Device'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter in which the request was created
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set authoredOn
   * Date request signed
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set requester
   * Who/what is requesting service
   */
  setRequester(requester: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set performerType
   * Performer role
   */
  setPerformerType(performerType: ICodeableConcept): this {
    this.data.performerType = performerType;
    return this;
  }

  /**
   * Set patientInstruction
   * Patient or consumer-oriented instructions
   */
  setPatientInstruction(patientInstruction: string): this {
    this.data.patientInstruction = patientInstruction;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set quantity choice type (quantityQuantity, quantityRatio, quantityRange)
   * @param type - 'Quantity' | 'Ratio' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setQuantity('Quantity', value)
   */
  setQuantity<T extends 'Quantity' | 'Ratio' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `quantity${type}` as keyof IServiceRequest;
    const otherKeys: (keyof IServiceRequest)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('quantityQuantity' as keyof IServiceRequest);
      otherKeys.push('_quantityQuantity' as keyof IServiceRequest);
    }
    if (type !== 'Ratio') {
      otherKeys.push('quantityRatio' as keyof IServiceRequest);
      otherKeys.push('_quantityRatio' as keyof IServiceRequest);
    }
    if (type !== 'Range') {
      otherKeys.push('quantityRange' as keyof IServiceRequest);
      otherKeys.push('_quantityRange' as keyof IServiceRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod, occurrenceTiming)
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof IServiceRequest;
    const otherKeys: (keyof IServiceRequest)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IServiceRequest);
      otherKeys.push('_occurrenceDateTime' as keyof IServiceRequest);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IServiceRequest);
      otherKeys.push('_occurrencePeriod' as keyof IServiceRequest);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof IServiceRequest);
      otherKeys.push('_occurrenceTiming' as keyof IServiceRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set asNeeded choice type (asNeededBoolean, asNeededCodeableConcept)
   * @param type - 'Boolean' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAsNeeded('Boolean', value)
   */
  setAsNeeded<T extends 'Boolean' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `asNeeded${type}` as keyof IServiceRequest;
    const otherKeys: (keyof IServiceRequest)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('asNeededBoolean' as keyof IServiceRequest);
      otherKeys.push('_asNeededBoolean' as keyof IServiceRequest);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('asNeededCodeableConcept' as keyof IServiceRequest);
      otherKeys.push('_asNeededCodeableConcept' as keyof IServiceRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifiers assigned to this order
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add instantiatesCanonical
   * Instantiates FHIR protocol or definition
   */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addToArray('instantiatesCanonical', instantiatesCanonical);
  }

  /**
   * Add instantiatesUri
   * Instantiates external protocol or definition
   */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addToArray('instantiatesUri', instantiatesUri);
  }

  /**
   * Add basedOn
   * What request fulfills
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'ServiceRequest' | 'MedicationRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add replaces
   * What request replaces
   */
  addReplaces(replac: IReference<'ServiceRequest'>): this {
    return this.addToArray('replaces', replac);
  }

  /**
   * Add category
   * Classification of service
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add orderDetail
   * Additional order information
   */
  addOrderDetail(orderDetail: ICodeableConcept): this {
    return this.addToArray('orderDetail', orderDetail);
  }

  /**
   * Add performer
   * Requested performer
   */
  addPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add locationCode
   * Requested location
   */
  addLocationCode(locationCode: ICodeableConcept): this {
    return this.addToArray('locationCode', locationCode);
  }

  /**
   * Add locationReference
   * Requested location
   */
  addLocationReference(locationReference: IReference<'Location'>): this {
    return this.addToArray('locationReference', locationReference);
  }

  /**
   * Add reasonCode
   * Explanation/Justification for procedure or service
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * Explanation/Justification for service or service
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>): this {
    return this.addToArray('reasonReference', reasonReference);
  }

  /**
   * Add insurance
   * Associated insurance coverage
   */
  addInsurance(insurance: IReference<'Coverage' | 'ClaimResponse'>): this {
    return this.addToArray('insurance', insurance);
  }

  /**
   * Add supportingInfo
   * Additional clinical information
   */
  addSupportingInfo(supportingInfo: IReference<'Resource'>): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add specimen
   * Procedure Samples
   */
  addSpecimen(specimen: IReference<'Specimen'>): this {
    return this.addToArray('specimen', specimen);
  }

  /**
   * Add bodySite
   * Location on Body
   */
  addBodySite(bodySite: ICodeableConcept): this {
    return this.addToArray('bodySite', bodySite);
  }

  /**
   * Add note
   * Comments
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add relevantHistory
   * Request provenance
   */
  addRelevantHistory(relevantHistory: IReference<'Provenance'>): this {
    return this.addToArray('relevantHistory', relevantHistory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ServiceRequest instance
   */
  build(): ServiceRequest {
    return new ServiceRequest(this.data);
  }

  /**
   * Build and validate the ServiceRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ServiceRequest> {
    const serviceRequest = this.build();
    await serviceRequest.validateOrThrow();
    return serviceRequest;
  }
}
