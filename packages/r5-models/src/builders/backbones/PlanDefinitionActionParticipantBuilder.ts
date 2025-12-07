import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionParticipant } from '../../models/backbones/PlanDefinitionActionParticipant.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IPlanDefinitionActionParticipant,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionActionParticipantBuilder - Fluent builder for PlanDefinitionActionParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionParticipant = new PlanDefinitionActionParticipantBuilder()
 *   .setActorId(value)
 *   .build();
 */
export class PlanDefinitionActionParticipantBuilder extends BackboneElementBuilder<PlanDefinitionActionParticipant, IPlanDefinitionActionParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set actorId
   * What actor
   */
  setActorId(actorId: string): this {
    this.data.actorId = actorId;
    return this;
  }

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
   * E.g. Nurse, Surgeon, Parent
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
   * Build the PlanDefinitionActionParticipant instance
   */
  build(): PlanDefinitionActionParticipant {
    return new PlanDefinitionActionParticipant(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionParticipant> {
    const planDefinitionActionParticipant = this.build();
    await planDefinitionActionParticipant.validateOrThrow();
    return planDefinitionActionParticipant;
  }
}
