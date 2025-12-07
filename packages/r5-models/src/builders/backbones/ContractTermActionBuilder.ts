import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermAction } from '../../models/backbones/ContractTermAction.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IContractTermAction,
  IContractTermActionSubject,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * ContractTermActionBuilder - Fluent builder for ContractTermAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermAction = new ContractTermActionBuilder()
 *   .setDoNotPerform(value)
 *   .addSubject({ ... })
 *   .build();
 */
export class ContractTermActionBuilder extends BackboneElementBuilder<ContractTermAction, IContractTermAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set doNotPerform
   * True if the term prohibits the  action
   */
  setDoNotPerform(doNotPerform: boolean): this {
    this.data.doNotPerform = doNotPerform;
    return this;
  }

  /**
   * Set type
   * Type or form of the action
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set intent
   * Purpose for the Contract Term Action
   */
  setIntent(intent: ICodeableConcept): this {
    this.data.intent = intent;
    return this;
  }

  /**
   * Set status
   * State of the action
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set context
   * Episode associated with action
   */
  setContext(context: IReference<'Encounter' | 'EpisodeOfCare'>): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set performerRole
   * Competency of the performer
   */
  setPerformerRole(performerRole: ICodeableConcept): this {
    this.data.performerRole = performerRole;
    return this;
  }

  /**
   * Set performer
   * Actor that wil execute (or not) the action
   */
  setPerformer(performer: IReference<'RelatedPerson' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'CareTeam' | 'Device' | 'Substance' | 'Organization' | 'Location'>): this {
    this.data.performer = performer;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurrence choice type (occurrenceDateTime, occurrencePeriod, occurrenceTiming)
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurrence('DateTime', value)
   */
  setOccurrence<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurrence${type}` as keyof IContractTermAction;
    const otherKeys: (keyof IContractTermAction)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurrenceDateTime' as keyof IContractTermAction);
      otherKeys.push('_occurrenceDateTime' as keyof IContractTermAction);
    }
    if (type !== 'Period') {
      otherKeys.push('occurrencePeriod' as keyof IContractTermAction);
      otherKeys.push('_occurrencePeriod' as keyof IContractTermAction);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurrenceTiming' as keyof IContractTermAction);
      otherKeys.push('_occurrenceTiming' as keyof IContractTermAction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subject
   * Entity of the action
   */
  addSubject(subject: IContractTermActionSubject): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add linkId
   * Pointer to specific item
   */
  addLinkId(linkId: string): this {
    return this.addToArray('linkId', linkId);
  }

  /**
   * Add contextLinkId
   * Pointer to specific item
   */
  addContextLinkId(contextLinkId: string): this {
    return this.addToArray('contextLinkId', contextLinkId);
  }

  /**
   * Add requester
   * Who asked for action
   */
  addRequester(requester: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>): this {
    return this.addToArray('requester', requester);
  }

  /**
   * Add requesterLinkId
   * Pointer to specific item
   */
  addRequesterLinkId(requesterLinkId: string): this {
    return this.addToArray('requesterLinkId', requesterLinkId);
  }

  /**
   * Add performerType
   * Kind of service performer
   */
  addPerformerType(performerType: ICodeableConcept): this {
    return this.addToArray('performerType', performerType);
  }

  /**
   * Add performerLinkId
   * Pointer to specific item
   */
  addPerformerLinkId(performerLinkId: string): this {
    return this.addToArray('performerLinkId', performerLinkId);
  }

  /**
   * Add reason
   * Why is action (not) needed?
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add reasonLinkId
   * Pointer to specific item
   */
  addReasonLinkId(reasonLinkId: string): this {
    return this.addToArray('reasonLinkId', reasonLinkId);
  }

  /**
   * Add note
   * Comments about the action
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add securityLabelNumber
   * Action restriction numbers
   */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addToArray('securityLabelNumber', securityLabelNumber);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermAction instance
   */
  build(): ContractTermAction {
    return new ContractTermAction(this.data);
  }

  /**
   * Build and validate the ContractTermAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermAction> {
    const contractTermAction = this.build();
    await contractTermAction.validateOrThrow();
    return contractTermAction;
  }
}
