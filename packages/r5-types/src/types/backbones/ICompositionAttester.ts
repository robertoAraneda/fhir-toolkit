import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * CompositionAttester Interface
 * 
 * Attests to accuracy of composition
 * 
 *
 * @see https://hl7.org/fhir/R4/compositionattester.html
 */
export interface ICompositionAttester extends IBackboneElement {
  /**
   * personal | professional | legal | official
   */
  mode: ICodeableConcept;

  /**
   * When the composition was attested
   */
  time?: string;
  /**
   * Extension for time
   */
  _time?: IElement;

  /**
   * Who attested the composition
   */
  party?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
