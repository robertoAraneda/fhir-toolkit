import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActorOption } from '../../models/backbones/PlanDefinitionActorOption.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IPlanDefinitionActorOption,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionActorOptionBuilder - Fluent builder for PlanDefinitionActorOption backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActorOption = new PlanDefinitionActorOptionBuilder()
 *   .setType(value)
 *   .build();
 */
export class PlanDefinitionActorOptionBuilder extends BackboneElementBuilder<PlanDefinitionActorOption, IPlanDefinitionActorOption> {
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
   * E.g. Nurse, Surgeon, Parent
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActorOption instance
   */
  build(): PlanDefinitionActorOption {
    return new PlanDefinitionActorOption(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActorOption instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActorOption> {
    const planDefinitionActorOption = this.build();
    await planDefinitionActorOption.validateOrThrow();
    return planDefinitionActorOption;
  }
}
