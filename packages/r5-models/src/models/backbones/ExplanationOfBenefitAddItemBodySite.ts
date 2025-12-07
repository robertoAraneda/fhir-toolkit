import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IExplanationOfBenefitAddItemBodySite,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitAddItemBodySite */
const EXPLANATION_OF_BENEFIT_ADD_ITEM_BODY_SITE_PROPERTIES = [
  'site',
  'subSite',
] as const;

/**
 * ExplanationOfBenefitAddItemBodySite - Anatomical location
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitadditembodysite.html
 *
 * @example
 * const explanationOfBenefitAddItemBodySite = new ExplanationOfBenefitAddItemBodySite({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitAddItemBodySite extends BackboneElement implements IExplanationOfBenefitAddItemBodySite {

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

  constructor(data?: Partial<IExplanationOfBenefitAddItemBodySite>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ADD_ITEM_BODY_SITE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitAddItemBodySite from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitAddItemBodySite): ExplanationOfBenefitAddItemBodySite {
    return new ExplanationOfBenefitAddItemBodySite(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitAddItemBodySite with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitAddItemBodySite>): ExplanationOfBenefitAddItemBodySite {
    return new ExplanationOfBenefitAddItemBodySite({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitAddItemBodySite by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitAddItemBodySite) => Partial<IExplanationOfBenefitAddItemBodySite>): ExplanationOfBenefitAddItemBodySite {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitAddItemBodySite({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitAddItemBodySite)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitAddItemBodySite {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ADD_ITEM_BODY_SITE_PROPERTIES);
    return result as IExplanationOfBenefitAddItemBodySite;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitAddItemBodySite
   */
  clone(): ExplanationOfBenefitAddItemBodySite {
    return new ExplanationOfBenefitAddItemBodySite(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitAddItemBodySite
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitAddItemBodySite'];
    return parts.join(', ');
  }
}
