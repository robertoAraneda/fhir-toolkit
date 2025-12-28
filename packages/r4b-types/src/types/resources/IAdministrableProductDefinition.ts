import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IAdministrableProductDefinitionProperty } from '../backbones/IAdministrableProductDefinitionProperty.js';
import type { IAdministrableProductDefinitionRouteOfAdministration } from '../backbones/IAdministrableProductDefinitionRouteOfAdministration.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * AdministrableProductDefinition Interface
 * 
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 * 
 *
 * @see https://hl7.org/fhir/R4B/administrableproductdefinition.html
 */
export interface IAdministrableProductDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'AdministrableProductDefinition';

  /**
   * An identifier for the administrable product
   */
  identifier?: IIdentifier[];

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product
   */
  formOf?: IReference<'MedicinalProductDefinition'>[];

  /**
   * The dose form of the final product after necessary reconstitution or processing
   */
  administrableDoseForm?: ICodeableConcept;

  /**
   * The presentation type in which this item is given to a patient. e.g. for a spray - 'puff'
   */
  unitOfPresentation?: ICodeableConcept;

  /**
   * Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form
   */
  producedFrom?: IReference<'ManufacturedItemDefinition'>[];

  /**
   * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton, or using by incoming references from the Ingredient resource
   */
  ingredient?: ICodeableConcept[];

  /**
   * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product
   */
  device?: IReference<'DeviceDefinition'>;

  /**
   * Characteristics e.g. a product's onset of action
   */
  property?: IAdministrableProductDefinitionProperty[];

  /**
   * The path by which the product is taken into or makes contact with the body
   */
  routeOfAdministration: IAdministrableProductDefinitionRouteOfAdministration[];

}
