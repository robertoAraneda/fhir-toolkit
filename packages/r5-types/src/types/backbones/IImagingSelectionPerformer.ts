import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ImagingSelectionPerformer Interface
 * 
 * Selector of the instances (human or machine)
 * 
 *
 * @see https://hl7.org/fhir/R5/imagingselectionperformer.html
 */
export interface IImagingSelectionPerformer extends IBackboneElement {
  /**
   * Type of performer
   */
  function?: ICodeableConcept;

  /**
   * Author (human or machine)
   */
  actor?: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson' | 'HealthcareService'>;

}
