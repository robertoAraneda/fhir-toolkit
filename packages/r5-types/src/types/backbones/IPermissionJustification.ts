import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * PermissionJustification Interface
 * 
 * The asserted justification for using the data
 * 
 *
 * @see https://hl7.org/fhir/R4/permissionjustification.html
 */
export interface IPermissionJustification extends IBackboneElement {
  /**
   * The regulatory grounds upon which this Permission builds
   */
  basis?: ICodeableConcept[];

  /**
   * Justifing rational
   */
  evidence?: IReference<'Resource'>[];

}
