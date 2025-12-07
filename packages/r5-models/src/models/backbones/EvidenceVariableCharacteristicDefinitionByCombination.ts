import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CharacteristicCombinationType,
  IElement,
  IEvidenceVariableCharacteristic,
  IEvidenceVariableCharacteristicDefinitionByCombination,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceVariableCharacteristicDefinitionByCombination */
const EVIDENCE_VARIABLE_CHARACTERISTIC_DEFINITION_BY_COMBINATION_PROPERTIES = [
  'code',
  '_code',
  'threshold',
  '_threshold',
  'characteristic',
] as const;

/**
 * EvidenceVariableCharacteristicDefinitionByCombination - Used to specify how two or more characteristics are combined
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristicdefinitionbycombination.html
 *
 * @example
 * const evidenceVariableCharacteristicDefinitionByCombination = new EvidenceVariableCharacteristicDefinitionByCombination({
 *   // ... properties
 * });
 */
export class EvidenceVariableCharacteristicDefinitionByCombination extends BackboneElement implements IEvidenceVariableCharacteristicDefinitionByCombination {

  // ============================================================================
  // Properties
  // ============================================================================

  /** all-of | any-of | at-least | at-most | statistical | net-effect | dataset */
  code: CharacteristicCombinationType;

  /** Extension for code */
  _code?: IElement;

  /** Provides the value of "n" when "at-least" or "at-most" codes are used */
  threshold?: number;

  /** Extension for threshold */
  _threshold?: IElement;

  /** A defining factor of the characteristic */
  characteristic: IEvidenceVariableCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableCharacteristicDefinitionByCombination>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_CHARACTERISTIC_DEFINITION_BY_COMBINATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableCharacteristicDefinitionByCombination from a JSON object
   */
  static fromJSON(json: IEvidenceVariableCharacteristicDefinitionByCombination): EvidenceVariableCharacteristicDefinitionByCombination {
    return new EvidenceVariableCharacteristicDefinitionByCombination(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableCharacteristicDefinitionByCombination with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableCharacteristicDefinitionByCombination>): EvidenceVariableCharacteristicDefinitionByCombination {
    return new EvidenceVariableCharacteristicDefinitionByCombination({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableCharacteristicDefinitionByCombination by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableCharacteristicDefinitionByCombination) => Partial<IEvidenceVariableCharacteristicDefinitionByCombination>): EvidenceVariableCharacteristicDefinitionByCombination {
    const currentData = this.toJSON();
    return new EvidenceVariableCharacteristicDefinitionByCombination({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableCharacteristicDefinitionByCombination)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableCharacteristicDefinitionByCombination {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_CHARACTERISTIC_DEFINITION_BY_COMBINATION_PROPERTIES);
    return result as IEvidenceVariableCharacteristicDefinitionByCombination;
  }

  /**
   * Create a deep clone of this EvidenceVariableCharacteristicDefinitionByCombination
   */
  clone(): EvidenceVariableCharacteristicDefinitionByCombination {
    return new EvidenceVariableCharacteristicDefinitionByCombination(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableCharacteristicDefinitionByCombination
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableCharacteristicDefinitionByCombination'];
    return parts.join(', ');
  }
}
