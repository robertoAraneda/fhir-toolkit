import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Substance } from '../../models/resources/Substance.js';
import type {
  FHIRSubstanceStatusType,
  ICodeableConcept,
  IIdentifier,
  ISubstance,
  ISubstanceIngredient,
  ISubstanceInstance,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceBuilder - Fluent builder for Substance resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substance = new SubstanceBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SubstanceBuilder extends DomainResourceBuilder<Substance, ISubstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | inactive | entered-in-error
   */
  setStatus(status: FHIRSubstanceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * What substance this is
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set description
   * Textual description of the substance, comments
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * What class/type of substance this is
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add instance
   * If this describes a specific package/container of the substance
   */
  addInstance(instance: ISubstanceInstance): this {
    return this.addToArray('instance', instance);
  }

  /**
   * Add ingredient
   * Composition information about the substance
   */
  addIngredient(ingredient: ISubstanceIngredient): this {
    return this.addToArray('ingredient', ingredient);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Substance instance
   */
  build(): Substance {
    return new Substance(this.data);
  }

  /**
   * Build and validate the Substance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Substance> {
    const substance = this.build();
    await substance.validateOrThrow();
    return substance;
  }
}
