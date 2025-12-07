import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { ISubstancePolymerMonomerSet } from '../backbones/ISubstancePolymerMonomerSet.js';
import type { ISubstancePolymerRepeat } from '../backbones/ISubstancePolymerRepeat.js';

/**
 * SubstancePolymer Interface
 * 
 * Todo.
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymer.html
 */
export interface ISubstancePolymer extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubstancePolymer';

  /**
   * Todo
   */
  class?: ICodeableConcept;

  /**
   * Todo
   */
  geometry?: ICodeableConcept;

  /**
   * Todo
   */
  copolymerConnectivity?: ICodeableConcept[];

  /**
   * Todo
   */
  modification?: string[];
  /**
   * Extension for modification
   */
  _modification?: IElement;

  /**
   * Todo
   */
  monomerSet?: ISubstancePolymerMonomerSet[];

  /**
   * Todo
   */
  repeat?: ISubstancePolymerRepeat[];

}
