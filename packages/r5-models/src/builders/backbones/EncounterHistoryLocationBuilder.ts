import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterHistoryLocation } from '../../models/backbones/EncounterHistoryLocation.js';
import type {
  ICodeableConcept,
  IEncounterHistoryLocation,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EncounterHistoryLocationBuilder - Fluent builder for EncounterHistoryLocation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterHistoryLocation = new EncounterHistoryLocationBuilder()
 *   .setLocation(value)
 *   .build();
 */
export class EncounterHistoryLocationBuilder extends BackboneElementBuilder<EncounterHistoryLocation, IEncounterHistoryLocation> {
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
   * Set form
   * The physical type of the location (usually the level in the location hierarchy - bed, room, ward, virtual etc.)
   */
  setForm(form: ICodeableConcept): this {
    this.data.form = form;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterHistoryLocation instance
   */
  build(): EncounterHistoryLocation {
    return new EncounterHistoryLocation(this.data);
  }

  /**
   * Build and validate the EncounterHistoryLocation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterHistoryLocation> {
    const encounterHistoryLocation = this.build();
    await encounterHistoryLocation.validateOrThrow();
    return encounterHistoryLocation;
  }
}
