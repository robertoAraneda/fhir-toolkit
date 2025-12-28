import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * DeviceDefinitionPackagingDistributor Interface
 * 
 * An organization that distributes the packaged device
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionpackagingdistributor.html
 */
export interface IDeviceDefinitionPackagingDistributor extends IBackboneElement {
  /**
   * Distributor's human-readable name
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Distributor as an Organization resource
   */
  organizationReference?: IReference<'Organization'>[];

}
