import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark } from '../../models/backbones/BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark.js';
import type {
  IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark,
  ICodeableReference,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkBuilder - Fluent builder for BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark = new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkBuilder()
 *   .addDevice({ ... })
 *   .build();
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmarkBuilder extends BackboneElementBuilder<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark, IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add device
   * Measurement device
   */
  addDevice(device: ICodeableReference): this {
    return this.addToArray('device', device);
  }

  /**
   * Add value
   * Measured distance from body landmark
   */
  addValue(value: IQuantity): this {
    return this.addToArray('value', value);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark instance
   */
  build(): BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark {
    return new BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark(this.data);
  }

  /**
   * Build and validate the BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark> {
    const bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark = this.build();
    await bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark.validateOrThrow();
    return bodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark;
  }
}
