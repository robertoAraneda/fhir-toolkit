import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * SubstanceSpecificationRelationship Interface
 * 
 * A link between this substance and another, with details of the relationship
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationrelationship.html
 */
export interface ISubstanceSpecificationRelationship extends IBackboneElement {
  /**
   * A pointer to another substance, as a resource or just a representational code
   */
  substanceReference?: IReference;

  /**
   * A pointer to another substance, as a resource or just a representational code
   */
  substanceCodeableConcept?: ICodeableConcept;

  /**
   * For example "salt to parent", "active moiety", "starting material"
   */
  relationship?: ICodeableConcept;

  /**
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships
   */
  isDefining?: boolean;
  /**
   * Extension for isDefining
   */
  _isDefining?: IElement;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
   */
  amountQuantity?: IQuantity;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
   */
  amountRange?: IRange;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
   */
  amountRatio?: IRatio;

  /**
   * A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other
   */
  amountString?: string;
  /**
   * Extension for amountString
   */
  _amountString?: IElement;

  /**
   * For use when the numeric
   */
  amountRatioLowLimit?: IRatio;

  /**
   * An operator for the amount, for example "average", "approximately", "less than"
   */
  amountType?: ICodeableConcept;

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

}
