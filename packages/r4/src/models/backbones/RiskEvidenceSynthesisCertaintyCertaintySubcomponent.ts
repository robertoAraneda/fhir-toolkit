import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RiskEvidenceSynthesisCertaintyCertaintySubcomponent */
const RISK_EVIDENCE_SYNTHESIS_CERTAINTY_CERTAINTY_SUBCOMPONENT_PROPERTIES = [
  'type',
  'rating',
  'note',
] as const;

/**
 * RiskEvidenceSynthesisCertaintyCertaintySubcomponent - A component that contributes to the overall certainty
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesiscertaintycertaintysubcomponent.html
 *
 * @example
 * const riskEvidenceSynthesisCertaintyCertaintySubcomponent = new RiskEvidenceSynthesisCertaintyCertaintySubcomponent({
 *   // ... properties
 * });
 */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement implements IRiskEvidenceSynthesisCertaintyCertaintySubcomponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of subcomponent of certainty rating */
  type?: ICodeableConcept;

  /** Subcomponent certainty rating */
  rating?: ICodeableConcept[];

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskEvidenceSynthesisCertaintyCertaintySubcomponent>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_EVIDENCE_SYNTHESIS_CERTAINTY_CERTAINTY_SUBCOMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskEvidenceSynthesisCertaintyCertaintySubcomponent from a JSON object
   */
  static fromJSON(json: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new RiskEvidenceSynthesisCertaintyCertaintySubcomponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskEvidenceSynthesisCertaintyCertaintySubcomponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskEvidenceSynthesisCertaintyCertaintySubcomponent>): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new RiskEvidenceSynthesisCertaintyCertaintySubcomponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskEvidenceSynthesisCertaintyCertaintySubcomponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent) => Partial<IRiskEvidenceSynthesisCertaintyCertaintySubcomponent>): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    const currentData = this.toJSON();
    return new RiskEvidenceSynthesisCertaintyCertaintySubcomponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskEvidenceSynthesisCertaintyCertaintySubcomponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RISK_EVIDENCE_SYNTHESIS_CERTAINTY_CERTAINTY_SUBCOMPONENT_PROPERTIES);
    return result as IRiskEvidenceSynthesisCertaintyCertaintySubcomponent;
  }

  /**
   * Create a deep clone of this RiskEvidenceSynthesisCertaintyCertaintySubcomponent
   */
  clone(): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new RiskEvidenceSynthesisCertaintyCertaintySubcomponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskEvidenceSynthesisCertaintyCertaintySubcomponent
   */
  toString(): string {
    const parts: string[] = ['RiskEvidenceSynthesisCertaintyCertaintySubcomponent'];
    return parts.join(', ');
  }
}
