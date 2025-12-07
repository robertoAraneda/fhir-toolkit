import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterDiagnosis } from '../../models/backbones/EncounterDiagnosis.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEncounterDiagnosis,
} from '@fhir-toolkit/r5-types';

/**
 * EncounterDiagnosisBuilder - Fluent builder for EncounterDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterDiagnosis = new EncounterDiagnosisBuilder()
 *   .addCondition({ ... })
 *   .build();
 */
export class EncounterDiagnosisBuilder extends BackboneElementBuilder<EncounterDiagnosis, IEncounterDiagnosis> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add condition
   * The diagnosis relevant to the encounter
   */
  addCondition(condition: ICodeableReference): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add use
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
   */
  addUse(use: ICodeableConcept): this {
    return this.addToArray('use', use);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterDiagnosis instance
   */
  build(): EncounterDiagnosis {
    return new EncounterDiagnosis(this.data);
  }

  /**
   * Build and validate the EncounterDiagnosis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterDiagnosis> {
    const encounterDiagnosis = this.build();
    await encounterDiagnosis.validateOrThrow();
    return encounterDiagnosis;
  }
}
