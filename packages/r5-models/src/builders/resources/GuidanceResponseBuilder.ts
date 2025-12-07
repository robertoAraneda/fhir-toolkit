import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { GuidanceResponse } from '../../models/resources/GuidanceResponse.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GuidanceResponseStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDataRequirement,
  IGuidanceResponse,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GuidanceResponseBuilder - Fluent builder for GuidanceResponse resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const guidanceResponse = new GuidanceResponseBuilder()
 *   .setId('123')
 *   .setRequestIdentifier(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class GuidanceResponseBuilder extends DomainResourceBuilder<GuidanceResponse, IGuidanceResponse> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set requestIdentifier
   * The identifier of the request associated with this response, if any
   */
  setRequestIdentifier(requestIdentifier: IIdentifier): this {
    this.data.requestIdentifier = requestIdentifier;
    return this;
  }

  /**
   * Set status
   * success | data-requested | data-required | in-progress | failure | entered-in-error
   */
  setStatus(status: GuidanceResponseStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set subject
   * Patient the request was performed for
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter during which the response was returned
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set occurrenceDateTime
   * When the guidance response was processed
   */
  setOccurrenceDateTime(occurrenceDateTime: string): this {
    this.data.occurrenceDateTime = occurrenceDateTime;
    return this;
  }

  /**
   * Set performer
   * Device returning the guidance
   */
  setPerformer(performer: IReference<'Device'>): this {
    this.data.performer = performer;
    return this;
  }

  /**
   * Set evaluationMessage
   * Messages resulting from the evaluation of the artifact or artifacts
   */
  setEvaluationMessage(evaluationMessage: IReference<'OperationOutcome'>): this {
    this.data.evaluationMessage = evaluationMessage;
    return this;
  }

  /**
   * Set outputParameters
   * The output parameters of the evaluation, if any
   */
  setOutputParameters(outputParameters: IReference<'Parameters'>): this {
    this.data.outputParameters = outputParameters;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set module choice type (moduleUri, moduleCanonical, moduleCodeableConcept)
   * @param type - 'Uri' | 'Canonical' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setModule('Uri', value)
   */
  setModule<T extends 'Uri' | 'Canonical' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `module${type}` as keyof IGuidanceResponse;
    const otherKeys: (keyof IGuidanceResponse)[] = [];
    if (type !== 'Uri') {
      otherKeys.push('moduleUri' as keyof IGuidanceResponse);
      otherKeys.push('_moduleUri' as keyof IGuidanceResponse);
    }
    if (type !== 'Canonical') {
      otherKeys.push('moduleCanonical' as keyof IGuidanceResponse);
      otherKeys.push('_moduleCanonical' as keyof IGuidanceResponse);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('moduleCodeableConcept' as keyof IGuidanceResponse);
      otherKeys.push('_moduleCodeableConcept' as keyof IGuidanceResponse);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add reason
   * Why guidance is needed
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add note
   * Additional notes about the response
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add result
   * Proposed actions, if any
   */
  addResult(result: IReference<'Appointment' | 'AppointmentResponse' | 'CarePlan' | 'Claim' | 'CommunicationRequest' | 'Contract' | 'CoverageEligibilityRequest' | 'DeviceRequest' | 'EnrollmentRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'RequestOrchestration' | 'ServiceRequest' | 'SupplyRequest' | 'Task' | 'VisionPrescription'>): this {
    return this.addToArray('result', result);
  }

  /**
   * Add dataRequirement
   * Additional required data
   */
  addDataRequirement(dataRequirement: IDataRequirement): this {
    return this.addToArray('dataRequirement', dataRequirement);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GuidanceResponse instance
   */
  build(): GuidanceResponse {
    return new GuidanceResponse(this.data);
  }

  /**
   * Build and validate the GuidanceResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GuidanceResponse> {
    const guidanceResponse = this.build();
    await guidanceResponse.validateOrThrow();
    return guidanceResponse;
  }
}
