import type { ICodeableConcept, IDomainResource, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMedicinalProductPharmaceuticalCharacteristics } from '../backbones/IMedicinalProductPharmaceuticalCharacteristics.js';
import type { IMedicinalProductPharmaceuticalRouteOfAdministration } from '../backbones/IMedicinalProductPharmaceuticalRouteOfAdministration.js';

/**
 * MedicinalProductPharmaceutical Interface
 * 
 * A pharmaceutical product described in terms of its composition and dose form.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceutical.html
 */
export interface IMedicinalProductPharmaceutical extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductPharmaceutical';

  /**
   * An identifier for the pharmaceutical medicinal product
   */
  identifier?: IIdentifier[];

  /**
   * The administrable dose form, after necessary reconstitution
   */
  administrableDoseForm: ICodeableConcept;

  /**
   * Todo
   */
  unitOfPresentation?: ICodeableConcept;

  /**
   * Ingredient
   */
  ingredient?: IReference<'MedicinalProductIngredient'>[];

  /**
   * Accompanying device
   */
  device?: IReference<'DeviceDefinition'>[];

  /**
   * Characteristics e.g. a products onset of action
   */
  characteristics?: IMedicinalProductPharmaceuticalCharacteristics[];

  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body
   */
  routeOfAdministration: IMedicinalProductPharmaceuticalRouteOfAdministration[];

}
