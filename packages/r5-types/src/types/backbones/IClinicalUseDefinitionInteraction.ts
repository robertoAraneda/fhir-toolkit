import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IClinicalUseDefinitionInteractionInteractant } from './IClinicalUseDefinitionInteractionInteractant.js';

/**
 * ClinicalUseDefinitionInteraction Interface
 * 
 * Specifics for when this is an interaction
 * 
 *
 * @see https://hl7.org/fhir/R5/clinicalusedefinitioninteraction.html
 */
export interface IClinicalUseDefinitionInteraction extends IBackboneElement {
  /**
   * The specific medication, product, food etc. or laboratory test that interacts
   */
  interactant?: IClinicalUseDefinitionInteractionInteractant[];

  /**
   * The type of the interaction e.g. drug-drug interaction, drug-lab test interaction
   */
  type?: ICodeableConcept;

  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication"
   */
  effect?: ICodeableReference;

  /**
   * The incidence of the interaction, e.g. theoretical, observed
   */
  incidence?: ICodeableConcept;

  /**
   * Actions for managing the interaction
   */
  management?: ICodeableConcept[];

}
