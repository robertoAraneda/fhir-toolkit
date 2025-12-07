import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { LinkTypeType } from '../../valuesets/index.js';

/**
 * PatientLink Interface
 * 
 * Link to another patient resource that concerns the same actual person
 * 
 *
 * @see https://hl7.org/fhir/R4/patientlink.html
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
