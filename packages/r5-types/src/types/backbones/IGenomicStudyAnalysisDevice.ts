import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * GenomicStudyAnalysisDevice Interface
 * 
 * Devices used for the analysis (e.g., instruments, software), with settings and parameters
 * 
 *
 * @see https://hl7.org/fhir/R5/genomicstudyanalysisdevice.html
 */
export interface IGenomicStudyAnalysisDevice extends IBackboneElement {
  /**
   * Device used for the analysis
   */
  device?: IReference<'Device'>;

  /**
   * Specific function for the device used for the analysis
   */
  function?: ICodeableConcept;

}
