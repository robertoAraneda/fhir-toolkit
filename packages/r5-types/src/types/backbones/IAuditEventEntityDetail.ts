import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

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
  type: ICodeableConcept;

  /**
   * Property value
   */
  valueQuantity?: IQuantity;

  /**
   * Property value
   */
  valueCodeableConcept?: ICodeableConcept;

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
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Property value
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Property value
   */
  valueRange?: IRange;

  /**
   * Property value
   */
  valueRatio?: IRatio;

  /**
   * Property value
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Property value
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Property value
   */
  valuePeriod?: IPeriod;

  /**
   * Property value
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

}
