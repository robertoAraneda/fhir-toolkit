import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementRestResourceOperation,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CapabilityStatementRestResourceOperation */
const CAPABILITY_STATEMENT_REST_RESOURCE_OPERATION_PROPERTIES = [
  'name',
  '_name',
  'definition',
  '_definition',
  'documentation',
  '_documentation',
] as const;

/**
 * CapabilityStatementRestResourceOperation - Definition of a resource operation
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementrestresourceoperation.html
 *
 * @example
 * const capabilityStatementRestResourceOperation = new CapabilityStatementRestResourceOperation({
 *   // ... properties
 * });
 */
export class CapabilityStatementRestResourceOperation extends BackboneElement implements ICapabilityStatementRestResourceOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name by which the operation/query is invoked */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** The defined operation/query */
  definition: string;

  /** Extension for definition */
  _definition?: IElement;

  /** Specific details about operation behavior */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRestResourceOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_RESOURCE_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRestResourceOperation from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRestResourceOperation): CapabilityStatementRestResourceOperation {
    return new CapabilityStatementRestResourceOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRestResourceOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRestResourceOperation>): CapabilityStatementRestResourceOperation {
    return new CapabilityStatementRestResourceOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRestResourceOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRestResourceOperation) => Partial<ICapabilityStatementRestResourceOperation>): CapabilityStatementRestResourceOperation {
    const currentData = this.toJSON();
    return new CapabilityStatementRestResourceOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRestResourceOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRestResourceOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_RESOURCE_OPERATION_PROPERTIES);
    return result as ICapabilityStatementRestResourceOperation;
  }

  /**
   * Create a deep clone of this CapabilityStatementRestResourceOperation
   */
  clone(): CapabilityStatementRestResourceOperation {
    return new CapabilityStatementRestResourceOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRestResourceOperation
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRestResourceOperation'];
    return parts.join(', ');
  }
}
