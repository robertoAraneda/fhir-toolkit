import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';

/**
 * DetectedIssueMitigation Interface
 * 
 * Step taken to address
 * 
 *
 * @see https://hl7.org/fhir/R5/detectedissuemitigation.html
 */
export interface IDetectedIssueMitigation extends IBackboneElement {
  /**
   * What mitigation?
   */
  action: ICodeableConcept;

  /**
   * Date committed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who is committing?
   */
  author?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Additional notes about the mitigation
   */
  note?: IAnnotation[];

}
