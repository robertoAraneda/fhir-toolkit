import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAllergyIntoleranceParticipant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AllergyIntoleranceParticipant */
const ALLERGY_INTOLERANCE_PARTICIPANT_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * AllergyIntoleranceParticipant - Who or what participated in the activities related to the allergy or intolerance and how they were involved
 *
 * @see https://hl7.org/fhir/R5/allergyintoleranceparticipant.html
 *
 * @example
 * const allergyIntoleranceParticipant = new AllergyIntoleranceParticipant({
 *   // ... properties
 * });
 */
export class AllergyIntoleranceParticipant extends BackboneElement implements IAllergyIntoleranceParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of involvement */
  function?: ICodeableConcept;

  /** Who or what participated in the activities related to the allergy or intolerance */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAllergyIntoleranceParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, ALLERGY_INTOLERANCE_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AllergyIntoleranceParticipant from a JSON object
   */
  static fromJSON(json: IAllergyIntoleranceParticipant): AllergyIntoleranceParticipant {
    return new AllergyIntoleranceParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AllergyIntoleranceParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAllergyIntoleranceParticipant>): AllergyIntoleranceParticipant {
    return new AllergyIntoleranceParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AllergyIntoleranceParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAllergyIntoleranceParticipant) => Partial<IAllergyIntoleranceParticipant>): AllergyIntoleranceParticipant {
    const currentData = this.toJSON();
    return new AllergyIntoleranceParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAllergyIntoleranceParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAllergyIntoleranceParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ALLERGY_INTOLERANCE_PARTICIPANT_PROPERTIES);
    return result as IAllergyIntoleranceParticipant;
  }

  /**
   * Create a deep clone of this AllergyIntoleranceParticipant
   */
  clone(): AllergyIntoleranceParticipant {
    return new AllergyIntoleranceParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AllergyIntoleranceParticipant
   */
  toString(): string {
    const parts: string[] = ['AllergyIntoleranceParticipant'];
    return parts.join(', ');
  }
}
