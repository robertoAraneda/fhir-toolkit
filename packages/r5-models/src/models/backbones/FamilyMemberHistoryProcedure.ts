import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAge,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IFamilyMemberHistoryProcedure,
  IPeriod,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to FamilyMemberHistoryProcedure */
const FAMILY_MEMBER_HISTORY_PROCEDURE_PROPERTIES = [
  'code',
  'outcome',
  'contributedToDeath',
  '_contributedToDeath',
  'performedAge',
  'performedRange',
  'performedPeriod',
  'performedString',
  '_performedString',
  'performedDateTime',
  '_performedDateTime',
  'note',
] as const;

/**
 * FamilyMemberHistoryProcedure - Procedures that the related person had
 *
 * @see https://hl7.org/fhir/R4/familymemberhistoryprocedure.html
 *
 * @example
 * const familyMemberHistoryProcedure = new FamilyMemberHistoryProcedure({
 *   // ... properties
 * });
 */
export class FamilyMemberHistoryProcedure extends BackboneElement implements IFamilyMemberHistoryProcedure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Procedures performed on the related person */
  code: ICodeableConcept;

  /** What happened following the procedure */
  outcome?: ICodeableConcept;

  /** Whether the procedure contributed to the cause of death */
  contributedToDeath?: boolean;

  /** Extension for contributedToDeath */
  _contributedToDeath?: IElement;

  /** When the procedure was performed */
  performedAge?: IAge;

  /** When the procedure was performed */
  performedRange?: IRange;

  /** When the procedure was performed */
  performedPeriod?: IPeriod;

  /** When the procedure was performed */
  performedString?: string;

  /** Extension for performedString */
  _performedString?: IElement;

  /** When the procedure was performed */
  performedDateTime?: string;

  /** Extension for performedDateTime */
  _performedDateTime?: IElement;

  /** Extra information about the procedure */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IFamilyMemberHistoryProcedure>) {
    super(data);
    if (data) {
      this.assignProps(data, FAMILY_MEMBER_HISTORY_PROCEDURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create FamilyMemberHistoryProcedure from a JSON object
   */
  static fromJSON(json: IFamilyMemberHistoryProcedure): FamilyMemberHistoryProcedure {
    return new FamilyMemberHistoryProcedure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new FamilyMemberHistoryProcedure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IFamilyMemberHistoryProcedure>): FamilyMemberHistoryProcedure {
    return new FamilyMemberHistoryProcedure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new FamilyMemberHistoryProcedure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IFamilyMemberHistoryProcedure) => Partial<IFamilyMemberHistoryProcedure>): FamilyMemberHistoryProcedure {
    const currentData = this.toJSON();
    return new FamilyMemberHistoryProcedure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IFamilyMemberHistoryProcedure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IFamilyMemberHistoryProcedure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, FAMILY_MEMBER_HISTORY_PROCEDURE_PROPERTIES);
    return result as IFamilyMemberHistoryProcedure;
  }

  /**
   * Create a deep clone of this FamilyMemberHistoryProcedure
   */
  clone(): FamilyMemberHistoryProcedure {
    return new FamilyMemberHistoryProcedure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the FamilyMemberHistoryProcedure
   */
  toString(): string {
    const parts: string[] = ['FamilyMemberHistoryProcedure'];
    return parts.join(', ');
  }
}
