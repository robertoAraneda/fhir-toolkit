import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IImmunizationRecommendationRecommendation,
  IImmunizationRecommendationRecommendationDateCriterion,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImmunizationRecommendationRecommendation */
const IMMUNIZATION_RECOMMENDATION_RECOMMENDATION_PROPERTIES = [
  'vaccineCode',
  'targetDisease',
  'contraindicatedVaccineCode',
  'forecastStatus',
  'forecastReason',
  'dateCriterion',
  'description',
  '_description',
  'series',
  '_series',
  'doseNumber',
  '_doseNumber',
  'seriesDoses',
  '_seriesDoses',
  'supportingImmunization',
  'supportingPatientInformation',
] as const;

/**
 * ImmunizationRecommendationRecommendation - Vaccine administration recommendations
 *
 * @see https://hl7.org/fhir/R5/immunizationrecommendationrecommendation.html
 *
 * @example
 * const immunizationRecommendationRecommendation = new ImmunizationRecommendationRecommendation({
 *   // ... properties
 * });
 */
export class ImmunizationRecommendationRecommendation extends BackboneElement implements IImmunizationRecommendationRecommendation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Vaccine  or vaccine group recommendation applies to */
  vaccineCode?: ICodeableConcept[];

  /** Disease to be immunized against */
  targetDisease?: ICodeableConcept[];

  /** Vaccine which is contraindicated to fulfill the recommendation */
  contraindicatedVaccineCode?: ICodeableConcept[];

  /** Vaccine recommendation status */
  forecastStatus: ICodeableConcept;

  /** Vaccine administration status reason */
  forecastReason?: ICodeableConcept[];

  /** Dates governing proposed immunization */
  dateCriterion?: IImmunizationRecommendationRecommendationDateCriterion[];

  /** Protocol details */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Name of vaccination series */
  series?: string;

  /** Extension for series */
  _series?: IElement;

  /** Recommended dose number within series */
  doseNumber?: string;

  /** Extension for doseNumber */
  _doseNumber?: IElement;

  /** Recommended number of doses for immunity */
  seriesDoses?: string;

  /** Extension for seriesDoses */
  _seriesDoses?: IElement;

  /** Past immunizations supporting recommendation */
  supportingImmunization?: IReference<'Immunization' | 'ImmunizationEvaluation'>[];

  /** Patient observations supporting recommendation */
  supportingPatientInformation?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationRecommendationRecommendation>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_RECOMMENDATION_RECOMMENDATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationRecommendationRecommendation from a JSON object
   */
  static fromJSON(json: IImmunizationRecommendationRecommendation): ImmunizationRecommendationRecommendation {
    return new ImmunizationRecommendationRecommendation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationRecommendationRecommendation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationRecommendationRecommendation>): ImmunizationRecommendationRecommendation {
    return new ImmunizationRecommendationRecommendation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationRecommendationRecommendation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationRecommendationRecommendation) => Partial<IImmunizationRecommendationRecommendation>): ImmunizationRecommendationRecommendation {
    const currentData = this.toJSON();
    return new ImmunizationRecommendationRecommendation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationRecommendationRecommendation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationRecommendationRecommendation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_RECOMMENDATION_RECOMMENDATION_PROPERTIES);
    return result as IImmunizationRecommendationRecommendation;
  }

  /**
   * Create a deep clone of this ImmunizationRecommendationRecommendation
   */
  clone(): ImmunizationRecommendationRecommendation {
    return new ImmunizationRecommendationRecommendation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationRecommendationRecommendation
   */
  toString(): string {
    const parts: string[] = ['ImmunizationRecommendationRecommendation'];
    return parts.join(', ');
  }
}
