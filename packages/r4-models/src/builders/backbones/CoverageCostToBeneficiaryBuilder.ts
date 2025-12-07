import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageCostToBeneficiary } from '../../models/backbones/CoverageCostToBeneficiary.js';
import type {
  ICodeableConcept,
  ICoverageCostToBeneficiary,
  ICoverageCostToBeneficiaryException,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageCostToBeneficiaryBuilder - Fluent builder for CoverageCostToBeneficiary backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageCostToBeneficiary = new CoverageCostToBeneficiaryBuilder()
 *   .setType(value)
 *   .addException({ ... })
 *   .build();
 */
export class CoverageCostToBeneficiaryBuilder extends BackboneElementBuilder<CoverageCostToBeneficiary, ICoverageCostToBeneficiary> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Cost category
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Quantity' | 'Money'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'Money'>(
    type: T,
    value: string
  ): this {
    const key = `value${type}` as keyof ICoverageCostToBeneficiary;
    const otherKeys: (keyof ICoverageCostToBeneficiary)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ICoverageCostToBeneficiary);
      otherKeys.push('_valueQuantity' as keyof ICoverageCostToBeneficiary);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof ICoverageCostToBeneficiary);
      otherKeys.push('_valueMoney' as keyof ICoverageCostToBeneficiary);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add exception
   * Exceptions for patient payments
   */
  addException(exception: ICoverageCostToBeneficiaryException): this {
    return this.addToArray('exception', exception);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageCostToBeneficiary instance
   */
  build(): CoverageCostToBeneficiary {
    return new CoverageCostToBeneficiary(this.data);
  }

  /**
   * Build and validate the CoverageCostToBeneficiary instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageCostToBeneficiary> {
    const coverageCostToBeneficiary = this.build();
    await coverageCostToBeneficiary.validateOrThrow();
    return coverageCostToBeneficiary;
  }
}
