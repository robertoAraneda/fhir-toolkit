import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentReferenceContentProfile } from '../../models/backbones/DocumentReferenceContentProfile.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IDocumentReferenceContentProfile,
} from '@fhir-toolkit/r5-types';

/**
 * DocumentReferenceContentProfileBuilder - Fluent builder for DocumentReferenceContentProfile backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReferenceContentProfile = new DocumentReferenceContentProfileBuilder()
 *   .build();
 */
export class DocumentReferenceContentProfileBuilder extends BackboneElementBuilder<DocumentReferenceContentProfile, IDocumentReferenceContentProfile> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCoding, valueUri, valueCanonical)
   * @param type - 'Coding' | 'Uri' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Coding', value)
   */
  setValue<T extends 'Coding' | 'Uri' | 'Canonical'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IDocumentReferenceContentProfile;
    const otherKeys: (keyof IDocumentReferenceContentProfile)[] = [];
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IDocumentReferenceContentProfile);
      otherKeys.push('_valueCoding' as keyof IDocumentReferenceContentProfile);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IDocumentReferenceContentProfile);
      otherKeys.push('_valueUri' as keyof IDocumentReferenceContentProfile);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof IDocumentReferenceContentProfile);
      otherKeys.push('_valueCanonical' as keyof IDocumentReferenceContentProfile);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReferenceContentProfile instance
   */
  build(): DocumentReferenceContentProfile {
    return new DocumentReferenceContentProfile(this.data);
  }

  /**
   * Build and validate the DocumentReferenceContentProfile instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReferenceContentProfile> {
    const documentReferenceContentProfile = this.build();
    await documentReferenceContentProfile.validateOrThrow();
    return documentReferenceContentProfile;
  }
}
