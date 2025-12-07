import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { FamilyMemberHistoryProcedure } from '../../models/backbones/FamilyMemberHistoryProcedure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAge,
  IAnnotation,
  ICodeableConcept,
  IFamilyMemberHistoryProcedure,
  IPeriod,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * FamilyMemberHistoryProcedureBuilder - Fluent builder for FamilyMemberHistoryProcedure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const familyMemberHistoryProcedure = new FamilyMemberHistoryProcedureBuilder()
 *   .setCode(value)
 *   .addNote({ ... })
 *   .build();
 */
export class FamilyMemberHistoryProcedureBuilder extends BackboneElementBuilder<FamilyMemberHistoryProcedure, IFamilyMemberHistoryProcedure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Procedures performed on the related person
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set outcome
   * What happened following the procedure
   */
  setOutcome(outcome: ICodeableConcept): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set contributedToDeath
   * Whether the procedure contributed to the cause of death
   */
  setContributedToDeath(contributedToDeath: boolean): this {
    this.data.contributedToDeath = contributedToDeath;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set performed choice type (performedAge, performedRange, performedPeriod, performedString, performedDateTime)
   * @param type - 'Age' | 'Range' | 'Period' | 'String' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPerformed('Age', value)
   */
  setPerformed<T extends 'Age' | 'Range' | 'Period' | 'String' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `performed${type}` as keyof IFamilyMemberHistoryProcedure;
    const otherKeys: (keyof IFamilyMemberHistoryProcedure)[] = [];
    if (type !== 'Age') {
      otherKeys.push('performedAge' as keyof IFamilyMemberHistoryProcedure);
      otherKeys.push('_performedAge' as keyof IFamilyMemberHistoryProcedure);
    }
    if (type !== 'Range') {
      otherKeys.push('performedRange' as keyof IFamilyMemberHistoryProcedure);
      otherKeys.push('_performedRange' as keyof IFamilyMemberHistoryProcedure);
    }
    if (type !== 'Period') {
      otherKeys.push('performedPeriod' as keyof IFamilyMemberHistoryProcedure);
      otherKeys.push('_performedPeriod' as keyof IFamilyMemberHistoryProcedure);
    }
    if (type !== 'String') {
      otherKeys.push('performedString' as keyof IFamilyMemberHistoryProcedure);
      otherKeys.push('_performedString' as keyof IFamilyMemberHistoryProcedure);
    }
    if (type !== 'DateTime') {
      otherKeys.push('performedDateTime' as keyof IFamilyMemberHistoryProcedure);
      otherKeys.push('_performedDateTime' as keyof IFamilyMemberHistoryProcedure);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Extra information about the procedure
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the FamilyMemberHistoryProcedure instance
   */
  build(): FamilyMemberHistoryProcedure {
    return new FamilyMemberHistoryProcedure(this.data);
  }

  /**
   * Build and validate the FamilyMemberHistoryProcedure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<FamilyMemberHistoryProcedure> {
    const familyMemberHistoryProcedure = this.build();
    await familyMemberHistoryProcedure.validateOrThrow();
    return familyMemberHistoryProcedure;
  }
}
