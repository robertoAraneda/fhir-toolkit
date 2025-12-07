import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationReaction } from '../../models/backbones/ImmunizationReaction.js';
import type {
  IImmunizationReaction,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ImmunizationReactionBuilder - Fluent builder for ImmunizationReaction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationReaction = new ImmunizationReactionBuilder()
 *   .setDate(value)
 *   .build();
 */
export class ImmunizationReactionBuilder extends BackboneElementBuilder<ImmunizationReaction, IImmunizationReaction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set date
   * When reaction started
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set detail
   * Additional information on reaction
   */
  setDetail(detail: IReference<'Observation'>): this {
    this.data.detail = detail;
    return this;
  }

  /**
   * Set reported
   * Indicates self-reported reaction
   */
  setReported(reported: boolean): this {
    this.data.reported = reported;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationReaction instance
   */
  build(): ImmunizationReaction {
    return new ImmunizationReaction(this.data);
  }

  /**
   * Build and validate the ImmunizationReaction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationReaction> {
    const immunizationReaction = this.build();
    await immunizationReaction.validateOrThrow();
    return immunizationReaction;
  }
}
