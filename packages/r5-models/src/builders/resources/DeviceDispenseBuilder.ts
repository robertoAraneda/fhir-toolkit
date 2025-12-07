import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceDispense } from '../../models/resources/DeviceDispense.js';
import type {
  DeviceDispenseStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDeviceDispense,
  IDeviceDispensePerformer,
  IIdentifier,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDispenseBuilder - Fluent builder for DeviceDispense resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDispense = new DeviceDispenseBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceDispenseBuilder extends DomainResourceBuilder<DeviceDispense, IDeviceDispense> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
   */
  setStatus(status: DeviceDispenseStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Why a dispense was or was not performed
   */
  setStatusReason(statusReason: ICodeableReference): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set device
   * What device was supplied
   */
  setDevice(device: ICodeableReference): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set subject
   * Who the dispense is for
   */
  setSubject(subject: IReference<'Patient' | 'Practitioner'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set receiver
   * Who collected the device or where the medication was delivered
   */
  setReceiver(receiver: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Location' | 'PractitionerRole'>): this {
    this.data.receiver = receiver;
    return this;
  }

  /**
   * Set encounter
   * Encounter associated with event
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set location
   * Where the dispense occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set type
   * Trial fill, partial fill, emergency fill, etc
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set quantity
   * Amount dispensed
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set preparedDate
   * When product was packaged and reviewed
   */
  setPreparedDate(preparedDate: string): this {
    this.data.preparedDate = preparedDate;
    return this;
  }

  /**
   * Set whenHandedOver
   * When product was given out
   */
  setWhenHandedOver(whenHandedOver: string): this {
    this.data.whenHandedOver = whenHandedOver;
    return this;
  }

  /**
   * Set destination
   * Where the device was sent or should be sent
   */
  setDestination(destination: IReference<'Location'>): this {
    this.data.destination = destination;
    return this;
  }

  /**
   * Set usageInstruction
   * Full representation of the usage instructions
   */
  setUsageInstruction(usageInstruction: string): this {
    this.data.usageInstruction = usageInstruction;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this dispensation
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * The order or request that this dispense is fulfilling
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'DeviceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * The bigger event that this dispense is a part of
   */
  addPartOf(partOf: IReference<'Procedure'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add category
   * Type of device dispense
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add supportingInformation
   * Information that supports the dispensing of the device
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add performer
   * Who performed event
   */
  addPerformer(performer: IDeviceDispensePerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add note
   * Information about the dispense
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add eventHistory
   * A list of relevant lifecycle events
   */
  addEventHistory(eventHistory: IReference<'Provenance'>): this {
    return this.addToArray('eventHistory', eventHistory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDispense instance
   */
  build(): DeviceDispense {
    return new DeviceDispense(this.data);
  }

  /**
   * Build and validate the DeviceDispense instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDispense> {
    const deviceDispense = this.build();
    await deviceDispense.validateOrThrow();
    return deviceDispense;
  }
}
