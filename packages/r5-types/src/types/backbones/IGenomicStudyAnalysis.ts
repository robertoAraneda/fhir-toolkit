import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IGenomicStudyAnalysisDevice } from './IGenomicStudyAnalysisDevice.js';
import type { IGenomicStudyAnalysisInput } from './IGenomicStudyAnalysisInput.js';
import type { IGenomicStudyAnalysisOutput } from './IGenomicStudyAnalysisOutput.js';
import type { IGenomicStudyAnalysisPerformer } from './IGenomicStudyAnalysisPerformer.js';

/**
 * GenomicStudyAnalysis Interface
 * 
 * Genomic Analysis Event
 * 
 *
 * @see https://hl7.org/fhir/R4/genomicstudyanalysis.html
 */
export interface IGenomicStudyAnalysis extends IBackboneElement {
  /**
   * Identifiers for the analysis event
   */
  identifier?: IIdentifier[];

  /**
   * Type of the methods used in the analysis (e.g., FISH, Karyotyping, MSI)
   */
  methodType?: ICodeableConcept[];

  /**
   * Type of the genomic changes studied in the analysis (e.g., DNA, RNA, or AA change)
   */
  changeType?: ICodeableConcept[];

  /**
   * Genome build that is used in this analysis
   */
  genomeBuild?: ICodeableConcept;

  /**
   * The defined protocol that describes the analysis
   */
  instantiatesCanonical?: string;
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * The URL pointing to an externally maintained protocol that describes the analysis
   */
  instantiatesUri?: string;
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * Name of the analysis event (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * What the genomic analysis is about, when it is not about the subject of record
   */
  focus?: IReference<'Resource'>[];

  /**
   * The specimen used in the analysis event
   */
  specimen?: IReference<'Specimen'>[];

  /**
   * The date of the analysis event
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Any notes capture with the analysis event
   */
  note?: IAnnotation[];

  /**
   * The protocol that was performed for the analysis event
   */
  protocolPerformed?: IReference<'Procedure' | 'Task'>;

  /**
   * The genomic regions to be studied in the analysis (BED file)
   */
  regionsStudied?: IReference<'DocumentReference' | 'Observation'>[];

  /**
   * Genomic regions actually called in the analysis event (BED file)
   */
  regionsCalled?: IReference<'DocumentReference' | 'Observation'>[];

  /**
   * Inputs for the analysis event
   */
  input?: IGenomicStudyAnalysisInput[];

  /**
   * Outputs for the analysis event
   */
  output?: IGenomicStudyAnalysisOutput[];

  /**
   * Performer for the analysis event
   */
  performer?: IGenomicStudyAnalysisPerformer[];

  /**
   * Devices used for the analysis (e.g., instruments, software), with settings and parameters
   */
  device?: IGenomicStudyAnalysisDevice[];

}
