import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * GenomicStudyAnalysisOutput Interface
 * 
 * Outputs for the analysis event
 * 
 *
 * @see https://hl7.org/fhir/R4/genomicstudyanalysisoutput.html
 */
export interface IGenomicStudyAnalysisOutput extends IBackboneElement {
  /**
   * File containing output data
   */
  file?: IReference<'DocumentReference'>;

  /**
   * Type of output data (e.g., VCF, MAF, or BAM)
   */
  type?: ICodeableConcept;

}
