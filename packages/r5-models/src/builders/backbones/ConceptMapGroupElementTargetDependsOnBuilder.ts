import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupElementTargetDependsOn } from '../../models/backbones/ConceptMapGroupElementTargetDependsOn.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IConceptMapGroupElementTargetDependsOn,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapGroupElementTargetDependsOnBuilder - Fluent builder for ConceptMapGroupElementTargetDependsOn backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupElementTargetDependsOn = new ConceptMapGroupElementTargetDependsOnBuilder()
 *   .setAttribute(value)
 *   .build();
 */
export class ConceptMapGroupElementTargetDependsOnBuilder extends BackboneElementBuilder<ConceptMapGroupElementTargetDependsOn, IConceptMapGroupElementTargetDependsOn> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set attribute
   * A reference to a mapping attribute defined in ConceptMap.additionalAttribute
   */
  setAttribute(attribute: string): this {
    this.data.attribute = attribute;
    return this;
  }

  /**
   * Set valueSet
   * The mapping depends on a data element with a value from this value set
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCode, valueCoding, valueString, valueBoolean, valueQuantity)
   * @param type - 'Code' | 'Coding' | 'String' | 'Boolean' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Code', value)
   */
  setValue<T extends 'Code' | 'Coding' | 'String' | 'Boolean' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IConceptMapGroupElementTargetDependsOn;
    const otherKeys: (keyof IConceptMapGroupElementTargetDependsOn)[] = [];
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IConceptMapGroupElementTargetDependsOn);
      otherKeys.push('_valueCode' as keyof IConceptMapGroupElementTargetDependsOn);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IConceptMapGroupElementTargetDependsOn);
      otherKeys.push('_valueCoding' as keyof IConceptMapGroupElementTargetDependsOn);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IConceptMapGroupElementTargetDependsOn);
      otherKeys.push('_valueString' as keyof IConceptMapGroupElementTargetDependsOn);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IConceptMapGroupElementTargetDependsOn);
      otherKeys.push('_valueBoolean' as keyof IConceptMapGroupElementTargetDependsOn);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IConceptMapGroupElementTargetDependsOn);
      otherKeys.push('_valueQuantity' as keyof IConceptMapGroupElementTargetDependsOn);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroupElementTargetDependsOn instance
   */
  build(): ConceptMapGroupElementTargetDependsOn {
    return new ConceptMapGroupElementTargetDependsOn(this.data);
  }

  /**
   * Build and validate the ConceptMapGroupElementTargetDependsOn instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroupElementTargetDependsOn> {
    const conceptMapGroupElementTargetDependsOn = this.build();
    await conceptMapGroupElementTargetDependsOn.validateOrThrow();
    return conceptMapGroupElementTargetDependsOn;
  }
}
