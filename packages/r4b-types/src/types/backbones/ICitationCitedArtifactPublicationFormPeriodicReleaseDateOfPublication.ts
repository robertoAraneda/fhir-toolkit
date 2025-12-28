import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication Interface
 * 
 * Defining the date on which the issue of the journal was published
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactpublicationformperiodicreleasedateofpublication.html
 */
export interface ICitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication extends IBackboneElement {
  /**
   * Date on which the issue of the journal was published
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Year on which the issue of the journal was published
   */
  year?: string;
  /**
   * Extension for year
   */
  _year?: IElement;

  /**
   * Month on which the issue of the journal was published
   */
  month?: string;
  /**
   * Extension for month
   */
  _month?: IElement;

  /**
   * Day on which the issue of the journal was published
   */
  day?: string;
  /**
   * Extension for day
   */
  _day?: IElement;

  /**
   * Season on which the issue of the journal was published
   */
  season?: string;
  /**
   * Extension for season
   */
  _season?: IElement;

  /**
   * Text representation of the date of which the issue of the journal was published
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
