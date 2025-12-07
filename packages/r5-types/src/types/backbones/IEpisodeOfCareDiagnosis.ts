import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * EpisodeOfCareDiagnosis Interface
 * 
 * The list of medical conditions that were addressed during the episode of care
 * 
 *
 * @see https://hl7.org/fhir/R4/episodeofcarediagnosis.html
 */
export interface IEpisodeOfCareDiagnosis extends IBackboneElement {
  /**
   * The medical condition that was addressed during the episode of care
   */
  condition?: ICodeableReference[];

  /**
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …)
   */
  use?: ICodeableConcept;

}
