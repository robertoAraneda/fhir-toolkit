import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationAdministration } from '../../models/resources/MedicationAdministration.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IMedicationAdministration,
  IMedicationAdministrationDosage,
  IMedicationAdministrationPerformer,
  IPeriod,
  IReference,
  MedicationAdministrationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationAdministrationBuilder - Fluent builder for MedicationAdministration resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationAdministration = new MedicationAdministrationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationAdministrationBuilder extends DomainResourceBuilder<MedicationAdministration, IMedicationAdministration> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
   */
  setStatus(status: MedicationAdministrationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set category
   * Type of medication usage
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set subject
   * Who received medication
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set context
   * Encounter or Episode of Care administered as part of
   */
  setContext(context: IReference<'Encounter' | 'EpisodeOfCare'>): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set request
   * Request administration performed against
   */
  setRequest(request: IReference<'MedicationRequest'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set dosage
   * Details of how medication was taken
   */
  setDosage(dosage: IMedicationAdministrationDosage): this {
    this.data.dosage = dosage;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set medication choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMedication('CodeableConcept', value)
   */
  setMedication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `medication${type}` as keyof IMedicationAdministration;
    const otherKeys: (keyof IMedicationAdministration)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('medicationCodeableConcept' as keyof IMedicationAdministration);
      otherKeys.push('_medicationCodeableConcept' as keyof IMedicationAdministration);
    }
    if (type !== 'Reference') {
      otherKeys.push('medicationReference' as keyof IMedicationAdministration);
      otherKeys.push('_medicationReference' as keyof IMedicationAdministration);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set effective choice type
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setEffective('DateTime', value)
   */
  setEffective<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `effective${type}` as keyof IMedicationAdministration;
    const otherKeys: (keyof IMedicationAdministration)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('effectiveDateTime' as keyof IMedicationAdministration);
      otherKeys.push('_effectiveDateTime' as keyof IMedicationAdministration);
    }
    if (type !== 'Period') {
      otherKeys.push('effectivePeriod' as keyof IMedicationAdministration);
      otherKeys.push('_effectivePeriod' as keyof IMedicationAdministration);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set reason choice type
   * @param type - 'Code' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReason('Code', value)
   */
  setReason<T extends 'Code' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `reason${type}` as keyof IMedicationAdministration;
    const otherKeys: (keyof IMedicationAdministration)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IMedicationAdministration);
      otherKeys.push('_reasonCode' as keyof IMedicationAdministration);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IMedicationAdministration);
      otherKeys.push('_reasonReference' as keyof IMedicationAdministration);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add instantiates
   * Instantiates protocol or definition
   */
  addInstantiates(instantiat: string): this {
    return this.addToArray('instantiates', instantiat);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'MedicationAdministration' | 'Procedure'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add statusReason
   * Reason administration not performed
   */
  addStatusReason(statusReason: ICodeableConcept): this {
    return this.addToArray('statusReason', statusReason);
  }

  /**
   * Add supportingInformation
   * Additional information to support administration
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add performer
   * Who performed the medication administration and what they did
   */
  addPerformer(performer: IMedicationAdministrationPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add device
   * Device used to administer
   */
  addDevice(device: IReference<'Device'>): this {
    return this.addToArray('device', device);
  }

  /**
   * Add note
   * Information about the administration
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add eventHistory
   * A list of events of interest in the lifecycle
   */
  addEventHistory(eventHistory: IReference<'Provenance'>): this {
    return this.addToArray('eventHistory', eventHistory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationAdministration instance
   */
  build(): MedicationAdministration {
    return new MedicationAdministration(this.data);
  }

  /**
   * Build and validate the MedicationAdministration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationAdministration> {
    const medicationAdministration = this.build();
    await medicationAdministration.validateOrThrow();
    return medicationAdministration;
  }
}
