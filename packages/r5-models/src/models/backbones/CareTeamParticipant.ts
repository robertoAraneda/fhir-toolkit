import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICareTeamParticipant,
  ICodeableConcept,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CareTeamParticipant */
const CARE_TEAM_PARTICIPANT_PROPERTIES = [
  'role',
  'member',
  'onBehalfOf',
  'coveragePeriod',
  'coverageTiming',
] as const;

/**
 * CareTeamParticipant - Members of the team
 *
 * @see https://hl7.org/fhir/R4/careteamparticipant.html
 *
 * @example
 * const careTeamParticipant = new CareTeamParticipant({
 *   // ... properties
 * });
 */
export class CareTeamParticipant extends BackboneElement implements ICareTeamParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of involvement */
  role?: ICodeableConcept;

  /** Who is involved */
  member?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Organization' | 'CareTeam'>;

  /** Organization of the practitioner */
  onBehalfOf?: IReference<'Organization'>;

  /** When the member is generally available within this care team */
  coveragePeriod?: IPeriod;

  /** When the member is generally available within this care team */
  coverageTiming?: ITiming;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICareTeamParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, CARE_TEAM_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CareTeamParticipant from a JSON object
   */
  static fromJSON(json: ICareTeamParticipant): CareTeamParticipant {
    return new CareTeamParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CareTeamParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICareTeamParticipant>): CareTeamParticipant {
    return new CareTeamParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CareTeamParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICareTeamParticipant) => Partial<ICareTeamParticipant>): CareTeamParticipant {
    const currentData = this.toJSON();
    return new CareTeamParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICareTeamParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICareTeamParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CARE_TEAM_PARTICIPANT_PROPERTIES);
    return result as ICareTeamParticipant;
  }

  /**
   * Create a deep clone of this CareTeamParticipant
   */
  clone(): CareTeamParticipant {
    return new CareTeamParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CareTeamParticipant
   */
  toString(): string {
    const parts: string[] = ['CareTeamParticipant'];
    return parts.join(', ');
  }
}
