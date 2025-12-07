import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IEvidenceCertainty,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceCertainty */
const EVIDENCE_CERTAINTY_PROPERTIES = [
  'description',
  '_description',
  'note',
  'type',
  'rating',
  'rater',
  '_rater',
  'subcomponent',
] as const;

/**
 * EvidenceCertainty - Certainty or quality of the evidence
 *
 * @see https://hl7.org/fhir/R4/evidencecertainty.html
 *
 * @example
 * const evidenceCertainty = new EvidenceCertainty({
 *   // ... properties
 * });
 */
export class EvidenceCertainty extends BackboneElement implements IEvidenceCertainty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Textual description of certainty */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Footnotes and/or explanatory notes */
  note?: IAnnotation[];

  /** Aspect of certainty being rated */
  type?: ICodeableConcept;

  /** Assessment or judgement of the aspect */
  rating?: ICodeableConcept;

  /** Individual or group who did the rating */
  rater?: string;

  /** Extension for rater */
  _rater?: IElement;

  /** A domain or subdomain of certainty */
  subcomponent?: IEvidenceCertainty[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceCertainty>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_CERTAINTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceCertainty from a JSON object
   */
  static fromJSON(json: IEvidenceCertainty): EvidenceCertainty {
    return new EvidenceCertainty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceCertainty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceCertainty>): EvidenceCertainty {
    return new EvidenceCertainty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceCertainty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceCertainty) => Partial<IEvidenceCertainty>): EvidenceCertainty {
    const currentData = this.toJSON();
    return new EvidenceCertainty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceCertainty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceCertainty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_CERTAINTY_PROPERTIES);
    return result as IEvidenceCertainty;
  }

  /**
   * Create a deep clone of this EvidenceCertainty
   */
  clone(): EvidenceCertainty {
    return new EvidenceCertainty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceCertainty
   */
  toString(): string {
    const parts: string[] = ['EvidenceCertainty'];
    return parts.join(', ');
  }
}
