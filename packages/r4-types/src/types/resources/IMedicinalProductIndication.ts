import type { ICodeableConcept, IDomainResource, IReference } from '../../base/index.js';
import type { IPopulation } from '../datatypes/IPopulation.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMedicinalProductIndicationOtherTherapy } from '../backbones/IMedicinalProductIndicationOtherTherapy.js';

/**
 * MedicinalProductIndication Interface
 * 
 * Indication for the Medicinal Product.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductindication.html
 */
export interface IMedicinalProductIndication extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductIndication';

  /**
   * The medication for which this is an indication
   */
  subject?: IReference<'MedicinalProduct' | 'Medication'>[];

  /**
   * The disease, symptom or procedure that is the indication for treatment
   */
  diseaseSymptomProcedure?: ICodeableConcept;

  /**
   * The status of the disease or symptom for which the indication applies
   */
  diseaseStatus?: ICodeableConcept;

  /**
   * Comorbidity (concurrent condition) or co-infection as part of the indication
   */
  comorbidity?: ICodeableConcept[];

  /**
   * The intended effect, aim or strategy to be achieved by the indication
   */
  intendedEffect?: ICodeableConcept;

  /**
   * Timing or duration information as part of the indication
   */
  duration?: IQuantity;

  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication
   */
  otherTherapy?: IMedicinalProductIndicationOtherTherapy[];

  /**
   * Describe the undesirable effects of the medicinal product
   */
  undesirableEffect?: IReference<'MedicinalProductUndesirableEffect'>[];

  /**
   * The population group to which this applies
   */
  population?: IPopulation[];

}
