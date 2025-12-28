import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { CatalogEntryRelationTypeType } from '../../valuesets/index.js';

/**
 * CatalogEntryRelatedEntry Interface
 * 
 * An item that this catalog entry is related to
 * 
 *
 * @see https://hl7.org/fhir/R4B/catalogentryrelatedentry.html
 */
export interface ICatalogEntryRelatedEntry extends IBackboneElement {
  /**
   * triggers | is-replaced-by
   */
  relationtype: CatalogEntryRelationTypeType;
  /**
   * Extension for relationtype
   */
  _relationtype?: IElement;

  /**
   * The reference to the related item
   */
  item: IReference<'CatalogEntry'>;

}
