import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceNucleicAcidSubunitLinkage } from '../../models/backbones/SubstanceNucleicAcidSubunitLinkage.js';
import type {
  IIdentifier,
  ISubstanceNucleicAcidSubunitLinkage,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceNucleicAcidSubunitLinkageBuilder - Fluent builder for SubstanceNucleicAcidSubunitLinkage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceNucleicAcidSubunitLinkage = new SubstanceNucleicAcidSubunitLinkageBuilder()
 *   .setConnectivity(value)
 *   .build();
 */
export class SubstanceNucleicAcidSubunitLinkageBuilder extends BackboneElementBuilder<SubstanceNucleicAcidSubunitLinkage, ISubstanceNucleicAcidSubunitLinkage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set connectivity
   * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified
   */
  setConnectivity(connectivity: string): this {
    this.data.connectivity = connectivity;
    return this;
  }

  /**
   * Set identifier
   * Each linkage will be registered as a fragment and have an ID
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set name
   * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set residueSite
   * Residues shall be captured as described in 5.3.6.8.3
   */
  setResidueSite(residueSite: string): this {
    this.data.residueSite = residueSite;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceNucleicAcidSubunitLinkage instance
   */
  build(): SubstanceNucleicAcidSubunitLinkage {
    return new SubstanceNucleicAcidSubunitLinkage(this.data);
  }

  /**
   * Build and validate the SubstanceNucleicAcidSubunitLinkage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceNucleicAcidSubunitLinkage> {
    const substanceNucleicAcidSubunitLinkage = this.build();
    await substanceNucleicAcidSubunitLinkage.validateOrThrow();
    return substanceNucleicAcidSubunitLinkage;
  }
}
