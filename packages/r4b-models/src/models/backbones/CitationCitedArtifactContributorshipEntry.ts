import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  ICitationCitedArtifactContributorshipEntry,
  ICitationCitedArtifactContributorshipEntryAffiliationInfo,
  ICitationCitedArtifactContributorshipEntryContributionInstance,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactContributorshipEntry */
const CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_PROPERTIES = [
  'name',
  'initials',
  '_initials',
  'collectiveName',
  '_collectiveName',
  'identifier',
  'affiliationInfo',
  'address',
  'telecom',
  'contributionType',
  'role',
  'contributionInstance',
  'correspondingContact',
  '_correspondingContact',
  'listOrder',
  '_listOrder',
] as const;

/**
 * CitationCitedArtifactContributorshipEntry - An individual entity named in the list
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactcontributorshipentry.html
 *
 * @example
 * const citationCitedArtifactContributorshipEntry = new CitationCitedArtifactContributorshipEntry({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactContributorshipEntry extends BackboneElement implements ICitationCitedArtifactContributorshipEntry {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A name associated with the person */
  name?: IHumanName;

  /** Initials for forename */
  initials?: string;

  /** Extension for initials */
  _initials?: IElement;

  /** Used for collective or corporate name as an author */
  collectiveName?: string;

  /** Extension for collectiveName */
  _collectiveName?: IElement;

  /** Author identifier, eg ORCID */
  identifier?: IIdentifier[];

  /** Organizational affiliation */
  affiliationInfo?: ICitationCitedArtifactContributorshipEntryAffiliationInfo[];

  /** Physical mailing address */
  address?: IAddress[];

  /** Email or telephone contact methods for the author or contributor */
  telecom?: IContactPoint[];

  /** The specific contribution */
  contributionType?: ICodeableConcept[];

  /** The role of the contributor (e.g. author, editor, reviewer) */
  role?: ICodeableConcept;

  /** Contributions with accounting for time or number */
  contributionInstance?: ICitationCitedArtifactContributorshipEntryContributionInstance[];

  /** Indication of which contributor is the corresponding contributor for the role */
  correspondingContact?: boolean;

  /** Extension for correspondingContact */
  _correspondingContact?: IElement;

  /** Used to code order of authors */
  listOrder?: number;

  /** Extension for listOrder */
  _listOrder?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactContributorshipEntry>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactContributorshipEntry from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactContributorshipEntry): CitationCitedArtifactContributorshipEntry {
    return new CitationCitedArtifactContributorshipEntry(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactContributorshipEntry with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactContributorshipEntry>): CitationCitedArtifactContributorshipEntry {
    return new CitationCitedArtifactContributorshipEntry({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactContributorshipEntry by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactContributorshipEntry) => Partial<ICitationCitedArtifactContributorshipEntry>): CitationCitedArtifactContributorshipEntry {
    const currentData = this.toJSON();
    return new CitationCitedArtifactContributorshipEntry({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactContributorshipEntry)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactContributorshipEntry {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_PROPERTIES);
    return result as ICitationCitedArtifactContributorshipEntry;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactContributorshipEntry
   */
  clone(): CitationCitedArtifactContributorshipEntry {
    return new CitationCitedArtifactContributorshipEntry(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactContributorshipEntry
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactContributorshipEntry'];
    return parts.join(', ');
  }
}
