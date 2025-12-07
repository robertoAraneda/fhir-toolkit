import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentation Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunitstructuralrepresentation.html
 */
export interface ISubstancePolymerRepeatRepeatUnitStructuralRepresentation extends IBackboneElement {
  /**
   * Todo
   */
  type?: ICodeableConcept;

  /**
   * Todo
   */
  representation?: string;
  /**
   * Extension for representation
   */
  _representation?: IElement;

  /**
   * Todo
   */
  attachment?: IAttachment;

}
