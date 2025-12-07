import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * CapabilityStatementRestSecurity Interface
 * 
 * Information about security of implementation
 * 
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementrestsecurity.html
 */
export interface ICapabilityStatementRestSecurity extends IBackboneElement {
  /**
   * Adds CORS Headers (http://enable-cors.org/)
   */
  cors?: boolean;
  /**
   * Extension for cors
   */
  _cors?: IElement;

  /**
   * OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
   */
  service?: ICodeableConcept[];

  /**
   * General description of how security works
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
