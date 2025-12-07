import { ElementBuilder } from '../base/ElementBuilder.js';
import { Timing } from '../../models/datatypes/Timing.js';
import type {
  ICodeableConcept,
  ITiming,
  ITimingRepeat,
} from '@fhir-toolkit/r5-types';

/**
 * TimingBuilder - Fluent builder for Timing datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const timing = new TimingBuilder()
 *   .setRepeat(value)
 *   .addEvent({ ... })
 *   .build();
 */
export class TimingBuilder extends ElementBuilder<Timing, ITiming> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set repeat
   * When the event is to occur
   */
  setRepeat(repeat: ITimingRepeat): this {
    this.data.repeat = repeat;
    return this;
  }

  /**
   * Set code
   * C | BID | TID | QID | AM | PM | QD | QOD | +
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add event
   * When the event occurs
   */
  addEvent(event: string): this {
    return this.addToArray('event', event);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Timing instance
   */
  build(): Timing {
    return new Timing(this.data);
  }

  /**
   * Build and validate the Timing instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Timing> {
    const timing = this.build();
    await timing.validateOrThrow();
    return timing;
  }
}
