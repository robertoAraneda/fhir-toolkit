import { BackboneElement } from '../base/BackboneElement.js';
import type {
  EvidenceVariableHandlingType,
  ICodeableConcept,
  IElement,
  IEvidenceStatisticModelCharacteristicVariable,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceStatisticModelCharacteristicVariable */
const EVIDENCE_STATISTIC_MODEL_CHARACTERISTIC_VARIABLE_PROPERTIES = [
  'variableDefinition',
  'handling',
  '_handling',
  'valueCategory',
  'valueQuantity',
  'valueRange',
] as const;

/**
 * EvidenceStatisticModelCharacteristicVariable - A variable adjusted for in the adjusted analysis
 *
 * @see https://hl7.org/fhir/R4/evidencestatisticmodelcharacteristicvariable.html
 *
 * @example
 * const evidenceStatisticModelCharacteristicVariable = new EvidenceStatisticModelCharacteristicVariable({
 *   // ... properties
 * });
 */
export class EvidenceStatisticModelCharacteristicVariable extends BackboneElement implements IEvidenceStatisticModelCharacteristicVariable {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of the variable */
  variableDefinition: IReference<'Group' | 'EvidenceVariable'>;

  /** continuous | dichotomous | ordinal | polychotomous */
  handling?: EvidenceVariableHandlingType;

  /** Extension for handling */
  _handling?: IElement;

  /** Description for grouping of ordinal or polychotomous variables */
  valueCategory?: ICodeableConcept[];

  /** Discrete value for grouping of ordinal or polychotomous variables */
  valueQuantity?: IQuantity[];

  /** Range of values for grouping of ordinal or polychotomous variables */
  valueRange?: IRange[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceStatisticModelCharacteristicVariable>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_STATISTIC_MODEL_CHARACTERISTIC_VARIABLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceStatisticModelCharacteristicVariable from a JSON object
   */
  static fromJSON(json: IEvidenceStatisticModelCharacteristicVariable): EvidenceStatisticModelCharacteristicVariable {
    return new EvidenceStatisticModelCharacteristicVariable(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceStatisticModelCharacteristicVariable with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceStatisticModelCharacteristicVariable>): EvidenceStatisticModelCharacteristicVariable {
    return new EvidenceStatisticModelCharacteristicVariable({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceStatisticModelCharacteristicVariable by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceStatisticModelCharacteristicVariable) => Partial<IEvidenceStatisticModelCharacteristicVariable>): EvidenceStatisticModelCharacteristicVariable {
    const currentData = this.toJSON();
    return new EvidenceStatisticModelCharacteristicVariable({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceStatisticModelCharacteristicVariable)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceStatisticModelCharacteristicVariable {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_STATISTIC_MODEL_CHARACTERISTIC_VARIABLE_PROPERTIES);
    return result as IEvidenceStatisticModelCharacteristicVariable;
  }

  /**
   * Create a deep clone of this EvidenceStatisticModelCharacteristicVariable
   */
  clone(): EvidenceStatisticModelCharacteristicVariable {
    return new EvidenceStatisticModelCharacteristicVariable(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceStatisticModelCharacteristicVariable
   */
  toString(): string {
    const parts: string[] = ['EvidenceStatisticModelCharacteristicVariable'];
    return parts.join(', ');
  }
}
