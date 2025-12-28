import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIngredientSubstanceStrength,
  IIngredientSubstanceStrengthReferenceStrength,
  IRatio,
  IRatioRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to IngredientSubstanceStrength */
const INGREDIENT_SUBSTANCE_STRENGTH_PROPERTIES = [
  'presentationRatio',
  'presentationRatioRange',
  'textPresentation',
  '_textPresentation',
  'concentrationRatio',
  'concentrationRatioRange',
  'textConcentration',
  '_textConcentration',
  'measurementPoint',
  '_measurementPoint',
  'country',
  'referenceStrength',
] as const;

/**
 * IngredientSubstanceStrength - The quantity of substance, per presentation, or per volume or mass, and type of quantity
 *
 * @see https://hl7.org/fhir/R4B/ingredientsubstancestrength.html
 *
 * @example
 * const ingredientSubstanceStrength = new IngredientSubstanceStrength({
 *   // ... properties
 * });
 */
export class IngredientSubstanceStrength extends BackboneElement implements IIngredientSubstanceStrength {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The quantity of substance in the unit of presentation */
  presentationRatio?: IRatio;

  /** The quantity of substance in the unit of presentation */
  presentationRatioRange?: IRatioRange;

  /** Text of either the whole presentation strength or a part of it (rest being in Strength.presentation as a ratio) */
  textPresentation?: string;

  /** Extension for textPresentation */
  _textPresentation?: IElement;

  /** The strength per unitary volume (or mass) */
  concentrationRatio?: IRatio;

  /** The strength per unitary volume (or mass) */
  concentrationRatioRange?: IRatioRange;

  /** Text of either the whole concentration strength or a part of it (rest being in Strength.concentration as a ratio) */
  textConcentration?: string;

  /** Extension for textConcentration */
  _textConcentration?: IElement;

  /** When strength is measured at a particular point or distance */
  measurementPoint?: string;

  /** Extension for measurementPoint */
  _measurementPoint?: IElement;

  /** Where the strength range applies */
  country?: ICodeableConcept[];

  /** Strength expressed in terms of a reference substance */
  referenceStrength?: IIngredientSubstanceStrengthReferenceStrength[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IIngredientSubstanceStrength>) {
    super(data);
    if (data) {
      this.assignProps(data, INGREDIENT_SUBSTANCE_STRENGTH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create IngredientSubstanceStrength from a JSON object
   */
  static fromJSON(json: IIngredientSubstanceStrength): IngredientSubstanceStrength {
    return new IngredientSubstanceStrength(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new IngredientSubstanceStrength with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IIngredientSubstanceStrength>): IngredientSubstanceStrength {
    return new IngredientSubstanceStrength({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new IngredientSubstanceStrength by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IIngredientSubstanceStrength) => Partial<IIngredientSubstanceStrength>): IngredientSubstanceStrength {
    const currentData = this.toJSON();
    return new IngredientSubstanceStrength({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IIngredientSubstanceStrength)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IIngredientSubstanceStrength {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INGREDIENT_SUBSTANCE_STRENGTH_PROPERTIES);
    return result as IIngredientSubstanceStrength;
  }

  /**
   * Create a deep clone of this IngredientSubstanceStrength
   */
  clone(): IngredientSubstanceStrength {
    return new IngredientSubstanceStrength(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the IngredientSubstanceStrength
   */
  toString(): string {
    const parts: string[] = ['IngredientSubstanceStrength'];
    return parts.join(', ');
  }
}
