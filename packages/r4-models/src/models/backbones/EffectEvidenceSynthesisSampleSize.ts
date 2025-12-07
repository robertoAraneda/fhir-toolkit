import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IEffectEvidenceSynthesisSampleSize,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesisSampleSize */
const EFFECT_EVIDENCE_SYNTHESIS_SAMPLE_SIZE_PROPERTIES = [
  'description',
  '_description',
  'numberOfStudies',
  '_numberOfStudies',
  'numberOfParticipants',
  '_numberOfParticipants',
] as const;

/**
 * EffectEvidenceSynthesisSampleSize - What sample size was involved?
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesissamplesize.html
 *
 * @example
 * const effectEvidenceSynthesisSampleSize = new EffectEvidenceSynthesisSampleSize({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesisSampleSize extends BackboneElement implements IEffectEvidenceSynthesisSampleSize {

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

  constructor(data?: Partial<IEffectEvidenceSynthesisSampleSize>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_SAMPLE_SIZE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesisSampleSize from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesisSampleSize): EffectEvidenceSynthesisSampleSize {
    return new EffectEvidenceSynthesisSampleSize(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesisSampleSize with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesisSampleSize>): EffectEvidenceSynthesisSampleSize {
    return new EffectEvidenceSynthesisSampleSize({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesisSampleSize by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesisSampleSize) => Partial<IEffectEvidenceSynthesisSampleSize>): EffectEvidenceSynthesisSampleSize {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesisSampleSize({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesisSampleSize)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesisSampleSize {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_SAMPLE_SIZE_PROPERTIES);
    return result as IEffectEvidenceSynthesisSampleSize;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesisSampleSize
   */
  clone(): EffectEvidenceSynthesisSampleSize {
    return new EffectEvidenceSynthesisSampleSize(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesisSampleSize
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesisSampleSize'];
    return parts.join(', ');
  }
}
