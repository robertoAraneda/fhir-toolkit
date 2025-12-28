import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPersonCommunication,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PersonCommunication */
const PERSON_COMMUNICATION_PROPERTIES = [
  'language',
  'preferred',
  '_preferred',
] as const;

/**
 * PersonCommunication - A language which may be used to communicate with the person about his or her health
 *
 * @see https://hl7.org/fhir/R5/personcommunication.html
 *
 * @example
 * const personCommunication = new PersonCommunication({
 *   // ... properties
 * });
 */
export class PersonCommunication extends BackboneElement implements IPersonCommunication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The language which can be used to communicate with the person about his or her health */
  language: ICodeableConcept;

  /** Language preference indicator */
  preferred?: boolean;

  /** Extension for preferred */
  _preferred?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPersonCommunication>) {
    super(data);
    if (data) {
      this.assignProps(data, PERSON_COMMUNICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PersonCommunication from a JSON object
   */
  static fromJSON(json: IPersonCommunication): PersonCommunication {
    return new PersonCommunication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PersonCommunication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPersonCommunication>): PersonCommunication {
    return new PersonCommunication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PersonCommunication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPersonCommunication) => Partial<IPersonCommunication>): PersonCommunication {
    const currentData = this.toJSON();
    return new PersonCommunication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPersonCommunication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPersonCommunication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERSON_COMMUNICATION_PROPERTIES);
    return result as IPersonCommunication;
  }

  /**
   * Create a deep clone of this PersonCommunication
   */
  clone(): PersonCommunication {
    return new PersonCommunication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PersonCommunication
   */
  toString(): string {
    const parts: string[] = ['PersonCommunication'];
    return parts.join(', ');
  }
}
