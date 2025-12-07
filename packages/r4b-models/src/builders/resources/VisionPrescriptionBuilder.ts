import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { VisionPrescription } from '../../models/resources/VisionPrescription.js';
import type {
  FinancialResourceStatusType,
  IIdentifier,
  IReference,
  IVisionPrescription,
  IVisionPrescriptionLensSpecification,
} from '@fhir-toolkit/r4b-types';

/**
 * VisionPrescriptionBuilder - Fluent builder for VisionPrescription resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const visionPrescription = new VisionPrescriptionBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class VisionPrescriptionBuilder extends DomainResourceBuilder<VisionPrescription, IVisionPrescription> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | cancelled | draft | entered-in-error
   */
  setStatus(status: FinancialResourceStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set created
   * Response creation date
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set patient
   * Who prescription is for
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set encounter
   * Created during encounter / admission / stay
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set dateWritten
   * When prescription was authorized
   */
  setDateWritten(dateWritten: string): this {
    this.data.dateWritten = dateWritten;
    return this;
  }

  /**
   * Set prescriber
   * Who authorized the vision prescription
   */
  setPrescriber(prescriber: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.prescriber = prescriber;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for vision prescription
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add lensSpecification
   * Vision lens authorization
   */
  addLensSpecification(lensSpecification: IVisionPrescriptionLensSpecification): this {
    return this.addToArray('lensSpecification', lensSpecification);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the VisionPrescription instance
   */
  build(): VisionPrescription {
    return new VisionPrescription(this.data);
  }

  /**
   * Build and validate the VisionPrescription instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<VisionPrescription> {
    const visionPrescription = this.build();
    await visionPrescription.validateOrThrow();
    return visionPrescription;
  }
}
