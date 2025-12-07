import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BodyStructureIncludedStructureBodyLandmarkOrientation } from '../../models/backbones/BodyStructureIncludedStructureBodyLandmarkOrientation.js';
import type {
  IBodyStructureIncludedStructureBodyLandmarkOrientation,
  IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * BodyStructureIncludedStructureBodyLandmarkOrientationBuilder - Fluent builder for BodyStructureIncludedStructureBodyLandmarkOrientation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bodyStructureIncludedStructureBodyLandmarkOrientation = new BodyStructureIncludedStructureBodyLandmarkOrientationBuilder()
 *   .addLandmarkDescription({ ... })
 *   .build();
 */
export class BodyStructureIncludedStructureBodyLandmarkOrientationBuilder extends BackboneElementBuilder<BodyStructureIncludedStructureBodyLandmarkOrientation, IBodyStructureIncludedStructureBodyLandmarkOrientation> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add landmarkDescription
   * Body ]andmark description
   */
  addLandmarkDescription(landmarkDescription: ICodeableConcept): this {
    return this.addToArray('landmarkDescription', landmarkDescription);
  }

  /**
   * Add clockFacePosition
   * Clockface orientation
   */
  addClockFacePosition(clockFacePosition: ICodeableConcept): this {
    return this.addToArray('clockFacePosition', clockFacePosition);
  }

  /**
   * Add distanceFromLandmark
   * Landmark relative location
   */
  addDistanceFromLandmark(distanceFromLandmark: IBodyStructureIncludedStructureBodyLandmarkOrientationDistanceFromLandmark): this {
    return this.addToArray('distanceFromLandmark', distanceFromLandmark);
  }

  /**
   * Add surfaceOrientation
   * Relative landmark surface orientation
   */
  addSurfaceOrientation(surfaceOrientation: ICodeableConcept): this {
    return this.addToArray('surfaceOrientation', surfaceOrientation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BodyStructureIncludedStructureBodyLandmarkOrientation instance
   */
  build(): BodyStructureIncludedStructureBodyLandmarkOrientation {
    return new BodyStructureIncludedStructureBodyLandmarkOrientation(this.data);
  }

  /**
   * Build and validate the BodyStructureIncludedStructureBodyLandmarkOrientation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BodyStructureIncludedStructureBodyLandmarkOrientation> {
    const bodyStructureIncludedStructureBodyLandmarkOrientation = this.build();
    await bodyStructureIncludedStructureBodyLandmarkOrientation.validateOrThrow();
    return bodyStructureIncludedStructureBodyLandmarkOrientation;
  }
}
