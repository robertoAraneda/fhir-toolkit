import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ManufacturedItemDefinitionComponent } from '../../models/backbones/ManufacturedItemDefinitionComponent.js';
import type {
  ICodeableConcept,
  IManufacturedItemDefinitionComponent,
  IManufacturedItemDefinitionComponentConstituent,
  IManufacturedItemDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ManufacturedItemDefinitionComponentBuilder - Fluent builder for ManufacturedItemDefinitionComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const manufacturedItemDefinitionComponent = new ManufacturedItemDefinitionComponentBuilder()
 *   .setType(value)
 *   .addFunction({ ... })
 *   .build();
 */
export class ManufacturedItemDefinitionComponentBuilder extends BackboneElementBuilder<ManufacturedItemDefinitionComponent, IManufacturedItemDefinitionComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Defining type of the component e.g. shell, layer, ink
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add function
   * The function of this component within the item e.g. delivers active ingredient, masks taste
   */
  addFunction(_function: ICodeableConcept): this {
    return this.addToArray('function', _function);
  }

  /**
   * Add amount
   * The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume)
   */
  addAmount(amount: IQuantity): this {
    return this.addToArray('amount', amount);
  }

  /**
   * Add constituent
   * A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
   */
  addConstituent(constituent: IManufacturedItemDefinitionComponentConstituent): this {
    return this.addToArray('constituent', constituent);
  }

  /**
   * Add property
   * General characteristics of this component
   */
  addProperty(property: IManufacturedItemDefinitionProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add component
   * A component that this component contains or is made from
   */
  addComponent(component: IManufacturedItemDefinitionComponent): this {
    return this.addToArray('component', component);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ManufacturedItemDefinitionComponent instance
   */
  build(): ManufacturedItemDefinitionComponent {
    return new ManufacturedItemDefinitionComponent(this.data);
  }

  /**
   * Build and validate the ManufacturedItemDefinitionComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ManufacturedItemDefinitionComponent> {
    const manufacturedItemDefinitionComponent = this.build();
    await manufacturedItemDefinitionComponent.validateOrThrow();
    return manufacturedItemDefinitionComponent;
  }
}
