import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideManifestResource } from '../../models/backbones/ImplementationGuideManifestResource.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IImplementationGuideManifestResource,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideManifestResourceBuilder - Fluent builder for ImplementationGuideManifestResource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideManifestResource = new ImplementationGuideManifestResourceBuilder()
 *   .setReference(value)
 *   .build();
 */
export class ImplementationGuideManifestResourceBuilder extends BackboneElementBuilder<ImplementationGuideManifestResource, IImplementationGuideManifestResource> {
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
   * Set relativePath
   * Relative path for page in IG
   */
  setRelativePath(relativePath: string): this {
    this.data.relativePath = relativePath;
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
    const key = `example${type}` as keyof IImplementationGuideManifestResource;
    const otherKeys: (keyof IImplementationGuideManifestResource)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('exampleBoolean' as keyof IImplementationGuideManifestResource);
      otherKeys.push('_exampleBoolean' as keyof IImplementationGuideManifestResource);
    }
    if (type !== 'Canonical') {
      otherKeys.push('exampleCanonical' as keyof IImplementationGuideManifestResource);
      otherKeys.push('_exampleCanonical' as keyof IImplementationGuideManifestResource);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideManifestResource instance
   */
  build(): ImplementationGuideManifestResource {
    return new ImplementationGuideManifestResource(this.data);
  }

  /**
   * Build and validate the ImplementationGuideManifestResource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideManifestResource> {
    const implementationGuideManifestResource = this.build();
    await implementationGuideManifestResource.validateOrThrow();
    return implementationGuideManifestResource;
  }
}
