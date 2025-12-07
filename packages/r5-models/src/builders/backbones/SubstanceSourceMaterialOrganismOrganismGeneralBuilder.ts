import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSourceMaterialOrganismOrganismGeneral } from '../../models/backbones/SubstanceSourceMaterialOrganismOrganismGeneral.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceSourceMaterialOrganismOrganismGeneralBuilder - Fluent builder for SubstanceSourceMaterialOrganismOrganismGeneral backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterialOrganismOrganismGeneral = new SubstanceSourceMaterialOrganismOrganismGeneralBuilder()
 *   .setKingdom(value)
 *   .build();
 */
export class SubstanceSourceMaterialOrganismOrganismGeneralBuilder extends BackboneElementBuilder<SubstanceSourceMaterialOrganismOrganismGeneral, ISubstanceSourceMaterialOrganismOrganismGeneral> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set kingdom
   * The kingdom of an organism shall be specified
   */
  setKingdom(kingdom: ICodeableConcept): this {
    this.data.kingdom = kingdom;
    return this;
  }

  /**
   * Set phylum
   * The phylum of an organism shall be specified
   */
  setPhylum(phylum: ICodeableConcept): this {
    this.data.phylum = phylum;
    return this;
  }

  /**
   * Set class
   * The class of an organism shall be specified
   */
  setClass(_class: ICodeableConcept): this {
    this.data.class = _class;
    return this;
  }

  /**
   * Set order
   * The order of an organism shall be specified,
   */
  setOrder(order: ICodeableConcept): this {
    this.data.order = order;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterialOrganismOrganismGeneral instance
   */
  build(): SubstanceSourceMaterialOrganismOrganismGeneral {
    return new SubstanceSourceMaterialOrganismOrganismGeneral(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterialOrganismOrganismGeneral instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterialOrganismOrganismGeneral> {
    const substanceSourceMaterialOrganismOrganismGeneral = this.build();
    await substanceSourceMaterialOrganismOrganismGeneral.validateOrThrow();
    return substanceSourceMaterialOrganismOrganismGeneral;
  }
}
