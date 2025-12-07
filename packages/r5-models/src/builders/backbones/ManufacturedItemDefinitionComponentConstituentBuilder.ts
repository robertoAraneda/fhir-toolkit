import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ManufacturedItemDefinitionComponentConstituent } from '../../models/backbones/ManufacturedItemDefinitionComponentConstituent.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IManufacturedItemDefinitionComponentConstituent,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ManufacturedItemDefinitionComponentConstituentBuilder - Fluent builder for ManufacturedItemDefinitionComponentConstituent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const manufacturedItemDefinitionComponentConstituent = new ManufacturedItemDefinitionComponentConstituentBuilder()
 *   .addAmount({ ... })
 *   .build();
 */
export class ManufacturedItemDefinitionComponentConstituentBuilder extends BackboneElementBuilder<ManufacturedItemDefinitionComponentConstituent, IManufacturedItemDefinitionComponentConstituent> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add amount
   * The measurable amount of the substance, expressable in different ways (e.g. by mass or volume)
   */
  addAmount(amount: IQuantity): this {
    return this.addToArray('amount', amount);
  }

  /**
   * Add location
   * The physical location of the constituent/ingredient within the component
   */
  addLocation(location: ICodeableConcept): this {
    return this.addToArray('location', location);
  }

  /**
   * Add function
   * The function of this constituent within the component e.g. binder
   */
  addFunction(_function: ICodeableConcept): this {
    return this.addToArray('function', _function);
  }

  /**
   * Add hasIngredient
   * The ingredient that is the constituent of the given component
   */
  addHasIngredient(hasIngredient: ICodeableReference): this {
    return this.addToArray('hasIngredient', hasIngredient);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ManufacturedItemDefinitionComponentConstituent instance
   */
  build(): ManufacturedItemDefinitionComponentConstituent {
    return new ManufacturedItemDefinitionComponentConstituent(this.data);
  }

  /**
   * Build and validate the ManufacturedItemDefinitionComponentConstituent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ManufacturedItemDefinitionComponentConstituent> {
    const manufacturedItemDefinitionComponentConstituent = this.build();
    await manufacturedItemDefinitionComponentConstituent.validateOrThrow();
    return manufacturedItemDefinitionComponentConstituent;
  }
}
