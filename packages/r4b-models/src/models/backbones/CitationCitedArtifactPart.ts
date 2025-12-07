import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactPart,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactPart */
const CITATION_CITED_ARTIFACT_PART_PROPERTIES = [
  'type',
  'value',
  '_value',
  'baseCitation',
] as const;

/**
 * CitationCitedArtifactPart - The component of the article or artifact
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactpart.html
 *
 * @example
 * const citationCitedArtifactPart = new CitationCitedArtifactPart({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactPart extends BackboneElement implements ICitationCitedArtifactPart {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of component */
  type?: ICodeableConcept;

  /** The specification of the component */
  value?: string;

  /** Extension for value */
  _value?: IElement;

  /** The citation for the full article or artifact */
  baseCitation?: IReference<'Citation'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactPart>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_PART_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactPart from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactPart): CitationCitedArtifactPart {
    return new CitationCitedArtifactPart(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactPart with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactPart>): CitationCitedArtifactPart {
    return new CitationCitedArtifactPart({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactPart by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactPart) => Partial<ICitationCitedArtifactPart>): CitationCitedArtifactPart {
    const currentData = this.toJSON();
    return new CitationCitedArtifactPart({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactPart)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactPart {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_PART_PROPERTIES);
    return result as ICitationCitedArtifactPart;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactPart
   */
  clone(): CitationCitedArtifactPart {
    return new CitationCitedArtifactPart(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactPart
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactPart'];
    return parts.join(', ');
  }
}
