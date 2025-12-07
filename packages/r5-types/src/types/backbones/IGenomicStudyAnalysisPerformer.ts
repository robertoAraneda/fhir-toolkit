import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * GenomicStudyAnalysisPerformer Interface
 * 
 * Performer for the analysis event
 * 
 *
 * @see https://hl7.org/fhir/R4/genomicstudyanalysisperformer.html
 */
export interface IGenomicStudyAnalysisPerformer extends IBackboneElement {
  /**
   * The organization, healthcare professional, or others who participated in performing this analysis
   */
  actor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device'>;

  /**
   * Role of the actor for this analysis
   */
  role?: ICodeableConcept;

}
