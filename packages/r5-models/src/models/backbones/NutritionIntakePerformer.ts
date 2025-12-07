import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  INutritionIntakePerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionIntakePerformer */
const NUTRITION_INTAKE_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * NutritionIntakePerformer - Who was performed in the intake
 *
 * @see https://hl7.org/fhir/R4/nutritionintakeperformer.html
 *
 * @example
 * const nutritionIntakePerformer = new NutritionIntakePerformer({
 *   // ... properties
 * });
 */
export class NutritionIntakePerformer extends BackboneElement implements INutritionIntakePerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of performer */
  function?: ICodeableConcept;

  /** Who performed the intake */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionIntakePerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_INTAKE_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionIntakePerformer from a JSON object
   */
  static fromJSON(json: INutritionIntakePerformer): NutritionIntakePerformer {
    return new NutritionIntakePerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionIntakePerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionIntakePerformer>): NutritionIntakePerformer {
    return new NutritionIntakePerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionIntakePerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionIntakePerformer) => Partial<INutritionIntakePerformer>): NutritionIntakePerformer {
    const currentData = this.toJSON();
    return new NutritionIntakePerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionIntakePerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionIntakePerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_INTAKE_PERFORMER_PROPERTIES);
    return result as INutritionIntakePerformer;
  }

  /**
   * Create a deep clone of this NutritionIntakePerformer
   */
  clone(): NutritionIntakePerformer {
    return new NutritionIntakePerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionIntakePerformer
   */
  toString(): string {
    const parts: string[] = ['NutritionIntakePerformer'];
    return parts.join(', ');
  }
}
