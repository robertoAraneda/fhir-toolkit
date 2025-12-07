import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ChargeItemDefinitionPropertyGroup } from '../../models/backbones/ChargeItemDefinitionPropertyGroup.js';
import type {
  IChargeItemDefinitionApplicability,
  IChargeItemDefinitionPropertyGroup,
  IChargeItemDefinitionPropertyGroupPriceComponent,
} from '@fhir-toolkit/r4b-types';

/**
 * ChargeItemDefinitionPropertyGroupBuilder - Fluent builder for ChargeItemDefinitionPropertyGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItemDefinitionPropertyGroup = new ChargeItemDefinitionPropertyGroupBuilder()
 *   .addApplicability({ ... })
 *   .build();
 */
export class ChargeItemDefinitionPropertyGroupBuilder extends BackboneElementBuilder<ChargeItemDefinitionPropertyGroup, IChargeItemDefinitionPropertyGroup> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add applicability
   * Conditions under which the priceComponent is applicable
   */
  addApplicability(applicability: IChargeItemDefinitionApplicability): this {
    return this.addToArray('applicability', applicability);
  }

  /**
   * Add priceComponent
   * Components of total line item price
   */
  addPriceComponent(priceComponent: IChargeItemDefinitionPropertyGroupPriceComponent): this {
    return this.addToArray('priceComponent', priceComponent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ChargeItemDefinitionPropertyGroup instance
   */
  build(): ChargeItemDefinitionPropertyGroup {
    return new ChargeItemDefinitionPropertyGroup(this.data);
  }

  /**
   * Build and validate the ChargeItemDefinitionPropertyGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ChargeItemDefinitionPropertyGroup> {
    const chargeItemDefinitionPropertyGroup = this.build();
    await chargeItemDefinitionPropertyGroup.validateOrThrow();
    return chargeItemDefinitionPropertyGroup;
  }
}
