import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactContributorshipEntryContributionInstance,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifactContributorshipEntryContributionInstance */
const CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_CONTRIBUTION_INSTANCE_PROPERTIES = [
  'type',
  'time',
  '_time',
] as const;

/**
 * CitationCitedArtifactContributorshipEntryContributionInstance - Contributions with accounting for time or number
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactcontributorshipentrycontributioninstance.html
 *
 * @example
 * const citationCitedArtifactContributorshipEntryContributionInstance = new CitationCitedArtifactContributorshipEntryContributionInstance({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactContributorshipEntryContributionInstance extends BackboneElement implements ICitationCitedArtifactContributorshipEntryContributionInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific contribution */
  type: ICodeableConcept;

  /** The time that the contribution was made */
  time?: string;

  /** Extension for time */
  _time?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactContributorshipEntryContributionInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_CONTRIBUTION_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactContributorshipEntryContributionInstance from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactContributorshipEntryContributionInstance): CitationCitedArtifactContributorshipEntryContributionInstance {
    return new CitationCitedArtifactContributorshipEntryContributionInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactContributorshipEntryContributionInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactContributorshipEntryContributionInstance>): CitationCitedArtifactContributorshipEntryContributionInstance {
    return new CitationCitedArtifactContributorshipEntryContributionInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactContributorshipEntryContributionInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactContributorshipEntryContributionInstance) => Partial<ICitationCitedArtifactContributorshipEntryContributionInstance>): CitationCitedArtifactContributorshipEntryContributionInstance {
    const currentData = this.toJSON();
    return new CitationCitedArtifactContributorshipEntryContributionInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactContributorshipEntryContributionInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactContributorshipEntryContributionInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_ENTRY_CONTRIBUTION_INSTANCE_PROPERTIES);
    return result as ICitationCitedArtifactContributorshipEntryContributionInstance;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactContributorshipEntryContributionInstance
   */
  clone(): CitationCitedArtifactContributorshipEntryContributionInstance {
    return new CitationCitedArtifactContributorshipEntryContributionInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactContributorshipEntryContributionInstance
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactContributorshipEntryContributionInstance'];
    return parts.join(', ');
  }
}
