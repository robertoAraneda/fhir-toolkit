import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CommunicationPayload } from '../../models/backbones/CommunicationPayload.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  ICommunicationPayload,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CommunicationPayloadBuilder - Fluent builder for CommunicationPayload backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const communicationPayload = new CommunicationPayloadBuilder()
 *   .build();
 */
export class CommunicationPayloadBuilder extends BackboneElementBuilder<CommunicationPayload, ICommunicationPayload> {
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
    const key = `content${type}` as keyof ICommunicationPayload;
    const otherKeys: (keyof ICommunicationPayload)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof ICommunicationPayload);
      otherKeys.push('_contentAttachment' as keyof ICommunicationPayload);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof ICommunicationPayload);
      otherKeys.push('_contentReference' as keyof ICommunicationPayload);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('contentCodeableConcept' as keyof ICommunicationPayload);
      otherKeys.push('_contentCodeableConcept' as keyof ICommunicationPayload);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CommunicationPayload instance
   */
  build(): CommunicationPayload {
    return new CommunicationPayload(this.data);
  }

  /**
   * Build and validate the CommunicationPayload instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CommunicationPayload> {
    const communicationPayload = this.build();
    await communicationPayload.validateOrThrow();
    return communicationPayload;
  }
}
