import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ExposureStateType,
  ICodeableConcept,
  IEffectEvidenceSynthesisResultsByExposure,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EffectEvidenceSynthesisResultsByExposure */
const EFFECT_EVIDENCE_SYNTHESIS_RESULTS_BY_EXPOSURE_PROPERTIES = [
  'description',
  '_description',
  'exposureState',
  '_exposureState',
  'variantState',
  'riskEvidenceSynthesis',
] as const;

/**
 * EffectEvidenceSynthesisResultsByExposure - What was the result per exposure?
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesisresultsbyexposure.html
 *
 * @example
 * const effectEvidenceSynthesisResultsByExposure = new EffectEvidenceSynthesisResultsByExposure({
 *   // ... properties
 * });
 */
export class EffectEvidenceSynthesisResultsByExposure extends BackboneElement implements IEffectEvidenceSynthesisResultsByExposure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of results by exposure */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** exposure | exposure-alternative */
  exposureState?: ExposureStateType;

  /** Extension for exposureState */
  _exposureState?: IElement;

  /** Variant exposure states */
  variantState?: ICodeableConcept;

  /** Risk evidence synthesis */
  riskEvidenceSynthesis: IReference<'RiskEvidenceSynthesis'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEffectEvidenceSynthesisResultsByExposure>) {
    super(data);
    if (data) {
      this.assignProps(data, EFFECT_EVIDENCE_SYNTHESIS_RESULTS_BY_EXPOSURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EffectEvidenceSynthesisResultsByExposure from a JSON object
   */
  static fromJSON(json: IEffectEvidenceSynthesisResultsByExposure): EffectEvidenceSynthesisResultsByExposure {
    return new EffectEvidenceSynthesisResultsByExposure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EffectEvidenceSynthesisResultsByExposure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEffectEvidenceSynthesisResultsByExposure>): EffectEvidenceSynthesisResultsByExposure {
    return new EffectEvidenceSynthesisResultsByExposure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EffectEvidenceSynthesisResultsByExposure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEffectEvidenceSynthesisResultsByExposure) => Partial<IEffectEvidenceSynthesisResultsByExposure>): EffectEvidenceSynthesisResultsByExposure {
    const currentData = this.toJSON();
    return new EffectEvidenceSynthesisResultsByExposure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEffectEvidenceSynthesisResultsByExposure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEffectEvidenceSynthesisResultsByExposure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EFFECT_EVIDENCE_SYNTHESIS_RESULTS_BY_EXPOSURE_PROPERTIES);
    return result as IEffectEvidenceSynthesisResultsByExposure;
  }

  /**
   * Create a deep clone of this EffectEvidenceSynthesisResultsByExposure
   */
  clone(): EffectEvidenceSynthesisResultsByExposure {
    return new EffectEvidenceSynthesisResultsByExposure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EffectEvidenceSynthesisResultsByExposure
   */
  toString(): string {
    const parts: string[] = ['EffectEvidenceSynthesisResultsByExposure'];
    return parts.join(', ');
  }
}
