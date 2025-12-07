import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * CitationCitedArtifactPart Interface
 * 
 * The component of the article or artifact
 * 
 *
 * @see https://hl7.org/fhir/R4/citationcitedartifactpart.html
 */
export interface ICitationCitedArtifactPart extends IBackboneElement {
  /**
   * The kind of component
   */
  type?: ICodeableConcept;

  /**
   * The specification of the component
   */
  value?: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * The citation for the full article or artifact
   */
  baseCitation?: IReference<'Citation'>;

}
