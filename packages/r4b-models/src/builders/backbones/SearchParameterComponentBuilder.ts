import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SearchParameterComponent } from '../../models/backbones/SearchParameterComponent.js';
import type {
  ISearchParameterComponent,
} from '@fhir-toolkit/r4b-types';

/**
 * SearchParameterComponentBuilder - Fluent builder for SearchParameterComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const searchParameterComponent = new SearchParameterComponentBuilder()
 *   .setDefinition(value)
 *   .build();
 */
export class SearchParameterComponentBuilder extends BackboneElementBuilder<SearchParameterComponent, ISearchParameterComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set definition
   * Defines how the part works
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set expression
   * Subexpression relative to main expression
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SearchParameterComponent instance
   */
  build(): SearchParameterComponent {
    return new SearchParameterComponent(this.data);
  }

  /**
   * Build and validate the SearchParameterComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SearchParameterComponent> {
    const searchParameterComponent = this.build();
    await searchParameterComponent.validateOrThrow();
    return searchParameterComponent;
  }
}
