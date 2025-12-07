import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CitationCitedArtifactPart } from '../../models/backbones/CitationCitedArtifactPart.js';
import type {
  ICitationCitedArtifactPart,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CitationCitedArtifactPartBuilder - Fluent builder for CitationCitedArtifactPart backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const citationCitedArtifactPart = new CitationCitedArtifactPartBuilder()
 *   .setType(value)
 *   .build();
 */
export class CitationCitedArtifactPartBuilder extends BackboneElementBuilder<CitationCitedArtifactPart, ICitationCitedArtifactPart> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The kind of component
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set value
   * The specification of the component
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set baseCitation
   * The citation for the full article or artifact
   */
  setBaseCitation(baseCitation: IReference<'Citation'>): this {
    this.data.baseCitation = baseCitation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CitationCitedArtifactPart instance
   */
  build(): CitationCitedArtifactPart {
    return new CitationCitedArtifactPart(this.data);
  }

  /**
   * Build and validate the CitationCitedArtifactPart instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CitationCitedArtifactPart> {
    const citationCitedArtifactPart = this.build();
    await citationCitedArtifactPart.validateOrThrow();
    return citationCitedArtifactPart;
  }
}
