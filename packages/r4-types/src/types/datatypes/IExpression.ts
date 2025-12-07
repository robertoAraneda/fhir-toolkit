import type { IElement } from '../../base/index.js';

/**
 * Expression Interface
 * 
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 * 
 *
 * @see https://hl7.org/fhir/R4/expression.html
 */
export interface IExpression extends IElement {
  /**
   * Natural language description of the condition
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Short name assigned to expression for reuse
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * text/cql | text/fhirpath | application/x-fhir-query | etc.
   */
  language: string;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Expression in specified language
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

  /**
   * Where the expression is found
   */
  reference?: string;
  /**
   * Extension for reference
   */
  _reference?: IElement;

}
