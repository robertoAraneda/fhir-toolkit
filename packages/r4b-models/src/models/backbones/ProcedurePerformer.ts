import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IProcedurePerformer,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ProcedurePerformer */
const PROCEDURE_PERFORMER_PROPERTIES = [
  'function',
  'actor',
  'onBehalfOf',
] as const;

/**
 * ProcedurePerformer - The people who performed the procedure
 *
 * @see https://hl7.org/fhir/R4/procedureperformer.html
 *
 * @example
 * const procedurePerformer = new ProcedurePerformer({
 *   // ... properties
 * });
 */
export class ProcedurePerformer extends BackboneElement implements IProcedurePerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of performance */
  function?: ICodeableConcept;

  /** The reference to the practitioner */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Device'>;

  /** Organization the device or practitioner was acting for */
  onBehalfOf?: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProcedurePerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, PROCEDURE_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ProcedurePerformer from a JSON object
   */
  static fromJSON(json: IProcedurePerformer): ProcedurePerformer {
    return new ProcedurePerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ProcedurePerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProcedurePerformer>): ProcedurePerformer {
    return new ProcedurePerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ProcedurePerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProcedurePerformer) => Partial<IProcedurePerformer>): ProcedurePerformer {
    const currentData = this.toJSON();
    return new ProcedurePerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProcedurePerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProcedurePerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PROCEDURE_PERFORMER_PROPERTIES);
    return result as IProcedurePerformer;
  }

  /**
   * Create a deep clone of this ProcedurePerformer
   */
  clone(): ProcedurePerformer {
    return new ProcedurePerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ProcedurePerformer
   */
  toString(): string {
    const parts: string[] = ['ProcedurePerformer'];
    return parts.join(', ');
  }
}
