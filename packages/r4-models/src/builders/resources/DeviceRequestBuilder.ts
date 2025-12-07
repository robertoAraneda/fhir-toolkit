import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceRequest } from '../../models/resources/DeviceRequest.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDeviceRequest,
  IDeviceRequestParameter,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * DeviceRequestBuilder - Fluent builder for DeviceRequest resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceRequest = new DeviceRequestBuilder()
 *   .setId('123')
 *   .setGroupIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceRequestBuilder extends DomainResourceBuilder<DeviceRequest, IDeviceRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set groupIdentifier
   * Identifier of composite request
   */
  setGroupIdentifier(groupIdentifier: IIdentifier): this {
    this.data.groupIdentifier = groupIdentifier;
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
   * Set subject
   * Focus of request
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Location' | 'Device'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter motivating request
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set authoredOn
   * When recorded
   */
  setAuthoredOn(authoredOn: string): this {
    this.data.authoredOn = authoredOn;
    return this;
  }

  /**
   * Set requester
   * Who/what is requesting diagnostics
   */
  setRequester(requester: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set performerType
   * Filler role
   */
  setPerformerType(performerType: ICodeableConcept): this {
    this.data.performerType = performerType;
    return this;
  }

  /**
   * Set performer
   * Requested Filler
   */
  setPerformer(performer: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'HealthcareService' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.performer = performer;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

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
    const key = `instantiates${type}` as keyof IDeviceRequest;
    const otherKeys: (keyof IDeviceRequest)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('instantiatesCanonical' as keyof IDeviceRequest);
      otherKeys.push('_instantiatesCanonical' as keyof IDeviceRequest);
    }
    if (type !== 'Uri') {
      otherKeys.push('instantiatesUri' as keyof IDeviceRequest);
      otherKeys.push('_instantiatesUri' as keyof IDeviceRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set code choice type
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCode('Reference', value)
   */
  setCode<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: string
  ): this {
    const key = `code${type}` as keyof IDeviceRequest;
    const otherKeys: (keyof IDeviceRequest)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('codeReference' as keyof IDeviceRequest);
      otherKeys.push('_codeReference' as keyof IDeviceRequest);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('codeCodeableConcept' as keyof IDeviceRequest);
      otherKeys.push('_codeCodeableConcept' as keyof IDeviceRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set occurrence choice type
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: string
  ): this {
    const key = `occurrence${type}` as keyof IDeviceRequest;
    const otherKeys: (keyof IDeviceRequest)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IDeviceRequest);
      otherKeys.push('_occurrenceDateTime' as keyof IDeviceRequest);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IDeviceRequest);
      otherKeys.push('_occurrencePeriod' as keyof IDeviceRequest);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof IDeviceRequest);
      otherKeys.push('_occurrenceTiming' as keyof IDeviceRequest);
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
    const key = `reason${type}` as keyof IDeviceRequest;
    const otherKeys: (keyof IDeviceRequest)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IDeviceRequest);
      otherKeys.push('_reasonCode' as keyof IDeviceRequest);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IDeviceRequest);
      otherKeys.push('_reasonReference' as keyof IDeviceRequest);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Request identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * What request fulfills
   */
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add priorRequest
   * What request replaces
   */
  addPriorRequest(priorRequest: IReference<'Resource'>): this {
    return this.addToArray('priorRequest', priorRequest);
  }

  /**
   * Add parameter
   * Device details
   */
  addParameter(parameter: IDeviceRequestParameter): this {
    return this.addToArray('parameter', parameter);
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
   * Add note
   * Notes or comments
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
   * Build the DeviceRequest instance
   */
  build(): DeviceRequest {
    return new DeviceRequest(this.data);
  }

  /**
   * Build and validate the DeviceRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceRequest> {
    const deviceRequest = this.build();
    await deviceRequest.validateOrThrow();
    return deviceRequest;
  }
}
