import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TransportRestriction } from '../../models/backbones/TransportRestriction.js';
import type {
  IPeriod,
  IReference,
  ITransportRestriction,
} from '@fhir-toolkit/r5-types';

/**
 * TransportRestrictionBuilder - Fluent builder for TransportRestriction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const transportRestriction = new TransportRestrictionBuilder()
 *   .setRepetitions(value)
 *   .addRecipient({ ... })
 *   .build();
 */
export class TransportRestrictionBuilder extends BackboneElementBuilder<TransportRestriction, ITransportRestriction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set repetitions
   * How many times to repeat
   */
  setRepetitions(repetitions: number): this {
    this.data.repetitions = repetitions;
    return this;
  }

  /**
   * Set period
   * When fulfillment sought
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add recipient
   * For whom is fulfillment sought?
   */
  addRecipient(recipient: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'Organization'>): this {
    return this.addToArray('recipient', recipient);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TransportRestriction instance
   */
  build(): TransportRestriction {
    return new TransportRestriction(this.data);
  }

  /**
   * Build and validate the TransportRestriction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TransportRestriction> {
    const transportRestriction = this.build();
    await transportRestriction.validateOrThrow();
    return transportRestriction;
  }
}
