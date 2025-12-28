import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ILinkageItem } from '../backbones/ILinkageItem.js';

/**
 * Linkage Interface
 * 
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 * 
 *
 * @see https://hl7.org/fhir/R4B/linkage.html
 */
export interface ILinkage extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Linkage';

  /**
   * Whether this linkage assertion is active or not
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * Who is responsible for linkages
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Item to be linked
   */
  item: ILinkageItem[];

}
