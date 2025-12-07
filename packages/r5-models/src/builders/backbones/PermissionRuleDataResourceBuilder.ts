import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PermissionRuleDataResource } from '../../models/backbones/PermissionRuleDataResource.js';
import type {
  ConsentDataMeaningType,
  IPermissionRuleDataResource,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PermissionRuleDataResourceBuilder - Fluent builder for PermissionRuleDataResource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const permissionRuleDataResource = new PermissionRuleDataResourceBuilder()
 *   .setMeaning(value)
 *   .build();
 */
export class PermissionRuleDataResourceBuilder extends BackboneElementBuilder<PermissionRuleDataResource, IPermissionRuleDataResource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set meaning
   * instance | related | dependents | authoredby
   */
  setMeaning(meaning: ConsentDataMeaningType): this {
    this.data.meaning = meaning;
    return this;
  }

  /**
   * Set reference
   * The actual data reference
   */
  setReference(reference: IReference<'Resource'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PermissionRuleDataResource instance
   */
  build(): PermissionRuleDataResource {
    return new PermissionRuleDataResource(this.data);
  }

  /**
   * Build and validate the PermissionRuleDataResource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PermissionRuleDataResource> {
    const permissionRuleDataResource = this.build();
    await permissionRuleDataResource.validateOrThrow();
    return permissionRuleDataResource;
  }
}
