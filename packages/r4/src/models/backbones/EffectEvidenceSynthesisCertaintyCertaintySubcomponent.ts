import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesisCertaintyCertaintySubcomponent */
const EFFECT_EVIDENCE_SYNTHESIS_CERTAINTY_CERTAINTY_SUBCOMPONENT_PROPERTIES = [
  'type',
  'rating',
  'note',
] as const;

/**
 * EffectEvidenceSynthesisCertaintyCertaintySubcomponent - A component that contributes to the overall certainty
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiscertaintycertaintysubcomponent.html
 *
 * @example
 * const effectEvidenceSynthesisCertaintyCertaintySubcomponent = new EffectEvidenceSynthesisCertaintyCertaintySubcomponent({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement implements IEffectEvidenceSynthesisCertaintyCertaintySubcomponent {

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

  constructor(data?: Partial<IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_CERTAINTY_CERTAINTY_SUBCOMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesisCertaintyCertaintySubcomponent from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new EffectEvidenceSynthesisCertaintyCertaintySubcomponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesisCertaintyCertaintySubcomponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new EffectEvidenceSynthesisCertaintyCertaintySubcomponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesisCertaintyCertaintySubcomponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent) => Partial<IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesisCertaintyCertaintySubcomponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesisCertaintyCertaintySubcomponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_CERTAINTY_CERTAINTY_SUBCOMPONENT_PROPERTIES);
    return result as IEffectEvidenceSynthesisCertaintyCertaintySubcomponent;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesisCertaintyCertaintySubcomponent
   */
  clone(): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new EffectEvidenceSynthesisCertaintyCertaintySubcomponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesisCertaintyCertaintySubcomponent
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesisCertaintyCertaintySubcomponent'];
    return parts.join(', ');
  }
}
