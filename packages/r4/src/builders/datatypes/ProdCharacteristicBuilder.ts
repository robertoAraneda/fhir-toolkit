import { ElementBuilder } from '../base/ElementBuilder.js';
import { ProdCharacteristic } from '../../models/datatypes/ProdCharacteristic.js';
import type {
  IAttachment,
  ICodeableConcept,
  IProdCharacteristic,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * ProdCharacteristicBuilder - Fluent builder for ProdCharacteristic datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const prodCharacteristic = new ProdCharacteristicBuilder()
 *   .setHeight(value)
 *   .addColor({ ... })
 *   .build();
 */
export class ProdCharacteristicBuilder extends ElementBuilder<ProdCharacteristic, IProdCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set height
   * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setHeight(height: IQuantity): this {
    this.data.height = height;
    return this;
  }

  /**
   * Set width
   * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setWidth(width: IQuantity): this {
    this.data.width = width;
    return this;
  }

  /**
   * Set depth
   * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setDepth(depth: IQuantity): this {
    this.data.depth = depth;
    return this;
  }

  /**
   * Set weight
   * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setWeight(weight: IQuantity): this {
    this.data.weight = weight;
    return this;
  }

  /**
   * Set nominalVolume
   * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setNominalVolume(nominalVolume: IQuantity): this {
    this.data.nominalVolume = nominalVolume;
    return this;
  }

  /**
   * Set externalDiameter
   * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setExternalDiameter(externalDiameter: IQuantity): this {
    this.data.externalDiameter = externalDiameter;
    return this;
  }

  /**
   * Set shape
   * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
   */
  setShape(shape: string): this {
    this.data.shape = shape;
    return this;
  }

  /**
   * Set scoring
   * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
   */
  setScoring(scoring: ICodeableConcept): this {
    this.data.scoring = scoring;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add color
   * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used
   */
  addColor(color: string): this {
    return this.addToArray('color', color);
  }

  /**
   * Add imprint
   * Where applicable, the imprint can be specified as text
   */
  addImprint(imprint: string): this {
    return this.addToArray('imprint', imprint);
  }

  /**
   * Add image
   * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations
   */
  addImage(image: IAttachment): this {
    return this.addToArray('image', image);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ProdCharacteristic instance
   */
  build(): ProdCharacteristic {
    return new ProdCharacteristic(this.data);
  }

  /**
   * Build and validate the ProdCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ProdCharacteristic> {
    const prodCharacteristic = this.build();
    await prodCharacteristic.validateOrThrow();
    return prodCharacteristic;
  }
}
