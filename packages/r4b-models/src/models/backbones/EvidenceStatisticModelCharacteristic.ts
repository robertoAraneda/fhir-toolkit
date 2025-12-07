import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEvidenceStatisticAttributeEstimate,
  IEvidenceStatisticModelCharacteristic,
  IEvidenceStatisticModelCharacteristicVariable,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceStatisticModelCharacteristic */
const EVIDENCE_STATISTIC_MODEL_CHARACTERISTIC_PROPERTIES = [
  'code',
  'value',
  'variable',
  'attributeEstimate',
] as const;

/**
 * EvidenceStatisticModelCharacteristic - An aspect of the statistical model
 *
 * @see https://hl7.org/fhir/R4/evidencestatisticmodelcharacteristic.html
 *
 * @example
 * const evidenceStatisticModelCharacteristic = new EvidenceStatisticModelCharacteristic({
 *   // ... properties
 * });
 */
export class EvidenceStatisticModelCharacteristic extends BackboneElement implements IEvidenceStatisticModelCharacteristic {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Model specification */
  code: ICodeableConcept;

  /** Numerical value to complete model specification */
  value?: IQuantity;

  /** A variable adjusted for in the adjusted analysis */
  variable?: IEvidenceStatisticModelCharacteristicVariable[];

  /** An attribute of the statistic used as a model characteristic */
  attributeEstimate?: IEvidenceStatisticAttributeEstimate[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceStatisticModelCharacteristic>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_STATISTIC_MODEL_CHARACTERISTIC_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceStatisticModelCharacteristic from a JSON object
   */
  static fromJSON(json: IEvidenceStatisticModelCharacteristic): EvidenceStatisticModelCharacteristic {
    return new EvidenceStatisticModelCharacteristic(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceStatisticModelCharacteristic with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceStatisticModelCharacteristic>): EvidenceStatisticModelCharacteristic {
    return new EvidenceStatisticModelCharacteristic({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceStatisticModelCharacteristic by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceStatisticModelCharacteristic) => Partial<IEvidenceStatisticModelCharacteristic>): EvidenceStatisticModelCharacteristic {
    const currentData = this.toJSON();
    return new EvidenceStatisticModelCharacteristic({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceStatisticModelCharacteristic)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceStatisticModelCharacteristic {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_STATISTIC_MODEL_CHARACTERISTIC_PROPERTIES);
    return result as IEvidenceStatisticModelCharacteristic;
  }

  /**
   * Create a deep clone of this EvidenceStatisticModelCharacteristic
   */
  clone(): EvidenceStatisticModelCharacteristic {
    return new EvidenceStatisticModelCharacteristic(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceStatisticModelCharacteristic
   */
  toString(): string {
    const parts: string[] = ['EvidenceStatisticModelCharacteristic'];
    return parts.join(', ');
  }
}
