import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ProcedureFocalDevice Interface
 * 
 * Manipulated, implanted, or removed device
 * 
 *
 * @see https://hl7.org/fhir/R5/procedurefocaldevice.html
 */
export interface IProcedureFocalDevice extends IBackboneElement {
  /**
   * Kind of change to device
   */
  action?: ICodeableConcept;

  /**
   * Device that was changed
   */
  manipulated: IReference<'Device'>;

}
