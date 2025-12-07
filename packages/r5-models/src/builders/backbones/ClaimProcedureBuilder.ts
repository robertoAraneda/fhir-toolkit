import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimProcedure } from '../../models/backbones/ClaimProcedure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IClaimProcedure,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimProcedureBuilder - Fluent builder for ClaimProcedure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimProcedure = new ClaimProcedureBuilder()
 *   .setSequence(value)
 *   .addType({ ... })
 *   .build();
 */
export class ClaimProcedureBuilder extends BackboneElementBuilder<ClaimProcedure, IClaimProcedure> {
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
    const key = `procedure${type}` as keyof IClaimProcedure;
    const otherKeys: (keyof IClaimProcedure)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('procedureCodeableConcept' as keyof IClaimProcedure);
      otherKeys.push('_procedureCodeableConcept' as keyof IClaimProcedure);
    }
    if (type !== 'Reference') {
      otherKeys.push('procedureReference' as keyof IClaimProcedure);
      otherKeys.push('_procedureReference' as keyof IClaimProcedure);
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
   * Build the ClaimProcedure instance
   */
  build(): ClaimProcedure {
    return new ClaimProcedure(this.data);
  }

  /**
   * Build and validate the ClaimProcedure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimProcedure> {
    const claimProcedure = this.build();
    await claimProcedure.validateOrThrow();
    return claimProcedure;
  }
}
