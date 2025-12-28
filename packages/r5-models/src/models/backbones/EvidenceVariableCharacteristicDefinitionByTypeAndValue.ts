import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IEvidenceVariableCharacteristicDefinitionByTypeAndValue,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceVariableCharacteristicDefinitionByTypeAndValue */
const EVIDENCE_VARIABLE_CHARACTERISTIC_DEFINITION_BY_TYPE_AND_VALUE_PROPERTIES = [
  'type',
  'method',
  'device',
  'valueCodeableConcept',
  'valueBoolean',
  '_valueBoolean',
  'valueQuantity',
  'valueRange',
  'valueReference',
  'valueId',
  '_valueId',
  'offset',
] as const;

/**
 * EvidenceVariableCharacteristicDefinitionByTypeAndValue - Defines the characteristic using type and value
 *
 * @see https://hl7.org/fhir/R5/evidencevariablecharacteristicdefinitionbytypeandvalue.html
 *
 * @example
 * const evidenceVariableCharacteristicDefinitionByTypeAndValue = new EvidenceVariableCharacteristicDefinitionByTypeAndValue({
 *   // ... properties
 * });
 */
export class EvidenceVariableCharacteristicDefinitionByTypeAndValue extends BackboneElement implements IEvidenceVariableCharacteristicDefinitionByTypeAndValue {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Expresses the type of characteristic */
  type: ICodeableConcept;

  /** Method for how the characteristic value was determined */
  method?: ICodeableConcept[];

  /** Device used for determining characteristic */
  device?: IReference<'Device' | 'DeviceMetric'>;

  /** Defines the characteristic when coupled with characteristic.type */
  valueCodeableConcept?: ICodeableConcept;

  /** Defines the characteristic when coupled with characteristic.type */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Defines the characteristic when coupled with characteristic.type */
  valueQuantity?: IQuantity;

  /** Defines the characteristic when coupled with characteristic.type */
  valueRange?: IRange;

  /** Defines the characteristic when coupled with characteristic.type */
  valueReference?: IReference;

  /** Defines the characteristic when coupled with characteristic.type */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Reference point for valueQuantity or valueRange */
  offset?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableCharacteristicDefinitionByTypeAndValue>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_CHARACTERISTIC_DEFINITION_BY_TYPE_AND_VALUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableCharacteristicDefinitionByTypeAndValue from a JSON object
   */
  static fromJSON(json: IEvidenceVariableCharacteristicDefinitionByTypeAndValue): EvidenceVariableCharacteristicDefinitionByTypeAndValue {
    return new EvidenceVariableCharacteristicDefinitionByTypeAndValue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableCharacteristicDefinitionByTypeAndValue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableCharacteristicDefinitionByTypeAndValue>): EvidenceVariableCharacteristicDefinitionByTypeAndValue {
    return new EvidenceVariableCharacteristicDefinitionByTypeAndValue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableCharacteristicDefinitionByTypeAndValue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableCharacteristicDefinitionByTypeAndValue) => Partial<IEvidenceVariableCharacteristicDefinitionByTypeAndValue>): EvidenceVariableCharacteristicDefinitionByTypeAndValue {
    const currentData = this.toJSON();
    return new EvidenceVariableCharacteristicDefinitionByTypeAndValue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableCharacteristicDefinitionByTypeAndValue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableCharacteristicDefinitionByTypeAndValue {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_CHARACTERISTIC_DEFINITION_BY_TYPE_AND_VALUE_PROPERTIES);
    return result as IEvidenceVariableCharacteristicDefinitionByTypeAndValue;
  }

  /**
   * Create a deep clone of this EvidenceVariableCharacteristicDefinitionByTypeAndValue
   */
  clone(): EvidenceVariableCharacteristicDefinitionByTypeAndValue {
    return new EvidenceVariableCharacteristicDefinitionByTypeAndValue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableCharacteristicDefinitionByTypeAndValue
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableCharacteristicDefinitionByTypeAndValue'];
    return parts.join(', ');
  }
}
