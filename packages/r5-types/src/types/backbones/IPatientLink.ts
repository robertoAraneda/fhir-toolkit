import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { LinkTypeType } from '../../valuesets/index.js';

/**
 * PatientLink Interface
 * 
 * Link to a Patient or RelatedPerson resource that concerns the same actual individual
 * 
 *
 * @see https://hl7.org/fhir/R5/patientlink.html
 */
export interface IPatientLink extends IBackboneElement {
  /**
   * The other patient or related person resource that the link refers to
   */
  other: IReference<'Patient' | 'RelatedPerson'>;

  /**
   * replaced-by | replaces | refer | seealso
   */
  type: LinkTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

}
