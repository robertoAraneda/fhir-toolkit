import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicinalProductDefinitionOperation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicinalProductDefinitionOperation */
const MEDICINAL_PRODUCT_DEFINITION_OPERATION_PROPERTIES = [
  'type',
  'effectiveDate',
  'organization',
  'confidentialityIndicator',
] as const;

/**
 * MedicinalProductDefinitionOperation - A manufacturing or administrative process for the medicinal product
 *
 * @see https://hl7.org/fhir/R4/medicinalproductdefinitionoperation.html
 *
 * @example
 * const medicinalProductDefinitionOperation = new MedicinalProductDefinitionOperation({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionOperation extends BackboneElement implements IMedicinalProductDefinitionOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of manufacturing operation e.g. manufacturing itself, re-packaging */
  type?: ICodeableReference;

  /** Date range of applicability */
  effectiveDate?: IPeriod;

  /** The organization responsible for the particular process, e.g. the manufacturer or importer */
  organization?: IReference<'Organization'>[];

  /** Specifies whether this process is considered proprietary or confidential */
  confidentialityIndicator?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductDefinitionOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionOperation from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionOperation): MedicinalProductDefinitionOperation {
    return new MedicinalProductDefinitionOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionOperation>): MedicinalProductDefinitionOperation {
    return new MedicinalProductDefinitionOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionOperation) => Partial<IMedicinalProductDefinitionOperation>): MedicinalProductDefinitionOperation {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_OPERATION_PROPERTIES);
    return result as IMedicinalProductDefinitionOperation;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionOperation
   */
  clone(): MedicinalProductDefinitionOperation {
    return new MedicinalProductDefinitionOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionOperation
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionOperation'];
    return parts.join(', ');
  }
}
