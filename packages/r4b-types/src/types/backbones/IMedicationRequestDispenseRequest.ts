import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
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
 * @see https://hl7.org/fhir/R4B/medicationrequestdispenserequest.html
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
   * Intended dispenser
   */
  performer?: IReference<'Organization'>;

}
