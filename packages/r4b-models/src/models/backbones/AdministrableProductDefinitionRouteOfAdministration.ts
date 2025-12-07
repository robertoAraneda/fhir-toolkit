import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdministrableProductDefinitionRouteOfAdministration,
  IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies,
  ICodeableConcept,
  IDuration,
  IQuantity,
  IRatio,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AdministrableProductDefinitionRouteOfAdministration */
const ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_PROPERTIES = [
  'code',
  'firstDose',
  'maxSingleDose',
  'maxDosePerDay',
  'maxDosePerTreatmentPeriod',
  'maxTreatmentPeriod',
  'targetSpecies',
] as const;

/**
 * AdministrableProductDefinitionRouteOfAdministration - The path by which the product is taken into or makes contact with the body
 *
 * @see https://hl7.org/fhir/R4/administrableproductdefinitionrouteofadministration.html
 *
 * @example
 * const administrableProductDefinitionRouteOfAdministration = new AdministrableProductDefinitionRouteOfAdministration({
 *   // ... properties
 * });
 */
export class AdministrableProductDefinitionRouteOfAdministration extends BackboneElement implements IAdministrableProductDefinitionRouteOfAdministration {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Coded expression for the route */
  code: ICodeableConcept;

  /** The first dose (dose quantity) administered can be specified for the product */
  firstDose?: IQuantity;

  /** The maximum single dose that can be administered */
  maxSingleDose?: IQuantity;

  /** The maximum dose quantity to be administered in any one 24-h period */
  maxDosePerDay?: IQuantity;

  /** The maximum dose per treatment period that can be administered */
  maxDosePerTreatmentPeriod?: IRatio;

  /** The maximum treatment period during which the product can be administered */
  maxTreatmentPeriod?: IDuration;

  /** A species for which this route applies */
  targetSpecies?: IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdministrableProductDefinitionRouteOfAdministration>) {
    super(data);
    if (data) {
      this.assignProps(data, ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdministrableProductDefinitionRouteOfAdministration from a JSON object
   */
  static fromJSON(json: IAdministrableProductDefinitionRouteOfAdministration): AdministrableProductDefinitionRouteOfAdministration {
    return new AdministrableProductDefinitionRouteOfAdministration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdministrableProductDefinitionRouteOfAdministration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdministrableProductDefinitionRouteOfAdministration>): AdministrableProductDefinitionRouteOfAdministration {
    return new AdministrableProductDefinitionRouteOfAdministration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdministrableProductDefinitionRouteOfAdministration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdministrableProductDefinitionRouteOfAdministration) => Partial<IAdministrableProductDefinitionRouteOfAdministration>): AdministrableProductDefinitionRouteOfAdministration {
    const currentData = this.toJSON();
    return new AdministrableProductDefinitionRouteOfAdministration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdministrableProductDefinitionRouteOfAdministration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdministrableProductDefinitionRouteOfAdministration {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADMINISTRABLE_PRODUCT_DEFINITION_ROUTE_OF_ADMINISTRATION_PROPERTIES);
    return result as IAdministrableProductDefinitionRouteOfAdministration;
  }

  /**
   * Create a deep clone of this AdministrableProductDefinitionRouteOfAdministration
   */
  clone(): AdministrableProductDefinitionRouteOfAdministration {
    return new AdministrableProductDefinitionRouteOfAdministration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdministrableProductDefinitionRouteOfAdministration
   */
  toString(): string {
    const parts: string[] = ['AdministrableProductDefinitionRouteOfAdministration'];
    return parts.join(', ');
  }
}
