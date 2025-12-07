import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IManufacturedItemDefinitionProperty } from '../backbones/IManufacturedItemDefinitionProperty.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ManufacturedItemDefinition Interface
 * 
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 * 
 *
 * @see https://hl7.org/fhir/R4/manufactureditemdefinition.html
 */
export interface IManufacturedItemDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ManufacturedItemDefinition';

  /**
   * Unique identifier
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
   * Dose form as manufactured (before any necessary transformation)
   */
  manufacturedDoseForm: ICodeableConcept;

  /**
   * The “real world” units in which the quantity of the item is described
   */
  unitOfPresentation?: ICodeableConcept;

  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues)
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource
   */
  ingredient?: ICodeableConcept[];

  /**
   * General characteristics of this item
   */
  property?: IManufacturedItemDefinitionProperty[];

}
