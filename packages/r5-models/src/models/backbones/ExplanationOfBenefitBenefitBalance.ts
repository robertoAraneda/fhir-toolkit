import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitBenefitBalance,
  IExplanationOfBenefitBenefitBalanceFinancial,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitBenefitBalance */
const EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE_PROPERTIES = [
  'category',
  'excluded',
  '_excluded',
  'name',
  '_name',
  'description',
  '_description',
  'network',
  'unit',
  'term',
  'financial',
] as const;

/**
 * ExplanationOfBenefitBenefitBalance - Balance by Benefit Category
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitbenefitbalance.html
 *
 * @example
 * const explanationOfBenefitBenefitBalance = new ExplanationOfBenefitBenefitBalance({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitBenefitBalance extends BackboneElement implements IExplanationOfBenefitBenefitBalance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Benefit classification */
  category: ICodeableConcept;

  /** Excluded from the plan */
  excluded?: boolean;

  /** Extension for excluded */
  _excluded?: IElement;

  /** Short name for the benefit */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Description of the benefit or services covered */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** In or out of network */
  network?: ICodeableConcept;

  /** Individual or family */
  unit?: ICodeableConcept;

  /** Annual or lifetime */
  term?: ICodeableConcept;

  /** Benefit Summary */
  financial?: IExplanationOfBenefitBenefitBalanceFinancial[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitBenefitBalance>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitBenefitBalance from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitBenefitBalance): ExplanationOfBenefitBenefitBalance {
    return new ExplanationOfBenefitBenefitBalance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitBenefitBalance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitBenefitBalance>): ExplanationOfBenefitBenefitBalance {
    return new ExplanationOfBenefitBenefitBalance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitBenefitBalance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitBenefitBalance) => Partial<IExplanationOfBenefitBenefitBalance>): ExplanationOfBenefitBenefitBalance {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitBenefitBalance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitBenefitBalance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitBenefitBalance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE_PROPERTIES);
    return result as IExplanationOfBenefitBenefitBalance;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitBenefitBalance
   */
  clone(): ExplanationOfBenefitBenefitBalance {
    return new ExplanationOfBenefitBenefitBalance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitBenefitBalance
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitBenefitBalance'];
    return parts.join(', ');
  }
}
