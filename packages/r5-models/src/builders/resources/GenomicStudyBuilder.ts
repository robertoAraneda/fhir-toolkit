import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { GenomicStudy } from '../../models/resources/GenomicStudy.js';
import type {
  GenomicStudyStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IGenomicStudy,
  IGenomicStudyAnalysis,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GenomicStudyBuilder - Fluent builder for GenomicStudy resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const genomicStudy = new GenomicStudyBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class GenomicStudyBuilder extends DomainResourceBuilder<GenomicStudy, IGenomicStudy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * registered | available | cancelled | entered-in-error | unknown
   */
  setStatus(status: GenomicStudyStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * The primary subject of the genomic study
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * The healthcare event with which this genomics study is associated
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set startDate
   * When the genomic study was started
   */
  setStartDate(startDate: string): this {
    this.data.startDate = startDate;
    return this;
  }

  /**
   * Set referrer
   * Healthcare professional who requested or referred the genomic study
   */
  setReferrer(referrer: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.referrer = referrer;
    return this;
  }

  /**
   * Set instantiatesCanonical
   * The defined protocol that describes the study
   */
  setInstantiatesCanonical(instantiatesCanonical: string): this {
    this.data.instantiatesCanonical = instantiatesCanonical;
    return this;
  }

  /**
   * Set instantiatesUri
   * The URL pointing to an externally maintained protocol that describes the study
   */
  setInstantiatesUri(instantiatesUri: string): this {
    this.data.instantiatesUri = instantiatesUri;
    return this;
  }

  /**
   * Set description
   * Description of the genomic study
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifiers for this genomic study
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add type
   * The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling)
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add basedOn
   * Event resources that the genomic study is based on
   */
  addBasedOn(basedOn: IReference<'ServiceRequest' | 'Task'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add interpreter
   * Healthcare professionals who interpreted the genomic study
   */
  addInterpreter(interpreter: IReference<'Practitioner' | 'PractitionerRole'>): this {
    return this.addToArray('interpreter', interpreter);
  }

  /**
   * Add reason
   * Why the genomic study was performed
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add note
   * Comments related to the genomic study
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add analysis
   * Genomic Analysis Event
   */
  addAnalysis(analysi: IGenomicStudyAnalysis): this {
    return this.addToArray('analysis', analysi);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GenomicStudy instance
   */
  build(): GenomicStudy {
    return new GenomicStudy(this.data);
  }

  /**
   * Build and validate the GenomicStudy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GenomicStudy> {
    const genomicStudy = this.build();
    await genomicStudy.validateOrThrow();
    return genomicStudy;
  }
}
