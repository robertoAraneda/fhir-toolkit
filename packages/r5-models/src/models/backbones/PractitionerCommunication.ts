import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPractitionerCommunication,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PractitionerCommunication */
const PRACTITIONER_COMMUNICATION_PROPERTIES = [
  'language',
  'preferred',
  '_preferred',
] as const;

/**
 * PractitionerCommunication - A language which may be used to communicate with the practitioner
 *
 * @see https://hl7.org/fhir/R4/practitionercommunication.html
 *
 * @example
 * const practitionerCommunication = new PractitionerCommunication({
 *   // ... properties
 * });
 */
export class PractitionerCommunication extends BackboneElement implements IPractitionerCommunication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The language code used to communicate with the practitioner */
  language: ICodeableConcept;

  /** Language preference indicator */
  preferred?: boolean;

  /** Extension for preferred */
  _preferred?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPractitionerCommunication>) {
    super(data);
    if (data) {
      this.assignProps(data, PRACTITIONER_COMMUNICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PractitionerCommunication from a JSON object
   */
  static fromJSON(json: IPractitionerCommunication): PractitionerCommunication {
    return new PractitionerCommunication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PractitionerCommunication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPractitionerCommunication>): PractitionerCommunication {
    return new PractitionerCommunication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PractitionerCommunication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPractitionerCommunication) => Partial<IPractitionerCommunication>): PractitionerCommunication {
    const currentData = this.toJSON();
    return new PractitionerCommunication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPractitionerCommunication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPractitionerCommunication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PRACTITIONER_COMMUNICATION_PROPERTIES);
    return result as IPractitionerCommunication;
  }

  /**
   * Create a deep clone of this PractitionerCommunication
   */
  clone(): PractitionerCommunication {
    return new PractitionerCommunication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PractitionerCommunication
   */
  toString(): string {
    const parts: string[] = ['PractitionerCommunication'];
    return parts.join(', ');
  }
}
