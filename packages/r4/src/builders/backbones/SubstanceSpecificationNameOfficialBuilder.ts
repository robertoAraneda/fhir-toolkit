import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationNameOfficial } from '../../models/backbones/SubstanceSpecificationNameOfficial.js';
import type {
  ICodeableConcept,
  ISubstanceSpecificationNameOfficial,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationNameOfficialBuilder - Fluent builder for SubstanceSpecificationNameOfficial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationNameOfficial = new SubstanceSpecificationNameOfficialBuilder()
 *   .setAuthority(value)
 *   .build();
 */
export class SubstanceSpecificationNameOfficialBuilder extends BackboneElementBuilder<SubstanceSpecificationNameOfficial, ISubstanceSpecificationNameOfficial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set authority
   * Which authority uses this official name
   */
  setAuthority(authority: ICodeableConcept): this {
    this.data.authority = authority;
    return this;
  }

  /**
   * Set status
   * The status of the official name
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set date
   * Date of official name change
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationNameOfficial instance
   */
  build(): SubstanceSpecificationNameOfficial {
    return new SubstanceSpecificationNameOfficial(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationNameOfficial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationNameOfficial> {
    const substanceSpecificationNameOfficial = this.build();
    await substanceSpecificationNameOfficial.validateOrThrow();
    return substanceSpecificationNameOfficial;
  }
}
