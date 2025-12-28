import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitRelated,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitRelated */
const EXPLANATION_OF_BENEFIT_RELATED_PROPERTIES = [
  'claim',
  'relationship',
  'reference',
] as const;

/**
 * ExplanationOfBenefitRelated - Prior or corollary claims
 *
 * @see https://hl7.org/fhir/R4B/explanationofbenefitrelated.html
 *
 * @example
 * const explanationOfBenefitRelated = new ExplanationOfBenefitRelated({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitRelated extends BackboneElement implements IExplanationOfBenefitRelated {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to the related claim */
  claim?: IReference<'Claim'>;

  /** How the reference claim is related */
  relationship?: ICodeableConcept;

  /** File or case reference */
  reference?: IIdentifier;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitRelated>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_RELATED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitRelated from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitRelated): ExplanationOfBenefitRelated {
    return new ExplanationOfBenefitRelated(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitRelated with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitRelated>): ExplanationOfBenefitRelated {
    return new ExplanationOfBenefitRelated({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitRelated by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitRelated) => Partial<IExplanationOfBenefitRelated>): ExplanationOfBenefitRelated {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitRelated({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitRelated)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitRelated {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_RELATED_PROPERTIES);
    return result as IExplanationOfBenefitRelated;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitRelated
   */
  clone(): ExplanationOfBenefitRelated {
    return new ExplanationOfBenefitRelated(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitRelated
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitRelated'];
    return parts.join(', ');
  }
}
