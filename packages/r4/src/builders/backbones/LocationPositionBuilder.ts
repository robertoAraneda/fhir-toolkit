import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { LocationPosition } from '../../models/backbones/LocationPosition.js';
import type {
  ILocationPosition,
} from '@fhir-toolkit/r4-types';

/**
 * LocationPositionBuilder - Fluent builder for LocationPosition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const locationPosition = new LocationPositionBuilder()
 *   .setLongitude(value)
 *   .build();
 */
export class LocationPositionBuilder extends BackboneElementBuilder<LocationPosition, ILocationPosition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set longitude
   * Longitude with WGS84 datum
   */
  setLongitude(longitude: number): this {
    this.data.longitude = longitude;
    return this;
  }

  /**
   * Set latitude
   * Latitude with WGS84 datum
   */
  setLatitude(latitude: number): this {
    this.data.latitude = latitude;
    return this;
  }

  /**
   * Set altitude
   * Altitude with WGS84 datum
   */
  setAltitude(altitude: number): this {
    this.data.altitude = altitude;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the LocationPosition instance
   */
  build(): LocationPosition {
    return new LocationPosition(this.data);
  }

  /**
   * Build and validate the LocationPosition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<LocationPosition> {
    const locationPosition = this.build();
    await locationPosition.validateOrThrow();
    return locationPosition;
  }
}
