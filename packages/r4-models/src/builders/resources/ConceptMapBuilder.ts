import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ConceptMap } from '../../models/resources/ConceptMap.js';
import type {
  ICodeableConcept,
  IConceptMap,
  IConceptMapGroup,
  IContactDetail,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * ConceptMapBuilder - Fluent builder for ConceptMap resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMap = new ConceptMapBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class ConceptMapBuilder extends DomainResourceBuilder<ConceptMap, IConceptMap> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this concept map, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set identifier
   * Additional identifier for the concept map
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set version
   * Business version of the concept map
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this concept map (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this concept map (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set experimental
   * For testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the concept map
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this concept map is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set source choice type
   * @param type - 'Uri' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSource('Uri', value)
   */
  setSource<T extends 'Uri' | 'Canonical'>(
    type: T,
    value: string
  ): this {
    const key = `source${type}` as keyof IConceptMap;
    const otherKeys: (keyof IConceptMap)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('sourceUri' as keyof IConceptMap);
      otherKeys.push('_sourceUri' as keyof IConceptMap);
    }
    if (type !== 'Canonical') {
      otherKeys.push('sourceCanonical' as keyof IConceptMap);
      otherKeys.push('_sourceCanonical' as keyof IConceptMap);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set target choice type
   * @param type - 'Uri' | 'Canonical'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTarget('Uri', value)
   */
  setTarget<T extends 'Uri' | 'Canonical'>(
    type: T,
    value: string
  ): this {
    const key = `target${type}` as keyof IConceptMap;
    const otherKeys: (keyof IConceptMap)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('targetUri' as keyof IConceptMap);
      otherKeys.push('_targetUri' as keyof IConceptMap);
    }
    if (type !== 'Canonical') {
      otherKeys.push('targetCanonical' as keyof IConceptMap);
      otherKeys.push('_targetCanonical' as keyof IConceptMap);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for concept map (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add group
   * Same source and target systems
   */
  addGroup(group: IConceptMapGroup): this {
    return this.addToArray('group', group);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMap instance
   */
  build(): ConceptMap {
    return new ConceptMap(this.data);
  }

  /**
   * Build and validate the ConceptMap instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMap> {
    const conceptMap = this.build();
    await conceptMap.validateOrThrow();
    return conceptMap;
  }
}
