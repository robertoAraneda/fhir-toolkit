import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IElement,
  IPlanDefinitionActionParticipant,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PlanDefinitionActionParticipant */
const PLAN_DEFINITION_ACTION_PARTICIPANT_PROPERTIES = [
  'type',
  '_type',
  'role',
] as const;

/**
 * PlanDefinitionActionParticipant - Who should participate in the action
 *
 * @see https://hl7.org/fhir/R4B/plandefinitionactionparticipant.html
 *
 * @example
 * const planDefinitionActionParticipant = new PlanDefinitionActionParticipant({
 *   // ... properties
 * });
 */
export class PlanDefinitionActionParticipant extends BackboneElement implements IPlanDefinitionActionParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** patient | practitioner | related-person | device */
  type: ActionParticipantTypeType;

  /** Extension for type */
  _type?: IElement;

  /** E.g. Nurse, Surgeon, Parent */
  role?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionActionParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTION_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActionParticipant from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActionParticipant): PlanDefinitionActionParticipant {
    return new PlanDefinitionActionParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActionParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActionParticipant>): PlanDefinitionActionParticipant {
    return new PlanDefinitionActionParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActionParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActionParticipant) => Partial<IPlanDefinitionActionParticipant>): PlanDefinitionActionParticipant {
    const currentData = this.toJSON();
    return new PlanDefinitionActionParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActionParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActionParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTION_PARTICIPANT_PROPERTIES);
    return result as IPlanDefinitionActionParticipant;
  }

  /**
   * Create a deep clone of this PlanDefinitionActionParticipant
   */
  clone(): PlanDefinitionActionParticipant {
    return new PlanDefinitionActionParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActionParticipant
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActionParticipant'];
    return parts.join(', ');
  }
}
