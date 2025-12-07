import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * InventoryItemResponsibleOrganization Interface
 * 
 * Organization(s) responsible for the product
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryitemresponsibleorganization.html
 */
export interface IInventoryItemResponsibleOrganization extends IBackboneElement {
  /**
   * The role of the organization e.g. manufacturer, distributor, or other
   */
  role: ICodeableConcept;

  /**
   * An organization that is associated with the item
   */
  organization: IReference<'Organization'>;

}
