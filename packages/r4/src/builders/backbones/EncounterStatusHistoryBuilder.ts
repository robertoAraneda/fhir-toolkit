import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterStatusHistory } from '../../models/backbones/EncounterStatusHistory.js';
import type {
  EncounterStatusType,
  IEncounterStatusHistory,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * EncounterStatusHistoryBuilder - Fluent builder for EncounterStatusHistory backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterStatusHistory = new EncounterStatusHistoryBuilder()
 *   .setStatus(value)
 *   .build();
 */
export class EncounterStatusHistoryBuilder extends BackboneElementBuilder<EncounterStatusHistory, IEncounterStatusHistory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +
   */
  setStatus(status: EncounterStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set period
   * The time that the episode was in the specified status
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterStatusHistory instance
   */
  build(): EncounterStatusHistory {
    return new EncounterStatusHistory(this.data);
  }

  /**
   * Build and validate the EncounterStatusHistory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterStatusHistory> {
    const encounterStatusHistory = this.build();
    await encounterStatusHistory.validateOrThrow();
    return encounterStatusHistory;
  }
}
