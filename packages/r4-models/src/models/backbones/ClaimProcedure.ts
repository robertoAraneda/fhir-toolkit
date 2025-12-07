import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimProcedure,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimProcedure */
const CLAIM_PROCEDURE_PROPERTIES = [
  'sequence',
  '_sequence',
  'type',
  'date',
  '_date',
  'procedureCodeableConcept',
  'procedureReference',
  'udi',
] as const;

/**
 * ClaimProcedure - Clinical procedures performed
 *
 * @see https://hl7.org/fhir/R4/claimprocedure.html
 *
 * @example
 * const claimProcedure = new ClaimProcedure({
 *   // ... properties
 * });
 */
export class ClaimProcedure extends BackboneElement implements IClaimProcedure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Procedure instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Category of Procedure */
  type?: ICodeableConcept[];

  /** When the procedure was performed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Specific clinical procedure */
  procedureCodeableConcept?: ICodeableConcept;

  /** Specific clinical procedure */
  procedureReference?: IReference;

  /** Unique device identifier */
  udi?: IReference<'Device'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimProcedure>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_PROCEDURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimProcedure from a JSON object
   */
  static fromJSON(json: IClaimProcedure): ClaimProcedure {
    return new ClaimProcedure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimProcedure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimProcedure>): ClaimProcedure {
    return new ClaimProcedure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimProcedure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimProcedure) => Partial<IClaimProcedure>): ClaimProcedure {
    const currentData = this.toJSON();
    return new ClaimProcedure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimProcedure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimProcedure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_PROCEDURE_PROPERTIES);
    return result as IClaimProcedure;
  }

  /**
   * Create a deep clone of this ClaimProcedure
   */
  clone(): ClaimProcedure {
    return new ClaimProcedure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimProcedure
   */
  toString(): string {
    const parts: string[] = ['ClaimProcedure'];
    return parts.join(', ');
  }
}
