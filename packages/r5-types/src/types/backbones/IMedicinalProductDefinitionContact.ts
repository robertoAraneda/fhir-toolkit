import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicinalProductDefinitionContact Interface
 * 
 * A product specific contact, person (in a role), or an organization
 * 
 *
 * @see https://hl7.org/fhir/R5/medicinalproductdefinitioncontact.html
 */
export interface IMedicinalProductDefinitionContact extends IBackboneElement {
  /**
   * Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information
   */
  type?: ICodeableConcept;

  /**
   * A product specific contact, person (in a role), or an organization
   */
  contact: IReference<'Organization' | 'PractitionerRole'>;

}
