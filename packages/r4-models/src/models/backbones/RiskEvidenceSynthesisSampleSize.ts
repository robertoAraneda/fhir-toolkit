import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IRiskEvidenceSynthesisSampleSize,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RiskEvidenceSynthesisSampleSize */
const RISK_EVIDENCE_SYNTHESIS_SAMPLE_SIZE_PROPERTIES = [
  'description',
  '_description',
  'numberOfStudies',
  '_numberOfStudies',
  'numberOfParticipants',
  '_numberOfParticipants',
] as const;

/**
 * RiskEvidenceSynthesisSampleSize - What sample size was involved?
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesissamplesize.html
 *
 * @example
 * const riskEvidenceSynthesisSampleSize = new RiskEvidenceSynthesisSampleSize({
 *   // ... properties
 * });
 */
export class RiskEvidenceSynthesisSampleSize extends BackboneElement implements IRiskEvidenceSynthesisSampleSize {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of sample size */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** How many studies? */
  numberOfStudies?: number;

  /** Extension for numberOfStudies */
  _numberOfStudies?: IElement;

  /** How many participants? */
  numberOfParticipants?: number;

  /** Extension for numberOfParticipants */
  _numberOfParticipants?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskEvidenceSynthesisSampleSize>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_EVIDENCE_SYNTHESIS_SAMPLE_SIZE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskEvidenceSynthesisSampleSize from a JSON object
   */
  static fromJSON(json: IRiskEvidenceSynthesisSampleSize): RiskEvidenceSynthesisSampleSize {
    return new RiskEvidenceSynthesisSampleSize(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskEvidenceSynthesisSampleSize with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskEvidenceSynthesisSampleSize>): RiskEvidenceSynthesisSampleSize {
    return new RiskEvidenceSynthesisSampleSize({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskEvidenceSynthesisSampleSize by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskEvidenceSynthesisSampleSize) => Partial<IRiskEvidenceSynthesisSampleSize>): RiskEvidenceSynthesisSampleSize {
    const currentData = this.toJSON();
    return new RiskEvidenceSynthesisSampleSize({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskEvidenceSynthesisSampleSize)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskEvidenceSynthesisSampleSize {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RISK_EVIDENCE_SYNTHESIS_SAMPLE_SIZE_PROPERTIES);
    return result as IRiskEvidenceSynthesisSampleSize;
  }

  /**
   * Create a deep clone of this RiskEvidenceSynthesisSampleSize
   */
  clone(): RiskEvidenceSynthesisSampleSize {
    return new RiskEvidenceSynthesisSampleSize(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskEvidenceSynthesisSampleSize
   */
  toString(): string {
    const parts: string[] = ['RiskEvidenceSynthesisSampleSize'];
    return parts.join(', ');
  }
}
