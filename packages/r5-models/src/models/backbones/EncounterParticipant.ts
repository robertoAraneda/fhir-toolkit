import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IEncounterParticipant,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EncounterParticipant */
const ENCOUNTER_PARTICIPANT_PROPERTIES = [
  'type',
  'period',
  'actor',
] as const;

/**
 * EncounterParticipant - List of participants involved in the encounter
 *
 * @see https://hl7.org/fhir/R4/encounterparticipant.html
 *
 * @example
 * const encounterParticipant = new EncounterParticipant({
 *   // ... properties
 * });
 */
export class EncounterParticipant extends BackboneElement implements IEncounterParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Role of participant in encounter */
  type?: ICodeableConcept[];

  /** Period of time during the encounter that the participant participated */
  period?: IPeriod;

  /** The individual, device, or service participating in the encounter */
  actor?: IReference<'Patient' | 'Group' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'HealthcareService'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEncounterParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterParticipant from a JSON object
   */
  static fromJSON(json: IEncounterParticipant): EncounterParticipant {
    return new EncounterParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterParticipant>): EncounterParticipant {
    return new EncounterParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterParticipant) => Partial<IEncounterParticipant>): EncounterParticipant {
    const currentData = this.toJSON();
    return new EncounterParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ENCOUNTER_PARTICIPANT_PROPERTIES);
    return result as IEncounterParticipant;
  }

  /**
   * Create a deep clone of this EncounterParticipant
   */
  clone(): EncounterParticipant {
    return new EncounterParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterParticipant
   */
  toString(): string {
    const parts: string[] = ['EncounterParticipant'];
    return parts.join(', ');
  }
}
