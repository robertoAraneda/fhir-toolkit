import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * MedicationAdministrationDosage Interface
 * 
 * Details of how medication was taken
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationadministrationdosage.html
 */
export interface IMedicationAdministrationDosage extends IBackboneElement {
  /**
   * Free text dosage instructions e.g. SIG
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Body site administered to
   */
  site?: ICodeableConcept;

  /**
   * Path of substance into body
   */
  route?: ICodeableConcept;

  /**
   * How drug was administered
   */
  method?: ICodeableConcept;

  /**
   * Amount of medication per dose
   */
  dose?: IQuantity;

  /**
   * Dose quantity per unit of time
   */
  rateRatio?: IRatio;

  /**
   * Dose quantity per unit of time
   */
  rateQuantity?: IQuantity;

}
