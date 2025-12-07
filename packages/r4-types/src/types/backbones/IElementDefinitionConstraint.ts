import type { IElement } from '../../base/index.js';
import type { ConstraintSeverityType } from '../../valuesets/index.js';

/**
 * ElementDefinitionConstraint Interface
 * 
 * Condition that must evaluate to true
 * 
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionconstraint.html
 */
export interface IElementDefinitionConstraint extends IElement {
  /**
   * Target of 'condition' reference above
   */
  key: string;
  /**
   * Extension for key
   */
  _key?: IElement;

  /**
   * Why this constraint is necessary or appropriate
   */
  requirements?: string;
  /**
   * Extension for requirements
   */
  _requirements?: IElement;

  /**
   * error | warning
   */
  severity: ConstraintSeverityType;
  /**
   * Extension for severity
   */
  _severity?: IElement;

  /**
   * Human description of constraint
   */
  human: string;
  /**
   * Extension for human
   */
  _human?: IElement;

  /**
   * FHIRPath expression of constraint
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

  /**
   * XPath expression of constraint
   */
  xpath?: string;
  /**
   * Extension for xpath
   */
  _xpath?: IElement;

  /**
   * Reference to original source of constraint
   */
  source?: string;
  /**
   * Extension for source
   */
  _source?: IElement;

}
