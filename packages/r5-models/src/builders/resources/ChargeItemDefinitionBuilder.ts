import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ChargeItemDefinition } from '../../models/resources/ChargeItemDefinition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IChargeItemDefinition,
  IChargeItemDefinitionApplicability,
  IChargeItemDefinitionPropertyGroup,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IReference,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * ChargeItemDefinitionBuilder - Fluent builder for ChargeItemDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItemDefinition = new ChargeItemDefinitionBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ChargeItemDefinitionBuilder extends DomainResourceBuilder<ChargeItemDefinition, IChargeItemDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this charge item definition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the charge item definition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this charge item definition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this charge item definition (human friendly)
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
   * Name of the publisher/steward (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the charge item definition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this charge item definition is defined
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
   * When the charge item definition was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the charge item definition was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set code
   * Billing code or product type this definition applies to
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
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
    const key = `versionAlgorithm${type}` as keyof IChargeItemDefinition;
    const otherKeys: (keyof IChargeItemDefinition)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IChargeItemDefinition);
      otherKeys.push('_versionAlgorithmString' as keyof IChargeItemDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IChargeItemDefinition);
      otherKeys.push('_versionAlgorithmCoding' as keyof IChargeItemDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the charge item definition
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add derivedFromUri
   * Underlying externally-defined charge item definition
   */
  addDerivedFromUri(derivedFromUri: string): this {
    return this.addToArray('derivedFromUri', derivedFromUri);
  }

  /**
   * Add partOf
   * A larger definition of which this particular definition is a component or step
   */
  addPartOf(partOf: string): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add replaces
   * Completed or terminated request(s) whose function is taken by this new request
   */
  addReplaces(replac: string): this {
    return this.addToArray('replaces', replac);
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
   * Intended jurisdiction for charge item definition (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add instance
   * Instances this definition applies to
   */
  addInstance(instance: IReference<'Medication' | 'Substance' | 'Device' | 'DeviceDefinition' | 'ActivityDefinition' | 'PlanDefinition' | 'HealthcareService'>): this {
    return this.addToArray('instance', instance);
  }

  /**
   * Add applicability
   * Whether or not the billing code is applicable
   */
  addApplicability(applicability: IChargeItemDefinitionApplicability): this {
    return this.addToArray('applicability', applicability);
  }

  /**
   * Add propertyGroup
   * Group of properties which are applicable under the same conditions
   */
  addPropertyGroup(propertyGroup: IChargeItemDefinitionPropertyGroup): this {
    return this.addToArray('propertyGroup', propertyGroup);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ChargeItemDefinition instance
   */
  build(): ChargeItemDefinition {
    return new ChargeItemDefinition(this.data);
  }

  /**
   * Build and validate the ChargeItemDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ChargeItemDefinition> {
    const chargeItemDefinition = this.build();
    await chargeItemDefinition.validateOrThrow();
    return chargeItemDefinition;
  }
}
