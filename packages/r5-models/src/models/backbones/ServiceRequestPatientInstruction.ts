import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  IServiceRequestPatientInstruction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ServiceRequestPatientInstruction */
const SERVICE_REQUEST_PATIENT_INSTRUCTION_PROPERTIES = [
  'instructionMarkdown',
  '_instructionMarkdown',
  'instructionReference',
] as const;

/**
 * ServiceRequestPatientInstruction - Patient or consumer-oriented instructions
 *
 * @see https://hl7.org/fhir/R5/servicerequestpatientinstruction.html
 *
 * @example
 * const serviceRequestPatientInstruction = new ServiceRequestPatientInstruction({
 *   // ... properties
 * });
 */
export class ServiceRequestPatientInstruction extends BackboneElement implements IServiceRequestPatientInstruction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Patient or consumer-oriented instructions */
  instructionMarkdown?: string;

  /** Extension for instructionMarkdown */
  _instructionMarkdown?: IElement;

  /** Patient or consumer-oriented instructions */
  instructionReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IServiceRequestPatientInstruction>) {
    super(data);
    if (data) {
      this.assignProps(data, SERVICE_REQUEST_PATIENT_INSTRUCTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ServiceRequestPatientInstruction from a JSON object
   */
  static fromJSON(json: IServiceRequestPatientInstruction): ServiceRequestPatientInstruction {
    return new ServiceRequestPatientInstruction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ServiceRequestPatientInstruction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IServiceRequestPatientInstruction>): ServiceRequestPatientInstruction {
    return new ServiceRequestPatientInstruction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ServiceRequestPatientInstruction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IServiceRequestPatientInstruction) => Partial<IServiceRequestPatientInstruction>): ServiceRequestPatientInstruction {
    const currentData = this.toJSON();
    return new ServiceRequestPatientInstruction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IServiceRequestPatientInstruction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IServiceRequestPatientInstruction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SERVICE_REQUEST_PATIENT_INSTRUCTION_PROPERTIES);
    return result as IServiceRequestPatientInstruction;
  }

  /**
   * Create a deep clone of this ServiceRequestPatientInstruction
   */
  clone(): ServiceRequestPatientInstruction {
    return new ServiceRequestPatientInstruction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ServiceRequestPatientInstruction
   */
  toString(): string {
    const parts: string[] = ['ServiceRequestPatientInstruction'];
    return parts.join(', ');
  }
}
