import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterClassHistory } from '../../models/backbones/EncounterClassHistory.js';
import type {
  ICoding,
  IEncounterClassHistory,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/**
 * EncounterClassHistoryBuilder - Fluent builder for EncounterClassHistory backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterClassHistory = new EncounterClassHistoryBuilder()
 *   .setClass(value)
 *   .build();
 */
export class EncounterClassHistoryBuilder extends BackboneElementBuilder<EncounterClassHistory, IEncounterClassHistory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set class
   * inpatient | outpatient | ambulatory | emergency +
   */
  setClass(_class: ICoding): this {
    this.data.class = _class;
    return this;
  }

  /**
   * Set period
   * The time that the episode was in the specified class
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterClassHistory instance
   */
  build(): EncounterClassHistory {
    return new EncounterClassHistory(this.data);
  }

  /**
   * Build and validate the EncounterClassHistory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterClassHistory> {
    const encounterClassHistory = this.build();
    await encounterClassHistory.validateOrThrow();
    return encounterClassHistory;
  }
}
