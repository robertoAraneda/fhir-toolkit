import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicinalProductContraindicationOtherTherapy Interface
 * 
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductcontraindicationothertherapy.html
 */
export interface IMedicinalProductContraindicationOtherTherapy extends IBackboneElement {
  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy
   */
  therapyRelationshipType: ICodeableConcept;

  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication
   */
  medicationReference?: IReference;

}
