import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CompositionEvent } from '../../models/backbones/CompositionEvent.js';
import type {
  ICodeableConcept,
  ICompositionEvent,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CompositionEventBuilder - Fluent builder for CompositionEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const compositionEvent = new CompositionEventBuilder()
 *   .setPeriod(value)
 *   .addCode({ ... })
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
   * Add code
   * Code(s) that apply to the event being documented
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add detail
   * The event(s) being documented
   */
  addDetail(detail: IReference<'Resource'>): this {
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
