import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { LinkageTypeType } from '../../valuesets/index.js';

/**
 * LinkageItem Interface
 * 
 * Item to be linked
 * 
 *
 * @see https://hl7.org/fhir/R4B/linkageitem.html
 */
export interface ILinkageItem extends IBackboneElement {
  /**
   * source | alternate | historical
   */
  type: LinkageTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Resource being linked
   */
  resource: IReference<'Resource'>;

}
