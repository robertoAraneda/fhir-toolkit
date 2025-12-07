import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { RiskAssessment } from '../../models/resources/RiskAssessment.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IPeriod,
  IReference,
  IRiskAssessment,
  IRiskAssessmentPrediction,
  ObservationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * RiskAssessmentBuilder - Fluent builder for RiskAssessment resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskAssessment = new RiskAssessmentBuilder()
 *   .setId('123')
 *   .setBasedOn(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class RiskAssessmentBuilder extends DomainResourceBuilder<RiskAssessment, IRiskAssessment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set basedOn
   * Request fulfilled by this assessment
   */
  setBasedOn(basedOn: IReference<'Resource'>): this {
    this.data.basedOn = basedOn;
    return this;
  }

  /**
   * Set parent
   * Part of this occurrence
   */
  setParent(parent: IReference<'Resource'>): this {
    this.data.parent = parent;
    return this;
  }

  /**
   * Set status
   * registered | preliminary | final | amended +
   */
  setStatus(status: ObservationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set method
   * Evaluation mechanism
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set code
   * Type of assessment
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who/what does assessment apply to?
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Where was assessment performed?
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set condition
   * Condition assessed
   */
  setCondition(condition: IReference<'Condition'>): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set performer
   * Who did assessment?
   */
  setPerformer(performer: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device'>): this {
    this.data.performer = performer;
    return this;
  }

  /**
   * Set mitigation
   * How to reduce risk
   */
  setMitigation(mitigation: string): this {
    this.data.mitigation = mitigation;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod)
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof IRiskAssessment;
    const otherKeys: (keyof IRiskAssessment)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IRiskAssessment);
      otherKeys.push('_occurrenceDateTime' as keyof IRiskAssessment);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IRiskAssessment);
      otherKeys.push('_occurrencePeriod' as keyof IRiskAssessment);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique identifier for the assessment
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add reason
   * Why the assessment was necessary?
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add basis
   * Information used in assessment
   */
  addBasis(basi: IReference<'Resource'>): this {
    return this.addToArray('basis', basi);
  }

  /**
   * Add prediction
   * Outcome predicted
   */
  addPrediction(prediction: IRiskAssessmentPrediction): this {
    return this.addToArray('prediction', prediction);
  }

  /**
   * Add note
   * Comments on the risk assessment
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskAssessment instance
   */
  build(): RiskAssessment {
    return new RiskAssessment(this.data);
  }

  /**
   * Build and validate the RiskAssessment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskAssessment> {
    const riskAssessment = this.build();
    await riskAssessment.validateOrThrow();
    return riskAssessment;
  }
}
