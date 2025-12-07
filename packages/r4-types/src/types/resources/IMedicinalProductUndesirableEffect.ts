import type { ICodeableConcept, IDomainResource, IReference } from '../../base/index.js';
import type { IPopulation } from '../datatypes/IPopulation.js';

/**
 * MedicinalProductUndesirableEffect Interface
 * 
 * Describe the undesirable effects of the medicinal product.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductundesirableeffect.html
 */
export interface IMedicinalProductUndesirableEffect extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductUndesirableEffect';

  /**
   * The medication for which this is an indication
   */
  subject?: IReference<'MedicinalProduct' | 'Medication'>[];

  /**
   * The symptom, condition or undesirable effect
   */
  symptomConditionEffect?: ICodeableConcept;

  /**
   * Classification of the effect
   */
  classification?: ICodeableConcept;

  /**
   * The frequency of occurrence of the effect
   */
  frequencyOfOccurrence?: ICodeableConcept;

  /**
   * The population group to which this applies
   */
  population?: IPopulation[];

}
