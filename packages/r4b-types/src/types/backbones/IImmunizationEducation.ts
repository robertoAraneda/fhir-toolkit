import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ImmunizationEducation Interface
 * 
 * Educational material presented to patient
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationeducation.html
 */
export interface IImmunizationEducation extends IBackboneElement {
  /**
   * Educational material document identifier
   */
  documentType?: string;
  /**
   * Extension for documentType
   */
  _documentType?: IElement;

  /**
   * Educational material reference pointer
   */
  reference?: string;
  /**
   * Extension for reference
   */
  _reference?: IElement;

  /**
   * Educational material publication date
   */
  publicationDate?: string;
  /**
   * Extension for publicationDate
   */
  _publicationDate?: IElement;

  /**
   * Educational material presentation date
   */
  presentationDate?: string;
  /**
   * Extension for presentationDate
   */
  _presentationDate?: IElement;

}
