import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitBenefitBalanceFinancial,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitBenefitBalanceFinancial */
const EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE_FINANCIAL_PROPERTIES = [
  'type',
  'allowedUnsignedInt',
  '_allowedUnsignedInt',
  'allowedString',
  '_allowedString',
  'allowedMoney',
  'usedUnsignedInt',
  '_usedUnsignedInt',
  'usedMoney',
] as const;

/**
 * ExplanationOfBenefitBenefitBalanceFinancial - Benefit Summary
 *
 * @see https://hl7.org/fhir/R4B/explanationofbenefitbenefitbalancefinancial.html
 *
 * @example
 * const explanationOfBenefitBenefitBalanceFinancial = new ExplanationOfBenefitBenefitBalanceFinancial({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement implements IExplanationOfBenefitBenefitBalanceFinancial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Benefit classification */
  type: ICodeableConcept;

  /** Benefits allowed */
  allowedUnsignedInt?: number;

  /** Extension for allowedUnsignedInt */
  _allowedUnsignedInt?: IElement;

  /** Benefits allowed */
  allowedString?: string;

  /** Extension for allowedString */
  _allowedString?: IElement;

  /** Benefits allowed */
  allowedMoney?: IMoney;

  /** Benefits used */
  usedUnsignedInt?: number;

  /** Extension for usedUnsignedInt */
  _usedUnsignedInt?: IElement;

  /** Benefits used */
  usedMoney?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitBenefitBalanceFinancial>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE_FINANCIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitBenefitBalanceFinancial from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitBenefitBalanceFinancial): ExplanationOfBenefitBenefitBalanceFinancial {
    return new ExplanationOfBenefitBenefitBalanceFinancial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitBenefitBalanceFinancial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitBenefitBalanceFinancial>): ExplanationOfBenefitBenefitBalanceFinancial {
    return new ExplanationOfBenefitBenefitBalanceFinancial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitBenefitBalanceFinancial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitBenefitBalanceFinancial) => Partial<IExplanationOfBenefitBenefitBalanceFinancial>): ExplanationOfBenefitBenefitBalanceFinancial {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitBenefitBalanceFinancial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitBenefitBalanceFinancial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitBenefitBalanceFinancial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_BENEFIT_BALANCE_FINANCIAL_PROPERTIES);
    return result as IExplanationOfBenefitBenefitBalanceFinancial;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitBenefitBalanceFinancial
   */
  clone(): ExplanationOfBenefitBenefitBalanceFinancial {
    return new ExplanationOfBenefitBenefitBalanceFinancial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitBenefitBalanceFinancial
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitBenefitBalanceFinancial'];
    return parts.join(', ');
  }
}
