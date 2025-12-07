import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionConformsTo } from '../../models/backbones/DeviceDefinitionConformsTo.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionConformsTo,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionConformsToBuilder - Fluent builder for DeviceDefinitionConformsTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionConformsTo = new DeviceDefinitionConformsToBuilder()
 *   .setCategory(value)
 *   .addVersion({ ... })
 *   .build();
 */
export class DeviceDefinitionConformsToBuilder extends BackboneElementBuilder<DeviceDefinitionConformsTo, IDeviceDefinitionConformsTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Describes the common type of the standard, specification, or formal guidance
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set specification
   * Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type
   */
  setSpecification(specification: ICodeableConcept): this {
    this.data.specification = specification;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add version
   * The specific form or variant of the standard, specification or formal guidance
   */
  addVersion(version: string): this {
    return this.addToArray('version', version);
  }

  /**
   * Add source
   * Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance
   */
  addSource(source: IRelatedArtifact): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionConformsTo instance
   */
  build(): DeviceDefinitionConformsTo {
    return new DeviceDefinitionConformsTo(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionConformsTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionConformsTo> {
    const deviceDefinitionConformsTo = this.build();
    await deviceDefinitionConformsTo.validateOrThrow();
    return deviceDefinitionConformsTo;
  }
}
