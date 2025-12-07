import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CommunicationPayload } from '../../models/backbones/CommunicationPayload.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICommunicationPayload,
  IReference,
} from '@fhir-toolkit/r4b-types';

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
   * Set content choice type (contentString, contentAttachment, contentReference)
   * @param type - 'String' | 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setContent('String', value)
   */
  setContent<T extends 'String' | 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `content${type}` as keyof ICommunicationPayload;
    const otherKeys: (keyof ICommunicationPayload)[] = [];
    if (type !== 'String') {
      otherKeys.push('contentString' as keyof ICommunicationPayload);
      otherKeys.push('_contentString' as keyof ICommunicationPayload);
    }
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof ICommunicationPayload);
      otherKeys.push('_contentAttachment' as keyof ICommunicationPayload);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof ICommunicationPayload);
      otherKeys.push('_contentReference' as keyof ICommunicationPayload);
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
