import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * CoverageClass Interface
 * 
 * Additional coverage classifications
 * 
 *
 * @see https://hl7.org/fhir/R4/coverageclass.html
 */
export interface ICoverageClass extends IBackboneElement {
  /**
   * Type of class such as 'group' or 'plan'
   */
  type: ICodeableConcept;

  /**
   * Value associated with the type
   */
  value: IIdentifier;

  /**
   * Human readable description of the type and value
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

}
