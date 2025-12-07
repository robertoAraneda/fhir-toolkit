import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductAuthorizationProcedure } from '../../models/backbones/MedicinalProductAuthorizationProcedure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductAuthorizationProcedure,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductAuthorizationProcedureBuilder - Fluent builder for MedicinalProductAuthorizationProcedure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductAuthorizationProcedure = new MedicinalProductAuthorizationProcedureBuilder()
 *   .setIdentifier(value)
 *   .addApplication({ ... })
 *   .build();
 */
export class MedicinalProductAuthorizationProcedureBuilder extends BackboneElementBuilder<MedicinalProductAuthorizationProcedure, IMedicinalProductAuthorizationProcedure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifier for this procedure
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set type
   * Type of procedure
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set date choice type (datePeriod, dateDateTime)
   * @param type - 'Period' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDate('Period', value)
   */
  setDate<T extends 'Period' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `date${type}` as keyof IMedicinalProductAuthorizationProcedure;
    const otherKeys: (keyof IMedicinalProductAuthorizationProcedure)[] = [];
    if (type !== 'Period') {
      otherKeys.push('datePeriod' as keyof IMedicinalProductAuthorizationProcedure);
      otherKeys.push('_datePeriod' as keyof IMedicinalProductAuthorizationProcedure);
    }
    if (type !== 'DateTime') {
      otherKeys.push('dateDateTime' as keyof IMedicinalProductAuthorizationProcedure);
      otherKeys.push('_dateDateTime' as keyof IMedicinalProductAuthorizationProcedure);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add application
   * Applcations submitted to obtain a marketing authorization
   */
  addApplication(application: IMedicinalProductAuthorizationProcedure): this {
    return this.addToArray('application', application);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductAuthorizationProcedure instance
   */
  build(): MedicinalProductAuthorizationProcedure {
    return new MedicinalProductAuthorizationProcedure(this.data);
  }

  /**
   * Build and validate the MedicinalProductAuthorizationProcedure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductAuthorizationProcedure> {
    const medicinalProductAuthorizationProcedure = this.build();
    await medicinalProductAuthorizationProcedure.validateOrThrow();
    return medicinalProductAuthorizationProcedure;
  }
}
