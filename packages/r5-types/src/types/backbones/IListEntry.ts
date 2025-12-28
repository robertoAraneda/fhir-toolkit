import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ListEntry Interface
 * 
 * Entries in the list
 * 
 *
 * @see https://hl7.org/fhir/R5/listentry.html
 */
export interface IListEntry extends IBackboneElement {
  /**
   * Status/Workflow information about this item
   */
  flag?: ICodeableConcept;

  /**
   * If this item is actually marked as deleted
   */
  deleted?: boolean;
  /**
   * Extension for deleted
   */
  _deleted?: IElement;

  /**
   * When item added to list
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Actual entry
   */
  item: IReference<'Resource'>;

}
