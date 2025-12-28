import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IRelatedPersonCommunication,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RelatedPersonCommunication */
const RELATED_PERSON_COMMUNICATION_PROPERTIES = [
  'language',
  'preferred',
  '_preferred',
] as const;

/**
 * RelatedPersonCommunication - A language which may be used to communicate with about the patient's health
 *
 * @see https://hl7.org/fhir/R4B/relatedpersoncommunication.html
 *
 * @example
 * const relatedPersonCommunication = new RelatedPersonCommunication({
 *   // ... properties
 * });
 */
export class RelatedPersonCommunication extends BackboneElement implements IRelatedPersonCommunication {

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

  constructor(data?: Partial<IRelatedPersonCommunication>) {
    super(data);
    if (data) {
      this.assignProps(data, RELATED_PERSON_COMMUNICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RelatedPersonCommunication from a JSON object
   */
  static fromJSON(json: IRelatedPersonCommunication): RelatedPersonCommunication {
    return new RelatedPersonCommunication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RelatedPersonCommunication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRelatedPersonCommunication>): RelatedPersonCommunication {
    return new RelatedPersonCommunication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RelatedPersonCommunication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRelatedPersonCommunication) => Partial<IRelatedPersonCommunication>): RelatedPersonCommunication {
    const currentData = this.toJSON();
    return new RelatedPersonCommunication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRelatedPersonCommunication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRelatedPersonCommunication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RELATED_PERSON_COMMUNICATION_PROPERTIES);
    return result as IRelatedPersonCommunication;
  }

  /**
   * Create a deep clone of this RelatedPersonCommunication
   */
  clone(): RelatedPersonCommunication {
    return new RelatedPersonCommunication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RelatedPersonCommunication
   */
  toString(): string {
    const parts: string[] = ['RelatedPersonCommunication'];
    return parts.join(', ');
  }
}
