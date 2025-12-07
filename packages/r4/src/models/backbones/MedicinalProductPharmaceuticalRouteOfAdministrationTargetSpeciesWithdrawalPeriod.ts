import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod */
const MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_WITHDRAWAL_PERIOD_PROPERTIES = [
  'tissue',
  'value',
  'supportingInformation',
  '_supportingInformation',
] as const;

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod - A species specific time during which consumption of animal product is not appropriate
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalrouteofadministrationtargetspecieswithdrawalperiod.html
 *
 * @example
 * const medicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod({
 *   // ... properties
 * });
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
  tissue: ICodeableConcept;

  /** A value for the time */
  value: IQuantity;

  /** Extra information about the withdrawal period */
  supportingInformation?: string;

  /** Extension for supportingInformation */
  _supportingInformation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_WITHDRAWAL_PERIOD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from a JSON object
   */
  static fromJSON(json: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod) => Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const currentData = this.toJSON();
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PHARMACEUTICAL_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_WITHDRAWAL_PERIOD_PROPERTIES);
    return result as IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }

  /**
   * Create a deep clone of this MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
   */
  clone(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod'];
    return parts.join(', ');
  }
}
