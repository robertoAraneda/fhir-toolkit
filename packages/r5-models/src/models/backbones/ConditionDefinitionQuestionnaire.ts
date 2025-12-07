import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConditionQuestionnairePurposeType,
  IConditionDefinitionQuestionnaire,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionDefinitionQuestionnaire */
const CONDITION_DEFINITION_QUESTIONNAIRE_PROPERTIES = [
  'purpose',
  '_purpose',
  'reference',
] as const;

/**
 * ConditionDefinitionQuestionnaire - Questionnaire for this condition
 *
 * @see https://hl7.org/fhir/R4/conditiondefinitionquestionnaire.html
 *
 * @example
 * const conditionDefinitionQuestionnaire = new ConditionDefinitionQuestionnaire({
 *   // ... properties
 * });
 */
export class ConditionDefinitionQuestionnaire extends BackboneElement implements IConditionDefinitionQuestionnaire {

  // ============================================================================
  // Properties
  // ============================================================================

  /** preadmit | diff-diagnosis | outcome */
  purpose: ConditionQuestionnairePurposeType;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Specific Questionnaire */
  reference: IReference<'Questionnaire'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionDefinitionQuestionnaire>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_DEFINITION_QUESTIONNAIRE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionDefinitionQuestionnaire from a JSON object
   */
  static fromJSON(json: IConditionDefinitionQuestionnaire): ConditionDefinitionQuestionnaire {
    return new ConditionDefinitionQuestionnaire(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionDefinitionQuestionnaire with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionDefinitionQuestionnaire>): ConditionDefinitionQuestionnaire {
    return new ConditionDefinitionQuestionnaire({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionDefinitionQuestionnaire by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionDefinitionQuestionnaire) => Partial<IConditionDefinitionQuestionnaire>): ConditionDefinitionQuestionnaire {
    const currentData = this.toJSON();
    return new ConditionDefinitionQuestionnaire({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionDefinitionQuestionnaire)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionDefinitionQuestionnaire {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_DEFINITION_QUESTIONNAIRE_PROPERTIES);
    return result as IConditionDefinitionQuestionnaire;
  }

  /**
   * Create a deep clone of this ConditionDefinitionQuestionnaire
   */
  clone(): ConditionDefinitionQuestionnaire {
    return new ConditionDefinitionQuestionnaire(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionDefinitionQuestionnaire
   */
  toString(): string {
    const parts: string[] = ['ConditionDefinitionQuestionnaire'];
    return parts.join(', ');
  }
}
