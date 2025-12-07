import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * GenomicStudyAnalysisInput Interface
 * 
 * Inputs for the analysis event
 * 
 *
 * @see https://hl7.org/fhir/R4/genomicstudyanalysisinput.html
 */
export interface IGenomicStudyAnalysisInput extends IBackboneElement {
  /**
   * File containing input data
   */
  file?: IReference<'DocumentReference'>;

  /**
   * Type of input data (e.g., BAM, CRAM, or FASTA)
   */
  type?: ICodeableConcept;

  /**
   * The analysis event or other GenomicStudy that generated this input file
   */
  generatedByIdentifier?: IIdentifier;

  /**
   * The analysis event or other GenomicStudy that generated this input file
   */
  generatedByReference?: IReference;

}
