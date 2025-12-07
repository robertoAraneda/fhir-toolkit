import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ObservationDefinition } from '../../models/resources/ObservationDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IObservationDefinition,
  IObservationDefinitionComponent,
  IObservationDefinitionQualifiedValue,
  IPeriod,
  IReference,
  IUsageContext,
  ObservationDataTypeType,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ObservationDefinitionBuilder - Fluent builder for ObservationDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationDefinition = new ObservationDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addContact({ ... })
 *   .build();
 */
export class ObservationDefinitionBuilder extends DomainResourceBuilder<ObservationDefinition, IObservationDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Logical canonical URL to reference this ObservationDefinition (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set identifier
   * Business identifier of the ObservationDefinition
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set version
   * Business version of the ObservationDefinition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this ObservationDefinition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this ObservationDefinition (human friendly)
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
   * If for testing purposes, not real usage
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
   * The name of the individual or organization that published the ObservationDefinition
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the ObservationDefinition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this ObservationDefinition is defined
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
   * When ObservationDefinition was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * Date on which the asset content was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set effectivePeriod
   * The effective date range for the ObservationDefinition
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set performerType
   * Desired kind of performer for such kind of observation
   */
  setPerformerType(performerType: ICodeableConcept): this {
    this.data.performerType = performerType;
    return this;
  }

  /**
   * Set code
   * Type of observation
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set multipleResultsAllowed
   * Multiple results allowed for conforming observations
   */
  setMultipleResultsAllowed(multipleResultsAllowed: boolean): this {
    this.data.multipleResultsAllowed = multipleResultsAllowed;
    return this;
  }

  /**
   * Set bodySite
   * Body part to be observed
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  /**
   * Set method
   * Method used to produce the observation
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set preferredReportName
   * The preferred name to be used when reporting the observation results
   */
  setPreferredReportName(preferredReportName: string): this {
    this.data.preferredReportName = preferredReportName;
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
    const key = `versionAlgorithm${type}` as keyof IObservationDefinition;
    const otherKeys: (keyof IObservationDefinition)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IObservationDefinition);
      otherKeys.push('_versionAlgorithmString' as keyof IObservationDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IObservationDefinition);
      otherKeys.push('_versionAlgorithmCoding' as keyof IObservationDefinition);
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
   * Content intends to support these contexts
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for this ObservationDefinition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add derivedFromCanonical
   * Based on FHIR definition of another observation
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
   * Add subject
   * Type of subject for the defined observation
   */
  addSubject(subject: ICodeableConcept): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add category
   * General type of observation
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add permittedDataType
   * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   */
  addPermittedDataType(permittedDataType: ObservationDataTypeType): this {
    return this.addToArray('permittedDataType', permittedDataType);
  }

  /**
   * Add specimen
   * Kind of specimen used by this type of observation
   */
  addSpecimen(specimen: IReference<'SpecimenDefinition'>): this {
    return this.addToArray('specimen', specimen);
  }

  /**
   * Add device
   * Measurement device or model of device
   */
  addDevice(device: IReference<'DeviceDefinition' | 'Device'>): this {
    return this.addToArray('device', device);
  }

  /**
   * Add permittedUnit
   * Unit for quantitative results
   */
  addPermittedUnit(permittedUnit: ICoding): this {
    return this.addToArray('permittedUnit', permittedUnit);
  }

  /**
   * Add qualifiedValue
   * Set of qualified values for observation results
   */
  addQualifiedValue(qualifiedValue: IObservationDefinitionQualifiedValue): this {
    return this.addToArray('qualifiedValue', qualifiedValue);
  }

  /**
   * Add hasMember
   * Definitions of related resources belonging to this kind of observation group
   */
  addHasMember(hasMember: IReference<'ObservationDefinition' | 'Questionnaire'>): this {
    return this.addToArray('hasMember', hasMember);
  }

  /**
   * Add component
   * Component results
   */
  addComponent(component: IObservationDefinitionComponent): this {
    return this.addToArray('component', component);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationDefinition instance
   */
  build(): ObservationDefinition {
    return new ObservationDefinition(this.data);
  }

  /**
   * Build and validate the ObservationDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationDefinition> {
    const observationDefinition = this.build();
    await observationDefinition.validateOrThrow();
    return observationDefinition;
  }
}
