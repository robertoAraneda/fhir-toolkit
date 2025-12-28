import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactContributorshipSummary,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationCitedArtifactContributorshipSummary */
const CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_SUMMARY_PROPERTIES = [
  'type',
  'style',
  'source',
  'value',
  '_value',
] as const;

/**
 * CitationCitedArtifactContributorshipSummary - Used to record a display of the author/contributor list without separate data element for each list member
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactcontributorshipsummary.html
 *
 * @example
 * const citationCitedArtifactContributorshipSummary = new CitationCitedArtifactContributorshipSummary({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactContributorshipSummary extends BackboneElement implements ICitationCitedArtifactContributorshipSummary {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Such as author list, contributorship statement, funding statement, acknowledgements statement, or conflicts of interest statement */
  type?: ICodeableConcept;

  /** The format for the display string */
  style?: ICodeableConcept;

  /** Used to code the producer or rule for creating the display string */
  source?: ICodeableConcept;

  /** The display string for the author list, contributor list, or contributorship statement */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactContributorshipSummary>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_SUMMARY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactContributorshipSummary from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactContributorshipSummary): CitationCitedArtifactContributorshipSummary {
    return new CitationCitedArtifactContributorshipSummary(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactContributorshipSummary with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactContributorshipSummary>): CitationCitedArtifactContributorshipSummary {
    return new CitationCitedArtifactContributorshipSummary({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactContributorshipSummary by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactContributorshipSummary) => Partial<ICitationCitedArtifactContributorshipSummary>): CitationCitedArtifactContributorshipSummary {
    const currentData = this.toJSON();
    return new CitationCitedArtifactContributorshipSummary({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactContributorshipSummary)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactContributorshipSummary {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CONTRIBUTORSHIP_SUMMARY_PROPERTIES);
    return result as ICitationCitedArtifactContributorshipSummary;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactContributorshipSummary
   */
  clone(): CitationCitedArtifactContributorshipSummary {
    return new CitationCitedArtifactContributorshipSummary(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactContributorshipSummary
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactContributorshipSummary'];
    return parts.join(', ');
  }
}
