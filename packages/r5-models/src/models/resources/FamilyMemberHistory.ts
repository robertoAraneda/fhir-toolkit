import { DomainResource } from '../base/DomainResource.js';
import type {
  FamilyHistoryStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IFamilyMemberHistory,
  IFamilyMemberHistoryCondition,
  IFamilyMemberHistoryParticipant,
  IFamilyMemberHistoryProcedure,
  IIdentifier,
  IPeriod,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to FamilyMemberHistory */
const FAMILY_MEMBER_HISTORY_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'status',
  '_status',
  'dataAbsentReason',
  'patient',
  'date',
  '_date',
  'participant',
  'name',
  '_name',
  'relationship',
  'sex',
  'bornPeriod',
  'bornDate',
  '_bornDate',
  'bornString',
  '_bornString',
  'ageAge',
  'ageRange',
  'ageString',
  '_ageString',
  'estimatedAge',
  '_estimatedAge',
  'deceasedBoolean',
  '_deceasedBoolean',
  'deceasedAge',
  'deceasedRange',
  'deceasedDate',
  '_deceasedDate',
  'deceasedString',
  '_deceasedString',
  'reason',
  'note',
  'condition',
  'procedure',
] as const;

/**
 * FamilyMemberHistory - Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 *
 * @see https://hl7.org/fhir/R4/familymemberhistory.html
 *
 * @example
 * const familyMemberHistory = new FamilyMemberHistory({
 *   resourceType: 'FamilyMemberHistory',
 *   // ... properties
 * });
 */
export class FamilyMemberHistory extends DomainResource implements IFamilyMemberHistory {
  readonly resourceType = 'FamilyMemberHistory' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Id(s) for this record */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** partial | completed | entered-in-error | health-unknown */
  status: FamilyHistoryStatusType;

  /** Extension for status */
  _status?: IElement;

  /** subject-unknown | withheld | unable-to-obtain | deferred */
  dataAbsentReason?: ICodeableConcept;

  /** Patient history is about */
  patient: IReference<'Patient'>;

  /** When history was recorded or last updated */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who or what participated in the activities related to the family member history and how they were involved */
  participant?: IFamilyMemberHistoryParticipant[];

  /** The family member described */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Relationship to the subject */
  relationship: ICodeableConcept;

  /** male | female | other | unknown */
  sex?: ICodeableConcept;

  /** (approximate) date of birth */
  bornPeriod?: IPeriod;

  /** (approximate) date of birth */
  bornDate?: string;

  /** Extension for bornDate */
  _bornDate?: IElement;

  /** (approximate) date of birth */
  bornString?: string;

  /** Extension for bornString */
  _bornString?: IElement;

  /** (approximate) age */
  ageAge?: IAge;

  /** (approximate) age */
  ageRange?: IRange;

  /** (approximate) age */
  ageString?: string;

  /** Extension for ageString */
  _ageString?: IElement;

  /** Age is estimated? */
  estimatedAge?: boolean;

  /** Extension for estimatedAge */
  _estimatedAge?: IElement;

  /** Dead? How old/when? */
  deceasedBoolean?: boolean;

  /** Extension for deceasedBoolean */
  _deceasedBoolean?: IElement;

  /** Dead? How old/when? */
  deceasedAge?: IAge;

  /** Dead? How old/when? */
  deceasedRange?: IRange;

  /** Dead? How old/when? */
  deceasedDate?: string;

  /** Extension for deceasedDate */
  _deceasedDate?: IElement;

  /** Dead? How old/when? */
  deceasedString?: string;

  /** Extension for deceasedString */
  _deceasedString?: IElement;

  /** Why was family member history performed? */
  reason?: ICodeableReference[];

  /** General note about related person */
  note?: IAnnotation[];

  /** Condition that the related person had */
  condition?: IFamilyMemberHistoryCondition[];

  /** Procedures that the related person had */
  procedure?: IFamilyMemberHistoryProcedure[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IFamilyMemberHistory>) {
    super(data);
    if (data) {
      this.assignProps(data, FAMILY_MEMBER_HISTORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create FamilyMemberHistory from a JSON object
   */
  static fromJSON(json: IFamilyMemberHistory): FamilyMemberHistory {
    return new FamilyMemberHistory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new FamilyMemberHistory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IFamilyMemberHistory>): FamilyMemberHistory {
    return new FamilyMemberHistory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new FamilyMemberHistory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IFamilyMemberHistory) => Partial<IFamilyMemberHistory>): FamilyMemberHistory {
    const currentData = this.toJSON();
    return new FamilyMemberHistory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IFamilyMemberHistory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IFamilyMemberHistory {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, FAMILY_MEMBER_HISTORY_PROPERTIES);
    return result as IFamilyMemberHistory;
  }

  /**
   * Create a deep clone of this FamilyMemberHistory
   */
  clone(): FamilyMemberHistory {
    return new FamilyMemberHistory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the FamilyMemberHistory
   */
  toString(): string {
    const parts: string[] = ['FamilyMemberHistory'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
