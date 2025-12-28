import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ClaimSupportingInfo Interface
 * 
 * Supporting information
 * 
 *
 * @see https://hl7.org/fhir/R4B/claimsupportinginfo.html
 */
export interface IClaimSupportingInfo extends IBackboneElement {
  /**
   * Information instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Classification of the supplied information
   */
  category: ICodeableConcept;

  /**
   * Type of information
   */
  code?: ICodeableConcept;

  /**
   * When it occurred
   */
  timingDate?: string;
  /**
   * Extension for timingDate
   */
  _timingDate?: IElement;

  /**
   * When it occurred
   */
  timingPeriod?: IPeriod;

  /**
   * Data to be provided
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Data to be provided
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Data to be provided
   */
  valueQuantity?: IQuantity;

  /**
   * Data to be provided
   */
  valueAttachment?: IAttachment;

  /**
   * Data to be provided
   */
  valueReference?: IReference;

  /**
   * Explanation for the information
   */
  reason?: ICodeableConcept;

}
