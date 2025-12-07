import type { ICodeableConcept, IDomainResource, IReference } from '../../base/index.js';
import type { IPopulation } from '../datatypes/IPopulation.js';
import type { IMedicinalProductContraindicationOtherTherapy } from '../backbones/IMedicinalProductContraindicationOtherTherapy.js';

/**
 * MedicinalProductContraindication Interface
 * 
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductcontraindication.html
 */
export interface IMedicinalProductContraindication extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductContraindication';

  /**
   * The medication for which this is an indication
   */
  subject?: IReference<'MedicinalProduct' | 'Medication'>[];

  /**
   * The disease, symptom or procedure for the contraindication
   */
  disease?: ICodeableConcept;

  /**
   * The status of the disease or symptom for the contraindication
   */
  diseaseStatus?: ICodeableConcept;

  /**
   * A comorbidity (concurrent condition) or coinfection
   */
  comorbidity?: ICodeableConcept[];

  /**
   * Information about the use of the medicinal product in relation to other therapies as part of the indication
   */
  therapeuticIndication?: IReference<'MedicinalProductIndication'>[];

  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication
   */
  otherTherapy?: IMedicinalProductContraindicationOtherTherapy[];

  /**
   * The population group to which this applies
   */
  population?: IPopulation[];

}
