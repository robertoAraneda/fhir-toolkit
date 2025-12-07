import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyAssociatedParty } from '../../models/backbones/ResearchStudyAssociatedParty.js';
import type {
  ICodeableConcept,
  IPeriod,
  IReference,
  IResearchStudyAssociatedParty,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyAssociatedPartyBuilder - Fluent builder for ResearchStudyAssociatedParty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyAssociatedParty = new ResearchStudyAssociatedPartyBuilder()
 *   .setName(value)
 *   .addPeriod({ ... })
 *   .build();
 */
export class ResearchStudyAssociatedPartyBuilder extends BackboneElementBuilder<ResearchStudyAssociatedParty, IResearchStudyAssociatedParty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of associated party
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set role
   * sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set party
   * Individual or organization associated with study (use practitionerRole to specify their organisation)
   */
  setParty(party: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.party = party;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add period
   * When active in the role
   */
  addPeriod(period: IPeriod): this {
    return this.addToArray('period', period);
  }

  /**
   * Add classifier
   * nih | fda | government | nonprofit | academic | industry
   */
  addClassifier(classifier: ICodeableConcept): this {
    return this.addToArray('classifier', classifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyAssociatedParty instance
   */
  build(): ResearchStudyAssociatedParty {
    return new ResearchStudyAssociatedParty(this.data);
  }

  /**
   * Build and validate the ResearchStudyAssociatedParty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyAssociatedParty> {
    const researchStudyAssociatedParty = this.build();
    await researchStudyAssociatedParty.validateOrThrow();
    return researchStudyAssociatedParty;
  }
}
