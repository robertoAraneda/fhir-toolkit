import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * SubstanceDefinitionRelationship Interface
 * 
 * A link between this substance and another
 * 
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionrelationship.html
 */
export interface ISubstanceDefinitionRelationship extends IBackboneElement {
  /**
   * A pointer to another substance, as a resource or a representational code
   */
  substanceDefinitionReference?: IReference;

  /**
   * A pointer to another substance, as a resource or a representational code
   */
  substanceDefinitionCodeableConcept?: ICodeableConcept;

  /**
   * For example "salt to parent", "active moiety"
   */
  type: ICodeableConcept;

  /**
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible relationships
   */
  isDefining?: boolean;
  /**
   * Extension for isDefining
   */
  _isDefining?: IElement;

  /**
   * A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other
   */
  amountQuantity?: IQuantity;

  /**
   * A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other
   */
  amountRatio?: IRatio;

  /**
   * A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other
   */
  amountString?: string;
  /**
   * Extension for amountString
   */
  _amountString?: IElement;

  /**
   * For use when the numeric has an uncertain range
   */
  ratioHighLimitAmount?: IRatio;

  /**
   * An operator for the amount, for example "average", "approximately", "less than"
   */
  comparator?: ICodeableConcept;

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

}
