import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IImmunizationPerformer,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImmunizationPerformer */
const IMMUNIZATION_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * ImmunizationPerformer - Who performed event
 *
 * @see https://hl7.org/fhir/R4B/immunizationperformer.html
 *
 * @example
 * const immunizationPerformer = new ImmunizationPerformer({
 *   // ... properties
 * });
 */
export class ImmunizationPerformer extends BackboneElement implements IImmunizationPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What type of performance was done */
  function?: ICodeableConcept;

  /** Individual or organization who was performing */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationPerformer from a JSON object
   */
  static fromJSON(json: IImmunizationPerformer): ImmunizationPerformer {
    return new ImmunizationPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationPerformer>): ImmunizationPerformer {
    return new ImmunizationPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationPerformer) => Partial<IImmunizationPerformer>): ImmunizationPerformer {
    const currentData = this.toJSON();
    return new ImmunizationPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_PERFORMER_PROPERTIES);
    return result as IImmunizationPerformer;
  }

  /**
   * Create a deep clone of this ImmunizationPerformer
   */
  clone(): ImmunizationPerformer {
    return new ImmunizationPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationPerformer
   */
  toString(): string {
    const parts: string[] = ['ImmunizationPerformer'];
    return parts.join(', ');
  }
}
