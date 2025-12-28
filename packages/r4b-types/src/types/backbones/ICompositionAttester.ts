import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { CompositionAttestationModeType } from '../../valuesets/index.js';

/**
 * CompositionAttester Interface
 * 
 * Attests to accuracy of composition
 * 
 *
 * @see https://hl7.org/fhir/R4B/compositionattester.html
 */
export interface ICompositionAttester extends IBackboneElement {
  /**
   * personal | professional | legal | official
   */
  mode: CompositionAttestationModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

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
