import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactContributorshipEntry,
  ICitationCitedArtifactContributorshipEntryContributionInstance,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifactContributorshipEntry */
const CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_PROPERTIES = [
  'contributor',
  'forenameInitials',
  '_forenameInitials',
  'affiliation',
  'contributionType',
  'role',
  'contributionInstance',
  'correspondingContact',
  '_correspondingContact',
  'rankingOrder',
  '_rankingOrder',
] as const;

/**
 * CitationCitedArtifactContributorshipEntry - An individual entity named as a contributor
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

  /** The identity of the individual contributor */
  contributor: IReference<'Practitioner' | 'Organization'>;

  /** For citation styles that use initials */
  forenameInitials?: string;

  /** Extension for forenameInitials */
  _forenameInitials?: IElement;

  /** Organizational affiliation */
  affiliation?: IReference<'Organization' | 'PractitionerRole'>[];

  /** The specific contribution */
  contributionType?: ICodeableConcept[];

  /** The role of the contributor (e.g. author, editor, reviewer, funder) */
  role?: ICodeableConcept;

  /** Contributions with accounting for time or number */
  contributionInstance?: ICitationCitedArtifactContributorshipEntryContributionInstance[];

  /** Whether the contributor is the corresponding contributor for the role */
  correspondingContact?: boolean;

  /** Extension for correspondingContact */
  _correspondingContact?: IElement;

  /** Ranked order of contribution */
  rankingOrder?: number;

  /** Extension for rankingOrder */
  _rankingOrder?: IElement;

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
