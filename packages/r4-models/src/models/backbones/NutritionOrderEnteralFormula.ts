import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  INutritionOrderEnteralFormula,
  INutritionOrderEnteralFormulaAdministration,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/** Properties specific to NutritionOrderEnteralFormula */
const NUTRITION_ORDER_ENTERAL_FORMULA_PROPERTIES = [
  'baseFormulaType',
  'baseFormulaProductName',
  '_baseFormulaProductName',
  'additiveType',
  'additiveProductName',
  '_additiveProductName',
  'caloricDensity',
  'routeofAdministration',
  'administration',
  'maxVolumeToDeliver',
  'administrationInstruction',
  '_administrationInstruction',
] as const;

/**
 * NutritionOrderEnteralFormula - Enteral formula components
 *
 * @see https://hl7.org/fhir/R4/nutritionorderenteralformula.html
 *
 * @example
 * const nutritionOrderEnteralFormula = new NutritionOrderEnteralFormula({
 *   // ... properties
 * });
 */
export class NutritionOrderEnteralFormula extends BackboneElement implements INutritionOrderEnteralFormula {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of enteral or infant formula */
  baseFormulaType?: ICodeableConcept;

  /** Product or brand name of the enteral or infant formula */
  baseFormulaProductName?: string;

  /** Extension for baseFormulaProductName */
  _baseFormulaProductName?: IElement;

  /** Type of modular component to add to the feeding */
  additiveType?: ICodeableConcept;

  /** Product or brand name of the modular additive */
  additiveProductName?: string;

  /** Extension for additiveProductName */
  _additiveProductName?: IElement;

  /** Amount of energy per specified volume that is required */
  caloricDensity?: IQuantity;

  /** How the formula should enter the patient's gastrointestinal tract */
  routeofAdministration?: ICodeableConcept;

  /** Formula feeding instruction as structured data */
  administration?: INutritionOrderEnteralFormulaAdministration[];

  /** Upper limit on formula volume per unit of time */
  maxVolumeToDeliver?: IQuantity;

  /** Formula feeding instructions expressed as text */
  administrationInstruction?: string;

  /** Extension for administrationInstruction */
  _administrationInstruction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrderEnteralFormula>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_ENTERAL_FORMULA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrderEnteralFormula from a JSON object
   */
  static fromJSON(json: INutritionOrderEnteralFormula): NutritionOrderEnteralFormula {
    return new NutritionOrderEnteralFormula(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrderEnteralFormula with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrderEnteralFormula>): NutritionOrderEnteralFormula {
    return new NutritionOrderEnteralFormula({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrderEnteralFormula by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrderEnteralFormula) => Partial<INutritionOrderEnteralFormula>): NutritionOrderEnteralFormula {
    const currentData = this.toJSON();
    return new NutritionOrderEnteralFormula({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrderEnteralFormula)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrderEnteralFormula {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_ENTERAL_FORMULA_PROPERTIES);
    return result as INutritionOrderEnteralFormula;
  }

  /**
   * Create a deep clone of this NutritionOrderEnteralFormula
   */
  clone(): NutritionOrderEnteralFormula {
    return new NutritionOrderEnteralFormula(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrderEnteralFormula
   */
  toString(): string {
    const parts: string[] = ['NutritionOrderEnteralFormula'];
    return parts.join(', ');
  }
}
