import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { LinkageItem } from '../../models/backbones/LinkageItem.js';
import type {
  ILinkageItem,
  IReference,
  LinkageTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * LinkageItemBuilder - Fluent builder for LinkageItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const linkageItem = new LinkageItemBuilder()
 *   .setType(value)
 *   .build();
 */
export class LinkageItemBuilder extends BackboneElementBuilder<LinkageItem, ILinkageItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * source | alternate | historical
   */
  setType(type: LinkageTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set resource
   * Resource being linked
   */
  setResource(resource: IReference<'Resource'>): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the LinkageItem instance
   */
  build(): LinkageItem {
    return new LinkageItem(this.data);
  }

  /**
   * Build and validate the LinkageItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<LinkageItem> {
    const linkageItem = this.build();
    await linkageItem.validateOrThrow();
    return linkageItem;
  }
}
