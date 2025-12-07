import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAge,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IFamilyMemberHistoryCondition,
  IPeriod,
  IRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to FamilyMemberHistoryCondition */
const FAMILY_MEMBER_HISTORY_CONDITION_PROPERTIES = [
  'code',
  'outcome',
  'contributedToDeath',
  '_contributedToDeath',
  'onsetAge',
  'onsetRange',
  'onsetPeriod',
  'onsetString',
  '_onsetString',
  'note',
] as const;

/**
 * FamilyMemberHistoryCondition - Condition that the related person had
 *
 * @see https://hl7.org/fhir/R4/familymemberhistorycondition.html
 *
 * @example
 * const familyMemberHistoryCondition = new FamilyMemberHistoryCondition({
 *   // ... properties
 * });
 */
export class FamilyMemberHistoryCondition extends BackboneElement implements IFamilyMemberHistoryCondition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Condition suffered by relation */
  code: ICodeableConcept;

  /** deceased | permanent disability | etc. */
  outcome?: ICodeableConcept;

  /** Whether the condition contributed to the cause of death */
  contributedToDeath?: boolean;

  /** Extension for contributedToDeath */
  _contributedToDeath?: IElement;

  /** When condition first manifested */
  onsetAge?: IAge;

  /** When condition first manifested */
  onsetRange?: IRange;

  /** When condition first manifested */
  onsetPeriod?: IPeriod;

  /** When condition first manifested */
  onsetString?: string;

  /** Extension for onsetString */
  _onsetString?: IElement;

  /** Extra information about condition */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IFamilyMemberHistoryCondition>) {
    super(data);
    if (data) {
      this.assignProps(data, FAMILY_MEMBER_HISTORY_CONDITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create FamilyMemberHistoryCondition from a JSON object
   */
  static fromJSON(json: IFamilyMemberHistoryCondition): FamilyMemberHistoryCondition {
    return new FamilyMemberHistoryCondition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new FamilyMemberHistoryCondition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IFamilyMemberHistoryCondition>): FamilyMemberHistoryCondition {
    return new FamilyMemberHistoryCondition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new FamilyMemberHistoryCondition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IFamilyMemberHistoryCondition) => Partial<IFamilyMemberHistoryCondition>): FamilyMemberHistoryCondition {
    const currentData = this.toJSON();
    return new FamilyMemberHistoryCondition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IFamilyMemberHistoryCondition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IFamilyMemberHistoryCondition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, FAMILY_MEMBER_HISTORY_CONDITION_PROPERTIES);
    return result as IFamilyMemberHistoryCondition;
  }

  /**
   * Create a deep clone of this FamilyMemberHistoryCondition
   */
  clone(): FamilyMemberHistoryCondition {
    return new FamilyMemberHistoryCondition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the FamilyMemberHistoryCondition
   */
  toString(): string {
    const parts: string[] = ['FamilyMemberHistoryCondition'];
    return parts.join(', ');
  }
}
