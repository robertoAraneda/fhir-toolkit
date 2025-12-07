import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSourceMaterialOrganismAuthor } from '../../models/backbones/SubstanceSourceMaterialOrganismAuthor.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialOrganismAuthor,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSourceMaterialOrganismAuthorBuilder - Fluent builder for SubstanceSourceMaterialOrganismAuthor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterialOrganismAuthor = new SubstanceSourceMaterialOrganismAuthorBuilder()
 *   .setAuthorType(value)
 *   .build();
 */
export class SubstanceSourceMaterialOrganismAuthorBuilder extends BackboneElementBuilder<SubstanceSourceMaterialOrganismAuthor, ISubstanceSourceMaterialOrganismAuthor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set authorType
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name
   */
  setAuthorType(authorType: ICodeableConcept): this {
    this.data.authorType = authorType;
    return this;
  }

  /**
   * Set authorDescription
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank)
   */
  setAuthorDescription(authorDescription: string): this {
    this.data.authorDescription = authorDescription;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterialOrganismAuthor instance
   */
  build(): SubstanceSourceMaterialOrganismAuthor {
    return new SubstanceSourceMaterialOrganismAuthor(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterialOrganismAuthor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterialOrganismAuthor> {
    const substanceSourceMaterialOrganismAuthor = this.build();
    await substanceSourceMaterialOrganismAuthor.validateOrThrow();
    return substanceSourceMaterialOrganismAuthor;
  }
}
