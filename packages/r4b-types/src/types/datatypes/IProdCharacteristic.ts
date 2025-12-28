import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from './IAttachment.js';
import type { IQuantity } from './IQuantity.js';

/**
 * ProdCharacteristic Interface
 * 
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 * 
 *
 * @see https://hl7.org/fhir/R4B/prodcharacteristic.html
 */
export interface IProdCharacteristic extends IBackboneElement {
  /**
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  height?: IQuantity;

  /**
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  width?: IQuantity;

  /**
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  depth?: IQuantity;

  /**
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  weight?: IQuantity;

  /**
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  nominalVolume?: IQuantity;

  /**
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  externalDiameter?: IQuantity;

  /**
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
   */
  shape?: string;
  /**
   * Extension for shape
   */
  _shape?: IElement;

  /**
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
   */
  color?: string[];
  /**
   * Extension for color
   */
  _color?: IElement;

  /**
   * Where applicable, the imprint can be specified as text
   */
  imprint?: string[];
  /**
   * Extension for imprint
   */
  _imprint?: IElement;

  /**
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations
   */
  image?: IAttachment[];

  /**
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
   */
  scoring?: ICodeableConcept;

}
