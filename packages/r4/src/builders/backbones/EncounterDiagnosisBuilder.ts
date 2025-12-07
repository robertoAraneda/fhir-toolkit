import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterDiagnosis } from '../../models/backbones/EncounterDiagnosis.js';
import type {
  ICodeableConcept,
  IEncounterDiagnosis,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * EncounterDiagnosisBuilder - Fluent builder for EncounterDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterDiagnosis = new EncounterDiagnosisBuilder()
 *   .setCondition(value)
 *   .build();
 */
export class EncounterDiagnosisBuilder extends BackboneElementBuilder<EncounterDiagnosis, IEncounterDiagnosis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set condition
   * The diagnosis or procedure relevant to the encounter
   */
  setCondition(condition: IReference<'Condition' | 'Procedure'>): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set use
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …)
   */
  setUse(use: ICodeableConcept): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set rank
   * Ranking of the diagnosis (for each role type)
   */
  setRank(rank: number): this {
    this.data.rank = rank;
    return this;
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
