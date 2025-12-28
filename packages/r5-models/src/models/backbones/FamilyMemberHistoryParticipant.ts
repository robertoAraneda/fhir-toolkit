import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IFamilyMemberHistoryParticipant,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to FamilyMemberHistoryParticipant */
const FAMILY_MEMBER_HISTORY_PARTICIPANT_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * FamilyMemberHistoryParticipant - Who or what participated in the activities related to the family member history and how they were involved
 *
 * @see https://hl7.org/fhir/R5/familymemberhistoryparticipant.html
 *
 * @example
 * const familyMemberHistoryParticipant = new FamilyMemberHistoryParticipant({
 *   // ... properties
 * });
 */
export class FamilyMemberHistoryParticipant extends BackboneElement implements IFamilyMemberHistoryParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of involvement */
  function?: ICodeableConcept;

  /** Who or what participated in the activities related to the family member history */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IFamilyMemberHistoryParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, FAMILY_MEMBER_HISTORY_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create FamilyMemberHistoryParticipant from a JSON object
   */
  static fromJSON(json: IFamilyMemberHistoryParticipant): FamilyMemberHistoryParticipant {
    return new FamilyMemberHistoryParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new FamilyMemberHistoryParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IFamilyMemberHistoryParticipant>): FamilyMemberHistoryParticipant {
    return new FamilyMemberHistoryParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new FamilyMemberHistoryParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IFamilyMemberHistoryParticipant) => Partial<IFamilyMemberHistoryParticipant>): FamilyMemberHistoryParticipant {
    const currentData = this.toJSON();
    return new FamilyMemberHistoryParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IFamilyMemberHistoryParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IFamilyMemberHistoryParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, FAMILY_MEMBER_HISTORY_PARTICIPANT_PROPERTIES);
    return result as IFamilyMemberHistoryParticipant;
  }

  /**
   * Create a deep clone of this FamilyMemberHistoryParticipant
   */
  clone(): FamilyMemberHistoryParticipant {
    return new FamilyMemberHistoryParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the FamilyMemberHistoryParticipant
   */
  toString(): string {
    const parts: string[] = ['FamilyMemberHistoryParticipant'];
    return parts.join(', ');
  }
}
