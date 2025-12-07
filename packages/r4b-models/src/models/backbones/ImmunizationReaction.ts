import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImmunizationReaction,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImmunizationReaction */
const IMMUNIZATION_REACTION_PROPERTIES = [
  'date',
  '_date',
  'detail',
  'reported',
  '_reported',
] as const;

/**
 * ImmunizationReaction - Details of a reaction that follows immunization
 *
 * @see https://hl7.org/fhir/R4/immunizationreaction.html
 *
 * @example
 * const immunizationReaction = new ImmunizationReaction({
 *   // ... properties
 * });
 */
export class ImmunizationReaction extends BackboneElement implements IImmunizationReaction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** When reaction started */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Additional information on reaction */
  detail?: IReference<'Observation'>;

  /** Indicates self-reported reaction */
  reported?: boolean;

  /** Extension for reported */
  _reported?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationReaction>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_REACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationReaction from a JSON object
   */
  static fromJSON(json: IImmunizationReaction): ImmunizationReaction {
    return new ImmunizationReaction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationReaction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationReaction>): ImmunizationReaction {
    return new ImmunizationReaction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationReaction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationReaction) => Partial<IImmunizationReaction>): ImmunizationReaction {
    const currentData = this.toJSON();
    return new ImmunizationReaction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationReaction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationReaction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_REACTION_PROPERTIES);
    return result as IImmunizationReaction;
  }

  /**
   * Create a deep clone of this ImmunizationReaction
   */
  clone(): ImmunizationReaction {
    return new ImmunizationReaction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationReaction
   */
  toString(): string {
    const parts: string[] = ['ImmunizationReaction'];
    return parts.join(', ');
  }
}
