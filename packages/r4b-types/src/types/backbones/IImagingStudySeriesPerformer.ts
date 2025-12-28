import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ImagingStudySeriesPerformer Interface
 * 
 * Who performed the series
 * 
 *
 * @see https://hl7.org/fhir/R4B/imagingstudyseriesperformer.html
 */
export interface IImagingStudySeriesPerformer extends IBackboneElement {
  /**
   * Type of performance
   */
  function?: ICodeableConcept;

  /**
   * Who performed the series
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

}
