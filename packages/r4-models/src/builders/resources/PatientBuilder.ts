import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Patient } from '../../models/resources/Patient.js';
import type {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IPatient,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * PatientBuilder - Fluent builder for Patient resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const patient = new PatientBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PatientBuilder extends DomainResourceBuilder<Patient, IPatient> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this patient's record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set gender
   * male | female | other | unknown
   */
  setGender(gender: AdministrativeGenderType): this {
    this.data.gender = gender;
    return this;
  }

  /**
   * Set birthDate
   * The date of birth for the individual
   */
  setBirthDate(birthDate: string): this {
    this.data.birthDate = birthDate;
    return this;
  }

  /**
   * Set maritalStatus
   * Marital (civil) status of a patient
   */
  setMaritalStatus(maritalStatus: ICodeableConcept): this {
    this.data.maritalStatus = maritalStatus;
    return this;
  }

  /**
   * Set managingOrganization
   * Organization that is the custodian of the patient record
   */
  setManagingOrganization(managingOrganization: IReference<'Organization'>): this {
    this.data.managingOrganization = managingOrganization;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set deceased choice type
   * @param type - 'Boolean' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDeceased('Boolean', value)
   */
  setDeceased<T extends 'Boolean' | 'DateTime'>(
    type: T,
    value: T extends 'Boolean' ? boolean : string
  ): this {
    const key = `deceased${type}` as keyof IPatient;
    const otherKeys: (keyof IPatient)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('deceasedBoolean' as keyof IPatient);
      otherKeys.push('_deceasedBoolean' as keyof IPatient);
    }
    if (type !== 'DateTime') {
      otherKeys.push('deceasedDateTime' as keyof IPatient);
      otherKeys.push('_deceasedDateTime' as keyof IPatient);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set multipleBirth choice type
   * @param type - 'Boolean' | 'Integer'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMultipleBirth('Boolean', value)
   */
  setMultipleBirth<T extends 'Boolean' | 'Integer'>(
    type: T,
    value: T extends 'Boolean' ? boolean : T extends 'Integer' ? number : string
  ): this {
    const key = `multipleBirth${type}` as keyof IPatient;
    const otherKeys: (keyof IPatient)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('multipleBirthBoolean' as keyof IPatient);
      otherKeys.push('_multipleBirthBoolean' as keyof IPatient);
    }
    if (type !== 'Integer') {
      otherKeys.push('multipleBirthInteger' as keyof IPatient);
      otherKeys.push('_multipleBirthInteger' as keyof IPatient);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * An identifier for this patient
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add name
   * A name associated with the patient
   */
  addName(name: IHumanName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add telecom
   * A contact detail for the individual
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add address
   * An address for the individual
   */
  addAddress(address: IAddress): this {
    return this.addToArray('address', address);
  }

  /**
   * Add photo
   * Image of the patient
   */
  addPhoto(photo: IAttachment): this {
    return this.addToArray('photo', photo);
  }

  /**
   * Add contact
   * A contact party (e.g. guardian, partner, friend) for the patient
   */
  addContact(contact: IPatientContact): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add communication
   * A language which may be used to communicate with the patient about his or her health
   */
  addCommunication(communication: IPatientCommunication): this {
    return this.addToArray('communication', communication);
  }

  /**
   * Add generalPractitioner
   * Patient's nominated primary care provider
   */
  addGeneralPractitioner(generalPractitioner: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>): this {
    return this.addToArray('generalPractitioner', generalPractitioner);
  }

  /**
   * Add link
   * Link to another patient resource that concerns the same actual person
   */
  addLink(link: IPatientLink): this {
    return this.addToArray('link', link);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Patient instance
   */
  build(): Patient {
    return new Patient(this.data);
  }

  /**
   * Build and validate the Patient instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Patient> {
    const patient = this.build();
    await patient.validateOrThrow();
    return patient;
  }
}
