import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TestScriptVariable Interface
 * 
 * Placeholder for evaluated elements
 * 
 *
 * @see https://hl7.org/fhir/R4B/testscriptvariable.html
 */
export interface ITestScriptVariable extends IBackboneElement {
  /**
   * Descriptive name for this variable
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Default, hard-coded, or user-defined value for this variable
   */
  defaultValue?: string;
  /**
   * Extension for defaultValue
   */
  _defaultValue?: IElement;

  /**
   * Natural language description of the variable
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The FHIRPath expression against the fixture body
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

  /**
   * HTTP header field name for source
   */
  headerField?: string;
  /**
   * Extension for headerField
   */
  _headerField?: IElement;

  /**
   * Hint help text for default value to enter
   */
  hint?: string;
  /**
   * Extension for hint
   */
  _hint?: IElement;

  /**
   * XPath or JSONPath against the fixture body
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * Fixture Id of source expression or headerField within this variable
   */
  sourceId?: string;
  /**
   * Extension for sourceId
   */
  _sourceId?: IElement;

}
