import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationSummary,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationSummary */
const CITATION_SUMMARY_PROPERTIES = [
  'style',
  'text',
  '_text',
] as const;

/**
 * CitationSummary - A human-readable display of key concepts to represent the citation
 *
 * @see https://hl7.org/fhir/R5/citationsummary.html
 *
 * @example
 * const citationSummary = new CitationSummary({
 *   // ... properties
 * });
 */
export class CitationSummary extends BackboneElement implements ICitationSummary {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Format for display of the citation summary */
  style?: ICodeableConcept;

  /** The human-readable display of the citation summary */
  text: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationSummary>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_SUMMARY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationSummary from a JSON object
   */
  static fromJSON(json: ICitationSummary): CitationSummary {
    return new CitationSummary(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationSummary with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationSummary>): CitationSummary {
    return new CitationSummary({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationSummary by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationSummary) => Partial<ICitationSummary>): CitationSummary {
    const currentData = this.toJSON();
    return new CitationSummary({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationSummary)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationSummary {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_SUMMARY_PROPERTIES);
    return result as ICitationSummary;
  }

  /**
   * Create a deep clone of this CitationSummary
   */
  clone(): CitationSummary {
    return new CitationSummary(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationSummary
   */
  toString(): string {
    const parts: string[] = ['CitationSummary'];
    return parts.join(', ');
  }
}
