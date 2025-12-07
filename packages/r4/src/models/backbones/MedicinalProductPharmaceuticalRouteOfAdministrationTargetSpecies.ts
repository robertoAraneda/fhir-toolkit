import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies */
const MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_PROPERTIES = [
  'code',
  'withdrawalPeriod',
] as const;

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies - A species for which this route applies
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalrouteofadministrationtargetspecies.html
 *
 * @example
 * const medicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies({
 *   // ... properties
 * });
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coded expression for the species */
  code: ICodeableConcept;

  /** A species specific time during which consumption of animal product is not appropriate */
  withdrawalPeriod?: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from a JSON object
   */
  static fromJSON(json: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies) => Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    const currentData = this.toJSON();
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_PROPERTIES);
    return result as IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
  }

  /**
   * Create a deep clone of this MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
   */
  clone(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies'];
    return parts.join(', ');
  }
}
