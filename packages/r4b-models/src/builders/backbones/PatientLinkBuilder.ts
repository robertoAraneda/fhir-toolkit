import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PatientLink } from '../../models/backbones/PatientLink.js';
import type {
  IPatientLink,
  IReference,
  LinkTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * PatientLinkBuilder - Fluent builder for PatientLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const patientLink = new PatientLinkBuilder()
 *   .setOther(value)
 *   .build();
 */
export class PatientLinkBuilder extends BackboneElementBuilder<PatientLink, IPatientLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set other
   * The other patient or related person resource that the link refers to
   */
  setOther(other: IReference<'Patient' | 'RelatedPerson'>): this {
    this.data.other = other;
    return this;
  }

  /**
   * Set type
   * replaced-by | replaces | refer | seealso
   */
  setType(type: LinkTypeType): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PatientLink instance
   */
  build(): PatientLink {
    return new PatientLink(this.data);
  }

  /**
   * Build and validate the PatientLink instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PatientLink> {
    const patientLink = this.build();
    await patientLink.validateOrThrow();
    return patientLink;
  }
}
