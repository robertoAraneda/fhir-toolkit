import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationProgramEligibility } from '../../models/backbones/ImmunizationProgramEligibility.js';
import type {
  ICodeableConcept,
  IImmunizationProgramEligibility,
} from '@fhir-toolkit/r5-types';

/**
 * ImmunizationProgramEligibilityBuilder - Fluent builder for ImmunizationProgramEligibility backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationProgramEligibility = new ImmunizationProgramEligibilityBuilder()
 *   .setProgram(value)
 *   .build();
 */
export class ImmunizationProgramEligibilityBuilder extends BackboneElementBuilder<ImmunizationProgramEligibility, IImmunizationProgramEligibility> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set program
   * The program that eligibility is declared for
   */
  setProgram(program: ICodeableConcept): this {
    this.data.program = program;
    return this;
  }

  /**
   * Set programStatus
   * The patient's eligibility status for the program
   */
  setProgramStatus(programStatus: ICodeableConcept): this {
    this.data.programStatus = programStatus;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationProgramEligibility instance
   */
  build(): ImmunizationProgramEligibility {
    return new ImmunizationProgramEligibility(this.data);
  }

  /**
   * Build and validate the ImmunizationProgramEligibility instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationProgramEligibility> {
    const immunizationProgramEligibility = this.build();
    await immunizationProgramEligibility.validateOrThrow();
    return immunizationProgramEligibility;
  }
}
