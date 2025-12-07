import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSourceMaterialOrganismHybrid } from '../../models/backbones/SubstanceSourceMaterialOrganismHybrid.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialOrganismHybrid,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceSourceMaterialOrganismHybridBuilder - Fluent builder for SubstanceSourceMaterialOrganismHybrid backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterialOrganismHybrid = new SubstanceSourceMaterialOrganismHybridBuilder()
 *   .setMaternalOrganismId(value)
 *   .build();
 */
export class SubstanceSourceMaterialOrganismHybridBuilder extends BackboneElementBuilder<SubstanceSourceMaterialOrganismHybrid, ISubstanceSourceMaterialOrganismHybrid> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set maternalOrganismId
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal
   */
  setMaternalOrganismId(maternalOrganismId: string): this {
    this.data.maternalOrganismId = maternalOrganismId;
    return this;
  }

  /**
   * Set maternalOrganismName
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal
   */
  setMaternalOrganismName(maternalOrganismName: string): this {
    this.data.maternalOrganismName = maternalOrganismName;
    return this;
  }

  /**
   * Set paternalOrganismId
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary
   */
  setPaternalOrganismId(paternalOrganismId: string): this {
    this.data.paternalOrganismId = paternalOrganismId;
    return this;
  }

  /**
   * Set paternalOrganismName
   * The name of the paternal species constituting the hybrid organism shall be specified
   */
  setPaternalOrganismName(paternalOrganismName: string): this {
    this.data.paternalOrganismName = paternalOrganismName;
    return this;
  }

  /**
   * Set hybridType
   * The hybrid type of an organism shall be specified
   */
  setHybridType(hybridType: ICodeableConcept): this {
    this.data.hybridType = hybridType;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterialOrganismHybrid instance
   */
  build(): SubstanceSourceMaterialOrganismHybrid {
    return new SubstanceSourceMaterialOrganismHybrid(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterialOrganismHybrid instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterialOrganismHybrid> {
    const substanceSourceMaterialOrganismHybrid = this.build();
    await substanceSourceMaterialOrganismHybrid.validateOrThrow();
    return substanceSourceMaterialOrganismHybrid;
  }
}
