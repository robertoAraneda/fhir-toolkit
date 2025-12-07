import { ElementBuilder } from '../base/ElementBuilder.js';
import { Attachment } from '../../models/datatypes/Attachment.js';
import type {
  IAttachment,
} from '@fhir-toolkit/r4b-types';

/**
 * AttachmentBuilder - Fluent builder for Attachment datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const attachment = new AttachmentBuilder()
 *   .setContentType(value)
 *   .build();
 */
export class AttachmentBuilder extends ElementBuilder<Attachment, IAttachment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set contentType
   * Mime type of the content, with charset etc.
   */
  setContentType(contentType: string): this {
    this.data.contentType = contentType;
    return this;
  }

  /**
   * Set language
   * Human language of the content (BCP-47)
   */
  setLanguage(language: string): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set data
   * Data inline, base64ed
   */
  setData(data: string): this {
    this.data.data = data;
    return this;
  }

  /**
   * Set url
   * Uri where the data can be found
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set size
   * Number of bytes of content (if url provided)
   */
  setSize(size: number): this {
    this.data.size = size;
    return this;
  }

  /**
   * Set hash
   * Hash of the data (sha-1, base64ed)
   */
  setHash(hash: string): this {
    this.data.hash = hash;
    return this;
  }

  /**
   * Set title
   * Label to display in place of the data
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set creation
   * Date attachment was first created
   */
  setCreation(creation: string): this {
    this.data.creation = creation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Attachment instance
   */
  build(): Attachment {
    return new Attachment(this.data);
  }

  /**
   * Build and validate the Attachment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Attachment> {
    const attachment = this.build();
    await attachment.validateOrThrow();
    return attachment;
  }
}
