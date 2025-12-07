import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EndpointPayload } from '../../models/backbones/EndpointPayload.js';
import type {
  ICodeableConcept,
  IEndpointPayload,
} from '@fhir-toolkit/r5-types';

/**
 * EndpointPayloadBuilder - Fluent builder for EndpointPayload backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const endpointPayload = new EndpointPayloadBuilder()
 *   .addType({ ... })
 *   .build();
 */
export class EndpointPayloadBuilder extends BackboneElementBuilder<EndpointPayload, IEndpointPayload> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add mimeType
   * Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this)
   */
  addMimeType(mimeType: string): this {
    return this.addToArray('mimeType', mimeType);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EndpointPayload instance
   */
  build(): EndpointPayload {
    return new EndpointPayload(this.data);
  }

  /**
   * Build and validate the EndpointPayload instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EndpointPayload> {
    const endpointPayload = this.build();
    await endpointPayload.validateOrThrow();
    return endpointPayload;
  }
}
