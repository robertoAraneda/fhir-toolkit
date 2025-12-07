import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactContributorshipEntryAffiliationInfo } from '../../models/backbones/CitationCitedArtifactContributorshipEntryAffiliationInfo.js';
import type {
  ICitationCitedArtifactContributorshipEntryAffiliationInfo,
  IIdentifier,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactContributorshipEntryAffiliationInfoBuilder - Fluent builder for CitationCitedArtifactContributorshipEntryAffiliationInfo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactContributorshipEntryAffiliationInfo = new CitationCitedArtifactContributorshipEntryAffiliationInfoBuilder()
 *   .setAffiliation(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactContributorshipEntryAffiliationInfoBuilder extends BackboneElementBuilder<CitationCitedArtifactContributorshipEntryAffiliationInfo, ICitationCitedArtifactContributorshipEntryAffiliationInfo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set affiliation
   * Display for the organization
   */
  setAffiliation(affiliation: string): this {
    this.data.affiliation = affiliation;
    return this;
  }

  /**
   * Set role
   * Role within the organization, such as professional title
   */
  setRole(role: string): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier for the organization
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactContributorshipEntryAffiliationInfo instance
   */
  build(): CitationCitedArtifactContributorshipEntryAffiliationInfo {
    return new CitationCitedArtifactContributorshipEntryAffiliationInfo(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactContributorshipEntryAffiliationInfo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactContributorshipEntryAffiliationInfo> {
    const citationCitedArtifactContributorshipEntryAffiliationInfo = this.build();
    await citationCitedArtifactContributorshipEntryAffiliationInfo.validateOrThrow();
    return citationCitedArtifactContributorshipEntryAffiliationInfo;
  }
}
