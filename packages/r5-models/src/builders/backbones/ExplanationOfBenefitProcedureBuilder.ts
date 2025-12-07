import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitProcedure } from '../../models/backbones/ExplanationOfBenefitProcedure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitProcedure,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitProcedureBuilder - Fluent builder for ExplanationOfBenefitProcedure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitProcedure = new ExplanationOfBenefitProcedureBuilder()
 *   .setSequence(value)
 *   .addType({ ... })
 *   .build();
 */
export class ExplanationOfBenefitProcedureBuilder extends BackboneElementBuilder<ExplanationOfBenefitProcedure, IExplanationOfBenefitProcedure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Procedure instance identifier
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set date
   * When the procedure was performed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set procedure choice type (procedureCodeableConcept, procedureReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setProcedure('CodeableConcept', value)
   */
  setProcedure<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `procedure${type}` as keyof IExplanationOfBenefitProcedure;
    const otherKeys: (keyof IExplanationOfBenefitProcedure)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('procedureCodeableConcept' as keyof IExplanationOfBenefitProcedure);
      otherKeys.push('_procedureCodeableConcept' as keyof IExplanationOfBenefitProcedure);
    }
    if (type !== 'Reference') {
      otherKeys.push('procedureReference' as keyof IExplanationOfBenefitProcedure);
      otherKeys.push('_procedureReference' as keyof IExplanationOfBenefitProcedure);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Category of Procedure
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add udi
   * Unique device identifier
   */
  addUdi(udi: IReference<'Device'>): this {
    return this.addToArray('udi', udi);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitProcedure instance
   */
  build(): ExplanationOfBenefitProcedure {
    return new ExplanationOfBenefitProcedure(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitProcedure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitProcedure> {
    const explanationOfBenefitProcedure = this.build();
    await explanationOfBenefitProcedure.validateOrThrow();
    return explanationOfBenefitProcedure;
  }
}
