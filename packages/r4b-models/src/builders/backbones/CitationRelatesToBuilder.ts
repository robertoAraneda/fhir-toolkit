import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationRelatesTo } from '../../models/backbones/CitationRelatesTo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICitationRelatesTo,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationRelatesToBuilder - Fluent builder for CitationRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationRelatesTo = new CitationRelatesToBuilder()
 *   .setRelationshipType(value)
 *   .addTargetClassifier({ ... })
 *   .build();
 */
export class CitationRelatesToBuilder extends BackboneElementBuilder<CitationRelatesTo, ICitationRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relationshipType
   * How the Citation resource relates to the target artifact
   */
  setRelationshipType(relationshipType: ICodeableConcept): this {
    this.data.relationshipType = relationshipType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set target choice type (targetUri, targetIdentifier, targetReference, targetAttachment)
   * @param type - 'Uri' | 'Identifier' | 'Reference' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTarget('Uri', value)
   */
  setTarget<T extends 'Uri' | 'Identifier' | 'Reference' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `target${type}` as keyof ICitationRelatesTo;
    const otherKeys: (keyof ICitationRelatesTo)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('targetUri' as keyof ICitationRelatesTo);
      otherKeys.push('_targetUri' as keyof ICitationRelatesTo);
    }
    if (type !== 'Identifier') {
      otherKeys.push('targetIdentifier' as keyof ICitationRelatesTo);
      otherKeys.push('_targetIdentifier' as keyof ICitationRelatesTo);
    }
    if (type !== 'Reference') {
      otherKeys.push('targetReference' as keyof ICitationRelatesTo);
      otherKeys.push('_targetReference' as keyof ICitationRelatesTo);
    }
    if (type !== 'Attachment') {
      otherKeys.push('targetAttachment' as keyof ICitationRelatesTo);
      otherKeys.push('_targetAttachment' as keyof ICitationRelatesTo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add targetClassifier
   * The clasification of the related artifact
   */
  addTargetClassifier(targetClassifier: ICodeableConcept): this {
    return this.addToArray('targetClassifier', targetClassifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationRelatesTo instance
   */
  build(): CitationRelatesTo {
    return new CitationRelatesTo(this.data);
  }

  /**
   * Build and validate the CitationRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationRelatesTo> {
    const citationRelatesTo = this.build();
    await citationRelatesTo.validateOrThrow();
    return citationRelatesTo;
  }
}
