import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactContributorshipEntry } from '../../models/backbones/CitationCitedArtifactContributorshipEntry.js';
import type {
  IAddress,
  ICitationCitedArtifactContributorshipEntry,
  ICitationCitedArtifactContributorshipEntryAffiliationInfo,
  ICitationCitedArtifactContributorshipEntryContributionInstance,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactContributorshipEntryBuilder - Fluent builder for CitationCitedArtifactContributorshipEntry backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactContributorshipEntry = new CitationCitedArtifactContributorshipEntryBuilder()
 *   .setName(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactContributorshipEntryBuilder extends BackboneElementBuilder<CitationCitedArtifactContributorshipEntry, ICitationCitedArtifactContributorshipEntry> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * A name associated with the person
   */
  setName(name: IHumanName): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set initials
   * Initials for forename
   */
  setInitials(initials: string): this {
    this.data.initials = initials;
    return this;
  }

  /**
   * Set collectiveName
   * Used for collective or corporate name as an author
   */
  setCollectiveName(collectiveName: string): this {
    this.data.collectiveName = collectiveName;
    return this;
  }

  /**
   * Set role
   * The role of the contributor (e.g. author, editor, reviewer)
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set correspondingContact
   * Indication of which contributor is the corresponding contributor for the role
   */
  setCorrespondingContact(correspondingContact: boolean): this {
    this.data.correspondingContact = correspondingContact;
    return this;
  }

  /**
   * Set listOrder
   * Used to code order of authors
   */
  setListOrder(listOrder: number): this {
    this.data.listOrder = listOrder;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Author identifier, eg ORCID
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add affiliationInfo
   * Organizational affiliation
   */
  addAffiliationInfo(affiliationInfo: ICitationCitedArtifactContributorshipEntryAffiliationInfo): this {
    return this.addToArray('affiliationInfo', affiliationInfo);
  }

  /**
   * Add address
   * Physical mailing address
   */
  addAddress(address: IAddress): this {
    return this.addToArray('address', address);
  }

  /**
   * Add telecom
   * Email or telephone contact methods for the author or contributor
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
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
