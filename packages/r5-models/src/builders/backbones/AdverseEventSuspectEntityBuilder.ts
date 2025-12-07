import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventSuspectEntity } from '../../models/backbones/AdverseEventSuspectEntity.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAdverseEventSuspectEntity,
  IAdverseEventSuspectEntityCausality,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventSuspectEntityBuilder - Fluent builder for AdverseEventSuspectEntity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventSuspectEntity = new AdverseEventSuspectEntityBuilder()
 *   .setCausality(value)
 *   .build();
 */
export class AdverseEventSuspectEntityBuilder extends BackboneElementBuilder<AdverseEventSuspectEntity, IAdverseEventSuspectEntity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set causality
   * Information on the possible cause of the event
   */
  setCausality(causality: IAdverseEventSuspectEntityCausality): this {
    this.data.causality = causality;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instance choice type (instanceCodeableConcept, instanceReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstance('CodeableConcept', value)
   */
  setInstance<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `instance${type}` as keyof IAdverseEventSuspectEntity;
    const otherKeys: (keyof IAdverseEventSuspectEntity)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('instanceCodeableConcept' as keyof IAdverseEventSuspectEntity);
      otherKeys.push('_instanceCodeableConcept' as keyof IAdverseEventSuspectEntity);
    }
    if (type !== 'Reference') {
      otherKeys.push('instanceReference' as keyof IAdverseEventSuspectEntity);
      otherKeys.push('_instanceReference' as keyof IAdverseEventSuspectEntity);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventSuspectEntity instance
   */
  build(): AdverseEventSuspectEntity {
    return new AdverseEventSuspectEntity(this.data);
  }

  /**
   * Build and validate the AdverseEventSuspectEntity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventSuspectEntity> {
    const adverseEventSuspectEntity = this.build();
    await adverseEventSuspectEntity.validateOrThrow();
    return adverseEventSuspectEntity;
  }
}
