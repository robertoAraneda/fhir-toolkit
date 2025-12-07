import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicinalProductManufacturingBusinessOperation,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductManufacturingBusinessOperation */
const MEDICINAL_PRODUCT_MANUFACTURING_BUSINESS_OPERATION_PROPERTIES = [
  'operationType',
  'authorisationReferenceNumber',
  'effectiveDate',
  '_effectiveDate',
  'confidentialityIndicator',
  'manufacturer',
  'regulator',
] as const;

/**
 * MedicinalProductManufacturingBusinessOperation - An operation applied to the product, for manufacturing or adminsitrative purpose
 *
 * @see https://hl7.org/fhir/R4/medicinalproductmanufacturingbusinessoperation.html
 *
 * @example
 * const medicinalProductManufacturingBusinessOperation = new MedicinalProductManufacturingBusinessOperation({
 *   // ... properties
 * });
 */
export class MedicinalProductManufacturingBusinessOperation extends BackboneElement implements IMedicinalProductManufacturingBusinessOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of manufacturing operation */
  operationType?: ICodeableConcept;

  /** Regulatory authorization reference number */
  authorisationReferenceNumber?: IIdentifier;

  /** Regulatory authorization date */
  effectiveDate?: string;

  /** Extension for effectiveDate */
  _effectiveDate?: IElement;

  /** To indicate if this proces is commercially confidential */
  confidentialityIndicator?: ICodeableConcept;

  /** The manufacturer or establishment associated with the process */
  manufacturer?: IReference<'Organization'>[];

  /** A regulator which oversees the operation */
  regulator?: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductManufacturingBusinessOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_MANUFACTURING_BUSINESS_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductManufacturingBusinessOperation from a JSON object
   */
  static fromJSON(json: IMedicinalProductManufacturingBusinessOperation): MedicinalProductManufacturingBusinessOperation {
    return new MedicinalProductManufacturingBusinessOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductManufacturingBusinessOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductManufacturingBusinessOperation>): MedicinalProductManufacturingBusinessOperation {
    return new MedicinalProductManufacturingBusinessOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductManufacturingBusinessOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductManufacturingBusinessOperation) => Partial<IMedicinalProductManufacturingBusinessOperation>): MedicinalProductManufacturingBusinessOperation {
    const currentData = this.toJSON();
    return new MedicinalProductManufacturingBusinessOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductManufacturingBusinessOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductManufacturingBusinessOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_MANUFACTURING_BUSINESS_OPERATION_PROPERTIES);
    return result as IMedicinalProductManufacturingBusinessOperation;
  }

  /**
   * Create a deep clone of this MedicinalProductManufacturingBusinessOperation
   */
  clone(): MedicinalProductManufacturingBusinessOperation {
    return new MedicinalProductManufacturingBusinessOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductManufacturingBusinessOperation
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductManufacturingBusinessOperation'];
    return parts.join(', ');
  }
}
