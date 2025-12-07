import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterAdmission } from '../../models/backbones/EncounterAdmission.js';
import type {
  ICodeableConcept,
  IEncounterAdmission,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EncounterAdmissionBuilder - Fluent builder for EncounterAdmission backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterAdmission = new EncounterAdmissionBuilder()
 *   .setPreAdmissionIdentifier(value)
 *   .build();
 */
export class EncounterAdmissionBuilder extends BackboneElementBuilder<EncounterAdmission, IEncounterAdmission> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set preAdmissionIdentifier
   * Pre-admission identifier
   */
  setPreAdmissionIdentifier(preAdmissionIdentifier: IIdentifier): this {
    this.data.preAdmissionIdentifier = preAdmissionIdentifier;
    return this;
  }

  /**
   * Set origin
   * The location/organization from which the patient came before admission
   */
  setOrigin(origin: IReference<'Location' | 'Organization'>): this {
    this.data.origin = origin;
    return this;
  }

  /**
   * Set admitSource
   * From where patient was admitted (physician referral, transfer)
   */
  setAdmitSource(admitSource: ICodeableConcept): this {
    this.data.admitSource = admitSource;
    return this;
  }

  /**
   * Set reAdmission
   * Indicates that the patient is being re-admitted
   */
  setReAdmission(reAdmission: ICodeableConcept): this {
    this.data.reAdmission = reAdmission;
    return this;
  }

  /**
   * Set destination
   * Location/organization to which the patient is discharged
   */
  setDestination(destination: IReference<'Location' | 'Organization'>): this {
    this.data.destination = destination;
    return this;
  }

  /**
   * Set dischargeDisposition
   * Category or kind of location after discharge
   */
  setDischargeDisposition(dischargeDisposition: ICodeableConcept): this {
    this.data.dischargeDisposition = dischargeDisposition;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterAdmission instance
   */
  build(): EncounterAdmission {
    return new EncounterAdmission(this.data);
  }

  /**
   * Build and validate the EncounterAdmission instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterAdmission> {
    const encounterAdmission = this.build();
    await encounterAdmission.validateOrThrow();
    return encounterAdmission;
  }
}
