import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * DeviceDefinitionMaterial Interface
 * 
 * A substance used to create the material(s) of which the device is made
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionmaterial.html
 */
export interface IDeviceDefinitionMaterial extends IBackboneElement {
  /**
   * A relevant substance that the device contains, may contain, or is made of
   */
  substance: ICodeableConcept;

  /**
   * Indicates an alternative material of the device
   */
  alternate?: boolean;
  /**
   * Extension for alternate
   */
  _alternate?: IElement;

  /**
   * Whether the substance is a known or suspected allergen
   */
  allergenicIndicator?: boolean;
  /**
   * Extension for allergenicIndicator
   */
  _allergenicIndicator?: IElement;

}
