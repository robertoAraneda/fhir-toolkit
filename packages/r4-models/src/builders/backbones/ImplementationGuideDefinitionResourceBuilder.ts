import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionResource } from '../../models/backbones/ImplementationGuideDefinitionResource.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  FHIRVersionType,
  IImplementationGuideDefinitionResource,
  IReference,
} from '@fhir-toolkit/r4-types';

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
   * Human Name for the resource
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
   * Set groupingId
   * Grouping this is part of
   */
  setGroupingId(groupingId: string): this {
    this.data.groupingId = groupingId;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set example choice type (exampleBoolean, exampleCanonical)
   * @param type - 'Boolean' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setExample('Boolean', value)
   */
  setExample<T extends 'Boolean' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `example${type}` as keyof IImplementationGuideDefinitionResource;
    const otherKeys: (keyof IImplementationGuideDefinitionResource)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('exampleBoolean' as keyof IImplementationGuideDefinitionResource);
      otherKeys.push('_exampleBoolean' as keyof IImplementationGuideDefinitionResource);
    }
    if (type !== 'Canonical') {
      otherKeys.push('exampleCanonical' as keyof IImplementationGuideDefinitionResource);
      otherKeys.push('_exampleCanonical' as keyof IImplementationGuideDefinitionResource);
    }
    return this.setChoiceType(key, value, otherKeys);
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
