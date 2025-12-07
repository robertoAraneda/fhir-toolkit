import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * PractitionerQualification Interface
 * 
 * Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
 * 
 *
 * @see https://hl7.org/fhir/R4/practitionerqualification.html
 */
export interface IPractitionerQualification extends IBackboneElement {
  /**
   * An identifier for this qualification for the practitioner
   */
  identifier?: IIdentifier[];

  /**
   * Coded representation of the qualification
   */
  code: ICodeableConcept;

  /**
   * Period during which the qualification is valid
   */
  period?: IPeriod;

  /**
   * Organization that regulates and issues the qualification
   */
  issuer?: IReference<'Organization'>;

}
