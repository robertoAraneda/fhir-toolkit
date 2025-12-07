import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceNucleicAcidSubunitSugar } from '../../models/backbones/SubstanceNucleicAcidSubunitSugar.js';
import type {
  IIdentifier,
  ISubstanceNucleicAcidSubunitSugar,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceNucleicAcidSubunitSugarBuilder - Fluent builder for SubstanceNucleicAcidSubunitSugar backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceNucleicAcidSubunitSugar = new SubstanceNucleicAcidSubunitSugarBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class SubstanceNucleicAcidSubunitSugarBuilder extends BackboneElementBuilder<SubstanceNucleicAcidSubunitSugar, ISubstanceNucleicAcidSubunitSugar> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * The Substance ID of the sugar or sugar-like component that make up the nucleotide
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set name
   * The name of the sugar or sugar-like component that make up the nucleotide
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set residueSite
   * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above
   */
  setResidueSite(residueSite: string): this {
    this.data.residueSite = residueSite;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceNucleicAcidSubunitSugar instance
   */
  build(): SubstanceNucleicAcidSubunitSugar {
    return new SubstanceNucleicAcidSubunitSugar(this.data);
  }

  /**
   * Build and validate the SubstanceNucleicAcidSubunitSugar instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceNucleicAcidSubunitSugar> {
    const substanceNucleicAcidSubunitSugar = this.build();
    await substanceNucleicAcidSubunitSugar.validateOrThrow();
    return substanceNucleicAcidSubunitSugar;
  }
}
