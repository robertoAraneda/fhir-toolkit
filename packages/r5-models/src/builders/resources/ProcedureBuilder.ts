import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Procedure } from '../../models/resources/Procedure.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EventStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IPeriod,
  IProcedure,
  IProcedureFocalDevice,
  IProcedurePerformer,
  IRange,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

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
   * Set code
   * Identification of the procedure
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Individual or entity the procedure was performed on
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'Practitioner' | 'Organization' | 'Location'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set focus
   * Who is the target of the procedure when it is not the subject of record only
   */
  setFocus(focus: IReference<'Patient' | 'Group' | 'RelatedPerson' | 'Practitioner' | 'Organization' | 'CareTeam' | 'PractitionerRole' | 'Specimen'>): this {
    this.data.focus = focus;
    return this;
  }

  /**
   * Set encounter
   * The Encounter during which this Procedure was created
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set recorded
   * When the procedure was first captured in the subject's record
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
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
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod, occurrenceString, occurrenceAge, occurrenceRange, occurrenceTiming)
   * @param type - 'DateTime' | 'Period' | 'String' | 'Age' | 'Range' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period' | 'String' | 'Age' | 'Range' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof IProcedure;
    const otherKeys: (keyof IProcedure)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IProcedure);
      otherKeys.push('_occurrenceDateTime' as keyof IProcedure);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IProcedure);
      otherKeys.push('_occurrencePeriod' as keyof IProcedure);
    }
    if (type !== 'String') {
      otherKeys.push('occurrenceString' as keyof IProcedure);
      otherKeys.push('_occurrenceString' as keyof IProcedure);
    }
    if (type !== 'Age') {
      otherKeys.push('occurrenceAge' as keyof IProcedure);
      otherKeys.push('_occurrenceAge' as keyof IProcedure);
    }
    if (type !== 'Range') {
      otherKeys.push('occurrenceRange' as keyof IProcedure);
      otherKeys.push('_occurrenceRange' as keyof IProcedure);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof IProcedure);
      otherKeys.push('_occurrenceTiming' as keyof IProcedure);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set reported choice type (reportedBoolean, reportedReference)
   * @param type - 'Boolean' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReported('Boolean', value)
   */
  setReported<T extends 'Boolean' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `reported${type}` as keyof IProcedure;
    const otherKeys: (keyof IProcedure)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('reportedBoolean' as keyof IProcedure);
      otherKeys.push('_reportedBoolean' as keyof IProcedure);
    }
    if (type !== 'Reference') {
      otherKeys.push('reportedReference' as keyof IProcedure);
      otherKeys.push('_reportedReference' as keyof IProcedure);
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
   * Add category
   * Classification of the procedure
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add performer
   * Who performed the procedure and what they did
   */
  addPerformer(performer: IProcedurePerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add reason
   * The justification that the procedure was performed
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
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
  addComplication(complication: ICodeableReference): this {
    return this.addToArray('complication', complication);
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
   * Add used
   * Items used during procedure
   */
  addUsed(used: ICodeableReference): this {
    return this.addToArray('used', used);
  }

  /**
   * Add supportingInfo
   * Extra information relevant to the procedure
   */
  addSupportingInfo(supportingInfo: IReference<'Resource'>): this {
    return this.addToArray('supportingInfo', supportingInfo);
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
