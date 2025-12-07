import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Contract } from '../../models/resources/Contract.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ContractResourceStatusType,
  IAttachment,
  ICodeableConcept,
  IContract,
  IContractContentDefinition,
  IContractFriendly,
  IContractLegal,
  IContractRule,
  IContractSigner,
  IContractTerm,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractBuilder - Fluent builder for Contract resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const contract = new ContractBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ContractBuilder extends DomainResourceBuilder<Contract, IContract> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Basal definition
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business edition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set status
   * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
   */
  setStatus(status: ContractResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set legalState
   * Negotiation status
   */
  setLegalState(legalState: ICodeableConcept): this {
    this.data.legalState = legalState;
    return this;
  }

  /**
   * Set instantiatesCanonical
   * Source Contract Definition
   */
  setInstantiatesCanonical(instantiatesCanonical: IReference<'Contract'>): this {
    this.data.instantiatesCanonical = instantiatesCanonical;
    return this;
  }

  /**
   * Set instantiatesUri
   * External Contract Definition
   */
  setInstantiatesUri(instantiatesUri: string): this {
    this.data.instantiatesUri = instantiatesUri;
    return this;
  }

  /**
   * Set contentDerivative
   * Content derived from the basal information
   */
  setContentDerivative(contentDerivative: ICodeableConcept): this {
    this.data.contentDerivative = contentDerivative;
    return this;
  }

  /**
   * Set issued
   * When this Contract was issued
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set applies
   * Effective time
   */
  setApplies(applies: IPeriod): this {
    this.data.applies = applies;
    return this;
  }

  /**
   * Set expirationType
   * Contract cessation cause
   */
  setExpirationType(expirationType: ICodeableConcept): this {
    this.data.expirationType = expirationType;
    return this;
  }

  /**
   * Set name
   * Computer friendly designation
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Human Friendly name
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set subtitle
   * Subordinate Friendly name
   */
  setSubtitle(subtitle: string): this {
    this.data.subtitle = subtitle;
    return this;
  }

  /**
   * Set author
   * Source of Contract
   */
  setAuthor(author: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set scope
   * Range of Legal Concerns
   */
  setScope(scope: ICodeableConcept): this {
    this.data.scope = scope;
    return this;
  }

  /**
   * Set type
   * Legal instrument category
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set contentDefinition
   * Contract precursor content
   */
  setContentDefinition(contentDefinition: IContractContentDefinition): this {
    this.data.contentDefinition = contentDefinition;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set topic choice type (topicCodeableConcept, topicReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTopic('CodeableConcept', value)
   */
  setTopic<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `topic${type}` as keyof IContract;
    const otherKeys: (keyof IContract)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('topicCodeableConcept' as keyof IContract);
      otherKeys.push('_topicCodeableConcept' as keyof IContract);
    }
    if (type !== 'Reference') {
      otherKeys.push('topicReference' as keyof IContract);
      otherKeys.push('_topicReference' as keyof IContract);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set legallyBinding choice type (legallyBindingAttachment, legallyBindingReference)
   * @param type - 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setLegallyBinding('Attachment', value)
   */
  setLegallyBinding<T extends 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `legallyBinding${type}` as keyof IContract;
    const otherKeys: (keyof IContract)[] = [];
    if (type !== 'Attachment') {
      otherKeys.push('legallyBindingAttachment' as keyof IContract);
      otherKeys.push('_legallyBindingAttachment' as keyof IContract);
    }
    if (type !== 'Reference') {
      otherKeys.push('legallyBindingReference' as keyof IContract);
      otherKeys.push('_legallyBindingReference' as keyof IContract);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Contract number
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add subject
   * Contract Target Entity
   */
  addSubject(subject: IReference<'Resource'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add authority
   * Authority under which this Contract has standing
   */
  addAuthority(authority: IReference<'Organization'>): this {
    return this.addToArray('authority', authority);
  }

  /**
   * Add domain
   * A sphere of control governed by an authoritative jurisdiction, organization, or person
   */
  addDomain(domain: IReference<'Location'>): this {
    return this.addToArray('domain', domain);
  }

  /**
   * Add site
   * Specific Location
   */
  addSite(site: IReference<'Location'>): this {
    return this.addToArray('site', site);
  }

  /**
   * Add alias
   * Acronym or short name
   */
  addAlias(alia: string): this {
    return this.addToArray('alias', alia);
  }

  /**
   * Add subType
   * Subtype within the context of type
   */
  addSubType(subType: ICodeableConcept): this {
    return this.addToArray('subType', subType);
  }

  /**
   * Add term
   * Contract Term List
   */
  addTerm(term: IContractTerm): this {
    return this.addToArray('term', term);
  }

  /**
   * Add supportingInfo
   * Extra Information
   */
  addSupportingInfo(supportingInfo: IReference<'Resource'>): this {
    return this.addToArray('supportingInfo', supportingInfo);
  }

  /**
   * Add relevantHistory
   * Key event in Contract History
   */
  addRelevantHistory(relevantHistory: IReference<'Provenance'>): this {
    return this.addToArray('relevantHistory', relevantHistory);
  }

  /**
   * Add signer
   * Contract Signatory
   */
  addSigner(signer: IContractSigner): this {
    return this.addToArray('signer', signer);
  }

  /**
   * Add friendly
   * Contract Friendly Language
   */
  addFriendly(friendly: IContractFriendly): this {
    return this.addToArray('friendly', friendly);
  }

  /**
   * Add legal
   * Contract Legal Language
   */
  addLegal(legal: IContractLegal): this {
    return this.addToArray('legal', legal);
  }

  /**
   * Add rule
   * Computable Contract Language
   */
  addRule(rule: IContractRule): this {
    return this.addToArray('rule', rule);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Contract instance
   */
  build(): Contract {
    return new Contract(this.data);
  }

  /**
   * Build and validate the Contract instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Contract> {
    const contract = this.build();
    await contract.validateOrThrow();
    return contract;
  }
}
