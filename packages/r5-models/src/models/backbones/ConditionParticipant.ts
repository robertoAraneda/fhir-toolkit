import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConditionParticipant,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConditionParticipant */
const CONDITION_PARTICIPANT_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * ConditionParticipant - Who or what participated in the activities related to the condition and how they were involved
 *
 * @see https://hl7.org/fhir/R4/conditionparticipant.html
 *
 * @example
 * const conditionParticipant = new ConditionParticipant({
 *   // ... properties
 * });
 */
export class ConditionParticipant extends BackboneElement implements IConditionParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of involvement */
  function?: ICodeableConcept;

  /** Who or what participated in the activities related to the condition */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConditionParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConditionParticipant from a JSON object
   */
  static fromJSON(json: IConditionParticipant): ConditionParticipant {
    return new ConditionParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConditionParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConditionParticipant>): ConditionParticipant {
    return new ConditionParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConditionParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConditionParticipant) => Partial<IConditionParticipant>): ConditionParticipant {
    const currentData = this.toJSON();
    return new ConditionParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConditionParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConditionParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONDITION_PARTICIPANT_PROPERTIES);
    return result as IConditionParticipant;
  }

  /**
   * Create a deep clone of this ConditionParticipant
   */
  clone(): ConditionParticipant {
    return new ConditionParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConditionParticipant
   */
  toString(): string {
    const parts: string[] = ['ConditionParticipant'];
    return parts.join(', ');
  }
}
