import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventSuspectEntity,
  IAdverseEventSuspectEntityCausality,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AdverseEventSuspectEntity */
const ADVERSE_EVENT_SUSPECT_ENTITY_PROPERTIES = [
  'instance',
  'causality',
] as const;

/**
 * AdverseEventSuspectEntity - The suspected agent causing the adverse event
 *
 * @see https://hl7.org/fhir/R4B/adverseeventsuspectentity.html
 *
 * @example
 * const adverseEventSuspectEntity = new AdverseEventSuspectEntity({
 *   // ... properties
 * });
 */
export class AdverseEventSuspectEntity extends BackboneElement implements IAdverseEventSuspectEntity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Refers to the specific entity that caused the adverse event */
  instance: IReference<'Immunization' | 'Procedure' | 'Substance' | 'Medication' | 'MedicationAdministration' | 'MedicationStatement' | 'Device'>;

  /** Information on the possible cause of the event */
  causality?: IAdverseEventSuspectEntityCausality[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventSuspectEntity>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_SUSPECT_ENTITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventSuspectEntity from a JSON object
   */
  static fromJSON(json: IAdverseEventSuspectEntity): AdverseEventSuspectEntity {
    return new AdverseEventSuspectEntity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventSuspectEntity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventSuspectEntity>): AdverseEventSuspectEntity {
    return new AdverseEventSuspectEntity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventSuspectEntity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventSuspectEntity) => Partial<IAdverseEventSuspectEntity>): AdverseEventSuspectEntity {
    const currentData = this.toJSON();
    return new AdverseEventSuspectEntity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventSuspectEntity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventSuspectEntity {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_SUSPECT_ENTITY_PROPERTIES);
    return result as IAdverseEventSuspectEntity;
  }

  /**
   * Create a deep clone of this AdverseEventSuspectEntity
   */
  clone(): AdverseEventSuspectEntity {
    return new AdverseEventSuspectEntity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventSuspectEntity
   */
  toString(): string {
    const parts: string[] = ['AdverseEventSuspectEntity'];
    return parts.join(', ');
  }
}
