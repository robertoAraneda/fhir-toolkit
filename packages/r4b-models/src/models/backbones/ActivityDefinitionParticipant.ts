import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionParticipantTypeType,
  IActivityDefinitionParticipant,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ActivityDefinitionParticipant */
const ACTIVITY_DEFINITION_PARTICIPANT_PROPERTIES = [
  'type',
  '_type',
  'role',
] as const;

/**
 * ActivityDefinitionParticipant - Who should participate in the action
 *
 * @see https://hl7.org/fhir/R4B/activitydefinitionparticipant.html
 *
 * @example
 * const activityDefinitionParticipant = new ActivityDefinitionParticipant({
 *   // ... properties
 * });
 */
export class ActivityDefinitionParticipant extends BackboneElement implements IActivityDefinitionParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** patient | practitioner | related-person | device */
  type: ActionParticipantTypeType;

  /** Extension for type */
  _type?: IElement;

  /** E.g. Nurse, Surgeon, Parent, etc. */
  role?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IActivityDefinitionParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, ACTIVITY_DEFINITION_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ActivityDefinitionParticipant from a JSON object
   */
  static fromJSON(json: IActivityDefinitionParticipant): ActivityDefinitionParticipant {
    return new ActivityDefinitionParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ActivityDefinitionParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IActivityDefinitionParticipant>): ActivityDefinitionParticipant {
    return new ActivityDefinitionParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ActivityDefinitionParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IActivityDefinitionParticipant) => Partial<IActivityDefinitionParticipant>): ActivityDefinitionParticipant {
    const currentData = this.toJSON();
    return new ActivityDefinitionParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IActivityDefinitionParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IActivityDefinitionParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ACTIVITY_DEFINITION_PARTICIPANT_PROPERTIES);
    return result as IActivityDefinitionParticipant;
  }

  /**
   * Create a deep clone of this ActivityDefinitionParticipant
   */
  clone(): ActivityDefinitionParticipant {
    return new ActivityDefinitionParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ActivityDefinitionParticipant
   */
  toString(): string {
    const parts: string[] = ['ActivityDefinitionParticipant'];
    return parts.join(', ');
  }
}
