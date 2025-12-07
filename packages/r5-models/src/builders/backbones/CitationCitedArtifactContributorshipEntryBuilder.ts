import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactContributorshipEntry } from '../../models/backbones/CitationCitedArtifactContributorshipEntry.js';
import type {
  ICitationCitedArtifactContributorshipEntry,
  ICitationCitedArtifactContributorshipEntryContributionInstance,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CitationCitedArtifactContributorshipEntryBuilder - Fluent builder for CitationCitedArtifactContributorshipEntry backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactContributorshipEntry = new CitationCitedArtifactContributorshipEntryBuilder()
 *   .setContributor(value)
 *   .addAffiliation({ ... })
 *   .build();
 */
export class CitationCitedArtifactContributorshipEntryBuilder extends BackboneElementBuilder<CitationCitedArtifactContributorshipEntry, ICitationCitedArtifactContributorshipEntry> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set contributor
   * The identity of the individual contributor
   */
  setContributor(contributor: IReference<'Practitioner' | 'Organization'>): this {
    this.data.contributor = contributor;
    return this;
  }

  /**
   * Set forenameInitials
   * For citation styles that use initials
   */
  setForenameInitials(forenameInitials: string): this {
    this.data.forenameInitials = forenameInitials;
    return this;
  }

  /**
   * Set role
   * The role of the contributor (e.g. author, editor, reviewer, funder)
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set correspondingContact
   * Whether the contributor is the corresponding contributor for the role
   */
  setCorrespondingContact(correspondingContact: boolean): this {
    this.data.correspondingContact = correspondingContact;
    return this;
  }

  /**
   * Set rankingOrder
   * Ranked order of contribution
   */
  setRankingOrder(rankingOrder: number): this {
    this.data.rankingOrder = rankingOrder;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add affiliation
   * Organizational affiliation
   */
  addAffiliation(affiliation: IReference<'Organization' | 'PractitionerRole'>): this {
    return this.addToArray('affiliation', affiliation);
  }

  /**
   * Add contributionType
   * The specific contribution
   */
  addContributionType(contributionType: ICodeableConcept): this {
    return this.addToArray('contributionType', contributionType);
  }

  /**
   * Add contributionInstance
   * Contributions with accounting for time or number
   */
  addContributionInstance(contributionInstance: ICitationCitedArtifactContributorshipEntryContributionInstance): this {
    return this.addToArray('contributionInstance', contributionInstance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactContributorshipEntry instance
   */
  build(): CitationCitedArtifactContributorshipEntry {
    return new CitationCitedArtifactContributorshipEntry(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactContributorshipEntry instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactContributorshipEntry> {
    const citationCitedArtifactContributorshipEntry = this.build();
    await citationCitedArtifactContributorshipEntry.validateOrThrow();
    return citationCitedArtifactContributorshipEntry;
  }
}
