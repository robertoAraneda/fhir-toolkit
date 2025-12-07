import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionNameOfficial } from '../../models/backbones/SubstanceDefinitionNameOfficial.js';
import type {
  ICodeableConcept,
  ISubstanceDefinitionNameOfficial,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionNameOfficialBuilder - Fluent builder for SubstanceDefinitionNameOfficial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionNameOfficial = new SubstanceDefinitionNameOfficialBuilder()
 *   .setAuthority(value)
 *   .build();
 */
export class SubstanceDefinitionNameOfficialBuilder extends BackboneElementBuilder<SubstanceDefinitionNameOfficial, ISubstanceDefinitionNameOfficial> {
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
   * The status of the official name, for example 'draft', 'active'
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
   * Build the SubstanceDefinitionNameOfficial instance
   */
  build(): SubstanceDefinitionNameOfficial {
    return new SubstanceDefinitionNameOfficial(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionNameOfficial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionNameOfficial> {
    const substanceDefinitionNameOfficial = this.build();
    await substanceDefinitionNameOfficial.validateOrThrow();
    return substanceDefinitionNameOfficial;
  }
}
