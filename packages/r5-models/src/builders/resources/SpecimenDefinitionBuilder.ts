import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SpecimenDefinition } from '../../models/resources/SpecimenDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IPeriod,
  IReference,
  ISpecimenDefinition,
  ISpecimenDefinitionTypeTested,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * SpecimenDefinitionBuilder - Fluent builder for SpecimenDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenDefinition = new SpecimenDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addDerivedFromCanonical({ ... })
 *   .build();
 */
export class SpecimenDefinitionBuilder extends DomainResourceBuilder<SpecimenDefinition, ISpecimenDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Logical canonical URL to reference this SpecimenDefinition (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set identifier
   * Business identifier
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set version
   * Business version of the SpecimenDefinition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this {{title}} (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this SpecimenDefinition (Human friendly)
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
   * If this SpecimenDefinition is not for real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date status first applied
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * The name of the individual or organization that published the SpecimenDefinition
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the SpecimenDefinition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this SpecimenDefinition is defined
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
   * Set approvalDate
   * When SpecimenDefinition was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * The date on which the asset content was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * The effective date range for the SpecimenDefinition
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set typeCollected
   * Kind of material to collect
   */
  setTypeCollected(typeCollected: ICodeableConcept): this {
    this.data.typeCollected = typeCollected;
    return this;
  }

  /**
   * Set timeAspect
   * Time aspect for collection
   */
  setTimeAspect(timeAspect: string): this {
    this.data.timeAspect = timeAspect;
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
    const key = `versionAlgorithm${type}` as keyof ISpecimenDefinition;
    const otherKeys: (keyof ISpecimenDefinition)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof ISpecimenDefinition);
      otherKeys.push('_versionAlgorithmString' as keyof ISpecimenDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof ISpecimenDefinition);
      otherKeys.push('_versionAlgorithmCoding' as keyof ISpecimenDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set subject choice type (subjectCodeableConcept, subjectReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubject('CodeableConcept', value)
   */
  setSubject<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `subject${type}` as keyof ISpecimenDefinition;
    const otherKeys: (keyof ISpecimenDefinition)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('subjectCodeableConcept' as keyof ISpecimenDefinition);
      otherKeys.push('_subjectCodeableConcept' as keyof ISpecimenDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('subjectReference' as keyof ISpecimenDefinition);
      otherKeys.push('_subjectReference' as keyof ISpecimenDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add derivedFromCanonical
   * Based on FHIR definition of another SpecimenDefinition
   */
  addDerivedFromCanonical(derivedFromCanonical: string): this {
    return this.addToArray('derivedFromCanonical', derivedFromCanonical);
  }

  /**
   * Add derivedFromUri
   * Based on external definition
   */
  addDerivedFromUri(derivedFromUri: string): this {
    return this.addToArray('derivedFromUri', derivedFromUri);
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
   * Content intends to support these contexts
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for this SpecimenDefinition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add patientPreparation
   * Patient preparation for collection
   */
  addPatientPreparation(patientPreparation: ICodeableConcept): this {
    return this.addToArray('patientPreparation', patientPreparation);
  }

  /**
   * Add collection
   * Specimen collection procedure
   */
  addCollection(collection: ICodeableConcept): this {
    return this.addToArray('collection', collection);
  }

  /**
   * Add typeTested
   * Specimen in container intended for testing by lab
   */
  addTypeTested(typeTested: ISpecimenDefinitionTypeTested): this {
    return this.addToArray('typeTested', typeTested);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenDefinition instance
   */
  build(): SpecimenDefinition {
    return new SpecimenDefinition(this.data);
  }

  /**
   * Build and validate the SpecimenDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenDefinition> {
    const specimenDefinition = this.build();
    await specimenDefinition.validateOrThrow();
    return specimenDefinition;
  }
}
