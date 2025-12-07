import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Practitioner } from '../../models/resources/Practitioner.js';
import type {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IPractitioner,
  IPractitionerQualification,
} from '@fhir-toolkit/r4b-types';

/**
 * PractitionerBuilder - Fluent builder for Practitioner resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const practitioner = new PractitionerBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PractitionerBuilder extends DomainResourceBuilder<Practitioner, IPractitioner> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this practitioner's record is in active use
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
   * The date  on which the practitioner was born
   */
  setBirthDate(birthDate: string): this {
    this.data.birthDate = birthDate;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * An identifier for the person as this agent
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add name
   * The name(s) associated with the practitioner
   */
  addName(name: IHumanName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add telecom
   * A contact detail for the practitioner (that apply to all roles)
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add address
   * Address(es) of the practitioner that are not role specific (typically home address)
   */
  addAddress(address: IAddress): this {
    return this.addToArray('address', address);
  }

  /**
   * Add photo
   * Image of the person
   */
  addPhoto(photo: IAttachment): this {
    return this.addToArray('photo', photo);
  }

  /**
   * Add qualification
   * Certification, licenses, or training pertaining to the provision of care
   */
  addQualification(qualification: IPractitionerQualification): this {
    return this.addToArray('qualification', qualification);
  }

  /**
   * Add communication
   * A language the practitioner can use in patient communication
   */
  addCommunication(communication: ICodeableConcept): this {
    return this.addToArray('communication', communication);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Practitioner instance
   */
  build(): Practitioner {
    return new Practitioner(this.data);
  }

  /**
   * Build and validate the Practitioner instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Practitioner> {
    const practitioner = this.build();
    await practitioner.validateOrThrow();
    return practitioner;
  }
}
