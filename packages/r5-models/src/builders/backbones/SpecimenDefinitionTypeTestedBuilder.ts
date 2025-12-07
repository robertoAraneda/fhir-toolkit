import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenDefinitionTypeTested } from '../../models/backbones/SpecimenDefinitionTypeTested.js';
import type {
  ICodeableConcept,
  IDuration,
  ISpecimenDefinitionTypeTested,
  ISpecimenDefinitionTypeTestedContainer,
  ISpecimenDefinitionTypeTestedHandling,
  SpecimenContainedPreferenceType,
} from '@fhir-toolkit/r5-types';

/**
 * SpecimenDefinitionTypeTestedBuilder - Fluent builder for SpecimenDefinitionTypeTested backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenDefinitionTypeTested = new SpecimenDefinitionTypeTestedBuilder()
 *   .setIsDerived(value)
 *   .addRejectionCriterion({ ... })
 *   .build();
 */
export class SpecimenDefinitionTypeTestedBuilder extends BackboneElementBuilder<SpecimenDefinitionTypeTested, ISpecimenDefinitionTypeTested> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set isDerived
   * Primary or secondary specimen
   */
  setIsDerived(isDerived: boolean): this {
    this.data.isDerived = isDerived;
    return this;
  }

  /**
   * Set type
   * Type of intended specimen
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set preference
   * preferred | alternate
   */
  setPreference(preference: SpecimenContainedPreferenceType): this {
    this.data.preference = preference;
    return this;
  }

  /**
   * Set container
   * The specimen's container
   */
  setContainer(container: ISpecimenDefinitionTypeTestedContainer): this {
    this.data.container = container;
    return this;
  }

  /**
   * Set requirement
   * Requirements for specimen delivery and special handling
   */
  setRequirement(requirement: string): this {
    this.data.requirement = requirement;
    return this;
  }

  /**
   * Set retentionTime
   * The usual time for retaining this kind of specimen
   */
  setRetentionTime(retentionTime: IDuration): this {
    this.data.retentionTime = retentionTime;
    return this;
  }

  /**
   * Set singleUse
   * Specimen for single use only
   */
  setSingleUse(singleUse: boolean): this {
    this.data.singleUse = singleUse;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add rejectionCriterion
   * Criterion specified for specimen rejection
   */
  addRejectionCriterion(rejectionCriterion: ICodeableConcept): this {
    return this.addToArray('rejectionCriterion', rejectionCriterion);
  }

  /**
   * Add handling
   * Specimen handling before testing
   */
  addHandling(handling: ISpecimenDefinitionTypeTestedHandling): this {
    return this.addToArray('handling', handling);
  }

  /**
   * Add testingDestination
   * Where the specimen will be tested
   */
  addTestingDestination(testingDestination: ICodeableConcept): this {
    return this.addToArray('testingDestination', testingDestination);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenDefinitionTypeTested instance
   */
  build(): SpecimenDefinitionTypeTested {
    return new SpecimenDefinitionTypeTested(this.data);
  }

  /**
   * Build and validate the SpecimenDefinitionTypeTested instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenDefinitionTypeTested> {
    const specimenDefinitionTypeTested = this.build();
    await specimenDefinitionTypeTested.validateOrThrow();
    return specimenDefinitionTypeTested;
  }
}
