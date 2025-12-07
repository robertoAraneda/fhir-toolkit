import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CommunicationRequestPayload } from '../../models/backbones/CommunicationRequestPayload.js';
import type {
  IAttachment,
  ICommunicationRequestPayload,
  IReference,
} from '@fhir-toolkit/r4-types';

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
   * Set content choice type
   * @param type - 'String' | 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setContent('String', value)
   */
  setContent<T extends 'String' | 'Attachment' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `content${type}` as keyof ICommunicationRequestPayload;
    const otherKeys: (keyof ICommunicationRequestPayload)[] = [];
    if (type !== 'String') {
      otherKeys.push('contentString' as keyof ICommunicationRequestPayload);
      otherKeys.push('_contentString' as keyof ICommunicationRequestPayload);
    }
    if (type !== 'Attachment') {
      otherKeys.push('contentAttachment' as keyof ICommunicationRequestPayload);
      otherKeys.push('_contentAttachment' as keyof ICommunicationRequestPayload);
    }
    if (type !== 'Reference') {
      otherKeys.push('contentReference' as keyof ICommunicationRequestPayload);
      otherKeys.push('_contentReference' as keyof ICommunicationRequestPayload);
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
