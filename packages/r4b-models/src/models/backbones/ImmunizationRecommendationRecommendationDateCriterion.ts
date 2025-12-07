import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IImmunizationRecommendationRecommendationDateCriterion,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImmunizationRecommendationRecommendationDateCriterion */
const IMMUNIZATION_RECOMMENDATION_RECOMMENDATION_DATE_CRITERION_PROPERTIES = [
  'code',
  'value',
  '_value',
] as const;

/**
 * ImmunizationRecommendationRecommendationDateCriterion - Dates governing proposed immunization
 *
 * @see https://hl7.org/fhir/R4/immunizationrecommendationrecommendationdatecriterion.html
 *
 * @example
 * const immunizationRecommendationRecommendationDateCriterion = new ImmunizationRecommendationRecommendationDateCriterion({
 *   // ... properties
 * });
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement implements IImmunizationRecommendationRecommendationDateCriterion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of date */
  code: ICodeableConcept;

  /** Recommended date */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationRecommendationRecommendationDateCriterion>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_RECOMMENDATION_RECOMMENDATION_DATE_CRITERION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationRecommendationRecommendationDateCriterion from a JSON object
   */
  static fromJSON(json: IImmunizationRecommendationRecommendationDateCriterion): ImmunizationRecommendationRecommendationDateCriterion {
    return new ImmunizationRecommendationRecommendationDateCriterion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationRecommendationRecommendationDateCriterion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationRecommendationRecommendationDateCriterion>): ImmunizationRecommendationRecommendationDateCriterion {
    return new ImmunizationRecommendationRecommendationDateCriterion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationRecommendationRecommendationDateCriterion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationRecommendationRecommendationDateCriterion) => Partial<IImmunizationRecommendationRecommendationDateCriterion>): ImmunizationRecommendationRecommendationDateCriterion {
    const currentData = this.toJSON();
    return new ImmunizationRecommendationRecommendationDateCriterion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationRecommendationRecommendationDateCriterion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationRecommendationRecommendationDateCriterion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_RECOMMENDATION_RECOMMENDATION_DATE_CRITERION_PROPERTIES);
    return result as IImmunizationRecommendationRecommendationDateCriterion;
  }

  /**
   * Create a deep clone of this ImmunizationRecommendationRecommendationDateCriterion
   */
  clone(): ImmunizationRecommendationRecommendationDateCriterion {
    return new ImmunizationRecommendationRecommendationDateCriterion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationRecommendationRecommendationDateCriterion
   */
  toString(): string {
    const parts: string[] = ['ImmunizationRecommendationRecommendationDateCriterion'];
    return parts.join(', ');
  }
}
