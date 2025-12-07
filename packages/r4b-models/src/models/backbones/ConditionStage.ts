import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConditionStage,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ConditionStage */
const CONDITION_STAGE_PROPERTIES = [
  'summary',
  'assessment',
  'type',
] as const;

/**
 * ConditionStage - Stage/grade, usually assessed formally
 *
 * @see https://hl7.org/fhir/R4/conditionstage.html
 *
 * @example
 * const conditionStage = new ConditionStage({
 *   // ... properties
 * });
 */
export class ConditionStage extends BackboneElement implements IConditionStage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Simple summary (disease specific) */
  summary?: ICodeableConcept;

  /** Formal record of assessment */
  assessment?: IReference<'ClinicalImpression' | 'DiagnosticReport' | 'Observation'>[];

  /** Kind of staging */
  type?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionStage>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_STAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionStage from a JSON object
   */
  static fromJSON(json: IConditionStage): ConditionStage {
    return new ConditionStage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionStage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionStage>): ConditionStage {
    return new ConditionStage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionStage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionStage) => Partial<IConditionStage>): ConditionStage {
    const currentData = this.toJSON();
    return new ConditionStage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionStage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionStage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_STAGE_PROPERTIES);
    return result as IConditionStage;
  }

  /**
   * Create a deep clone of this ConditionStage
   */
  clone(): ConditionStage {
    return new ConditionStage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionStage
   */
  toString(): string {
    const parts: string[] = ['ConditionStage'];
    return parts.join(', ');
  }
}
