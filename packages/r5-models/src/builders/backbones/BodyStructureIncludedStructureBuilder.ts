import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BodyStructureIncludedStructure } from '../../models/backbones/BodyStructureIncludedStructure.js';
import type {
  IBodyStructureIncludedStructure,
  IBodyStructureIncludedStructureBodyLandmarkOrientation,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * BodyStructureIncludedStructureBuilder - Fluent builder for BodyStructureIncludedStructure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bodyStructureIncludedStructure = new BodyStructureIncludedStructureBuilder()
 *   .setStructure(value)
 *   .addBodyLandmarkOrientation({ ... })
 *   .build();
 */
export class BodyStructureIncludedStructureBuilder extends BackboneElementBuilder<BodyStructureIncludedStructure, IBodyStructureIncludedStructure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set structure
   * Code that represents the included structure
   */
  setStructure(structure: ICodeableConcept): this {
    this.data.structure = structure;
    return this;
  }

  /**
   * Set laterality
   * Code that represents the included structure laterality
   */
  setLaterality(laterality: ICodeableConcept): this {
    this.data.laterality = laterality;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add bodyLandmarkOrientation
   * Landmark relative location
   */
  addBodyLandmarkOrientation(bodyLandmarkOrientation: IBodyStructureIncludedStructureBodyLandmarkOrientation): this {
    return this.addToArray('bodyLandmarkOrientation', bodyLandmarkOrientation);
  }

  /**
   * Add spatialReference
   * Cartesian reference for structure
   */
  addSpatialReference(spatialReference: IReference<'ImagingSelection'>): this {
    return this.addToArray('spatialReference', spatialReference);
  }

  /**
   * Add qualifier
   * Code that represents the included structure qualifier
   */
  addQualifier(qualifier: ICodeableConcept): this {
    return this.addToArray('qualifier', qualifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BodyStructureIncludedStructure instance
   */
  build(): BodyStructureIncludedStructure {
    return new BodyStructureIncludedStructure(this.data);
  }

  /**
   * Build and validate the BodyStructureIncludedStructure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BodyStructureIncludedStructure> {
    const bodyStructureIncludedStructure = this.build();
    await bodyStructureIncludedStructure.validateOrThrow();
    return bodyStructureIncludedStructure;
  }
}
