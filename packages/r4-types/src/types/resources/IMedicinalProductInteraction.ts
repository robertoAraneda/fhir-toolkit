import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IMedicinalProductInteractionInteractant } from '../backbones/IMedicinalProductInteractionInteractant.js';

/**
 * MedicinalProductInteraction Interface
 * 
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductinteraction.html
 */
export interface IMedicinalProductInteraction extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductInteraction';

  /**
   * The medication for which this is a described interaction
   */
  subject?: IReference<'MedicinalProduct' | 'Medication' | 'Substance'>[];

  /**
   * The interaction described
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The specific medication, food or laboratory test that interacts
   */
  interactant?: IMedicinalProductInteractionInteractant[];

  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction
   */
  type?: ICodeableConcept;

  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication"
   */
  effect?: ICodeableConcept;

  /**
   * The incidence of the interaction, e.g. theoretical, observed
   */
  incidence?: ICodeableConcept;

  /**
   * Actions for managing the interaction
   */
  management?: ICodeableConcept;

}
