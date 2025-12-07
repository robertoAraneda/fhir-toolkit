import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionPage } from '../../models/backbones/ImplementationGuideDefinitionPage.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GuidePageGenerationType,
  IImplementationGuideDefinitionPage,
} from '@fhir-toolkit/r5-types';

/**
 * ImplementationGuideDefinitionPageBuilder - Fluent builder for ImplementationGuideDefinitionPage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinitionPage = new ImplementationGuideDefinitionPageBuilder()
 *   .setName(value)
 *   .addPage({ ... })
 *   .build();
 */
export class ImplementationGuideDefinitionPageBuilder extends BackboneElementBuilder<ImplementationGuideDefinitionPage, IImplementationGuideDefinitionPage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of the page when published
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

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
   * Set source choice type (sourceUrl, sourceString, sourceMarkdown)
   * @param type - 'Url' | 'String' | 'Markdown'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSource('Url', value)
   */
  setSource<T extends 'Url' | 'String' | 'Markdown'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `source${type}` as keyof IImplementationGuideDefinitionPage;
    const otherKeys: (keyof IImplementationGuideDefinitionPage)[] = [];
    if (type !== 'Url') {
      otherKeys.push('sourceUrl' as keyof IImplementationGuideDefinitionPage);
      otherKeys.push('_sourceUrl' as keyof IImplementationGuideDefinitionPage);
    }
    if (type !== 'String') {
      otherKeys.push('sourceString' as keyof IImplementationGuideDefinitionPage);
      otherKeys.push('_sourceString' as keyof IImplementationGuideDefinitionPage);
    }
    if (type !== 'Markdown') {
      otherKeys.push('sourceMarkdown' as keyof IImplementationGuideDefinitionPage);
      otherKeys.push('_sourceMarkdown' as keyof IImplementationGuideDefinitionPage);
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
