import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterReason } from '../../models/backbones/EncounterReason.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IEncounterReason,
} from '@fhir-toolkit/r5-types';

/**
 * EncounterReasonBuilder - Fluent builder for EncounterReason backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterReason = new EncounterReasonBuilder()
 *   .addUse({ ... })
 *   .build();
 */
export class EncounterReasonBuilder extends BackboneElementBuilder<EncounterReason, IEncounterReason> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add use
   * What the reason value should be used for/as
   */
  addUse(use: ICodeableConcept): this {
    return this.addToArray('use', use);
  }

  /**
   * Add value
   * Reason the encounter takes place (core or reference)
   */
  addValue(value: ICodeableReference): this {
    return this.addToArray('value', value);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterReason instance
   */
  build(): EncounterReason {
    return new EncounterReason(this.data);
  }

  /**
   * Build and validate the EncounterReason instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterReason> {
    const encounterReason = this.build();
    await encounterReason.validateOrThrow();
    return encounterReason;
  }
}
