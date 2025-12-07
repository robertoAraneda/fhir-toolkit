import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DeviceUseStatement } from '../../models/resources/DeviceUseStatement.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  DeviceUseStatementStatusType,
  IAnnotation,
  ICodeableConcept,
  IDeviceUseStatement,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceUseStatementBuilder - Fluent builder for DeviceUseStatement resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceUseStatement = new DeviceUseStatementBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DeviceUseStatementBuilder extends DomainResourceBuilder<DeviceUseStatement, IDeviceUseStatement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | completed | entered-in-error +
   */
  setStatus(status: DeviceUseStatementStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * Patient using device
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set recordedOn
   * When statement was recorded
   */
  setRecordedOn(recordedOn: string): this {
    this.data.recordedOn = recordedOn;
    return this;
  }

  /**
   * Set source
   * Who made the statement
   */
  setSource(source: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set device
   * Reference to device used
   */
  setDevice(device: IReference<'Device'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set bodySite
   * Target body site
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set timing choice type
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
    const key = `timing${type}` as keyof IDeviceUseStatement;
    const otherKeys: (keyof IDeviceUseStatement)[] = [];
    if (type !== 'Timing') {
      otherKeys.push('timingTiming' as keyof IDeviceUseStatement);
      otherKeys.push('_timingTiming' as keyof IDeviceUseStatement);
    }
    if (type !== 'Period') {
      otherKeys.push('timingPeriod' as keyof IDeviceUseStatement);
      otherKeys.push('_timingPeriod' as keyof IDeviceUseStatement);
    }
    if (type !== 'DateTime') {
      otherKeys.push('timingDateTime' as keyof IDeviceUseStatement);
      otherKeys.push('_timingDateTime' as keyof IDeviceUseStatement);
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
    value: ChoiceTypeValue<T>
  ): this {
    const key = `reason${type}` as keyof IDeviceUseStatement;
    const otherKeys: (keyof IDeviceUseStatement)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IDeviceUseStatement);
      otherKeys.push('_reasonCode' as keyof IDeviceUseStatement);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IDeviceUseStatement);
      otherKeys.push('_reasonReference' as keyof IDeviceUseStatement);
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
   * Add derivedFrom
   * Supporting information
   */
  addDerivedFrom(derivedFrom: IReference<'ServiceRequest' | 'Procedure' | 'Claim' | 'Observation' | 'QuestionnaireResponse' | 'DocumentReference'>): this {
    return this.addToArray('derivedFrom', derivedFrom);
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
   * Build the DeviceUseStatement instance
   */
  build(): DeviceUseStatement {
    return new DeviceUseStatement(this.data);
  }

  /**
   * Build and validate the DeviceUseStatement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceUseStatement> {
    const deviceUseStatement = this.build();
    await deviceUseStatement.validateOrThrow();
    return deviceUseStatement;
  }
}
