import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMarketingStatus } from '../datatypes/IMarketingStatus.js';
import type { IManufacturedItemDefinitionComponent } from '../backbones/IManufacturedItemDefinitionComponent.js';
import type { IManufacturedItemDefinitionProperty } from '../backbones/IManufacturedItemDefinitionProperty.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ManufacturedItemDefinition Interface
 * 
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 * 
 *
 * @see https://hl7.org/fhir/R5/manufactureditemdefinition.html
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
   * A descriptive name applied to this item
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Dose form as manufactured (before any necessary transformation)
   */
  manufacturedDoseForm: ICodeableConcept;

  /**
   * The “real-world” units in which the quantity of the item is described
   */
  unitOfPresentation?: ICodeableConcept;

  /**
   * Manufacturer of the item, one of several possible
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * The ingredients of this manufactured item. Only needed if these are not specified by incoming references from the Ingredient resource
   */
  ingredient?: ICodeableConcept[];

  /**
   * General characteristics of this item
   */
  property?: IManufacturedItemDefinitionProperty[];

  /**
   * Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
   */
  component?: IManufacturedItemDefinitionComponent[];

}
