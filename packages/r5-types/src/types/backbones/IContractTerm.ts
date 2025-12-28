import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IContractTermAction } from './IContractTermAction.js';
import type { IContractTermAsset } from './IContractTermAsset.js';
import type { IContractTermOffer } from './IContractTermOffer.js';
import type { IContractTermSecurityLabel } from './IContractTermSecurityLabel.js';

/**
 * ContractTerm Interface
 * 
 * Contract Term List
 * 
 *
 * @see https://hl7.org/fhir/R5/contractterm.html
 */
export interface IContractTerm extends IBackboneElement {
  /**
   * Contract Term Number
   */
  identifier?: IIdentifier;

  /**
   * Contract Term Issue Date Time
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * Contract Term Effective Time
   */
  applies?: IPeriod;

  /**
   * Term Concern
   */
  topicCodeableConcept?: ICodeableConcept;

  /**
   * Term Concern
   */
  topicReference?: IReference;

  /**
   * Contract Term Type or Form
   */
  type?: ICodeableConcept;

  /**
   * Contract Term Type specific classification
   */
  subType?: ICodeableConcept;

  /**
   * Term Statement
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Protection for the Term
   */
  securityLabel?: IContractTermSecurityLabel[];

  /**
   * Context of the Contract term
   */
  offer: IContractTermOffer;

  /**
   * Contract Term Asset List
   */
  asset?: IContractTermAsset[];

  /**
   * Entity being ascribed responsibility
   */
  action?: IContractTermAction[];

  /**
   * Nested Contract Term Group
   */
  group?: IContractTerm[];

}
