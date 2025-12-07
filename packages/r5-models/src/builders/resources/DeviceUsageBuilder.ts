import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceUsage } from '../../models/resources/DeviceUsage.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  DeviceUsageStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDeviceUsage,
  IDeviceUsageAdherence,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceUsageBuilder - Fluent builder for DeviceUsage resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceUsage = new DeviceUsageBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceUsageBuilder extends DomainResourceBuilder<DeviceUsage, IDeviceUsage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | completed | not-done | entered-in-error +
   */
  setStatus(status: DeviceUsageStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set patient
   * Patient using device
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set context
   * The encounter or episode of care that establishes the context for this device use statement
   */
  setContext(context: IReference<'Encounter' | 'EpisodeOfCare'>): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set dateAsserted
   * When the statement was made (and recorded)
   */
  setDateAsserted(dateAsserted: string): this {
    this.data.dateAsserted = dateAsserted;
    return this;
  }

  /**
   * Set usageStatus
   * The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement
   */
  setUsageStatus(usageStatus: ICodeableConcept<DeviceUsageStatusType>): this {
    this.data.usageStatus = usageStatus;
    return this;
  }

  /**
   * Set adherence
   * How device is being used
   */
  setAdherence(adherence: IDeviceUsageAdherence): this {
    this.data.adherence = adherence;
    return this;
  }

  /**
   * Set informationSource
   * Who made the statement
   */
  setInformationSource(informationSource: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>): this {
    this.data.informationSource = informationSource;
    return this;
  }

  /**
   * Set device
   * Code or Reference to device used
   */
  setDevice(device: ICodeableReference): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set bodySite
   * Target body site
   */
  setBodySite(bodySite: ICodeableReference): this {
    this.data.bodySite = bodySite;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set timing choice type (timingTiming, timingPeriod, timingDateTime)
   * @param type - 'Timing' | 'Period' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTiming('Timing', value)
   */
  setTiming<T extends 'Timing' | 'Period' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `timing${type}` as keyof IDeviceUsage;
    const otherKeys: (keyof IDeviceUsage)[] = [];
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof IDeviceUsage);
      otherKeys.push('_timingTiming' as keyof IDeviceUsage);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IDeviceUsage);
      otherKeys.push('_timingPeriod' as keyof IDeviceUsage);
    }
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof IDeviceUsage);
      otherKeys.push('_timingDateTime' as keyof IDeviceUsage);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier for this record
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Fulfills plan, proposal or order
   */
  addBasedOn(basedOn: IReference<'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add category
   * The category of the statement - classifying how the statement is made
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add derivedFrom
   * Supporting information
   */
  addDerivedFrom(derivedFrom: IReference<'ServiceRequest' | 'Procedure' | 'Claim' | 'Observation' | 'QuestionnaireResponse' | 'DocumentReference'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
  }

  /**
   * Add usageReason
   * The reason for asserting the usage status - for example forgot, lost, stolen, broken
   */
  addUsageReason(usageReason: ICodeableConcept): this {
    return this.addToArray('usageReason', usageReason);
  }

  /**
   * Add reason
   * Why device was used
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add note
   * Addition details (comments, instructions)
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceUsage instance
   */
  build(): DeviceUsage {
    return new DeviceUsage(this.data);
  }

  /**
   * Build and validate the DeviceUsage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceUsage> {
    const deviceUsage = this.build();
    await deviceUsage.validateOrThrow();
    return deviceUsage;
  }
}
