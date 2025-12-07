import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * EpisodeOfCareDiagnosis Interface
 * 
 * The list of diagnosis relevant to this episode of care
 * 
 *
 * @see https://hl7.org/fhir/R4/episodeofcarediagnosis.html
 */
export interface IEpisodeOfCareDiagnosis extends IBackboneElement {
  /**
   * Conditions/problems/diagnoses this episode of care is for
   */
  condition: IReference<'Condition'>;

  /**
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …)
   */
  role?: ICodeableConcept;

  /**
   * Ranking of the diagnosis (for each role type)
   */
  rank?: number;
  /**
   * Extension for rank
   */
  _rank?: IElement;

}
