import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductPharmaceutical,
  IMedicinalProductPharmaceuticalCharacteristics,
  IMedicinalProductPharmaceuticalRouteOfAdministration,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPharmaceutical */
const MEDICINAL_PRODUCT_PHARMACEUTICAL_PROPERTIES = [
  'identifier',
  'administrableDoseForm',
  'unitOfPresentation',
  'ingredient',
  'device',
  'characteristics',
  'routeOfAdministration',
] as const;

/**
 * MedicinalProductPharmaceutical - A pharmaceutical product described in terms of its composition and dose form.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceutical.html
 *
 * @example
 * const medicinalProductPharmaceutical = new MedicinalProductPharmaceutical({
 *   resourceType: 'MedicinalProductPharmaceutical',
 *   // ... properties
 * });
 */
export class MedicinalProductPharmaceutical extends DomainResource implements IMedicinalProductPharmaceutical {
  readonly resourceType = 'MedicinalProductPharmaceutical' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier for the pharmaceutical medicinal product */
  identifier?: IIdentifier[];

  /** The administrable dose form, after necessary reconstitution */
  administrableDoseForm: ICodeableConcept;

  /** Todo */
  unitOfPresentation?: ICodeableConcept;

  /** Ingredient */
  ingredient?: IReference<'MedicinalProductIngredient'>[];

  /** Accompanying device */
  device?: IReference<'DeviceDefinition'>[];

  /** Characteristics e.g. a products onset of action */
  characteristics?: IMedicinalProductPharmaceuticalCharacteristics[];

  /** The path by which the pharmaceutical product is taken into or makes contact with the body */
  routeOfAdministration: IMedicinalProductPharmaceuticalRouteOfAdministration[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPharmaceutical>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PHARMACEUTICAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPharmaceutical from a JSON object
   */
  static fromJSON(json: IMedicinalProductPharmaceutical): MedicinalProductPharmaceutical {
    return new MedicinalProductPharmaceutical(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPharmaceutical with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPharmaceutical>): MedicinalProductPharmaceutical {
    return new MedicinalProductPharmaceutical({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPharmaceutical by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPharmaceutical) => Partial<IMedicinalProductPharmaceutical>): MedicinalProductPharmaceutical {
    const currentData = this.toJSON();
    return new MedicinalProductPharmaceutical({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPharmaceutical)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPharmaceutical {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PHARMACEUTICAL_PROPERTIES);
    return result as IMedicinalProductPharmaceutical;
  }

  /**
   * Create a deep clone of this MedicinalProductPharmaceutical
   */
  clone(): MedicinalProductPharmaceutical {
    return new MedicinalProductPharmaceutical(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPharmaceutical
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPharmaceutical'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
