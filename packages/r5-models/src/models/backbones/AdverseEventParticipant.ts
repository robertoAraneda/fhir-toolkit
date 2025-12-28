import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventParticipant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdverseEventParticipant */
const ADVERSE_EVENT_PARTICIPANT_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * AdverseEventParticipant - Who was involved in the adverse event or the potential adverse event and what they did
 *
 * @see https://hl7.org/fhir/R5/adverseeventparticipant.html
 *
 * @example
 * const adverseEventParticipant = new AdverseEventParticipant({
 *   // ... properties
 * });
 */
export class AdverseEventParticipant extends BackboneElement implements IAdverseEventParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of involvement */
  function?: ICodeableConcept;

  /** Who was involved in the adverse event or the potential adverse event */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson' | 'ResearchSubject'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventParticipant from a JSON object
   */
  static fromJSON(json: IAdverseEventParticipant): AdverseEventParticipant {
    return new AdverseEventParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventParticipant>): AdverseEventParticipant {
    return new AdverseEventParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventParticipant) => Partial<IAdverseEventParticipant>): AdverseEventParticipant {
    const currentData = this.toJSON();
    return new AdverseEventParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_PARTICIPANT_PROPERTIES);
    return result as IAdverseEventParticipant;
  }

  /**
   * Create a deep clone of this AdverseEventParticipant
   */
  clone(): AdverseEventParticipant {
    return new AdverseEventParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventParticipant
   */
  toString(): string {
    const parts: string[] = ['AdverseEventParticipant'];
    return parts.join(', ');
  }
}
