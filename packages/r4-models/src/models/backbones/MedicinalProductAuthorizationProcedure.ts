import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicinalProductAuthorizationProcedure,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductAuthorizationProcedure */
const MEDICINAL_PRODUCT_AUTHORIZATION_PROCEDURE_PROPERTIES = [
  'identifier',
  'type',
  'datePeriod',
  'dateDateTime',
  '_dateDateTime',
  'application',
] as const;

/**
 * MedicinalProductAuthorizationProcedure - The regulatory procedure for granting or amending a marketing authorization
 *
 * @see https://hl7.org/fhir/R4/medicinalproductauthorizationprocedure.html
 *
 * @example
 * const medicinalProductAuthorizationProcedure = new MedicinalProductAuthorizationProcedure({
 *   // ... properties
 * });
 */
export class MedicinalProductAuthorizationProcedure extends BackboneElement implements IMedicinalProductAuthorizationProcedure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier for this procedure */
  identifier?: IIdentifier;

  /** Type of procedure */
  type: ICodeableConcept;

  /** Date of procedure */
  datePeriod?: IPeriod;

  /** Date of procedure */
  dateDateTime?: string;

  /** Extension for dateDateTime */
  _dateDateTime?: IElement;

  /** Applcations submitted to obtain a marketing authorization */
  application?: IMedicinalProductAuthorizationProcedure[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductAuthorizationProcedure>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_AUTHORIZATION_PROCEDURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductAuthorizationProcedure from a JSON object
   */
  static fromJSON(json: IMedicinalProductAuthorizationProcedure): MedicinalProductAuthorizationProcedure {
    return new MedicinalProductAuthorizationProcedure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductAuthorizationProcedure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductAuthorizationProcedure>): MedicinalProductAuthorizationProcedure {
    return new MedicinalProductAuthorizationProcedure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductAuthorizationProcedure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductAuthorizationProcedure) => Partial<IMedicinalProductAuthorizationProcedure>): MedicinalProductAuthorizationProcedure {
    const currentData = this.toJSON();
    return new MedicinalProductAuthorizationProcedure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductAuthorizationProcedure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductAuthorizationProcedure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_AUTHORIZATION_PROCEDURE_PROPERTIES);
    return result as IMedicinalProductAuthorizationProcedure;
  }

  /**
   * Create a deep clone of this MedicinalProductAuthorizationProcedure
   */
  clone(): MedicinalProductAuthorizationProcedure {
    return new MedicinalProductAuthorizationProcedure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductAuthorizationProcedure
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductAuthorizationProcedure'];
    return parts.join(', ');
  }
}
