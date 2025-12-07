import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies,
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdministrableProductDefinitionRouteOfAdministrationTargetSpecies */
const ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_PROPERTIES = [
  'code',
  'withdrawalPeriod',
] as const;

/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpecies - A species for which this route applies
 *
 * @see https://hl7.org/fhir/R4/administrableproductdefinitionrouteofadministrationtargetspecies.html
 *
 * @example
 * const administrableProductDefinitionRouteOfAdministrationTargetSpecies = new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies({
 *   // ... properties
 * });
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpecies extends BackboneElement implements IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coded expression for the species */
  code: ICodeableConcept;

  /** A species specific time during which consumption of animal product is not appropriate */
  withdrawalPeriod?: IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies>) {
    super(data);
    if (data) {
      this.assignProps(data, ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdministrableProductDefinitionRouteOfAdministrationTargetSpecies from a JSON object
   */
  static fromJSON(json: IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies>): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies) => Partial<IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies>): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    const currentData = this.toJSON();
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_TARGET_SPECIES_PROPERTIES);
    return result as IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies;
  }

  /**
   * Create a deep clone of this AdministrableProductDefinitionRouteOfAdministrationTargetSpecies
   */
  clone(): AdministrableProductDefinitionRouteOfAdministrationTargetSpecies {
    return new AdministrableProductDefinitionRouteOfAdministrationTargetSpecies(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdministrableProductDefinitionRouteOfAdministrationTargetSpecies
   */
  toString(): string {
    const parts: string[] = ['AdministrableProductDefinitionRouteOfAdministrationTargetSpecies'];
    return parts.join(', ');
  }
}
