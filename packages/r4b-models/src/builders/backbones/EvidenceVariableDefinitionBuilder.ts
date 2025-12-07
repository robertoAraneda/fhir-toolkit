import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableDefinition } from '../../models/backbones/EvidenceVariableDefinition.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEvidenceVariableDefinition,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceVariableDefinitionBuilder - Fluent builder for EvidenceVariableDefinition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableDefinition = new EvidenceVariableDefinitionBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceVariableDefinitionBuilder extends BackboneElementBuilder<EvidenceVariableDefinition, IEvidenceVariableDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * A text description or summary of the variable
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set variableRole
   * population | subpopulation | exposure | referenceExposure | measuredVariable | confounder
   */
  setVariableRole(variableRole: ICodeableConcept): this {
    this.data.variableRole = variableRole;
    return this;
  }

  /**
   * Set observed
   * Definition of the actual variable related to the statistic(s)
   */
  setObserved(observed: IReference<'Group' | 'EvidenceVariable'>): this {
    this.data.observed = observed;
    return this;
  }

  /**
   * Set intended
   * Definition of the intended variable related to the Evidence
   */
  setIntended(intended: IReference<'Group' | 'EvidenceVariable'>): this {
    this.data.intended = intended;
    return this;
  }

  /**
   * Set directnessMatch
   * low | moderate | high | exact
   */
  setDirectnessMatch(directnessMatch: ICodeableConcept): this {
    this.data.directnessMatch = directnessMatch;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Footnotes and/or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableDefinition instance
   */
  build(): EvidenceVariableDefinition {
    return new EvidenceVariableDefinition(this.data);
  }

  /**
   * Build and validate the EvidenceVariableDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableDefinition> {
    const evidenceVariableDefinition = this.build();
    await evidenceVariableDefinition.validateOrThrow();
    return evidenceVariableDefinition;
  }
}
