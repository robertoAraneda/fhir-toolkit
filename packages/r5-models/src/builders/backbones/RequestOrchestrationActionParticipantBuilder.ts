import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationActionParticipant } from '../../models/backbones/RequestOrchestrationActionParticipant.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IReference,
  IRequestOrchestrationActionParticipant,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionParticipantBuilder - Fluent builder for RequestOrchestrationActionParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationActionParticipant = new RequestOrchestrationActionParticipantBuilder()
 *   .setType(value)
 *   .build();
 */
export class RequestOrchestrationActionParticipantBuilder extends BackboneElementBuilder<RequestOrchestrationActionParticipant, IRequestOrchestrationActionParticipant> {
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
  // Choice Types
  // ============================================================================

  /**
   * Set actor choice type (actorCanonical, actorReference)
   * @param type - 'Canonical' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setActor('Canonical', value)
   */
  setActor<T extends 'Canonical' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `actor${type}` as keyof IRequestOrchestrationActionParticipant;
    const otherKeys: (keyof IRequestOrchestrationActionParticipant)[] = [];
    if (type !== 'Canonical') {
      otherKeys.push('actorCanonical' as keyof IRequestOrchestrationActionParticipant);
      otherKeys.push('_actorCanonical' as keyof IRequestOrchestrationActionParticipant);
    }
    if (type !== 'Reference') {
      otherKeys.push('actorReference' as keyof IRequestOrchestrationActionParticipant);
      otherKeys.push('_actorReference' as keyof IRequestOrchestrationActionParticipant);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RequestOrchestrationActionParticipant instance
   */
  build(): RequestOrchestrationActionParticipant {
    return new RequestOrchestrationActionParticipant(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationActionParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationActionParticipant> {
    const requestOrchestrationActionParticipant = this.build();
    await requestOrchestrationActionParticipant.validateOrThrow();
    return requestOrchestrationActionParticipant;
  }
}
