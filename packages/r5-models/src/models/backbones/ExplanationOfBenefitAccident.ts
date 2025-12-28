import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitAccident,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitAccident */
const EXPLANATION_OF_BENEFIT_ACCIDENT_PROPERTIES = [
  'date',
  '_date',
  'type',
  'locationAddress',
  'locationReference',
] as const;

/**
 * ExplanationOfBenefitAccident - Details of the event
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitaccident.html
 *
 * @example
 * const explanationOfBenefitAccident = new ExplanationOfBenefitAccident({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitAccident extends BackboneElement implements IExplanationOfBenefitAccident {

  // ============================================================================
  // Properties
  // ============================================================================

  /** When the incident occurred */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** The nature of the accident */
  type?: ICodeableConcept;

  /** Where the event occurred */
  locationAddress?: IAddress;

  /** Where the event occurred */
  locationReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitAccident>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ACCIDENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitAccident from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitAccident): ExplanationOfBenefitAccident {
    return new ExplanationOfBenefitAccident(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitAccident with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitAccident>): ExplanationOfBenefitAccident {
    return new ExplanationOfBenefitAccident({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitAccident by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitAccident) => Partial<IExplanationOfBenefitAccident>): ExplanationOfBenefitAccident {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitAccident({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitAccident)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitAccident {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ACCIDENT_PROPERTIES);
    return result as IExplanationOfBenefitAccident;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitAccident
   */
  clone(): ExplanationOfBenefitAccident {
    return new ExplanationOfBenefitAccident(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitAccident
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitAccident'];
    return parts.join(', ');
  }
}
