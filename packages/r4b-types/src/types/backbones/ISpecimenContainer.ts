import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SpecimenContainer Interface
 * 
 * Direct container of specimen (tube/slide, etc.)
 * 
 *
 * @see https://hl7.org/fhir/R4/specimencontainer.html
 */
export interface ISpecimenContainer extends IBackboneElement {
  /**
   * Id for the container
   */
  identifier?: IIdentifier[];

  /**
   * Textual description of the container
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Kind of container directly associated with specimen
   */
  type?: ICodeableConcept;

  /**
   * Container volume or size
   */
  capacity?: IQuantity;

  /**
   * Quantity of specimen within container
   */
  specimenQuantity?: IQuantity;

  /**
   * Additive associated with container
   */
  additiveCodeableConcept?: ICodeableConcept;

  /**
   * Additive associated with container
   */
  additiveReference?: IReference;

}
