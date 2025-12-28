import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * DiagnosticReportSupportingInfo Interface
 * 
 * Additional information supporting the diagnostic report
 * 
 *
 * @see https://hl7.org/fhir/R5/diagnosticreportsupportinginfo.html
 */
export interface IDiagnosticReportSupportingInfo extends IBackboneElement {
  /**
   * Supporting information role code
   */
  type: ICodeableConcept;

  /**
   * Supporting information reference
   */
  reference: IReference<'Procedure' | 'Observation' | 'DiagnosticReport' | 'Citation'>;

}
