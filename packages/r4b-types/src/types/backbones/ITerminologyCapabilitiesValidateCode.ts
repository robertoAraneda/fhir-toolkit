import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * TerminologyCapabilitiesValidateCode Interface
 * 
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiesvalidatecode.html
 */
export interface ITerminologyCapabilitiesValidateCode extends IBackboneElement {
  /**
   * Whether translations are validated
   */
  translations: boolean;
  /**
   * Extension for translations
   */
  _translations?: IElement;

}
