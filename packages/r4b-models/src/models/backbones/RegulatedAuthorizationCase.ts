import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IRegulatedAuthorizationCase,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to RegulatedAuthorizationCase */
const REGULATED_AUTHORIZATION_CASE_PROPERTIES = [
  'identifier',
  'type',
  'status',
  'datePeriod',
  'dateDateTime',
  '_dateDateTime',
  'application',
] as const;

/**
 * RegulatedAuthorizationCase - The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
 *
 * @see https://hl7.org/fhir/R4/regulatedauthorizationcase.html
 *
 * @example
 * const regulatedAuthorizationCase = new RegulatedAuthorizationCase({
 *   // ... properties
 * });
 */
export class RegulatedAuthorizationCase extends BackboneElement implements IRegulatedAuthorizationCase {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier by which this case can be referenced */
  identifier?: IIdentifier;

  /** The defining type of case */
  type?: ICodeableConcept;

  /** The status associated with the case */
  status?: ICodeableConcept;

  /** Relevant date for this case */
  datePeriod?: IPeriod;

  /** Relevant date for this case */
  dateDateTime?: string;

  /** Extension for dateDateTime */
  _dateDateTime?: IElement;

  /** Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure */
  application?: IRegulatedAuthorizationCase[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRegulatedAuthorizationCase>) {
    super(data);
    if (data) {
      this.assignProps(data, REGULATED_AUTHORIZATION_CASE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RegulatedAuthorizationCase from a JSON object
   */
  static fromJSON(json: IRegulatedAuthorizationCase): RegulatedAuthorizationCase {
    return new RegulatedAuthorizationCase(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RegulatedAuthorizationCase with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRegulatedAuthorizationCase>): RegulatedAuthorizationCase {
    return new RegulatedAuthorizationCase({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RegulatedAuthorizationCase by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRegulatedAuthorizationCase) => Partial<IRegulatedAuthorizationCase>): RegulatedAuthorizationCase {
    const currentData = this.toJSON();
    return new RegulatedAuthorizationCase({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRegulatedAuthorizationCase)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRegulatedAuthorizationCase {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, REGULATED_AUTHORIZATION_CASE_PROPERTIES);
    return result as IRegulatedAuthorizationCase;
  }

  /**
   * Create a deep clone of this RegulatedAuthorizationCase
   */
  clone(): RegulatedAuthorizationCase {
    return new RegulatedAuthorizationCase(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RegulatedAuthorizationCase
   */
  toString(): string {
    const parts: string[] = ['RegulatedAuthorizationCase'];
    return parts.join(', ');
  }
}
