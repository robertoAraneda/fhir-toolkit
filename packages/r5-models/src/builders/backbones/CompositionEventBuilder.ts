import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CompositionEvent } from '../../models/backbones/CompositionEvent.js';
import type {
  ICodeableReference,
  ICompositionEvent,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * CompositionEventBuilder - Fluent builder for CompositionEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const compositionEvent = new CompositionEventBuilder()
 *   .setPeriod(value)
 *   .addDetail({ ... })
 *   .build();
 */
export class CompositionEventBuilder extends BackboneElementBuilder<CompositionEvent, ICompositionEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set period
   * The period covered by the documentation
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add detail
   * The event(s) being documented, as code(s), reference(s), or both
   */
  addDetail(detail: ICodeableReference): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CompositionEvent instance
   */
  build(): CompositionEvent {
    return new CompositionEvent(this.data);
  }

  /**
   * Build and validate the CompositionEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CompositionEvent> {
    const compositionEvent = this.build();
    await compositionEvent.validateOrThrow();
    return compositionEvent;
  }
}
