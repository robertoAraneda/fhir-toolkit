import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * SupplyRequestParameter Interface
 * 
 * Ordered item details
 * 
 *
 * @see https://hl7.org/fhir/R4B/supplyrequestparameter.html
 */
export interface ISupplyRequestParameter extends IBackboneElement {
  /**
   * Item detail
   */
  code?: ICodeableConcept;

  /**
   * Value of detail
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of detail
   */
  valueQuantity?: IQuantity;

  /**
   * Value of detail
   */
  valueRange?: IRange;

  /**
   * Value of detail
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

}
