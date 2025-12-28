import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IElement,
  IReference,
  IRequestOrchestrationActionParticipant,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RequestOrchestrationActionParticipant */
const REQUEST_ORCHESTRATION_ACTION_PARTICIPANT_PROPERTIES = [
  'type',
  '_type',
  'typeCanonical',
  '_typeCanonical',
  'typeReference',
  'role',
  'function',
  'actorCanonical',
  '_actorCanonical',
  'actorReference',
] as const;

/**
 * RequestOrchestrationActionParticipant - Who should perform the action
 *
 * @see https://hl7.org/fhir/R5/requestorchestrationactionparticipant.html
 *
 * @example
 * const requestOrchestrationActionParticipant = new RequestOrchestrationActionParticipant({
 *   // ... properties
 * });
 */
export class RequestOrchestrationActionParticipant extends BackboneElement implements IRequestOrchestrationActionParticipant {

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

  /** Who/what is participating? */
  actorCanonical?: string;

  /** Extension for actorCanonical */
  _actorCanonical?: IElement;

  /** Who/what is participating? */
  actorReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequestOrchestrationActionParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUEST_ORCHESTRATION_ACTION_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RequestOrchestrationActionParticipant from a JSON object
   */
  static fromJSON(json: IRequestOrchestrationActionParticipant): RequestOrchestrationActionParticipant {
    return new RequestOrchestrationActionParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RequestOrchestrationActionParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequestOrchestrationActionParticipant>): RequestOrchestrationActionParticipant {
    return new RequestOrchestrationActionParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RequestOrchestrationActionParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequestOrchestrationActionParticipant) => Partial<IRequestOrchestrationActionParticipant>): RequestOrchestrationActionParticipant {
    const currentData = this.toJSON();
    return new RequestOrchestrationActionParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequestOrchestrationActionParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequestOrchestrationActionParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REQUEST_ORCHESTRATION_ACTION_PARTICIPANT_PROPERTIES);
    return result as IRequestOrchestrationActionParticipant;
  }

  /**
   * Create a deep clone of this RequestOrchestrationActionParticipant
   */
  clone(): RequestOrchestrationActionParticipant {
    return new RequestOrchestrationActionParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RequestOrchestrationActionParticipant
   */
  toString(): string {
    const parts: string[] = ['RequestOrchestrationActionParticipant'];
    return parts.join(', ');
  }
}
