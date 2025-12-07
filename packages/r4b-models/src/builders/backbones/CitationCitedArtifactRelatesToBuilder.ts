import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactRelatesTo } from '../../models/backbones/CitationCitedArtifactRelatesTo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICitationCitedArtifactRelatesTo,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactRelatesToBuilder - Fluent builder for CitationCitedArtifactRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactRelatesTo = new CitationCitedArtifactRelatesToBuilder()
 *   .setRelationshipType(value)
 *   .addTargetClassifier({ ... })
 *   .build();
 */
export class CitationCitedArtifactRelatesToBuilder extends BackboneElementBuilder<CitationCitedArtifactRelatesTo, ICitationCitedArtifactRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relationshipType
   * How the cited artifact relates to the target artifact
   */
  setRelationshipType(relationshipType: ICodeableConcept): this {
    this.data.relationshipType = relationshipType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set target choice type
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
    const key = `target${type}` as keyof ICitationCitedArtifactRelatesTo;
    const otherKeys: (keyof ICitationCitedArtifactRelatesTo)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('targetUri' as keyof ICitationCitedArtifactRelatesTo);
      otherKeys.push('_targetUri' as keyof ICitationCitedArtifactRelatesTo);
    }
    if (type !== 'Identifier') {
      otherKeys.push('targetIdentifier' as keyof ICitationCitedArtifactRelatesTo);
      otherKeys.push('_targetIdentifier' as keyof ICitationCitedArtifactRelatesTo);
    }
    if (type !== 'Reference') {
      otherKeys.push('targetReference' as keyof ICitationCitedArtifactRelatesTo);
      otherKeys.push('_targetReference' as keyof ICitationCitedArtifactRelatesTo);
    }
    if (type !== 'Attachment') {
      otherKeys.push('targetAttachment' as keyof ICitationCitedArtifactRelatesTo);
      otherKeys.push('_targetAttachment' as keyof ICitationCitedArtifactRelatesTo);
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
   * Build the CitationCitedArtifactRelatesTo instance
   */
  build(): CitationCitedArtifactRelatesTo {
    return new CitationCitedArtifactRelatesTo(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactRelatesTo> {
    const citationCitedArtifactRelatesTo = this.build();
    await citationCitedArtifactRelatesTo.validateOrThrow();
    return citationCitedArtifactRelatesTo;
  }
}
