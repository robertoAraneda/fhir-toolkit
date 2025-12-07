import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * BiologicallyDerivedProductProperty Interface
 * 
 * A property that is specific to this BiologicallyDerviedProduct instance
 * 
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproductproperty.html
 */
export interface IBiologicallyDerivedProductProperty extends IBackboneElement {
  /**
   * Code that specifies the property
   */
  type: ICodeableConcept;

  /**
   * Property values
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Property values
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Property values
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Property values
   */
  valuePeriod?: IPeriod;

  /**
   * Property values
   */
  valueQuantity?: IQuantity;

  /**
   * Property values
   */
  valueRange?: IRange;

  /**
   * Property values
   */
  valueRatio?: IRatio;

  /**
   * Property values
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Property values
   */
  valueAttachment?: IAttachment;

}
