import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceReferenceInformationTarget } from '../../models/backbones/SubstanceReferenceInformationTarget.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  IRange,
  IReference,
  ISubstanceReferenceInformationTarget,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceReferenceInformationTargetBuilder - Fluent builder for SubstanceReferenceInformationTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceReferenceInformationTarget = new SubstanceReferenceInformationTargetBuilder()
 *   .setTarget(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceReferenceInformationTargetBuilder extends BackboneElementBuilder<SubstanceReferenceInformationTarget, ISubstanceReferenceInformationTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set target
   * Todo
   */
  setTarget(target: IIdentifier): this {
    this.data.target = target;
    return this;
  }

  /**
   * Set type
   * Todo
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set interaction
   * Todo
   */
  setInteraction(interaction: ICodeableConcept): this {
    this.data.interaction = interaction;
    return this;
  }

  /**
   * Set organism
   * Todo
   */
  setOrganism(organism: ICodeableConcept): this {
    this.data.organism = organism;
    return this;
  }

  /**
   * Set organismType
   * Todo
   */
  setOrganismType(organismType: ICodeableConcept): this {
    this.data.organismType = organismType;
    return this;
  }

  /**
   * Set amountType
   * Todo
   */
  setAmountType(amountType: ICodeableConcept): this {
    this.data.amountType = amountType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set amount choice type (amountQuantity, amountRange, amountString)
   * @param type - 'Quantity' | 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAmount('Quantity', value)
   */
  setAmount<T extends 'Quantity' | 'Range' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `amount${type}` as keyof ISubstanceReferenceInformationTarget;
    const otherKeys: (keyof ISubstanceReferenceInformationTarget)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceReferenceInformationTarget);
      otherKeys.push('_amountQuantity' as keyof ISubstanceReferenceInformationTarget);
    }
    if (type !== 'Range') {
      otherKeys.push('amountRange' as keyof ISubstanceReferenceInformationTarget);
      otherKeys.push('_amountRange' as keyof ISubstanceReferenceInformationTarget);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceReferenceInformationTarget);
      otherKeys.push('_amountString' as keyof ISubstanceReferenceInformationTarget);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add source
   * Todo
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceReferenceInformationTarget instance
   */
  build(): SubstanceReferenceInformationTarget {
    return new SubstanceReferenceInformationTarget(this.data);
  }

  /**
   * Build and validate the SubstanceReferenceInformationTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceReferenceInformationTarget> {
    const substanceReferenceInformationTarget = this.build();
    await substanceReferenceInformationTarget.validateOrThrow();
    return substanceReferenceInformationTarget;
  }
}
