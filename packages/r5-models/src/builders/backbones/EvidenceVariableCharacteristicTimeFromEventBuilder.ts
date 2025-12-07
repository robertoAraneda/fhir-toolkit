import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristicTimeFromEvent } from '../../models/backbones/EvidenceVariableCharacteristicTimeFromEvent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEvidenceVariableCharacteristicTimeFromEvent,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceVariableCharacteristicTimeFromEventBuilder - Fluent builder for EvidenceVariableCharacteristicTimeFromEvent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristicTimeFromEvent = new EvidenceVariableCharacteristicTimeFromEventBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceVariableCharacteristicTimeFromEventBuilder extends BackboneElementBuilder<EvidenceVariableCharacteristicTimeFromEvent, IEvidenceVariableCharacteristicTimeFromEvent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Human readable description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set quantity
   * Used to express the observation at a defined amount of time before or after the event
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set range
   * Used to express the observation within a period before and/or after the event
   */
  setRange(range: IRange): this {
    this.data.range = range;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set event choice type (eventCodeableConcept, eventReference, eventDateTime, eventId)
   * @param type - 'CodeableConcept' | 'Reference' | 'DateTime' | 'Id'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEvent('CodeableConcept', value)
   */
  setEvent<T extends 'CodeableConcept' | 'Reference' | 'DateTime' | 'Id'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `event${type}` as keyof IEvidenceVariableCharacteristicTimeFromEvent;
    const otherKeys: (keyof IEvidenceVariableCharacteristicTimeFromEvent)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('eventCodeableConcept' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
      otherKeys.push('_eventCodeableConcept' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
    }
    if (type !== 'Reference') {
      otherKeys.push('eventReference' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
      otherKeys.push('_eventReference' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
    }
    if (type !== 'DateTime') {
      otherKeys.push('eventDateTime' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
      otherKeys.push('_eventDateTime' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
    }
    if (type !== 'Id') {
      otherKeys.push('eventId' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
      otherKeys.push('_eventId' as keyof IEvidenceVariableCharacteristicTimeFromEvent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Used for footnotes or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCharacteristicTimeFromEvent instance
   */
  build(): EvidenceVariableCharacteristicTimeFromEvent {
    return new EvidenceVariableCharacteristicTimeFromEvent(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCharacteristicTimeFromEvent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCharacteristicTimeFromEvent> {
    const evidenceVariableCharacteristicTimeFromEvent = this.build();
    await evidenceVariableCharacteristicTimeFromEvent.validateOrThrow();
    return evidenceVariableCharacteristicTimeFromEvent;
  }
}
