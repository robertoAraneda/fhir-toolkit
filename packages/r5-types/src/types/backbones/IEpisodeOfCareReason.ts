import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * EpisodeOfCareReason Interface
 * 
 * The list of medical reasons that are expected to be addressed during the episode of care
 * 
 *
 * @see https://hl7.org/fhir/R5/episodeofcarereason.html
 */
export interface IEpisodeOfCareReason extends IBackboneElement {
  /**
   * What the reason value should be used for/as
   */
  use?: ICodeableConcept;

  /**
   * Medical reason to be addressed
   */
  value?: ICodeableReference[];

}
