import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationName } from '../../models/backbones/SubstanceSpecificationName.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceSpecificationName,
  ISubstanceSpecificationNameOfficial,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationNameBuilder - Fluent builder for SubstanceSpecificationName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationName = new SubstanceSpecificationNameBuilder()
 *   .setName(value)
 *   .addLanguage({ ... })
 *   .build();
 */
export class SubstanceSpecificationNameBuilder extends BackboneElementBuilder<SubstanceSpecificationName, ISubstanceSpecificationName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * The actual name
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * Name type
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * The status of the name
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set preferred
   * If this is the preferred name for this substance
   */
  setPreferred(preferred: boolean): this {
    this.data.preferred = preferred;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add language
   * Language of the name
   */
  addLanguage(language: ICodeableConcept): this {
    return this.addToArray('language', language);
  }

  /**
   * Add domain
   * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive
   */
  addDomain(domain: ICodeableConcept): this {
    return this.addToArray('domain', domain);
  }

  /**
   * Add jurisdiction
   * The jurisdiction where this name applies
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add synonym
   * A synonym of this name
   */
  addSynonym(synonym: ISubstanceSpecificationName): this {
    return this.addToArray('synonym', synonym);
  }

  /**
   * Add translation
   * A translation for this name
   */
  addTranslation(translation: ISubstanceSpecificationName): this {
    return this.addToArray('translation', translation);
  }

  /**
   * Add official
   * Details of the official nature of this name
   */
  addOfficial(official: ISubstanceSpecificationNameOfficial): this {
    return this.addToArray('official', official);
  }

  /**
   * Add source
   * Supporting literature
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationName instance
   */
  build(): SubstanceSpecificationName {
    return new SubstanceSpecificationName(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationName> {
    const substanceSpecificationName = this.build();
    await substanceSpecificationName.validateOrThrow();
    return substanceSpecificationName;
  }
}
