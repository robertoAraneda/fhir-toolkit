import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Linkage } from '../../models/resources/Linkage.js';
import type {
  ILinkage,
  ILinkageItem,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * LinkageBuilder - Fluent builder for Linkage resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const linkage = new LinkageBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addItem({ ... })
 *   .build();
 */
export class LinkageBuilder extends DomainResourceBuilder<Linkage, ILinkage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this linkage assertion is active or not
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set author
   * Who is responsible for linkages
   */
  setAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.author = author;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add item
   * Item to be linked
   */
  addItem(item: ILinkageItem): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Linkage instance
   */
  build(): Linkage {
    return new Linkage(this.data);
  }

  /**
   * Build and validate the Linkage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Linkage> {
    const linkage = this.build();
    await linkage.validateOrThrow();
    return linkage;
  }
}
