import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerMonomerSet } from '../../models/backbones/SubstancePolymerMonomerSet.js';
import type {
  ICodeableConcept,
  ISubstancePolymerMonomerSet,
  ISubstancePolymerMonomerSetStartingMaterial,
} from '@fhir-toolkit/r4-types';

/**
 * SubstancePolymerMonomerSetBuilder - Fluent builder for SubstancePolymerMonomerSet backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerMonomerSet = new SubstancePolymerMonomerSetBuilder()
 *   .setRatioType(value)
 *   .addStartingMaterial({ ... })
 *   .build();
 */
export class SubstancePolymerMonomerSetBuilder extends BackboneElementBuilder<SubstancePolymerMonomerSet, ISubstancePolymerMonomerSet> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set ratioType
   * Todo
   */
  setRatioType(ratioType: ICodeableConcept): this {
    this.data.ratioType = ratioType;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add startingMaterial
   * Todo
   */
  addStartingMaterial(startingMaterial: ISubstancePolymerMonomerSetStartingMaterial): this {
    return this.addToArray('startingMaterial', startingMaterial);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerMonomerSet instance
   */
  build(): SubstancePolymerMonomerSet {
    return new SubstancePolymerMonomerSet(this.data);
  }

  /**
   * Build and validate the SubstancePolymerMonomerSet instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerMonomerSet> {
    const substancePolymerMonomerSet = this.build();
    await substancePolymerMonomerSet.validateOrThrow();
    return substancePolymerMonomerSet;
  }
}
