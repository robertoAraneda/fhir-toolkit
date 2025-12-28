import type { IDataType, IElement } from '../../base/index.js';
import type { IContactDetail } from './IContactDetail.js';
import type { ContributorTypeType } from '../../valuesets/index.js';

/**
 * Contributor Interface
 * 
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 * 
 *
 * @see https://hl7.org/fhir/R5/contributor.html
 */
export interface IContributor extends IDataType {
  /**
   * author | editor | reviewer | endorser
   */
  type: ContributorTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Who contributed the content
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Contact details of the contributor
   */
  contact?: IContactDetail[];

}
