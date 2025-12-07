import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SearchParameter } from '../../models/resources/SearchParameter.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  ISearchParameter,
  ISearchParameterComponent,
  IUsageContext,
  PublicationStatusType,
  SearchComparatorType,
  SearchModifierCodeType,
  SearchParamTypeType,
  SearchProcessingModeTypeType,
  VersionIndependentResourceTypesAllType,
} from '@fhir-toolkit/r5-types';

/**
 * SearchParameterBuilder - Fluent builder for SearchParameter resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const searchParameter = new SearchParameterBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SearchParameterBuilder extends DomainResourceBuilder<SearchParameter, ISearchParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this search parameter, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the search parameter
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this search parameter (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this search parameter (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set derivedFrom
   * Original definition for the search parameter
   */
  setDerivedFrom(derivedFrom: string): this {
    this.data.derivedFrom = derivedFrom;
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
   * Name of the publisher/steward (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the search parameter
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this search parameter is defined
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

  /**
   * Set copyrightLabel
   * Copyright holder and year(s)
   */
  setCopyrightLabel(copyrightLabel: string): this {
    this.data.copyrightLabel = copyrightLabel;
    return this;
  }

  /**
   * Set code
   * Recommended name for parameter in search url
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set type
   * number | date | string | token | reference | composite | quantity | uri | special
   */
  setType(type: SearchParamTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set expression
   * FHIRPath expression that extracts the values
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  /**
   * Set processingMode
   * normal | phonetic | other
   */
  setProcessingMode(processingMode: SearchProcessingModeTypeType): this {
    this.data.processingMode = processingMode;
    return this;
  }

  /**
   * Set constraint
   * FHIRPath expression that constraints the usage of this SearchParamete
   */
  setConstraint(constraint: string): this {
    this.data.constraint = constraint;
    return this;
  }

  /**
   * Set multipleOr
   * Allow multiple values per parameter (or)
   */
  setMultipleOr(multipleOr: boolean): this {
    this.data.multipleOr = multipleOr;
    return this;
  }

  /**
   * Set multipleAnd
   * Allow multiple parameters (and)
   */
  setMultipleAnd(multipleAnd: boolean): this {
    this.data.multipleAnd = multipleAnd;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set versionAlgorithm choice type (versionAlgorithmString, versionAlgorithmCoding)
   * @param type - 'String' | 'Coding'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setVersionAlgorithm('String', value)
   */
  setVersionAlgorithm<T extends 'String' | 'Coding'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `versionAlgorithm${type}` as keyof ISearchParameter;
    const otherKeys: (keyof ISearchParameter)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof ISearchParameter);
      otherKeys.push('_versionAlgorithmString' as keyof ISearchParameter);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof ISearchParameter);
      otherKeys.push('_versionAlgorithmCoding' as keyof ISearchParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the search parameter (business identifier)
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

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
   * Intended jurisdiction for search parameter (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add base
   * The resource type(s) this search parameter applies to
   */
  addBase(base: VersionIndependentResourceTypesAllType): this {
    return this.addToArray('base', base);
  }

  /**
   * Add target
   * Types of resource (if a resource reference)
   */
  addTarget(target: VersionIndependentResourceTypesAllType): this {
    return this.addToArray('target', target);
  }

  /**
   * Add comparator
   * eq | ne | gt | lt | ge | le | sa | eb | ap
   */
  addComparator(comparator: SearchComparatorType): this {
    return this.addToArray('comparator', comparator);
  }

  /**
   * Add modifier
   * missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
   */
  addModifier(modifier: SearchModifierCodeType): this {
    return this.addToArray('modifier', modifier);
  }

  /**
   * Add chain
   * Chained names supported
   */
  addChain(chain: string): this {
    return this.addToArray('chain', chain);
  }

  /**
   * Add component
   * For Composite resources to define the parts
   */
  addComponent(component: ISearchParameterComponent): this {
    return this.addToArray('component', component);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SearchParameter instance
   */
  build(): SearchParameter {
    return new SearchParameter(this.data);
  }

  /**
   * Build and validate the SearchParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SearchParameter> {
    const searchParameter = this.build();
    await searchParameter.validateOrThrow();
    return searchParameter;
  }
}
