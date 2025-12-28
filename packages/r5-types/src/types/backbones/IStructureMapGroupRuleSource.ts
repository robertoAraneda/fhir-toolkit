import type { IBackboneElement, IElement } from '../../base/index.js';
import type { StructureMapSourceListModeType } from '../../valuesets/index.js';

/**
 * StructureMapGroupRuleSource Interface
 * 
 * Source inputs to the mapping
 * 
 *
 * @see https://hl7.org/fhir/R5/structuremapgrouprulesource.html
 */
export interface IStructureMapGroupRuleSource extends IBackboneElement {
  /**
   * Type or variable this rule applies to
   */
  context: string;
  /**
   * Extension for context
   */
  _context?: IElement;

  /**
   * Specified minimum cardinality
   */
  min?: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Specified maximum cardinality (number or *)
   */
  max?: string;
  /**
   * Extension for max
   */
  _max?: IElement;

  /**
   * Rule only applies if source has this type
   */
  type?: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Default value if no value exists
   */
  defaultValue?: string;
  /**
   * Extension for defaultValue
   */
  _defaultValue?: IElement;

  /**
   * Optional field for this source
   */
  element?: string;
  /**
   * Extension for element
   */
  _element?: IElement;

  /**
   * first | not_first | last | not_last | only_one
   */
  listMode?: StructureMapSourceListModeType;
  /**
   * Extension for listMode
   */
  _listMode?: IElement;

  /**
   * Named context for field, if a field is specified
   */
  variable?: string;
  /**
   * Extension for variable
   */
  _variable?: IElement;

  /**
   * FHIRPath expression  - must be true or the rule does not apply
   */
  condition?: string;
  /**
   * Extension for condition
   */
  _condition?: IElement;

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing
   */
  check?: string;
  /**
   * Extension for check
   */
  _check?: IElement;

  /**
   * Message to put in log if source exists (FHIRPath)
   */
  logMessage?: string;
  /**
   * Extension for logMessage
   */
  _logMessage?: IElement;

}
