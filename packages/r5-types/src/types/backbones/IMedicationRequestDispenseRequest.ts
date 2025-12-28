import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMedicationRequestDispenseRequestInitialFill } from './IMedicationRequestDispenseRequestInitialFill.js';

/**
 * MedicationRequestDispenseRequest Interface
 * 
 * Medication supply authorization
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationrequestdispenserequest.html
 */
export interface IMedicationRequestDispenseRequest extends IBackboneElement {
  /**
   * First fill details
   */
  initialFill?: IMedicationRequestDispenseRequestInitialFill;

  /**
   * Minimum period of time between dispenses
   */
  dispenseInterval?: IDuration;

  /**
   * Time period supply is authorized for
   */
  validityPeriod?: IPeriod;

  /**
   * Number of refills authorized
   */
  numberOfRepeatsAllowed?: number;
  /**
   * Extension for numberOfRepeatsAllowed
   */
  _numberOfRepeatsAllowed?: IElement;

  /**
   * Amount of medication to supply per dispense
   */
  quantity?: IQuantity;

  /**
   * Number of days supply per dispense
   */
  expectedSupplyDuration?: IDuration;

  /**
   * Intended performer of dispense
   */
  dispenser?: IReference<'Organization'>;

  /**
   * Additional information for the dispenser
   */
  dispenserInstruction?: IAnnotation[];

  /**
   * Type of adherence packaging to use for the dispense
   */
  doseAdministrationAid?: ICodeableConcept;

}
