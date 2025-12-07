import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Evidence } from '../../models/resources/Evidence.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IEvidence,
  IEvidenceCertainty,
  IEvidenceStatistic,
  IEvidenceVariableDefinition,
  IIdentifier,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceBuilder - Fluent builder for Evidence resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidence = new EvidenceBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EvidenceBuilder extends DomainResourceBuilder<Evidence, IEvidence> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this evidence, represented as a globally unique URI
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of this summary
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this summary (machine friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this summary (human friendly)
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
   * Set approvalDate
   * When the summary was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the summary was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
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
   * Set purpose
   * Why this Evidence is defined
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
   * Set description
   * Description of the particular summary
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set assertion
   * Declarative description of the Evidence
   */
  setAssertion(assertion: string): this {
    this.data.assertion = assertion;
    return this;
  }

  /**
   * Set synthesisType
   * The method to combine studies
   */
  setSynthesisType(synthesisType: ICodeableConcept): this {
    this.data.synthesisType = synthesisType;
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
    const key = `versionAlgorithm${type}` as keyof IEvidence;
    const otherKeys: (keyof IEvidence)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof IEvidence);
      otherKeys.push('_versionAlgorithmString' as keyof IEvidence);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof IEvidence);
      otherKeys.push('_versionAlgorithmCoding' as keyof IEvidence);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set citeAs choice type (citeAsReference, citeAsMarkdown)
   * @param type - 'Reference' | 'Markdown'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCiteAs('Reference', value)
   */
  setCiteAs<T extends 'Reference' | 'Markdown'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `citeAs${type}` as keyof IEvidence;
    const otherKeys: (keyof IEvidence)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('citeAsReference' as keyof IEvidence);
      otherKeys.push('_citeAsReference' as keyof IEvidence);
    }
    if (type !== 'Markdown') {
      otherKeys.push('citeAsMarkdown' as keyof IEvidence);
      otherKeys.push('_citeAsMarkdown' as keyof IEvidence);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the summary
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
   * Add author
   * Who authored the content
   */
  addAuthor(author: IContactDetail): this {
    return this.addToArray('author', author);
  }

  /**
   * Add editor
   * Who edited the content
   */
  addEditor(editor: IContactDetail): this {
    return this.addToArray('editor', editor);
  }

  /**
   * Add reviewer
   * Who reviewed the content
   */
  addReviewer(reviewer: IContactDetail): this {
    return this.addToArray('reviewer', reviewer);
  }

  /**
   * Add endorser
   * Who endorsed the content
   */
  addEndorser(endorser: IContactDetail): this {
    return this.addToArray('endorser', endorser);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add relatedArtifact
   * Link or citation to artifact associated with the summary
   */
  addRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    return this.addToArray('relatedArtifact', relatedArtifact);
  }

  /**
   * Add note
   * Footnotes and/or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add variableDefinition
   * Evidence variable such as population, exposure, or outcome
   */
  addVariableDefinition(variableDefinition: IEvidenceVariableDefinition): this {
    return this.addToArray('variableDefinition', variableDefinition);
  }

  /**
   * Add studyDesign
   * The design of the study that produced this evidence
   */
  addStudyDesign(studyDesign: ICodeableConcept): this {
    return this.addToArray('studyDesign', studyDesign);
  }

  /**
   * Add statistic
   * Values and parameters for a single statistic
   */
  addStatistic(statistic: IEvidenceStatistic): this {
    return this.addToArray('statistic', statistic);
  }

  /**
   * Add certainty
   * Certainty or quality of the evidence
   */
  addCertainty(certainty: IEvidenceCertainty): this {
    return this.addToArray('certainty', certainty);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Evidence instance
   */
  build(): Evidence {
    return new Evidence(this.data);
  }

  /**
   * Build and validate the Evidence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Evidence> {
    const evidence = this.build();
    await evidence.validateOrThrow();
    return evidence;
  }
}
