import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * AuditEventEntityDetail Interface
 * 
 * Additional Information about the entity
 * 
 *
 * @see https://hl7.org/fhir/R4/auditevententitydetail.html
 */
export interface IAuditEventEntityDetail extends IBackboneElement {
  /**
   * Name of the property
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Property value
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Property value
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

}
