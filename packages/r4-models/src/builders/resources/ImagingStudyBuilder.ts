import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ImagingStudy } from '../../models/resources/ImagingStudy.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICoding,
  IIdentifier,
  IImagingStudy,
  IImagingStudySeries,
  IReference,
  ImagingStudyStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * ImagingStudyBuilder - Fluent builder for ImagingStudy resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingStudy = new ImagingStudyBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ImagingStudyBuilder extends DomainResourceBuilder<ImagingStudy, IImagingStudy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * registered | available | cancelled | entered-in-error | unknown
   */
  setStatus(status: ImagingStudyStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * Who or what is the subject of the study
   */
  setSubject(subject: IReference<'Patient' | 'Device' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter with which this imaging study is associated
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set started
   * When the study was started
   */
  setStarted(started: string): this {
    this.data.started = started;
    return this;
  }

  /**
   * Set referrer
   * Referring physician
   */
  setReferrer(referrer: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.referrer = referrer;
    return this;
  }

  /**
   * Set numberOfSeries
   * Number of Study Related Series
   */
  setNumberOfSeries(numberOfSeries: number): this {
    this.data.numberOfSeries = numberOfSeries;
    return this;
  }

  /**
   * Set numberOfInstances
   * Number of Study Related Instances
   */
  setNumberOfInstances(numberOfInstances: number): this {
    this.data.numberOfInstances = numberOfInstances;
    return this;
  }

  /**
   * Set location
   * Where ImagingStudy occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set description
   * Institution-generated description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set procedure choice type
   * @param type - 'Reference' | 'Code'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setProcedure('Reference', value)
   */
  setProcedure<T extends 'Reference' | 'Code'>(
    type: T,
    value: string
  ): this {
    const key = `procedure${type}` as keyof IImagingStudy;
    const otherKeys: (keyof IImagingStudy)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('procedureReference' as keyof IImagingStudy);
      otherKeys.push('_procedureReference' as keyof IImagingStudy);
    }
    if (type !== 'Code') {
      otherKeys.push('procedureCode' as keyof IImagingStudy);
      otherKeys.push('_procedureCode' as keyof IImagingStudy);
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
    const key = `reason${type}` as keyof IImagingStudy;
    const otherKeys: (keyof IImagingStudy)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IImagingStudy);
      otherKeys.push('_reasonCode' as keyof IImagingStudy);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IImagingStudy);
      otherKeys.push('_reasonReference' as keyof IImagingStudy);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifiers for the whole study
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add modality
   * All series modality if actual acquisition modalities
   */
  addModality(modality: ICoding): this {
    return this.addToArray('modality', modality);
  }

  /**
   * Add basedOn
   * Request fulfilled
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'ServiceRequest' | 'Appointment' | 'AppointmentResponse' | 'Task'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add interpreter
   * Who interpreted images
   */
  addInterpreter(interpreter: IReference<'Practitioner' | 'PractitionerRole'>): this {
    return this.addToArray('interpreter', interpreter);
  }

  /**
   * Add endpoint
   * Study access endpoint
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add note
   * User-defined comments
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add series
   * Each study has one or more series of instances
   */
  addSeries(sery: IImagingStudySeries): this {
    return this.addToArray('series', sery);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingStudy instance
   */
  build(): ImagingStudy {
    return new ImagingStudy(this.data);
  }

  /**
   * Build and validate the ImagingStudy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingStudy> {
    const imagingStudy = this.build();
    await imagingStudy.validateOrThrow();
    return imagingStudy;
  }
}
