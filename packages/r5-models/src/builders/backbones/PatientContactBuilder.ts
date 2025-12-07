import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PatientContact } from '../../models/backbones/PatientContact.js';
import type {
  AdministrativeGenderType,
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IPatientContact,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PatientContactBuilder - Fluent builder for PatientContact backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const patientContact = new PatientContactBuilder()
 *   .setName(value)
 *   .addRelationship({ ... })
 *   .build();
 */
export class PatientContactBuilder extends BackboneElementBuilder<PatientContact, IPatientContact> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * A name associated with the contact person
   */
  setName(name: IHumanName): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set address
   * Address for the contact person
   */
  setAddress(address: IAddress): this {
    this.data.address = address;
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
   * Set organization
   * Organization that is associated with the contact
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  /**
   * Set period
   * The period during which this contact person or organization is valid to be contacted relating to this patient
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add relationship
   * The kind of relationship
   */
  addRelationship(relationship: ICodeableConcept): this {
    return this.addToArray('relationship', relationship);
  }

  /**
   * Add telecom
   * A contact detail for the person
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PatientContact instance
   */
  build(): PatientContact {
    return new PatientContact(this.data);
  }

  /**
   * Build and validate the PatientContact instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PatientContact> {
    const patientContact = this.build();
    await patientContact.validateOrThrow();
    return patientContact;
  }
}
