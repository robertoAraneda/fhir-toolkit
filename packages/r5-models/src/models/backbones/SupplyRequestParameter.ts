import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  IRange,
  ISupplyRequestParameter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SupplyRequestParameter */
const SUPPLY_REQUEST_PARAMETER_PROPERTIES = [
  'code',
  'valueCodeableConcept',
  'valueQuantity',
  'valueRange',
  'valueBoolean',
  '_valueBoolean',
] as const;

/**
 * SupplyRequestParameter - Ordered item details
 *
 * @see https://hl7.org/fhir/R5/supplyrequestparameter.html
 *
 * @example
 * const supplyRequestParameter = new SupplyRequestParameter({
 *   // ... properties
 * });
 */
export class SupplyRequestParameter extends BackboneElement implements ISupplyRequestParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item detail */
  code?: ICodeableConcept;

  /** Value of detail */
  valueCodeableConcept?: ICodeableConcept;

  /** Value of detail */
  valueQuantity?: IQuantity;

  /** Value of detail */
  valueRange?: IRange;

  /** Value of detail */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISupplyRequestParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, SUPPLY_REQUEST_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SupplyRequestParameter from a JSON object
   */
  static fromJSON(json: ISupplyRequestParameter): SupplyRequestParameter {
    return new SupplyRequestParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SupplyRequestParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISupplyRequestParameter>): SupplyRequestParameter {
    return new SupplyRequestParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SupplyRequestParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISupplyRequestParameter) => Partial<ISupplyRequestParameter>): SupplyRequestParameter {
    const currentData = this.toJSON();
    return new SupplyRequestParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISupplyRequestParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISupplyRequestParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUPPLY_REQUEST_PARAMETER_PROPERTIES);
    return result as ISupplyRequestParameter;
  }

  /**
   * Create a deep clone of this SupplyRequestParameter
   */
  clone(): SupplyRequestParameter {
    return new SupplyRequestParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SupplyRequestParameter
   */
  toString(): string {
    const parts: string[] = ['SupplyRequestParameter'];
    return parts.join(', ');
  }
}
