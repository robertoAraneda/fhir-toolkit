import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEffectEvidenceSynthesisEffectEstimate,
  IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesisEffectEstimate */
const EFFECT_EVIDENCE_SYNTHESIS_EFFECT_ESTIMATE_PROPERTIES = [
  'description',
  '_description',
  'type',
  'variantState',
  'value',
  '_value',
  'unitOfMeasure',
  'precisionEstimate',
] as const;

/**
 * EffectEvidenceSynthesisEffectEstimate - What was the estimated effect
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiseffectestimate.html
 *
 * @example
 * const effectEvidenceSynthesisEffectEstimate = new EffectEvidenceSynthesisEffectEstimate({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesisEffectEstimate extends BackboneElement implements IEffectEvidenceSynthesisEffectEstimate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of effect estimate */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Type of efffect estimate */
  type?: ICodeableConcept;

  /** Variant exposure states */
  variantState?: ICodeableConcept;

  /** Point estimate */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  /** What unit is the outcome described in? */
  unitOfMeasure?: ICodeableConcept;

  /** How precise the estimate is */
  precisionEstimate?: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEffectEvidenceSynthesisEffectEstimate>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_EFFECT_ESTIMATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesisEffectEstimate from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesisEffectEstimate): EffectEvidenceSynthesisEffectEstimate {
    return new EffectEvidenceSynthesisEffectEstimate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesisEffectEstimate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesisEffectEstimate>): EffectEvidenceSynthesisEffectEstimate {
    return new EffectEvidenceSynthesisEffectEstimate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesisEffectEstimate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesisEffectEstimate) => Partial<IEffectEvidenceSynthesisEffectEstimate>): EffectEvidenceSynthesisEffectEstimate {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesisEffectEstimate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesisEffectEstimate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesisEffectEstimate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_EFFECT_ESTIMATE_PROPERTIES);
    return result as IEffectEvidenceSynthesisEffectEstimate;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesisEffectEstimate
   */
  clone(): EffectEvidenceSynthesisEffectEstimate {
    return new EffectEvidenceSynthesisEffectEstimate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesisEffectEstimate
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesisEffectEstimate'];
    return parts.join(', ');
  }
}
