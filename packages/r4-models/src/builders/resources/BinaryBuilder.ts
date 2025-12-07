import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Binary } from '../../models/resources/Binary.js';
import type {
  IBinary,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * BinaryBuilder - Fluent builder for Binary resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const binary = new BinaryBuilder()
 *   .setId('123')
 *   .setContentType(value)
 *   .build();
 */
export class BinaryBuilder extends DomainResourceBuilder<Binary, IBinary> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set contentType
   * MimeType of the binary content
   */
  setContentType(contentType: string): this {
    this.data.contentType = contentType;
    return this;
  }

  /**
   * Set securityContext
   * Identifies another resource to use as proxy when enforcing access control
   */
  setSecurityContext(securityContext: IReference<'Resource'>): this {
    this.data.securityContext = securityContext;
    return this;
  }

  /**
   * Set data
   * The actual content
   */
  setData(data: string): this {
    this.data.data = data;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Binary instance
   */
  build(): Binary {
    return new Binary(this.data);
  }

  /**
   * Build and validate the Binary instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Binary> {
    const binary = this.build();
    await binary.validateOrThrow();
    return binary;
  }
}
