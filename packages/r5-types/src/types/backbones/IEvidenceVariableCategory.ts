import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * EvidenceVariableCategory Interface
 * 
 * A grouping for ordinal or polychotomous variables
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencevariablecategory.html
 */
export interface IEvidenceVariableCategory extends IBackboneElement {
  /**
   * Description of the grouping
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Definition of the grouping
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Definition of the grouping
   */
  valueQuantity?: IQuantity;

  /**
   * Definition of the grouping
   */
  valueRange?: IRange;

}
