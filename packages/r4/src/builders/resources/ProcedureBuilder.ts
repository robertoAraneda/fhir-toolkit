import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Procedure } from '../../models/resources/Procedure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EventStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IProcedure,
  IProcedureFocalDevice,
  IProcedurePerformer,
  IRange,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ProcedureBuilder - Fluent builder for Procedure resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const procedure = new ProcedureBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ProcedureBuilder extends DomainResourceBuilder<Procedure, IProcedure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  setStatus(status: EventStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusReason
   * Reason for current status
   */
  setStatusReason(statusReason: ICodeableConcept): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set category
   * Classification of the procedure
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set code
   * Identification of the procedure
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who the procedure was performed on
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter created as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set recorder
   * Who recorded the procedure
   */
  setRecorder(recorder: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.recorder = recorder;
    return this;
  }

  /**
   * Set asserter
   * Person who asserts this procedure
   */
  setAsserter(asserter: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.asserter = asserter;
    return this;
  }

  /**
   * Set location
   * Where the procedure happened
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set outcome
   * The result of procedure
   */
  setOutcome(outcome: ICodeableConcept): this {
    this.data.outcome = outcome;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set performed choice type (performedDateTime, performedPeriod, performedString, performedAge, performedRange)
   * @param type - 'DateTime' | 'Period' | 'String' | 'Age' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPerformed('DateTime', value)
   */
  setPerformed<T extends 'DateTime' | 'Period' | 'String' | 'Age' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `performed${type}` as keyof IProcedure;
    const otherKeys: (keyof IProcedure)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('performedDateTime' as keyof IProcedure);
      otherKeys.push('_performedDateTime' as keyof IProcedure);
    }
    if (type !== 'Period') {
      otherKeys.push('performedPeriod' as keyof IProcedure);
      otherKeys.push('_performedPeriod' as keyof IProcedure);
    }
    if (type !== 'String') {
      otherKeys.push('performedString' as keyof IProcedure);
      otherKeys.push('_performedString' as keyof IProcedure);
    }
    if (type !== 'Age') {
      otherKeys.push('performedAge' as keyof IProcedure);
      otherKeys.push('_performedAge' as keyof IProcedure);
    }
    if (type !== 'Range') {
      otherKeys.push('performedRange' as keyof IProcedure);
      otherKeys.push('_performedRange' as keyof IProcedure);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Identifiers for this procedure
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add instantiatesCanonical
   * Instantiates FHIR protocol or definition
   */
  addInstantiatesCanonical(instantiatesCanonical: string): this {
    return this.addToArray('instantiatesCanonical', instantiatesCanonical);
  }

  /**
   * Add instantiatesUri
   * Instantiates external protocol or definition
   */
  addInstantiatesUri(instantiatesUri: string): this {
    return this.addToArray('instantiatesUri', instantiatesUri);
  }

  /**
   * Add basedOn
   * A request for this procedure
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'Procedure' | 'Observation' | 'MedicationAdministration'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add performer
   * The people who performed the procedure
   */
  addPerformer(performer: IProcedurePerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add reasonCode
   * Coded reason procedure performed
   */
  addReasonCode(reasonCode: ICodeableConcept): this {
    return this.addToArray('reasonCode', reasonCode);
  }

  /**
   * Add reasonReference
   * The justification that the procedure was performed
   */
  addReasonReference(reasonReference: IReference<'Condition' | 'Observation' | 'Procedure' | 'DiagnosticReport' | 'DocumentReference'>): this {
    return this.addToArray('reasonReference', reasonReference);
  }

  /**
   * Add bodySite
   * Target body sites
   */
  addBodySite(bodySite: ICodeableConcept): this {
    return this.addToArray('bodySite', bodySite);
  }

  /**
   * Add report
   * Any report resulting from the procedure
   */
  addReport(report: IReference<'DiagnosticReport' | 'DocumentReference' | 'Composition'>): this {
    return this.addToArray('report', report);
  }

  /**
   * Add complication
   * Complication following the procedure
   */
  addComplication(complication: ICodeableConcept): this {
    return this.addToArray('complication', complication);
  }

  /**
   * Add complicationDetail
   * A condition that is a result of the procedure
   */
  addComplicationDetail(complicationDetail: IReference<'Condition'>): this {
    return this.addToArray('complicationDetail', complicationDetail);
  }

  /**
   * Add followUp
   * Instructions for follow up
   */
  addFollowUp(followUp: ICodeableConcept): this {
    return this.addToArray('followUp', followUp);
  }

  /**
   * Add note
   * Additional information about the procedure
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add focalDevice
   * Manipulated, implanted, or removed device
   */
  addFocalDevice(focalDevice: IProcedureFocalDevice): this {
    return this.addToArray('focalDevice', focalDevice);
  }

  /**
   * Add usedReference
   * Items used during procedure
   */
  addUsedReference(usedReference: IReference<'Device' | 'Medication' | 'Substance'>): this {
    return this.addToArray('usedReference', usedReference);
  }

  /**
   * Add usedCode
   * Coded items used during the procedure
   */
  addUsedCode(usedCode: ICodeableConcept): this {
    return this.addToArray('usedCode', usedCode);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Procedure instance
   */
  build(): Procedure {
    return new Procedure(this.data);
  }

  /**
   * Build and validate the Procedure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Procedure> {
    const procedure = this.build();
    await procedure.validateOrThrow();
    return procedure;
  }
}
