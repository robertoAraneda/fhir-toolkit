import type { IBackboneElement, ICodeableConcept, ICoding, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IContractTermAssetContext } from './IContractTermAssetContext.js';
import type { IContractTermAssetValuedItem } from './IContractTermAssetValuedItem.js';
import type { IContractTermOfferAnswer } from './IContractTermOfferAnswer.js';

/**
 * ContractTermAsset Interface
 * 
 * Contract Term Asset List
 * 
 *
 * @see https://hl7.org/fhir/R4/contracttermasset.html
 */
export interface IContractTermAsset extends IBackboneElement {
  /**
   * Range of asset
   */
  scope?: ICodeableConcept;

  /**
   * Asset category
   */
  type?: ICodeableConcept[];

  /**
   * Associated entities
   */
  typeReference?: IReference<'Resource'>[];

  /**
   * Asset sub-category
   */
  subtype?: ICodeableConcept[];

  /**
   * Kinship of the asset
   */
  relationship?: ICoding;

  /**
   * Circumstance of the asset
   */
  context?: IContractTermAssetContext[];

  /**
   * Quality desctiption of asset
   */
  condition?: string;
  /**
   * Extension for condition
   */
  _condition?: IElement;

  /**
   * Asset availability types
   */
  periodType?: ICodeableConcept[];

  /**
   * Time period of the asset
   */
  period?: IPeriod[];

  /**
   * Time period
   */
  usePeriod?: IPeriod[];

  /**
   * Asset clause or question text
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Pointer to asset text
   */
  linkId?: string[];
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Response to assets
   */
  answer?: IContractTermOfferAnswer[];

  /**
   * Asset restriction numbers
   */
  securityLabelNumber?: number[];
  /**
   * Extension for securityLabelNumber
   */
  _securityLabelNumber?: IElement;

  /**
   * Contract Valued Item List
   */
  valuedItem?: IContractTermAssetValuedItem[];

}
