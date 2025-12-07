import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BiologicallyDerivedProductStorage } from '../../models/backbones/BiologicallyDerivedProductStorage.js';
import type {
  BiologicallyDerivedProductStorageScaleType,
  IBiologicallyDerivedProductStorage,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * BiologicallyDerivedProductStorageBuilder - Fluent builder for BiologicallyDerivedProductStorage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductStorage = new BiologicallyDerivedProductStorageBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class BiologicallyDerivedProductStorageBuilder extends BackboneElementBuilder<BiologicallyDerivedProductStorage, IBiologicallyDerivedProductStorage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of storage
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set temperature
   * Storage temperature
   */
  setTemperature(temperature: number): this {
    this.data.temperature = temperature;
    return this;
  }

  /**
   * Set scale
   * farenheit | celsius | kelvin
   */
  setScale(scale: BiologicallyDerivedProductStorageScaleType): this {
    this.data.scale = scale;
    return this;
  }

  /**
   * Set duration
   * Storage timeperiod
   */
  setDuration(duration: IPeriod): this {
    this.data.duration = duration;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductStorage instance
   */
  build(): BiologicallyDerivedProductStorage {
    return new BiologicallyDerivedProductStorage(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductStorage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductStorage> {
    const biologicallyDerivedProductStorage = this.build();
    await biologicallyDerivedProductStorage.validateOrThrow();
    return biologicallyDerivedProductStorage;
  }
}
