import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenDefinitionTypeTestedContainerAdditive } from '../../models/backbones/SpecimenDefinitionTypeTestedContainerAdditive.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IReference,
  ISpecimenDefinitionTypeTestedContainerAdditive,
} from '@fhir-toolkit/r4b-types';

/**
 * SpecimenDefinitionTypeTestedContainerAdditiveBuilder - Fluent builder for SpecimenDefinitionTypeTestedContainerAdditive backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenDefinitionTypeTestedContainerAdditive = new SpecimenDefinitionTypeTestedContainerAdditiveBuilder()
 *   .build();
 */
export class SpecimenDefinitionTypeTestedContainerAdditiveBuilder extends BackboneElementBuilder<SpecimenDefinitionTypeTestedContainerAdditive, ISpecimenDefinitionTypeTestedContainerAdditive> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set additive choice type (additiveCodeableConcept, additiveReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAdditive('CodeableConcept', value)
   */
  setAdditive<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `additive${type}` as keyof ISpecimenDefinitionTypeTestedContainerAdditive;
    const otherKeys: (keyof ISpecimenDefinitionTypeTestedContainerAdditive)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('additiveCodeableConcept' as keyof ISpecimenDefinitionTypeTestedContainerAdditive);
      otherKeys.push('_additiveCodeableConcept' as keyof ISpecimenDefinitionTypeTestedContainerAdditive);
    }
    if (type !== 'Reference') {
      otherKeys.push('additiveReference' as keyof ISpecimenDefinitionTypeTestedContainerAdditive);
      otherKeys.push('_additiveReference' as keyof ISpecimenDefinitionTypeTestedContainerAdditive);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenDefinitionTypeTestedContainerAdditive instance
   */
  build(): SpecimenDefinitionTypeTestedContainerAdditive {
    return new SpecimenDefinitionTypeTestedContainerAdditive(this.data);
  }

  /**
   * Build and validate the SpecimenDefinitionTypeTestedContainerAdditive instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenDefinitionTypeTestedContainerAdditive> {
    const specimenDefinitionTypeTestedContainerAdditive = this.build();
    await specimenDefinitionTypeTestedContainerAdditive.validateOrThrow();
    return specimenDefinitionTypeTestedContainerAdditive;
  }
}
