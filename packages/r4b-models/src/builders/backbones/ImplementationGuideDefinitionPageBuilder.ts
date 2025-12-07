import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionPage } from '../../models/backbones/ImplementationGuideDefinitionPage.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GuidePageGenerationType,
  IImplementationGuideDefinitionPage,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideDefinitionPageBuilder - Fluent builder for ImplementationGuideDefinitionPage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinitionPage = new ImplementationGuideDefinitionPageBuilder()
 *   .setTitle(value)
 *   .addPage({ ... })
 *   .build();
 */
export class ImplementationGuideDefinitionPageBuilder extends BackboneElementBuilder<ImplementationGuideDefinitionPage, IImplementationGuideDefinitionPage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * Short title shown for navigational assistance
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set generation
   * html | markdown | xml | generated
   */
  setGeneration(generation: GuidePageGenerationType): this {
    this.data.generation = generation;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set name choice type (nameUrl, nameReference)
   * @param type - 'Url' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setName('Url', value)
   */
  setName<T extends 'Url' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `name${type}` as keyof IImplementationGuideDefinitionPage;
    const otherKeys: (keyof IImplementationGuideDefinitionPage)[] = [];
    if (type !== 'Url') {
      otherKeys.push('nameUrl' as keyof IImplementationGuideDefinitionPage);
      otherKeys.push('_nameUrl' as keyof IImplementationGuideDefinitionPage);
    }
    if (type !== 'Reference') {
      otherKeys.push('nameReference' as keyof IImplementationGuideDefinitionPage);
      otherKeys.push('_nameReference' as keyof IImplementationGuideDefinitionPage);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add page
   * Nested Pages / Sections
   */
  addPage(page: IImplementationGuideDefinitionPage): this {
    return this.addToArray('page', page);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDefinitionPage instance
   */
  build(): ImplementationGuideDefinitionPage {
    return new ImplementationGuideDefinitionPage(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDefinitionPage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDefinitionPage> {
    const implementationGuideDefinitionPage = this.build();
    await implementationGuideDefinitionPage.validateOrThrow();
    return implementationGuideDefinitionPage;
  }
}
