import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Person } from '../../models/resources/Person.js';
import type {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  IContactPoint,
  IHumanName,
  IIdentifier,
  IPerson,
  IPersonLink,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * PersonBuilder - Fluent builder for Person resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const person = new PersonBuilder()
 *   .setId('123')
 *   .setGender(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PersonBuilder extends DomainResourceBuilder<Person, IPerson> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

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
   * The date on which the person was born
   */
  setBirthDate(birthDate: string): this {
    this.data.birthDate = birthDate;
    return this;
  }

  /**
   * Set photo
   * Image of the person
   */
  setPhoto(photo: IAttachment): this {
    this.data.photo = photo;
    return this;
  }

  /**
   * Set managingOrganization
   * The organization that is the custodian of the person record
   */
  setManagingOrganization(managingOrganization: IReference<'Organization'>): this {
    this.data.managingOrganization = managingOrganization;
    return this;
  }

  /**
   * Set active
   * This person's record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
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
   * One or more addresses for the person
   */
  addAddress(address: IAddress): this {
    return this.addToArray('address', address);
  }

  /**
   * Add link
   * Link to a resource that concerns the same actual person
   */
  addLink(link: IPersonLink): this {
    return this.addToArray('link', link);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Person instance
   */
  build(): Person {
    return new Person(this.data);
  }

  /**
   * Build and validate the Person instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Person> {
    const person = this.build();
    await person.validateOrThrow();
    return person;
  }
}
