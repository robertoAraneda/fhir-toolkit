import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IDeviceDefinitionPackagingDistributor } from './IDeviceDefinitionPackagingDistributor.js';
import type { IDeviceDefinitionUdiDeviceIdentifier } from './IDeviceDefinitionUdiDeviceIdentifier.js';

/**
 * DeviceDefinitionPackaging Interface
 * 
 * Information about the packaging of the device, i.e. how the device is packaged
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionpackaging.html
 */
export interface IDeviceDefinitionPackaging extends IBackboneElement {
  /**
   * Business identifier of the packaged medication
   */
  identifier?: IIdentifier;

  /**
   * A code that defines the specific type of packaging
   */
  type?: ICodeableConcept;

  /**
   * The number of items contained in the package (devices or sub-packages)
   */
  count?: number;
  /**
   * Extension for count
   */
  _count?: IElement;

  /**
   * An organization that distributes the packaged device
   */
  distributor?: IDeviceDefinitionPackagingDistributor[];

  /**
   * Unique Device Identifier (UDI) Barcode string on the packaging
   */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /**
   * Allows packages within packages
   */
  packaging?: IDeviceDefinitionPackaging[];

}
