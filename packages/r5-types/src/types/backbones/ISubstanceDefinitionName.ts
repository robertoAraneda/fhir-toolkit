import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ISubstanceDefinitionNameOfficial } from './ISubstanceDefinitionNameOfficial.js';

/**
 * SubstanceDefinitionName Interface
 * 
 * Names applicable to this substance
 * 
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionname.html
 */
export interface ISubstanceDefinitionName extends IBackboneElement {
  /**
   * The actual name
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name type e.g. 'systematic',  'scientific, 'brand'
   */
  type?: ICodeableConcept;

  /**
   * The status of the name e.g. 'current', 'proposed'
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
   * Human language that the name is written in
   */
  language?: ICodeableConcept[];

  /**
   * The use context of this name e.g. as an active ingredient or as a food colour additive
   */
  domain?: ICodeableConcept[];

  /**
   * The jurisdiction where this name applies
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * A synonym of this particular name, by which the substance is also known
   */
  synonym?: ISubstanceDefinitionName[];

  /**
   * A translation for this name into another human language
   */
  translation?: ISubstanceDefinitionName[];

  /**
   * Details of the official nature of this name
   */
  official?: ISubstanceDefinitionNameOfficial[];

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

}
