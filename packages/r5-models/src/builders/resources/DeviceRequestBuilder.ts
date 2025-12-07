import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceRequest } from '../../models/resources/DeviceRequest.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDeviceRequest,
  IDeviceRequestParameter,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r5-types';

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
   * Set doNotPerform
   * True if the request is to stop or not to start using the device
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set code
   * Device requested
   */
  setCode(code: ICodeableReference): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set quantity
   * Quantity of devices to supply
   */
  setQuantity(quantity: number): this {
    this.data.quantity = quantity;
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
   * Who/what submitted the device request
   */
  setRequester(requester: IReference<'Device' | 'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.requester = requester;
    return this;
  }

  /**
   * Set performer
   * Requested Filler
   */
  setPerformer(performer: ICodeableReference): this {
    this.data.performer = performer;
    return this;
  }

  /**
   * Set asNeeded
   * PRN status of request
   */
  setAsNeeded(asNeeded: boolean): this {
    this.data.asNeeded = asNeeded;
    return this;
  }

  /**
   * Set asNeededFor
   * Device usage reason
   */
  setAsNeededFor(asNeededFor: ICodeableConcept): this {
    this.data.asNeededFor = asNeededFor;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

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
  addBasedOn(basedOn: IReference<'Resource'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add replaces
   * What request replaces
   */
  addReplaces(replac: IReference<'DeviceRequest'>): this {
    return this.addToArray('replaces', replac);
  }

  /**
   * Add parameter
   * Device details
   */
  addParameter(parameter: IDeviceRequestParameter): this {
    return this.addToArray('parameter', parameter);
  }

  /**
   * Add reason
   * Coded/Linked Reason for request
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
