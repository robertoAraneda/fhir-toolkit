import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationClassification,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationClassification */
const CITATION_CLASSIFICATION_PROPERTIES = [
  'type',
  'classifier',
] as const;

/**
 * CitationClassification - The assignment to an organizing scheme
 *
 * @see https://hl7.org/fhir/R4/citationclassification.html
 *
 * @example
 * const citationClassification = new CitationClassification({
 *   // ... properties
 * });
 */
export class CitationClassification extends BackboneElement implements ICitationClassification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of classifier (e.g. publication type, keyword) */
  type?: ICodeableConcept;

  /** The specific classification value */
  classifier?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationClassification>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CLASSIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationClassification from a JSON object
   */
  static fromJSON(json: ICitationClassification): CitationClassification {
    return new CitationClassification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationClassification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationClassification>): CitationClassification {
    return new CitationClassification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationClassification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationClassification) => Partial<ICitationClassification>): CitationClassification {
    const currentData = this.toJSON();
    return new CitationClassification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationClassification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationClassification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CLASSIFICATION_PROPERTIES);
    return result as ICitationClassification;
  }

  /**
   * Create a deep clone of this CitationClassification
   */
  clone(): CitationClassification {
    return new CitationClassification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationClassification
   */
  toString(): string {
    const parts: string[] = ['CitationClassification'];
    return parts.join(', ');
  }
}
