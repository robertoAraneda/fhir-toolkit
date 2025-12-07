import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentReferenceAttester } from '../../models/backbones/DocumentReferenceAttester.js';
import type {
  ICodeableConcept,
  IDocumentReferenceAttester,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DocumentReferenceAttesterBuilder - Fluent builder for DocumentReferenceAttester backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReferenceAttester = new DocumentReferenceAttesterBuilder()
 *   .setMode(value)
 *   .build();
 */
export class DocumentReferenceAttesterBuilder extends BackboneElementBuilder<DocumentReferenceAttester, IDocumentReferenceAttester> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * personal | professional | legal | official
   */
  setMode(mode: ICodeableConcept): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set time
   * When the document was attested
   */
  setTime(time: string): this {
    this.data.time = time;
    return this;
  }

  /**
   * Set party
   * Who attested the document
   */
  setParty(party: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.party = party;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReferenceAttester instance
   */
  build(): DocumentReferenceAttester {
    return new DocumentReferenceAttester(this.data);
  }

  /**
   * Build and validate the DocumentReferenceAttester instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReferenceAttester> {
    const documentReferenceAttester = this.build();
    await documentReferenceAttester.validateOrThrow();
    return documentReferenceAttester;
  }
}
