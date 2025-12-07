import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesisEffectEstimatePrecisionEstimate */
const EFFECT_EVIDENCE_SYNTHESIS_EFFECT_ESTIMATE_PRECISION_ESTIMATE_PROPERTIES = [
  'type',
  'level',
  '_level',
  'from',
  '_from',
  'to',
  '_to',
] as const;

/**
 * EffectEvidenceSynthesisEffectEstimatePrecisionEstimate - How precise the estimate is
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiseffectestimateprecisionestimate.html
 *
 * @example
 * const effectEvidenceSynthesisEffectEstimatePrecisionEstimate = new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends BackboneElement implements IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of precision estimate */
  type?: ICodeableConcept;

  /** Level of confidence interval */
  level?: number;

  /** Extension for level */
  _level?: IElement;

  /** Lower bound */
  from?: number;

  /** Extension for from */
  _from?: IElement;

  /** Upper bound */
  to?: number;

  /** Extension for to */
  _to?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_EFFECT_ESTIMATE_PRECISION_ESTIMATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesisEffectEstimatePrecisionEstimate from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    return new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    return new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate) => Partial<IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_EFFECT_ESTIMATE_PRECISION_ESTIMATE_PROPERTIES);
    return result as IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesisEffectEstimatePrecisionEstimate
   */
  clone(): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    return new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesisEffectEstimatePrecisionEstimate
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesisEffectEstimatePrecisionEstimate'];
    return parts.join(', ');
  }
}
