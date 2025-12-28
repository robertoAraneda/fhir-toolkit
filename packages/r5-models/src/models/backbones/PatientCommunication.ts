import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPatientCommunication,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PatientCommunication */
const PATIENT_COMMUNICATION_PROPERTIES = [
  'language',
  'preferred',
  '_preferred',
] as const;

/**
 * PatientCommunication - A language which may be used to communicate with the patient about his or her health
 *
 * @see https://hl7.org/fhir/R5/patientcommunication.html
 *
 * @example
 * const patientCommunication = new PatientCommunication({
 *   // ... properties
 * });
 */
export class PatientCommunication extends BackboneElement implements IPatientCommunication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The language which can be used to communicate with the patient about his or her health */
  language: ICodeableConcept;

  /** Language preference indicator */
  preferred?: boolean;

  /** Extension for preferred */
  _preferred?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPatientCommunication>) {
    super(data);
    if (data) {
      this.assignProps(data, PATIENT_COMMUNICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PatientCommunication from a JSON object
   */
  static fromJSON(json: IPatientCommunication): PatientCommunication {
    return new PatientCommunication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PatientCommunication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPatientCommunication>): PatientCommunication {
    return new PatientCommunication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PatientCommunication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPatientCommunication) => Partial<IPatientCommunication>): PatientCommunication {
    const currentData = this.toJSON();
    return new PatientCommunication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPatientCommunication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPatientCommunication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PATIENT_COMMUNICATION_PROPERTIES);
    return result as IPatientCommunication;
  }

  /**
   * Create a deep clone of this PatientCommunication
   */
  clone(): PatientCommunication {
    return new PatientCommunication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PatientCommunication
   */
  toString(): string {
    const parts: string[] = ['PatientCommunication'];
    return parts.join(', ');
  }
}
