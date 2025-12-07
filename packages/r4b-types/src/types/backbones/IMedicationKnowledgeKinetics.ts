import type { IBackboneElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationKnowledgeKinetics Interface
 * 
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgekinetics.html
 */
export interface IMedicationKnowledgeKinetics extends IBackboneElement {
  /**
   * The drug concentration measured at certain discrete points in time
   */
  areaUnderCurve?: IQuantity[];

  /**
   * The median lethal dose of a drug
   */
  lethalDose50?: IQuantity[];

  /**
   * Time required for concentration in the body to decrease by half
   */
  halfLifePeriod?: IDuration;

}
