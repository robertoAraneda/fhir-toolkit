import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactContributorshipEntryAffiliationInfo,
  IElement,
  IIdentifier,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactContributorshipEntryAffiliationInfo */
const CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_AFFILIATION_INFO_PROPERTIES = [
  'affiliation',
  '_affiliation',
  'role',
  '_role',
  'identifier',
] as const;

/**
 * CitationCitedArtifactContributorshipEntryAffiliationInfo - Organizational affiliation
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactcontributorshipentryaffiliationinfo.html
 *
 * @example
 * const citationCitedArtifactContributorshipEntryAffiliationInfo = new CitationCitedArtifactContributorshipEntryAffiliationInfo({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactContributorshipEntryAffiliationInfo extends BackboneElement implements ICitationCitedArtifactContributorshipEntryAffiliationInfo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Display for the organization */
  affiliation?: string;

  /** Extension for affiliation */
  _affiliation?: IElement;

  /** Role within the organization, such as professional title */
  role?: string;

  /** Extension for role */
  _role?: IElement;

  /** Identifier for the organization */
  identifier?: IIdentifier[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactContributorshipEntryAffiliationInfo>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_AFFILIATION_INFO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactContributorshipEntryAffiliationInfo from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactContributorshipEntryAffiliationInfo): CitationCitedArtifactContributorshipEntryAffiliationInfo {
    return new CitationCitedArtifactContributorshipEntryAffiliationInfo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactContributorshipEntryAffiliationInfo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactContributorshipEntryAffiliationInfo>): CitationCitedArtifactContributorshipEntryAffiliationInfo {
    return new CitationCitedArtifactContributorshipEntryAffiliationInfo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactContributorshipEntryAffiliationInfo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactContributorshipEntryAffiliationInfo) => Partial<ICitationCitedArtifactContributorshipEntryAffiliationInfo>): CitationCitedArtifactContributorshipEntryAffiliationInfo {
    const currentData = this.toJSON();
    return new CitationCitedArtifactContributorshipEntryAffiliationInfo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactContributorshipEntryAffiliationInfo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactContributorshipEntryAffiliationInfo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_AFFILIATION_INFO_PROPERTIES);
    return result as ICitationCitedArtifactContributorshipEntryAffiliationInfo;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactContributorshipEntryAffiliationInfo
   */
  clone(): CitationCitedArtifactContributorshipEntryAffiliationInfo {
    return new CitationCitedArtifactContributorshipEntryAffiliationInfo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactContributorshipEntryAffiliationInfo
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactContributorshipEntryAffiliationInfo'];
    return parts.join(', ');
  }
}
