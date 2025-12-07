import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IRiskEvidenceSynthesisCertainty,
  IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RiskEvidenceSynthesisCertainty */
const RISK_EVIDENCE_SYNTHESIS_CERTAINTY_PROPERTIES = [
  'rating',
  'note',
  'certaintySubcomponent',
] as const;

/**
 * RiskEvidenceSynthesisCertainty - How certain is the risk
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesiscertainty.html
 *
 * @example
 * const riskEvidenceSynthesisCertainty = new RiskEvidenceSynthesisCertainty({
 *   // ... properties
 * });
 */
export class RiskEvidenceSynthesisCertainty extends BackboneElement implements IRiskEvidenceSynthesisCertainty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Certainty rating */
  rating?: ICodeableConcept[];

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** A component that contributes to the overall certainty */
  certaintySubcomponent?: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskEvidenceSynthesisCertainty>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_EVIDENCE_SYNTHESIS_CERTAINTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskEvidenceSynthesisCertainty from a JSON object
   */
  static fromJSON(json: IRiskEvidenceSynthesisCertainty): RiskEvidenceSynthesisCertainty {
    return new RiskEvidenceSynthesisCertainty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskEvidenceSynthesisCertainty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskEvidenceSynthesisCertainty>): RiskEvidenceSynthesisCertainty {
    return new RiskEvidenceSynthesisCertainty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskEvidenceSynthesisCertainty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskEvidenceSynthesisCertainty) => Partial<IRiskEvidenceSynthesisCertainty>): RiskEvidenceSynthesisCertainty {
    const currentData = this.toJSON();
    return new RiskEvidenceSynthesisCertainty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskEvidenceSynthesisCertainty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskEvidenceSynthesisCertainty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RISK_EVIDENCE_SYNTHESIS_CERTAINTY_PROPERTIES);
    return result as IRiskEvidenceSynthesisCertainty;
  }

  /**
   * Create a deep clone of this RiskEvidenceSynthesisCertainty
   */
  clone(): RiskEvidenceSynthesisCertainty {
    return new RiskEvidenceSynthesisCertainty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskEvidenceSynthesisCertainty
   */
  toString(): string {
    const parts: string[] = ['RiskEvidenceSynthesisCertainty'];
    return parts.join(', ');
  }
}
