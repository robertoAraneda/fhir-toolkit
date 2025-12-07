import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitPayee,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitPayee */
const EXPLANATION_OF_BENEFIT_PAYEE_PROPERTIES = [
  'type',
  'party',
] as const;

/**
 * ExplanationOfBenefitPayee - Recipient of benefits payable
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitpayee.html
 *
 * @example
 * const explanationOfBenefitPayee = new ExplanationOfBenefitPayee({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitPayee extends BackboneElement implements IExplanationOfBenefitPayee {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Category of recipient */
  type?: ICodeableConcept;

  /** Recipient reference */
  party?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitPayee>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_PAYEE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitPayee from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitPayee): ExplanationOfBenefitPayee {
    return new ExplanationOfBenefitPayee(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitPayee with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitPayee>): ExplanationOfBenefitPayee {
    return new ExplanationOfBenefitPayee({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitPayee by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitPayee) => Partial<IExplanationOfBenefitPayee>): ExplanationOfBenefitPayee {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitPayee({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitPayee)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitPayee {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_PAYEE_PROPERTIES);
    return result as IExplanationOfBenefitPayee;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitPayee
   */
  clone(): ExplanationOfBenefitPayee {
    return new ExplanationOfBenefitPayee(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitPayee
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitPayee'];
    return parts.join(', ');
  }
}
