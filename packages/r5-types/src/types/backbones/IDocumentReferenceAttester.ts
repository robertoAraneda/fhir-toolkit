import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * DocumentReferenceAttester Interface
 * 
 * Attests to accuracy of the document
 * 
 *
 * @see https://hl7.org/fhir/R4/documentreferenceattester.html
 */
export interface IDocumentReferenceAttester extends IBackboneElement {
  /**
   * personal | professional | legal | official
   */
  mode: ICodeableConcept;

  /**
   * When the document was attested
   */
  time?: string;
  /**
   * Extension for time
   */
  _time?: IElement;

  /**
   * Who attested the document
   */
  party?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
