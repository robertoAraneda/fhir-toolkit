import type { IBackboneElement, ICoding } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * EncounterClassHistory Interface
 * 
 * List of past encounter classes
 * 
 *
 * @see https://hl7.org/fhir/R4B/encounterclasshistory.html
 */
export interface IEncounterClassHistory extends IBackboneElement {
  /**
   * inpatient | outpatient | ambulatory | emergency +
   */
  class: ICoding;

  /**
   * The time that the episode was in the specified class
   */
  period: IPeriod;

}
