import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConditionEvidence,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ConditionEvidence */
const CONDITION_EVIDENCE_PROPERTIES = [
  'code',
  'detail',
] as const;

/**
 * ConditionEvidence - Supporting evidence
 *
 * @see https://hl7.org/fhir/R4/conditionevidence.html
 *
 * @example
 * const conditionEvidence = new ConditionEvidence({
 *   // ... properties
 * });
 */
export class ConditionEvidence extends BackboneElement implements IConditionEvidence {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Manifestation/symptom */
  code?: ICodeableConcept[];

  /** Supporting information found elsewhere */
  detail?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionEvidence>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_EVIDENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionEvidence from a JSON object
   */
  static fromJSON(json: IConditionEvidence): ConditionEvidence {
    return new ConditionEvidence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionEvidence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionEvidence>): ConditionEvidence {
    return new ConditionEvidence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionEvidence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionEvidence) => Partial<IConditionEvidence>): ConditionEvidence {
    const currentData = this.toJSON();
    return new ConditionEvidence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionEvidence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionEvidence {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_EVIDENCE_PROPERTIES);
    return result as IConditionEvidence;
  }

  /**
   * Create a deep clone of this ConditionEvidence
   */
  clone(): ConditionEvidence {
    return new ConditionEvidence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionEvidence
   */
  toString(): string {
    const parts: string[] = ['ConditionEvidence'];
    return parts.join(', ');
  }
}
