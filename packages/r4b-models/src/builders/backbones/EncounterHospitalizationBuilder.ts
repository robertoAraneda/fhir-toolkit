import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterHospitalization } from '../../models/backbones/EncounterHospitalization.js';
import type {
  ICodeableConcept,
  IEncounterHospitalization,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EncounterHospitalizationBuilder - Fluent builder for EncounterHospitalization backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterHospitalization = new EncounterHospitalizationBuilder()
 *   .setPreAdmissionIdentifier(value)
 *   .addDietPreference({ ... })
 *   .build();
 */
export class EncounterHospitalizationBuilder extends BackboneElementBuilder<EncounterHospitalization, IEncounterHospitalization> {
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
   * The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission
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
  // Array Properties
  // ============================================================================

  /**
   * Add dietPreference
   * Diet preferences reported by the patient
   */
  addDietPreference(dietPreference: ICodeableConcept): this {
    return this.addToArray('dietPreference', dietPreference);
  }

  /**
   * Add specialCourtesy
   * Special courtesies (VIP, board member)
   */
  addSpecialCourtesy(specialCourtesy: ICodeableConcept): this {
    return this.addToArray('specialCourtesy', specialCourtesy);
  }

  /**
   * Add specialArrangement
   * Wheelchair, translator, stretcher, etc.
   */
  addSpecialArrangement(specialArrangement: ICodeableConcept): this {
    return this.addToArray('specialArrangement', specialArrangement);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterHospitalization instance
   */
  build(): EncounterHospitalization {
    return new EncounterHospitalization(this.data);
  }

  /**
   * Build and validate the EncounterHospitalization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterHospitalization> {
    const encounterHospitalization = this.build();
    await encounterHospitalization.validateOrThrow();
    return encounterHospitalization;
  }
}
