import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEffectEvidenceSynthesisCertainty,
  IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesisCertainty */
const EFFECT_EVIDENCE_SYNTHESIS_CERTAINTY_PROPERTIES = [
  'rating',
  'note',
  'certaintySubcomponent',
] as const;

/**
 * EffectEvidenceSynthesisCertainty - How certain is the effect
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiscertainty.html
 *
 * @example
 * const effectEvidenceSynthesisCertainty = new EffectEvidenceSynthesisCertainty({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesisCertainty extends BackboneElement implements IEffectEvidenceSynthesisCertainty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Certainty rating */
  rating?: ICodeableConcept[];

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** A component that contributes to the overall certainty */
  certaintySubcomponent?: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEffectEvidenceSynthesisCertainty>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_CERTAINTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesisCertainty from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesisCertainty): EffectEvidenceSynthesisCertainty {
    return new EffectEvidenceSynthesisCertainty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesisCertainty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesisCertainty>): EffectEvidenceSynthesisCertainty {
    return new EffectEvidenceSynthesisCertainty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesisCertainty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesisCertainty) => Partial<IEffectEvidenceSynthesisCertainty>): EffectEvidenceSynthesisCertainty {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesisCertainty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesisCertainty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesisCertainty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_CERTAINTY_PROPERTIES);
    return result as IEffectEvidenceSynthesisCertainty;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesisCertainty
   */
  clone(): EffectEvidenceSynthesisCertainty {
    return new EffectEvidenceSynthesisCertainty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesisCertainty
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesisCertainty'];
    return parts.join(', ');
  }
}
