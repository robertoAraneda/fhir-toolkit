import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionResource } from '../../models/backbones/ImplementationGuideDefinitionResource.js';
import type {
  FHIRVersionType,
  IImplementationGuideDefinitionResource,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ImplementationGuideDefinitionResourceBuilder - Fluent builder for ImplementationGuideDefinitionResource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinitionResource = new ImplementationGuideDefinitionResourceBuilder()
 *   .setReference(value)
 *   .addFhirVersion({ ... })
 *   .build();
 */
export class ImplementationGuideDefinitionResourceBuilder extends BackboneElementBuilder<ImplementationGuideDefinitionResource, IImplementationGuideDefinitionResource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Location of the resource
   */
  setReference(reference: IReference<'Resource'>): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set name
   * Human readable name for the resource
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Reason why included in guide
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set isExample
   * Is this an example
   */
  setIsExample(isExample: boolean): this {
    this.data.isExample = isExample;
    return this;
  }

  /**
   * Set groupingId
   * Grouping this is part of
   */
  setGroupingId(groupingId: string): this {
    this.data.groupingId = groupingId;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add fhirVersion
   * Versions this applies to (if different to IG)
   */
  addFhirVersion(fhirVersion: FHIRVersionType): this {
    return this.addToArray('fhirVersion', fhirVersion);
  }

  /**
   * Add profile
   * Profile(s) this is an example of
   */
  addProfile(profile: string): this {
    return this.addToArray('profile', profile);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDefinitionResource instance
   */
  build(): ImplementationGuideDefinitionResource {
    return new ImplementationGuideDefinitionResource(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDefinitionResource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDefinitionResource> {
    const implementationGuideDefinitionResource = this.build();
    await implementationGuideDefinitionResource.validateOrThrow();
    return implementationGuideDefinitionResource;
  }
}
