import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ClaimResponseError Interface
 * 
 * Processing errors
 * 
 *
 * @see https://hl7.org/fhir/R4/claimresponseerror.html
 */
export interface IClaimResponseError extends IBackboneElement {
  /**
   * Item sequence number
   */
  itemSequence?: number;
  /**
   * Extension for itemSequence
   */
  _itemSequence?: IElement;

  /**
   * Detail sequence number
   */
  detailSequence?: number;
  /**
   * Extension for detailSequence
   */
  _detailSequence?: IElement;

  /**
   * Subdetail sequence number
   */
  subDetailSequence?: number;
  /**
   * Extension for subDetailSequence
   */
  _subDetailSequence?: IElement;

  /**
   * Error code detailing processing issues
   */
  code: ICodeableConcept;

  /**
   * FHIRPath of element(s) related to issue
   */
  expression?: string[];
  /**
   * Extension for expression
   */
  _expression?: IElement;

}
