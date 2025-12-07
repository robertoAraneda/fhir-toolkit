import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceAssociation } from '../../models/resources/DeviceAssociation.js';
import type {
  DeviceAssociationType,
  ICodeableConcept,
  IDeviceAssociation,
  IDeviceAssociationOperation,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceAssociationBuilder - Fluent builder for DeviceAssociation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceAssociation = new DeviceAssociationBuilder()
 *   .setId('123')
 *   .setDevice(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceAssociationBuilder extends DomainResourceBuilder<DeviceAssociation, IDeviceAssociation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set device
   * Reference to the devices associated with the patient or group
   */
  setDevice(device: IReference<'Device'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set status
   * implanted | explanted | attached | entered-in-error | unknown
   */
  setStatus(status: ICodeableConcept<DeviceAssociationType>): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * The individual, group of individuals or device that the device is on or associated with
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson' | 'Device'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set bodyStructure
   * Current anatomical location of the device in/on subject
   */
  setBodyStructure(bodyStructure: IReference<'BodyStructure'>): this {
    this.data.bodyStructure = bodyStructure;
    return this;
  }

  /**
   * Set period
   * Begin and end dates and times for the device association
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Instance identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Describes the relationship between the device and subject
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add statusReason
   * The reasons given for the current association status
   */
  addStatusReason(statusReason: ICodeableConcept<DeviceAssociationType>): this {
    return this.addToArray('statusReason', statusReason);
  }

  /**
   * Add operation
   * The details about the device when it is in use to describe its operation
   */
  addOperation(operation: IDeviceAssociationOperation): this {
    return this.addToArray('operation', operation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceAssociation instance
   */
  build(): DeviceAssociation {
    return new DeviceAssociation(this.data);
  }

  /**
   * Build and validate the DeviceAssociation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceAssociation> {
    const deviceAssociation = this.build();
    await deviceAssociation.validateOrThrow();
    return deviceAssociation;
  }
}
