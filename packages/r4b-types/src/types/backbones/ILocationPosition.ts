import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * LocationPosition Interface
 * 
 * The absolute geographic location
 * 
 *
 * @see https://hl7.org/fhir/R4B/locationposition.html
 */
export interface ILocationPosition extends IBackboneElement {
  /**
   * Longitude with WGS84 datum
   */
  longitude: number;
  /**
   * Extension for longitude
   */
  _longitude?: IElement;

  /**
   * Latitude with WGS84 datum
   */
  latitude: number;
  /**
   * Extension for latitude
   */
  _latitude?: IElement;

  /**
   * Altitude with WGS84 datum
   */
  altitude?: number;
  /**
   * Extension for altitude
   */
  _altitude?: IElement;

}
