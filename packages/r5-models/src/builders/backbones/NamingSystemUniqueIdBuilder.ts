import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NamingSystemUniqueId } from '../../models/backbones/NamingSystemUniqueId.js';
import type {
  INamingSystemUniqueId,
  IPeriod,
  NamingSystemIdentifierTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * NamingSystemUniqueIdBuilder - Fluent builder for NamingSystemUniqueId backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const namingSystemUniqueId = new NamingSystemUniqueIdBuilder()
 *   .setType(value)
 *   .build();
 */
export class NamingSystemUniqueIdBuilder extends BackboneElementBuilder<NamingSystemUniqueId, INamingSystemUniqueId> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * oid | uuid | uri | iri-stem | v2csmnemonic | other
   */
  setType(type: NamingSystemIdentifierTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set value
   * The unique identifier
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set preferred
   * Is this the id that should be used for this type
   */
  setPreferred(preferred: boolean): this {
    this.data.preferred = preferred;
    return this;
  }

  /**
   * Set comment
   * Notes about identifier usage
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set period
   * When is identifier valid?
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set authoritative
   * Whether the identifier is authoritative
   */
  setAuthoritative(authoritative: boolean): this {
    this.data.authoritative = authoritative;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NamingSystemUniqueId instance
   */
  build(): NamingSystemUniqueId {
    return new NamingSystemUniqueId(this.data);
  }

  /**
   * Build and validate the NamingSystemUniqueId instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NamingSystemUniqueId> {
    const namingSystemUniqueId = this.build();
    await namingSystemUniqueId.validateOrThrow();
    return namingSystemUniqueId;
  }
}
