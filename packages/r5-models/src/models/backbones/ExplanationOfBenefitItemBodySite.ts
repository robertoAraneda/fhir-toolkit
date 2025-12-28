import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IExplanationOfBenefitItemBodySite,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitItemBodySite */
const EXPLANATION_OF_BENEFIT_ITEM_BODY_SITE_PROPERTIES = [
  'site',
  'subSite',
] as const;

/**
 * ExplanationOfBenefitItemBodySite - Anatomical location
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefititembodysite.html
 *
 * @example
 * const explanationOfBenefitItemBodySite = new ExplanationOfBenefitItemBodySite({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitItemBodySite extends BackboneElement implements IExplanationOfBenefitItemBodySite {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location */
  site: ICodeableReference[];

  /** Sub-location */
  subSite?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitItemBodySite>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ITEM_BODY_SITE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitItemBodySite from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitItemBodySite): ExplanationOfBenefitItemBodySite {
    return new ExplanationOfBenefitItemBodySite(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitItemBodySite with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitItemBodySite>): ExplanationOfBenefitItemBodySite {
    return new ExplanationOfBenefitItemBodySite({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitItemBodySite by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitItemBodySite) => Partial<IExplanationOfBenefitItemBodySite>): ExplanationOfBenefitItemBodySite {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitItemBodySite({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitItemBodySite)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitItemBodySite {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ITEM_BODY_SITE_PROPERTIES);
    return result as IExplanationOfBenefitItemBodySite;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitItemBodySite
   */
  clone(): ExplanationOfBenefitItemBodySite {
    return new ExplanationOfBenefitItemBodySite(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitItemBodySite
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitItemBodySite'];
    return parts.join(', ');
  }
}
