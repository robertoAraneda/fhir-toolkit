import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IAdverseEventSuspectEntityCausality } from './IAdverseEventSuspectEntityCausality.js';

/**
 * AdverseEventSuspectEntity Interface
 * 
 * The suspected agent causing the adverse event
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseeventsuspectentity.html
 */
export interface IAdverseEventSuspectEntity extends IBackboneElement {
  /**
   * Refers to the specific entity that caused the adverse event
   */
  instance: IReference<'Immunization' | 'Procedure' | 'Substance' | 'Medication' | 'MedicationAdministration' | 'MedicationStatement' | 'Device'>;

  /**
   * Information on the possible cause of the event
   */
  causality?: IAdverseEventSuspectEntityCausality[];

}
