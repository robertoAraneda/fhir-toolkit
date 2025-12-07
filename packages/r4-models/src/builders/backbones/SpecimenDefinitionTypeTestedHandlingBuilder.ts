import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenDefinitionTypeTestedHandling } from '../../models/backbones/SpecimenDefinitionTypeTestedHandling.js';
import type {
  ICodeableConcept,
  IDuration,
  IRange,
  ISpecimenDefinitionTypeTestedHandling,
} from '@fhir-toolkit/r4-types';

/**
 * SpecimenDefinitionTypeTestedHandlingBuilder - Fluent builder for SpecimenDefinitionTypeTestedHandling backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenDefinitionTypeTestedHandling = new SpecimenDefinitionTypeTestedHandlingBuilder()
 *   .setTemperatureQualifier(value)
 *   .build();
 */
export class SpecimenDefinitionTypeTestedHandlingBuilder extends BackboneElementBuilder<SpecimenDefinitionTypeTestedHandling, ISpecimenDefinitionTypeTestedHandling> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set temperatureQualifier
   * Temperature qualifier
   */
  setTemperatureQualifier(temperatureQualifier: ICodeableConcept): this {
    this.data.temperatureQualifier = temperatureQualifier;
    return this;
  }

  /**
   * Set temperatureRange
   * Temperature range
   */
  setTemperatureRange(temperatureRange: IRange): this {
    this.data.temperatureRange = temperatureRange;
    return this;
  }

  /**
   * Set maxDuration
   * Maximum preservation time
   */
  setMaxDuration(maxDuration: IDuration): this {
    this.data.maxDuration = maxDuration;
    return this;
  }

  /**
   * Set instruction
   * Preservation instruction
   */
  setInstruction(instruction: string): this {
    this.data.instruction = instruction;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenDefinitionTypeTestedHandling instance
   */
  build(): SpecimenDefinitionTypeTestedHandling {
    return new SpecimenDefinitionTypeTestedHandling(this.data);
  }

  /**
   * Build and validate the SpecimenDefinitionTypeTestedHandling instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenDefinitionTypeTestedHandling> {
    const specimenDefinitionTypeTestedHandling = this.build();
    await specimenDefinitionTypeTestedHandling.validateOrThrow();
    return specimenDefinitionTypeTestedHandling;
  }
}
