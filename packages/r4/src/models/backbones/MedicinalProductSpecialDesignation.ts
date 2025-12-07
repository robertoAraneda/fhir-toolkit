import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicinalProductSpecialDesignation,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductSpecialDesignation */
const MEDICINAL_PRODUCT_SPECIAL_DESIGNATION_PROPERTIES = [
  'identifier',
  'type',
  'intendedUse',
  'indicationCodeableConcept',
  'indicationReference',
  'status',
  'date',
  '_date',
  'species',
] as const;

/**
 * MedicinalProductSpecialDesignation - Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 *
 * @see https://hl7.org/fhir/R4/medicinalproductspecialdesignation.html
 *
 * @example
 * const medicinalProductSpecialDesignation = new MedicinalProductSpecialDesignation({
 *   // ... properties
 * });
 */
export class MedicinalProductSpecialDesignation extends BackboneElement implements IMedicinalProductSpecialDesignation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier for the designation, or procedure number */
  identifier?: IIdentifier[];

  /** The type of special designation, e.g. orphan drug, minor use */
  type?: ICodeableConcept;

  /** The intended use of the product, e.g. prevention, treatment */
  intendedUse?: ICodeableConcept;

  /** Condition for which the medicinal use applies */
  indicationCodeableConcept?: ICodeableConcept;

  /** Condition for which the medicinal use applies */
  indicationReference?: IReference;

  /** For example granted, pending, expired or withdrawn */
  status?: ICodeableConcept;

  /** Date when the designation was granted */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Animal species for which this applies */
  species?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductSpecialDesignation>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_SPECIAL_DESIGNATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductSpecialDesignation from a JSON object
   */
  static fromJSON(json: IMedicinalProductSpecialDesignation): MedicinalProductSpecialDesignation {
    return new MedicinalProductSpecialDesignation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductSpecialDesignation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductSpecialDesignation>): MedicinalProductSpecialDesignation {
    return new MedicinalProductSpecialDesignation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductSpecialDesignation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductSpecialDesignation) => Partial<IMedicinalProductSpecialDesignation>): MedicinalProductSpecialDesignation {
    const currentData = this.toJSON();
    return new MedicinalProductSpecialDesignation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductSpecialDesignation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductSpecialDesignation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_SPECIAL_DESIGNATION_PROPERTIES);
    return result as IMedicinalProductSpecialDesignation;
  }

  /**
   * Create a deep clone of this MedicinalProductSpecialDesignation
   */
  clone(): MedicinalProductSpecialDesignation {
    return new MedicinalProductSpecialDesignation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductSpecialDesignation
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductSpecialDesignation'];
    return parts.join(', ');
  }
}
