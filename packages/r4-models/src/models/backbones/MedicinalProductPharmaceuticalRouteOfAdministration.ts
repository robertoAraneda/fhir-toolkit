import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IMedicinalProductPharmaceuticalRouteOfAdministration,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPharmaceuticalRouteOfAdministration */
const MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_PROPERTIES = [
  'code',
  'firstDose',
  'maxSingleDose',
  'maxDosePerDay',
  'maxDosePerTreatmentPeriod',
  'maxTreatmentPeriod',
  'targetSpecies',
] as const;

/**
 * MedicinalProductPharmaceuticalRouteOfAdministration - The path by which the pharmaceutical product is taken into or makes contact with the body
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalrouteofadministration.html
 *
 * @example
 * const medicinalProductPharmaceuticalRouteOfAdministration = new MedicinalProductPharmaceuticalRouteOfAdministration({
 *   // ... properties
 * });
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministration {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coded expression for the route */
  code: ICodeableConcept;

  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement */
  firstDose?: IQuantity;

  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement */
  maxSingleDose?: IQuantity;

  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation */
  maxDosePerDay?: IQuantity;

  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation */
  maxDosePerTreatmentPeriod?: IRatio;

  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation */
  maxTreatmentPeriod?: IDuration;

  /** A species for which this route applies */
  targetSpecies?: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPharmaceuticalRouteOfAdministration>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPharmaceuticalRouteOfAdministration from a JSON object
   */
  static fromJSON(json: IMedicinalProductPharmaceuticalRouteOfAdministration): MedicinalProductPharmaceuticalRouteOfAdministration {
    return new MedicinalProductPharmaceuticalRouteOfAdministration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPharmaceuticalRouteOfAdministration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPharmaceuticalRouteOfAdministration>): MedicinalProductPharmaceuticalRouteOfAdministration {
    return new MedicinalProductPharmaceuticalRouteOfAdministration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPharmaceuticalRouteOfAdministration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPharmaceuticalRouteOfAdministration) => Partial<IMedicinalProductPharmaceuticalRouteOfAdministration>): MedicinalProductPharmaceuticalRouteOfAdministration {
    const currentData = this.toJSON();
    return new MedicinalProductPharmaceuticalRouteOfAdministration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPharmaceuticalRouteOfAdministration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPharmaceuticalRouteOfAdministration {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_PROPERTIES);
    return result as IMedicinalProductPharmaceuticalRouteOfAdministration;
  }

  /**
   * Create a deep clone of this MedicinalProductPharmaceuticalRouteOfAdministration
   */
  clone(): MedicinalProductPharmaceuticalRouteOfAdministration {
    return new MedicinalProductPharmaceuticalRouteOfAdministration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPharmaceuticalRouteOfAdministration
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPharmaceuticalRouteOfAdministration'];
    return parts.join(', ');
  }
}
