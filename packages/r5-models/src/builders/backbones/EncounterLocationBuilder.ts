import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterLocation } from '../../models/backbones/EncounterLocation.js';
import type {
  EncounterLocationStatusType,
  ICodeableConcept,
  IEncounterLocation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EncounterLocationBuilder - Fluent builder for EncounterLocation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterLocation = new EncounterLocationBuilder()
 *   .setLocation(value)
 *   .build();
 */
export class EncounterLocationBuilder extends BackboneElementBuilder<EncounterLocation, IEncounterLocation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set location
   * Location the encounter takes place
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set status
   * planned | active | reserved | completed
   */
  setStatus(status: EncounterLocationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set form
   * The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.)
   */
  setForm(form: ICodeableConcept): this {
    this.data.form = form;
    return this;
  }

  /**
   * Set period
   * Time period during which the patient was present at the location
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterLocation instance
   */
  build(): EncounterLocation {
    return new EncounterLocation(this.data);
  }

  /**
   * Build and validate the EncounterLocation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterLocation> {
    const encounterLocation = this.build();
    await encounterLocation.validateOrThrow();
    return encounterLocation;
  }
}
