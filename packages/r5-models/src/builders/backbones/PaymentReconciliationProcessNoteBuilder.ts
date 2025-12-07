import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PaymentReconciliationProcessNote } from '../../models/backbones/PaymentReconciliationProcessNote.js';
import type {
  IPaymentReconciliationProcessNote,
  NoteTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * PaymentReconciliationProcessNoteBuilder - Fluent builder for PaymentReconciliationProcessNote backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const paymentReconciliationProcessNote = new PaymentReconciliationProcessNoteBuilder()
 *   .setType(value)
 *   .build();
 */
export class PaymentReconciliationProcessNoteBuilder extends BackboneElementBuilder<PaymentReconciliationProcessNote, IPaymentReconciliationProcessNote> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * display | print | printoper
   */
  setType(type: NoteTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set text
   * Note explanatory text
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PaymentReconciliationProcessNote instance
   */
  build(): PaymentReconciliationProcessNote {
    return new PaymentReconciliationProcessNote(this.data);
  }

  /**
   * Build and validate the PaymentReconciliationProcessNote instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PaymentReconciliationProcessNote> {
    const paymentReconciliationProcessNote = this.build();
    await paymentReconciliationProcessNote.validateOrThrow();
    return paymentReconciliationProcessNote;
  }
}
