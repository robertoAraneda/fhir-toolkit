import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactClassificationWhoClassified,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactClassificationWhoClassified */
const CITATION_CITED_ARTIFACT_CLASSIFICATION_WHO_CLASSIFIED_PROPERTIES = [
  'person',
  'organization',
  'publisher',
  'classifierCopyright',
  '_classifierCopyright',
  'freeToShare',
  '_freeToShare',
] as const;

/**
 * CitationCitedArtifactClassificationWhoClassified - Provenance and copyright of classification
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactclassificationwhoclassified.html
 *
 * @example
 * const citationCitedArtifactClassificationWhoClassified = new CitationCitedArtifactClassificationWhoClassified({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactClassificationWhoClassified extends BackboneElement implements ICitationCitedArtifactClassificationWhoClassified {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Person who created the classification */
  person?: IReference<'Person' | 'Practitioner'>;

  /** Organization who created the classification */
  organization?: IReference<'Organization'>;

  /** The publisher of the classification, not the publisher of the article or artifact being cited */
  publisher?: IReference<'Organization'>;

  /** Rights management statement for the classification */
  classifierCopyright?: string;

  /** Extension for classifierCopyright */
  _classifierCopyright?: IElement;

  /** Acceptable to re-use the classification */
  freeToShare?: boolean;

  /** Extension for freeToShare */
  _freeToShare?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationCitedArtifactClassificationWhoClassified>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_CLASSIFICATION_WHO_CLASSIFIED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactClassificationWhoClassified from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactClassificationWhoClassified): CitationCitedArtifactClassificationWhoClassified {
    return new CitationCitedArtifactClassificationWhoClassified(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactClassificationWhoClassified with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactClassificationWhoClassified>): CitationCitedArtifactClassificationWhoClassified {
    return new CitationCitedArtifactClassificationWhoClassified({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactClassificationWhoClassified by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactClassificationWhoClassified) => Partial<ICitationCitedArtifactClassificationWhoClassified>): CitationCitedArtifactClassificationWhoClassified {
    const currentData = this.toJSON();
    return new CitationCitedArtifactClassificationWhoClassified({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactClassificationWhoClassified)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactClassificationWhoClassified {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_CLASSIFICATION_WHO_CLASSIFIED_PROPERTIES);
    return result as ICitationCitedArtifactClassificationWhoClassified;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactClassificationWhoClassified
   */
  clone(): CitationCitedArtifactClassificationWhoClassified {
    return new CitationCitedArtifactClassificationWhoClassified(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactClassificationWhoClassified
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactClassificationWhoClassified'];
    return parts.join(', ');
  }
}
