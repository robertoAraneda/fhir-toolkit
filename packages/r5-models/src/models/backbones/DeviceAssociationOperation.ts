import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceAssociationOperation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceAssociationOperation */
const DEVICE_ASSOCIATION_OPERATION_PROPERTIES = [
  'status',
  'operator',
  'period',
] as const;

/**
 * DeviceAssociationOperation - The details about the device when it is in use to describe its operation
 *
 * @see https://hl7.org/fhir/R5/deviceassociationoperation.html
 *
 * @example
 * const deviceAssociationOperation = new DeviceAssociationOperation({
 *   // ... properties
 * });
 */
export class DeviceAssociationOperation extends BackboneElement implements IDeviceAssociationOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Device operational condition */
  status: ICodeableConcept;

  /** The individual performing the action enabled by the device */
  operator?: IReference<'Patient' | 'Practitioner' | 'RelatedPerson'>[];

  /** Begin and end dates and times for the device's operation */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceAssociationOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_ASSOCIATION_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceAssociationOperation from a JSON object
   */
  static fromJSON(json: IDeviceAssociationOperation): DeviceAssociationOperation {
    return new DeviceAssociationOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceAssociationOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceAssociationOperation>): DeviceAssociationOperation {
    return new DeviceAssociationOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceAssociationOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceAssociationOperation) => Partial<IDeviceAssociationOperation>): DeviceAssociationOperation {
    const currentData = this.toJSON();
    return new DeviceAssociationOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceAssociationOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceAssociationOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_ASSOCIATION_OPERATION_PROPERTIES);
    return result as IDeviceAssociationOperation;
  }

  /**
   * Create a deep clone of this DeviceAssociationOperation
   */
  clone(): DeviceAssociationOperation {
    return new DeviceAssociationOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceAssociationOperation
   */
  toString(): string {
    const parts: string[] = ['DeviceAssociationOperation'];
    return parts.join(', ');
  }
}
