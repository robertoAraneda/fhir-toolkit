import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * EvidenceStatisticAttributeEstimate Interface
 * 
 * An attribute of the Statistic
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencestatisticattributeestimate.html
 */
export interface IEvidenceStatisticAttributeEstimate extends IBackboneElement {
  /**
   * Textual description of the attribute estimate
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Footnote or explanatory note about the estimate
   */
  note?: IAnnotation[];

  /**
   * The type of attribute estimate, e.g., confidence interval or p value
   */
  type?: ICodeableConcept;

  /**
   * The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure
   */
  quantity?: IQuantity;

  /**
   * Level of confidence interval, e.g., 0.95 for 95% confidence interval
   */
  level?: number;
  /**
   * Extension for level
   */
  _level?: IElement;

  /**
   * Lower and upper bound values of the attribute estimate
   */
  range?: IRange;

  /**
   * A nested attribute estimate; which is the attribute estimate of an attribute estimate
   */
  attributeEstimate?: IEvidenceStatisticAttributeEstimate[];

}
