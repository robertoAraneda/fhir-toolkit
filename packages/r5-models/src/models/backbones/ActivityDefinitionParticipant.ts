import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionParticipantTypeType,
  IActivityDefinitionParticipant,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ActivityDefinitionParticipant */
const ACTIVITY_DEFINITION_PARTICIPANT_PROPERTIES = [
  'type',
  '_type',
  'typeCanonical',
  '_typeCanonical',
  'typeReference',
  'role',
  'function',
] as const;

/**
 * ActivityDefinitionParticipant - Who should participate in the action
 *
 * @see https://hl7.org/fhir/R4/activitydefinitionparticipant.html
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

  /** careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson */
  type?: ActionParticipantTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Who or what can participate */
  typeCanonical?: string;

  /** Extension for typeCanonical */
  _typeCanonical?: IElement;

  /** Who or what can participate */
  typeReference?: IReference<'CareTeam' | 'Device' | 'DeviceDefinition' | 'Endpoint' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** E.g. Nurse, Surgeon, Parent, etc */
  role?: ICodeableConcept;

  /** E.g. Author, Reviewer, Witness, etc */
  function?: ICodeableConcept;

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
