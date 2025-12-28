import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IElement,
  IPlanDefinitionActorOption,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PlanDefinitionActorOption */
const PLAN_DEFINITION_ACTOR_OPTION_PROPERTIES = [
  'type',
  '_type',
  'typeCanonical',
  '_typeCanonical',
  'typeReference',
  'role',
] as const;

/**
 * PlanDefinitionActorOption - Who or what can be this actor
 *
 * @see https://hl7.org/fhir/R5/plandefinitionactoroption.html
 *
 * @example
 * const planDefinitionActorOption = new PlanDefinitionActorOption({
 *   // ... properties
 * });
 */
export class PlanDefinitionActorOption extends BackboneElement implements IPlanDefinitionActorOption {

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

  /** E.g. Nurse, Surgeon, Parent */
  role?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPlanDefinitionActorOption>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_ACTOR_OPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinitionActorOption from a JSON object
   */
  static fromJSON(json: IPlanDefinitionActorOption): PlanDefinitionActorOption {
    return new PlanDefinitionActorOption(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinitionActorOption with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinitionActorOption>): PlanDefinitionActorOption {
    return new PlanDefinitionActorOption({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinitionActorOption by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinitionActorOption) => Partial<IPlanDefinitionActorOption>): PlanDefinitionActorOption {
    const currentData = this.toJSON();
    return new PlanDefinitionActorOption({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinitionActorOption)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinitionActorOption {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_ACTOR_OPTION_PROPERTIES);
    return result as IPlanDefinitionActorOption;
  }

  /**
   * Create a deep clone of this PlanDefinitionActorOption
   */
  clone(): PlanDefinitionActorOption {
    return new PlanDefinitionActorOption(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinitionActorOption
   */
  toString(): string {
    const parts: string[] = ['PlanDefinitionActorOption'];
    return parts.join(', ');
  }
}
