import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { DetectedIssue } from '../../models/resources/DetectedIssue.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  DetectedIssueSeverityType,
  DetectedIssueStatusType,
  ICodeableConcept,
  IDetectedIssue,
  IDetectedIssueEvidence,
  IDetectedIssueMitigation,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DetectedIssueBuilder - Fluent builder for DetectedIssue resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const detectedIssue = new DetectedIssueBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class DetectedIssueBuilder extends DomainResourceBuilder<DetectedIssue, IDetectedIssue> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preliminary | final | entered-in-error | mitigated
   */
  setStatus(status: DetectedIssueStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * Specific type of detected issue, e.g. drug-drug, duplicate therapy, etc
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set severity
   * high | moderate | low
   */
  setSeverity(severity: DetectedIssueSeverityType): this {
    this.data.severity = severity;
    return this;
  }

  /**
   * Set subject
   * Associated subject
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter detected issue is part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set author
   * The provider or device that identified the issue
   */
  setAuthor(author: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set detail
   * Description and context
   */
  setDetail(detail: string): this {
    this.data.detail = detail;
    return this;
  }

  /**
   * Set reference
   * Authority for issue
   */
  setReference(reference: string): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set identified choice type (identifiedDateTime, identifiedPeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setIdentified('DateTime', value)
   */
  setIdentified<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `identified${type}` as keyof IDetectedIssue;
    const otherKeys: (keyof IDetectedIssue)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('identifiedDateTime' as keyof IDetectedIssue);
      otherKeys.push('_identifiedDateTime' as keyof IDetectedIssue);
    }
    if (type !== 'Period') {
      otherKeys.push('identifiedPeriod' as keyof IDetectedIssue);
      otherKeys.push('_identifiedPeriod' as keyof IDetectedIssue);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique id for the detected issue
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Type of detected issue, e.g. drug-drug, duplicate therapy, etc
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add implicated
   * Problem resource
   */
  addImplicated(implicated: IReference<'Resource'>): this {
    return this.addToArray('implicated', implicated);
  }

  /**
   * Add evidence
   * Supporting evidence
   */
  addEvidence(evidence: IDetectedIssueEvidence): this {
    return this.addToArray('evidence', evidence);
  }

  /**
   * Add mitigation
   * Step taken to address
   */
  addMitigation(mitigation: IDetectedIssueMitigation): this {
    return this.addToArray('mitigation', mitigation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DetectedIssue instance
   */
  build(): DetectedIssue {
    return new DetectedIssue(this.data);
  }

  /**
   * Build and validate the DetectedIssue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DetectedIssue> {
    const detectedIssue = this.build();
    await detectedIssue.validateOrThrow();
    return detectedIssue;
  }
}
