import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CommunicationRequestPayload } from '../../models/backbones/CommunicationRequestPayload.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  ICommunicationRequestPayload,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CommunicationRequestPayloadBuilder - Fluent builder for CommunicationRequestPayload backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const communicationRequestPayload = new CommunicationRequestPayloadBuilder()
 *   .build();
 */
export class CommunicationRequestPayloadBuilder extends BackboneElementBuilder<CommunicationRequestPayload, ICommunicationRequestPayload> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set content choice type (contentAttachment, contentReference, contentCodeableConcept)
   * @param type - 'Attachment' | 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setContent('Attachment', value)
   */
  setContent<T extends 'Attachment' | 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `content${type}` as keyof ICommunicationRequestPayload;
    const otherKeys: (keyof ICommunicationRequestPayload)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof ICommunicationRequestPayload);
      otherKeys.push('_contentAttachment' as keyof ICommunicationRequestPayload);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof ICommunicationRequestPayload);
      otherKeys.push('_contentReference' as keyof ICommunicationRequestPayload);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('contentCodeableConcept' as keyof ICommunicationRequestPayload);
      otherKeys.push('_contentCodeableConcept' as keyof ICommunicationRequestPayload);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CommunicationRequestPayload instance
   */
  build(): CommunicationRequestPayload {
    return new CommunicationRequestPayload(this.data);
  }

  /**
   * Build and validate the CommunicationRequestPayload instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CommunicationRequestPayload> {
    const communicationRequestPayload = this.build();
    await communicationRequestPayload.validateOrThrow();
    return communicationRequestPayload;
  }
}
