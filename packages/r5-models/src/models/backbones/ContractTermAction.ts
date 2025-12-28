import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IContractTermAction,
  IContractTermActionSubject,
  IElement,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractTermAction */
const CONTRACT_TERM_ACTION_PROPERTIES = [
  'doNotPerform',
  '_doNotPerform',
  'type',
  'subject',
  'intent',
  'linkId',
  '_linkId',
  'status',
  'context',
  'contextLinkId',
  '_contextLinkId',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'requester',
  'requesterLinkId',
  '_requesterLinkId',
  'performerType',
  'performerRole',
  'performer',
  'performerLinkId',
  '_performerLinkId',
  'reason',
  'reasonLinkId',
  '_reasonLinkId',
  'note',
  'securityLabelNumber',
  '_securityLabelNumber',
] as const;

/**
 * ContractTermAction - Entity being ascribed responsibility
 *
 * @see https://hl7.org/fhir/R5/contracttermaction.html
 *
 * @example
 * const contractTermAction = new ContractTermAction({
 *   // ... properties
 * });
 */
export class ContractTermAction extends BackboneElement implements IContractTermAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** True if the term prohibits the  action */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** Type or form of the action */
  type: ICodeableConcept;

  /** Entity of the action */
  subject?: IContractTermActionSubject[];

  /** Purpose for the Contract Term Action */
  intent: ICodeableConcept;

  /** Pointer to specific item */
  linkId?: string[];

  /** Extension for linkId */
  _linkId?: IElement;

  /** State of the action */
  status: ICodeableConcept;

  /** Episode associated with action */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /** Pointer to specific item */
  contextLinkId?: string[];

  /** Extension for contextLinkId */
  _contextLinkId?: IElement;

  /** When action happens */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When action happens */
  occurrencePeriod?: IPeriod;

  /** When action happens */
  occurrenceTiming?: ITiming;

  /** Who asked for action */
  requester?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>[];

  /** Pointer to specific item */
  requesterLinkId?: string[];

  /** Extension for requesterLinkId */
  _requesterLinkId?: IElement;

  /** Kind of service performer */
  performerType?: ICodeableConcept[];

  /** Competency of the performer */
  performerRole?: ICodeableConcept;

  /** Actor that wil execute (or not) the action */
  performer?: IReference<'RelatedPerson' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'CareTeam' | 'Device' | 'Substance' | 'Organization' | 'Location'>;

  /** Pointer to specific item */
  performerLinkId?: string[];

  /** Extension for performerLinkId */
  _performerLinkId?: IElement;

  /** Why is action (not) needed? */
  reason?: ICodeableReference[];

  /** Pointer to specific item */
  reasonLinkId?: string[];

  /** Extension for reasonLinkId */
  _reasonLinkId?: IElement;

  /** Comments about the action */
  note?: IAnnotation[];

  /** Action restriction numbers */
  securityLabelNumber?: number[];

  /** Extension for securityLabelNumber */
  _securityLabelNumber?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermAction>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermAction from a JSON object
   */
  static fromJSON(json: IContractTermAction): ContractTermAction {
    return new ContractTermAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermAction>): ContractTermAction {
    return new ContractTermAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermAction) => Partial<IContractTermAction>): ContractTermAction {
    const currentData = this.toJSON();
    return new ContractTermAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_ACTION_PROPERTIES);
    return result as IContractTermAction;
  }

  /**
   * Create a deep clone of this ContractTermAction
   */
  clone(): ContractTermAction {
    return new ContractTermAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermAction
   */
  toString(): string {
    const parts: string[] = ['ContractTermAction'];
    return parts.join(', ');
  }
}
