import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { FamilyMemberHistoryCondition } from '../../models/backbones/FamilyMemberHistoryCondition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAge,
  IAnnotation,
  ICodeableConcept,
  IFamilyMemberHistoryCondition,
  IPeriod,
  IRange,
} from '@fhir-toolkit/r4b-types';

/**
 * FamilyMemberHistoryConditionBuilder - Fluent builder for FamilyMemberHistoryCondition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const familyMemberHistoryCondition = new FamilyMemberHistoryConditionBuilder()
 *   .setCode(value)
 *   .addNote({ ... })
 *   .build();
 */
export class FamilyMemberHistoryConditionBuilder extends BackboneElementBuilder<FamilyMemberHistoryCondition, IFamilyMemberHistoryCondition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Condition suffered by relation
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set outcome
   * deceased | permanent disability | etc.
   */
  setOutcome(outcome: ICodeableConcept): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set contributedToDeath
   * Whether the condition contributed to the cause of death
   */
  setContributedToDeath(contributedToDeath: boolean): this {
    this.data.contributedToDeath = contributedToDeath;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set onset choice type (onsetAge, onsetRange, onsetPeriod, onsetString)
   * @param type - 'Age' | 'Range' | 'Period' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOnset('Age', value)
   */
  setOnset<T extends 'Age' | 'Range' | 'Period' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `onset${type}` as keyof IFamilyMemberHistoryCondition;
    const otherKeys: (keyof IFamilyMemberHistoryCondition)[] = [];
    if (type !== 'Age') {
      otherKeys.push('onsetAge' as keyof IFamilyMemberHistoryCondition);
      otherKeys.push('_onsetAge' as keyof IFamilyMemberHistoryCondition);
    }
    if (type !== 'Range') {
      otherKeys.push('onsetRange' as keyof IFamilyMemberHistoryCondition);
      otherKeys.push('_onsetRange' as keyof IFamilyMemberHistoryCondition);
    }
    if (type !== 'Period') {
      otherKeys.push('onsetPeriod' as keyof IFamilyMemberHistoryCondition);
      otherKeys.push('_onsetPeriod' as keyof IFamilyMemberHistoryCondition);
    }
    if (type !== 'String') {
      otherKeys.push('onsetString' as keyof IFamilyMemberHistoryCondition);
      otherKeys.push('_onsetString' as keyof IFamilyMemberHistoryCondition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Extra information about condition
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the FamilyMemberHistoryCondition instance
   */
  build(): FamilyMemberHistoryCondition {
    return new FamilyMemberHistoryCondition(this.data);
  }

  /**
   * Build and validate the FamilyMemberHistoryCondition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<FamilyMemberHistoryCondition> {
    const familyMemberHistoryCondition = this.build();
    await familyMemberHistoryCondition.validateOrThrow();
    return familyMemberHistoryCondition;
  }
}
