import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { RelatedPerson } from '../../models/resources/RelatedPerson.js';
import type {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedPerson,
  IRelatedPersonCommunication,
} from '@fhir-toolkit/r4-types';

/**
 * RelatedPersonBuilder - Fluent builder for RelatedPerson resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const relatedPerson = new RelatedPersonBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class RelatedPersonBuilder extends DomainResourceBuilder<RelatedPerson, IRelatedPerson> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this related person's record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set patient
   * The patient this person is related to
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
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
   * The date on which the related person was born
   */
  setBirthDate(birthDate: string): this {
    this.data.birthDate = birthDate;
    return this;
  }

  /**
   * Set period
   * Period of time that this relationship is considered valid
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * A human identifier for this person
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add relationship
   * The nature of the relationship
   */
  addRelationship(relationship: ICodeableConcept): this {
    return this.addToArray('relationship', relationship);
  }

  /**
   * Add name
   * A name associated with the person
   */
  addName(name: IHumanName): this {
    return this.addToArray('name', name);
  }

  /**
   * Add telecom
   * A contact detail for the person
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add address
   * Address where the related person can be contacted or visited
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
   * Add communication
   * A language which may be used to communicate with about the patient's health
   */
  addCommunication(communication: IRelatedPersonCommunication): this {
    return this.addToArray('communication', communication);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RelatedPerson instance
   */
  build(): RelatedPerson {
    return new RelatedPerson(this.data);
  }

  /**
   * Build and validate the RelatedPerson instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RelatedPerson> {
    const relatedPerson = this.build();
    await relatedPerson.validateOrThrow();
    return relatedPerson;
  }
}
