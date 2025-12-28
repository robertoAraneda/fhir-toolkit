import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * CitationCitedArtifactVersion Interface
 * 
 * The defined version of the cited artifact
 * 
 *
 * @see https://hl7.org/fhir/R5/citationcitedartifactversion.html
 */
export interface ICitationCitedArtifactVersion extends IBackboneElement {
  /**
   * The version number or other version identifier
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * Citation for the main version of the cited artifact
   */
  baseCitation?: IReference<'Citation'>;

}
