import { DomainResource } from '../base/DomainResource.js';
import type {
  IAge,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  ICondition,
  IConditionParticipant,
  IConditionStage,
  IElement,
  IIdentifier,
  IPeriod,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Condition */
const CONDITION_PROPERTIES = [
  'identifier',
  'clinicalStatus',
  'verificationStatus',
  'category',
  'severity',
  'code',
  'bodySite',
  'subject',
  'encounter',
  'onsetDateTime',
  '_onsetDateTime',
  'onsetAge',
  'onsetPeriod',
  'onsetRange',
  'onsetString',
  '_onsetString',
  'abatementDateTime',
  '_abatementDateTime',
  'abatementAge',
  'abatementPeriod',
  'abatementRange',
  'abatementString',
  '_abatementString',
  'recordedDate',
  '_recordedDate',
  'participant',
  'stage',
  'evidence',
  'note',
] as const;

/**
 * Condition - A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 *
 * @see https://hl7.org/fhir/R4/condition.html
 *
 * @example
 * const condition = new Condition({
 *   resourceType: 'Condition',
 *   // ... properties
 * });
 */
export class Condition extends DomainResource implements ICondition {
  readonly resourceType = 'Condition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this condition */
  identifier?: IIdentifier[];

  /** active | recurrence | relapse | inactive | remission | resolved | unknown */
  clinicalStatus: ICodeableConcept;

  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
  verificationStatus?: ICodeableConcept;

  /** problem-list-item | encounter-diagnosis */
  category?: ICodeableConcept[];

  /** Subjective severity of condition */
  severity?: ICodeableConcept;

  /** Identification of the condition, problem or diagnosis */
  code?: ICodeableConcept;

  /** Anatomical location, if relevant */
  bodySite?: ICodeableConcept[];

  /** Who has the condition? */
  subject: IReference<'Patient' | 'Group'>;

  /** The Encounter during which this Condition was created */
  encounter?: IReference<'Encounter'>;

  /** Estimated or actual date,  date-time, or age */
  onsetDateTime?: string;

  /** Extension for onsetDateTime */
  _onsetDateTime?: IElement;

  /** Estimated or actual date,  date-time, or age */
  onsetAge?: IAge;

  /** Estimated or actual date,  date-time, or age */
  onsetPeriod?: IPeriod;

  /** Estimated or actual date,  date-time, or age */
  onsetRange?: IRange;

  /** Estimated or actual date,  date-time, or age */
  onsetString?: string;

  /** Extension for onsetString */
  _onsetString?: IElement;

  /** When in resolution/remission */
  abatementDateTime?: string;

  /** Extension for abatementDateTime */
  _abatementDateTime?: IElement;

  /** When in resolution/remission */
  abatementAge?: IAge;

  /** When in resolution/remission */
  abatementPeriod?: IPeriod;

  /** When in resolution/remission */
  abatementRange?: IRange;

  /** When in resolution/remission */
  abatementString?: string;

  /** Extension for abatementString */
  _abatementString?: IElement;

  /** Date condition was first recorded */
  recordedDate?: string;

  /** Extension for recordedDate */
  _recordedDate?: IElement;

  /** Who or what participated in the activities related to the condition and how they were involved */
  participant?: IConditionParticipant[];

  /** Stage/grade, usually assessed formally */
  stage?: IConditionStage[];

  /** Supporting evidence for the verification status */
  evidence?: ICodeableReference[];

  /** Additional information about the Condition */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICondition>) {
    super(data);
    if (data) {
      this.assignProps(data, CONDITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Condition from a JSON object
   */
  static fromJSON(json: ICondition): Condition {
    return new Condition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Condition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICondition>): Condition {
    return new Condition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Condition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICondition) => Partial<ICondition>): Condition {
    const currentData = this.toJSON();
    return new Condition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICondition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICondition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CONDITION_PROPERTIES);
    return result as ICondition;
  }

  /**
   * Create a deep clone of this Condition
   */
  clone(): Condition {
    return new Condition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Condition
   */
  toString(): string {
    const parts: string[] = ['Condition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
