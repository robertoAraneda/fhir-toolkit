import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ISubstanceSpecificationNameOfficial } from './ISubstanceSpecificationNameOfficial.js';

/**
 * SubstanceSpecificationName Interface
 * 
 * Names applicable to this substance
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationname.html
 */
export interface ISubstanceSpecificationName extends IBackboneElement {
  /**
   * The actual name
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name type
   */
  type?: ICodeableConcept;

  /**
   * The status of the name
   */
  status?: ICodeableConcept;

  /**
   * If this is the preferred name for this substance
   */
  preferred?: boolean;
  /**
   * Extension for preferred
   */
  _preferred?: IElement;

  /**
   * Language of the name
   */
  language?: ICodeableConcept[];

  /**
   * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive
   */
  domain?: ICodeableConcept[];

  /**
   * The jurisdiction where this name applies
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * A synonym of this name
   */
  synonym?: ISubstanceSpecificationName[];

  /**
   * A translation for this name
   */
  translation?: ISubstanceSpecificationName[];

  /**
   * Details of the official nature of this name
   */
  official?: ISubstanceSpecificationNameOfficial[];

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

}
