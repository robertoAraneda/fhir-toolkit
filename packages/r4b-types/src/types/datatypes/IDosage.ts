import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';
import type { IRatio } from './IRatio.js';
import type { ITiming } from './ITiming.js';
import type { IDosageDoseAndRate } from '../backbones/IDosageDoseAndRate.js';

/**
 * Dosage Interface
 * 
 * Indicates how the medication is/was taken or should be taken by the patient.
 * 
 *
 * @see https://hl7.org/fhir/R4B/dosage.html
 */
export interface IDosage extends IBackboneElement {
  /**
   * The order of the dosage instructions
   */
  sequence?: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Free text dosage instructions e.g. SIG
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness"
   */
  additionalInstruction?: ICodeableConcept[];

  /**
   * Patient or consumer oriented instructions
   */
  patientInstruction?: string;
  /**
   * Extension for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * When medication should be administered
   */
  timing?: ITiming;

  /**
   * Take "as needed" (for x)
   */
  asNeededBoolean?: boolean;
  /**
   * Extension for asNeededBoolean
   */
  _asNeededBoolean?: IElement;

  /**
   * Take "as needed" (for x)
   */
  asNeededCodeableConcept?: ICodeableConcept;

  /**
   * Body site to administer to
   */
  site?: ICodeableConcept;

  /**
   * How drug should enter body
   */
  route?: ICodeableConcept;

  /**
   * Technique for administering medication
   */
  method?: ICodeableConcept;

  /**
   * Amount of medication administered
   */
  doseAndRate?: IDosageDoseAndRate[];

  /**
   * Upper limit on medication per unit of time
   */
  maxDosePerPeriod?: IRatio;

  /**
   * Upper limit on medication per administration
   */
  maxDosePerAdministration?: IQuantity;

  /**
   * Upper limit on medication per lifetime of the patient
   */
  maxDosePerLifetime?: IQuantity;

}
