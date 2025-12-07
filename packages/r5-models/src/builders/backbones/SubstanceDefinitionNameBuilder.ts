import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionName } from '../../models/backbones/SubstanceDefinitionName.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceDefinitionName,
  ISubstanceDefinitionNameOfficial,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionNameBuilder - Fluent builder for SubstanceDefinitionName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionName = new SubstanceDefinitionNameBuilder()
 *   .setName(value)
 *   .addLanguage({ ... })
 *   .build();
 */
export class SubstanceDefinitionNameBuilder extends BackboneElementBuilder<SubstanceDefinitionName, ISubstanceDefinitionName> {
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
   * Name type e.g. 'systematic',  'scientific, 'brand'
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * The status of the name e.g. 'current', 'proposed'
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
   * Human language that the name is written in
   */
  addLanguage(language: ICodeableConcept): this {
    return this.addToArray('language', language);
  }

  /**
   * Add domain
   * The use context of this name e.g. as an active ingredient or as a food colour additive
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
   * A synonym of this particular name, by which the substance is also known
   */
  addSynonym(synonym: ISubstanceDefinitionName): this {
    return this.addToArray('synonym', synonym);
  }

  /**
   * Add translation
   * A translation for this name into another human language
   */
  addTranslation(translation: ISubstanceDefinitionName): this {
    return this.addToArray('translation', translation);
  }

  /**
   * Add official
   * Details of the official nature of this name
   */
  addOfficial(official: ISubstanceDefinitionNameOfficial): this {
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
   * Build the SubstanceDefinitionName instance
   */
  build(): SubstanceDefinitionName {
    return new SubstanceDefinitionName(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionName> {
    const substanceDefinitionName = this.build();
    await substanceDefinitionName.validateOrThrow();
    return substanceDefinitionName;
  }
}
