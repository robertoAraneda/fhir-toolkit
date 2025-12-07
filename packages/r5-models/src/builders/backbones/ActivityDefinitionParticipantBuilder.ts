import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ActivityDefinitionParticipant } from '../../models/backbones/ActivityDefinitionParticipant.js';
import type {
  ActionParticipantTypeType,
  IActivityDefinitionParticipant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ActivityDefinitionParticipantBuilder - Fluent builder for ActivityDefinitionParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const activityDefinitionParticipant = new ActivityDefinitionParticipantBuilder()
 *   .setType(value)
 *   .build();
 */
export class ActivityDefinitionParticipantBuilder extends BackboneElementBuilder<ActivityDefinitionParticipant, IActivityDefinitionParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * careteam | device | group | healthcareservice | location | organization | patient | practitioner | practitionerrole | relatedperson
   */
  setType(type: ActionParticipantTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set typeCanonical
   * Who or what can participate
   */
  setTypeCanonical(typeCanonical: string): this {
    this.data.typeCanonical = typeCanonical;
    return this;
  }

  /**
   * Set typeReference
   * Who or what can participate
   */
  setTypeReference(typeReference: IReference<'CareTeam' | 'Device' | 'DeviceDefinition' | 'Endpoint' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.typeReference = typeReference;
    return this;
  }

  /**
   * Set role
   * E.g. Nurse, Surgeon, Parent, etc
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set function
   * E.g. Author, Reviewer, Witness, etc
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ActivityDefinitionParticipant instance
   */
  build(): ActivityDefinitionParticipant {
    return new ActivityDefinitionParticipant(this.data);
  }

  /**
   * Build and validate the ActivityDefinitionParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ActivityDefinitionParticipant> {
    const activityDefinitionParticipant = this.build();
    await activityDefinitionParticipant.validateOrThrow();
    return activityDefinitionParticipant;
  }
}
