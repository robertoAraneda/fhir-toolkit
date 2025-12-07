import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Basic } from '../../models/resources/Basic.js';
import type {
  IBasic,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * BasicBuilder - Fluent builder for Basic resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const basic = new BasicBuilder()
 *   .setId('123')
 *   .setCode(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class BasicBuilder extends DomainResourceBuilder<Basic, IBasic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Kind of Resource
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Identifies the focus of this resource
   */
  setSubject(subject: IReference<'Resource'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set created
   * When created
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set author
   * Who created
   */
  setAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Organization'>): this {
    this.data.author = author;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Basic instance
   */
  build(): Basic {
    return new Basic(this.data);
  }

  /**
   * Build and validate the Basic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Basic> {
    const basic = this.build();
    await basic.validateOrThrow();
    return basic;
  }
}
