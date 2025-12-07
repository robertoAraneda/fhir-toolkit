import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  ICodeableConcept,
  IElement,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod */
const ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_WITHDRAWAL_PERIOD_PROPERTIES = [
  'tissue',
  'value',
  'supportingInformation',
  '_supportingInformation',
] as const;

/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod - A species specific time during which consumption of animal product is not appropriate
 *
 * @see https://hl7.org/fhir/R4/administrableproductdefinitionrouteofadministrationtargetspecieswithdrawalperiod.html
 *
 * @example
 * const administrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod = new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod({
 *   // ... properties
 * });
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement implements IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of tissue for which the withdrawal period applies, e.g. meat, milk */
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

  constructor(data?: Partial<IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod>) {
    super(data);
    if (data) {
      this.assignProps(data, ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_WITHDRAWAL_PERIOD_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod from a JSON object
   */
  static fromJSON(json: IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod>): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod) => Partial<IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod>): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const currentData = this.toJSON();
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_WITHDRAWAL_PERIOD_PROPERTIES);
    return result as IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
  }

  /**
   * Create a deep clone of this AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod
   */
  clone(): AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod
   */
  toString(): string {
    const parts: string[] = ['AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod'];
    return parts.join(', ');
  }
}
