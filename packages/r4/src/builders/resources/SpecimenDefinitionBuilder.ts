import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SpecimenDefinition } from '../../models/resources/SpecimenDefinition.js';
import type {
  ICodeableConcept,
  IIdentifier,
  ISpecimenDefinition,
  ISpecimenDefinitionTypeTested,
} from '@fhir-toolkit/r4-types';

/**
 * SpecimenDefinitionBuilder - Fluent builder for SpecimenDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenDefinition = new SpecimenDefinitionBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addPatientPreparation({ ... })
 *   .build();
 */
export class SpecimenDefinitionBuilder extends DomainResourceBuilder<SpecimenDefinition, ISpecimenDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Business identifier of a kind of specimen
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set typeCollected
   * Kind of material to collect
   */
  setTypeCollected(typeCollected: ICodeableConcept): this {
    this.data.typeCollected = typeCollected;
    return this;
  }

  /**
   * Set timeAspect
   * Time aspect for collection
   */
  setTimeAspect(timeAspect: string): this {
    this.data.timeAspect = timeAspect;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add patientPreparation
   * Patient preparation for collection
   */
  addPatientPreparation(patientPreparation: ICodeableConcept): this {
    return this.addToArray('patientPreparation', patientPreparation);
  }

  /**
   * Add collection
   * Specimen collection procedure
   */
  addCollection(collection: ICodeableConcept): this {
    return this.addToArray('collection', collection);
  }

  /**
   * Add typeTested
   * Specimen in container intended for testing by lab
   */
  addTypeTested(typeTested: ISpecimenDefinitionTypeTested): this {
    return this.addToArray('typeTested', typeTested);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenDefinition instance
   */
  build(): SpecimenDefinition {
    return new SpecimenDefinition(this.data);
  }

  /**
   * Build and validate the SpecimenDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenDefinition> {
    const specimenDefinition = this.build();
    await specimenDefinition.validateOrThrow();
    return specimenDefinition;
  }
}
