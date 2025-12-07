import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ArtifactAssessment } from '../../models/resources/ArtifactAssessment.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ArtifactAssessmentDispositionType,
  ArtifactAssessmentWorkflowStatusType,
  IArtifactAssessment,
  IArtifactAssessmentContent,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ArtifactAssessmentBuilder - Fluent builder for ArtifactAssessment resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const artifactAssessment = new ArtifactAssessmentBuilder()
 *   .setId('123')
 *   .setTitle(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ArtifactAssessmentBuilder extends DomainResourceBuilder<ArtifactAssessment, IArtifactAssessment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * A short title for the assessment for use in displaying and selecting
   */
  setTitle(title: string): this {
    this.data.title = title;
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
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set approvalDate
   * When the artifact assessment was approved by publisher
   */
  setApprovalDate(approvalDate: string): this {
    this.data.approvalDate = approvalDate;
    return this;
  }

  /**
   * Set lastReviewDate
   * When the artifact assessment was last reviewed by the publisher
   */
  setLastReviewDate(lastReviewDate: string): this {
    this.data.lastReviewDate = lastReviewDate;
    return this;
  }

  /**
   * Set workflowStatus
   * submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error
   */
  setWorkflowStatus(workflowStatus: ArtifactAssessmentWorkflowStatusType): this {
    this.data.workflowStatus = workflowStatus;
    return this;
  }

  /**
   * Set disposition
   * unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification
   */
  setDisposition(disposition: ArtifactAssessmentDispositionType): this {
    this.data.disposition = disposition;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

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
    const key = `citeAs${type}` as keyof IArtifactAssessment;
    const otherKeys: (keyof IArtifactAssessment)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('citeAsReference' as keyof IArtifactAssessment);
      otherKeys.push('_citeAsReference' as keyof IArtifactAssessment);
    }
    if (type !== 'Markdown') {
      otherKeys.push('citeAsMarkdown' as keyof IArtifactAssessment);
      otherKeys.push('_citeAsMarkdown' as keyof IArtifactAssessment);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set artifact choice type (artifactReference, artifactCanonical, artifactUri)
   * @param type - 'Reference' | 'Canonical' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setArtifact('Reference', value)
   */
  setArtifact<T extends 'Reference' | 'Canonical' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `artifact${type}` as keyof IArtifactAssessment;
    const otherKeys: (keyof IArtifactAssessment)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('artifactReference' as keyof IArtifactAssessment);
      otherKeys.push('_artifactReference' as keyof IArtifactAssessment);
    }
    if (type !== 'Canonical') {
      otherKeys.push('artifactCanonical' as keyof IArtifactAssessment);
      otherKeys.push('_artifactCanonical' as keyof IArtifactAssessment);
    }
    if (type !== 'Uri') {
      otherKeys.push('artifactUri' as keyof IArtifactAssessment);
      otherKeys.push('_artifactUri' as keyof IArtifactAssessment);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the artifact assessment
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add content
   * Comment, classifier, or rating content
   */
  addContent(content: IArtifactAssessmentContent): this {
    return this.addToArray('content', content);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ArtifactAssessment instance
   */
  build(): ArtifactAssessment {
    return new ArtifactAssessment(this.data);
  }

  /**
   * Build and validate the ArtifactAssessment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ArtifactAssessment> {
    const artifactAssessment = this.build();
    await artifactAssessment.validateOrThrow();
    return artifactAssessment;
  }
}
