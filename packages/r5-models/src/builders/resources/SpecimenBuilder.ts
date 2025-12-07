import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Specimen } from '../../models/resources/Specimen.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IReference,
  ISpecimen,
  ISpecimenCollection,
  ISpecimenContainer,
  ISpecimenFeature,
  ISpecimenProcessing,
  SpecimenCombinedType,
  SpecimenStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * SpecimenBuilder - Fluent builder for Specimen resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimen = new SpecimenBuilder()
 *   .setId('123')
 *   .setAccessionIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SpecimenBuilder extends DomainResourceBuilder<Specimen, ISpecimen> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set accessionIdentifier
   * Identifier assigned by the lab
   */
  setAccessionIdentifier(accessionIdentifier: IIdentifier): this {
    this.data.accessionIdentifier = accessionIdentifier;
    return this;
  }

  /**
   * Set status
   * available | unavailable | unsatisfactory | entered-in-error
   */
  setStatus(status: SpecimenStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set type
   * Kind of material that forms the specimen
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance, a biologically-derived product, or a device
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'BiologicallyDerivedProduct' | 'Substance' | 'Location'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set receivedTime
   * The time when specimen is received by the testing laboratory
   */
  setReceivedTime(receivedTime: string): this {
    this.data.receivedTime = receivedTime;
    return this;
  }

  /**
   * Set combined
   * grouped | pooled
   */
  setCombined(combined: SpecimenCombinedType): this {
    this.data.combined = combined;
    return this;
  }

  /**
   * Set collection
   * Collection details
   */
  setCollection(collection: ISpecimenCollection): this {
    this.data.collection = collection;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add parent
   * Specimen from which this specimen originated
   */
  addParent(parent: IReference<'Specimen'>): this {
    return this.addToArray('parent', parent);
  }

  /**
   * Add request
   * Why the specimen was collected
   */
  addRequest(request: IReference<'ServiceRequest'>): this {
    return this.addToArray('request', request);
  }

  /**
   * Add role
   * The role the specimen serves
   */
  addRole(role: ICodeableConcept): this {
    return this.addToArray('role', role);
  }

  /**
   * Add feature
   * The physical feature of a specimen
   */
  addFeature(feature: ISpecimenFeature): this {
    return this.addToArray('feature', feature);
  }

  /**
   * Add processing
   * Processing and processing step details
   */
  addProcessing(processing: ISpecimenProcessing): this {
    return this.addToArray('processing', processing);
  }

  /**
   * Add container
   * Direct container of specimen (tube/slide, etc.)
   */
  addContainer(container: ISpecimenContainer): this {
    return this.addToArray('container', container);
  }

  /**
   * Add condition
   * State of the specimen
   */
  addCondition(condition: ICodeableConcept): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add note
   * Comments
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Specimen instance
   */
  build(): Specimen {
    return new Specimen(this.data);
  }

  /**
   * Build and validate the Specimen instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Specimen> {
    const specimen = this.build();
    await specimen.validateOrThrow();
    return specimen;
  }
}
