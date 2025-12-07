import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { BodyStructure } from '../../models/resources/BodyStructure.js';
import type {
  IAttachment,
  IBodyStructure,
  IBodyStructureIncludedStructure,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * BodyStructureBuilder - Fluent builder for BodyStructure resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const bodyStructure = new BodyStructureBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class BodyStructureBuilder extends DomainResourceBuilder<BodyStructure, IBodyStructure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set morphology
   * Kind of Structure
   */
  setMorphology(morphology: ICodeableConcept): this {
    this.data.morphology = morphology;
    return this;
  }

  /**
   * Set description
   * Text description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set patient
   * Who this is about
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Bodystructure identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add includedStructure
   * Included anatomic location(s)
   */
  addIncludedStructure(includedStructure: IBodyStructureIncludedStructure): this {
    return this.addToArray('includedStructure', includedStructure);
  }

  /**
   * Add excludedStructure
   * Excluded anatomic locations(s)
   */
  addExcludedStructure(excludedStructure: IBodyStructureIncludedStructure): this {
    return this.addToArray('excludedStructure', excludedStructure);
  }

  /**
   * Add image
   * Attached images
   */
  addImage(image: IAttachment): this {
    return this.addToArray('image', image);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BodyStructure instance
   */
  build(): BodyStructure {
    return new BodyStructure(this.data);
  }

  /**
   * Build and validate the BodyStructure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BodyStructure> {
    const bodyStructure = this.build();
    await bodyStructure.validateOrThrow();
    return bodyStructure;
  }
}
