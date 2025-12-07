import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationStatusDate,
  ICodeableConcept,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CitationStatusDate */
const CITATION_STATUS_DATE_PROPERTIES = [
  'activity',
  'actual',
  '_actual',
  'period',
] as const;

/**
 * CitationStatusDate - An effective date or period for a status of the citation record
 *
 * @see https://hl7.org/fhir/R4/citationstatusdate.html
 *
 * @example
 * const citationStatusDate = new CitationStatusDate({
 *   // ... properties
 * });
 */
export class CitationStatusDate extends BackboneElement implements ICitationStatusDate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Classification of the status */
  activity: ICodeableConcept;

  /** Either occurred or expected */
  actual?: boolean;

  /** Extension for actual */
  _actual?: IElement;

  /** When the status started and/or ended */
  period: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICitationStatusDate>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_STATUS_DATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationStatusDate from a JSON object
   */
  static fromJSON(json: ICitationStatusDate): CitationStatusDate {
    return new CitationStatusDate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationStatusDate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationStatusDate>): CitationStatusDate {
    return new CitationStatusDate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationStatusDate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationStatusDate) => Partial<ICitationStatusDate>): CitationStatusDate {
    const currentData = this.toJSON();
    return new CitationStatusDate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationStatusDate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationStatusDate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_STATUS_DATE_PROPERTIES);
    return result as ICitationStatusDate;
  }

  /**
   * Create a deep clone of this CitationStatusDate
   */
  clone(): CitationStatusDate {
    return new CitationStatusDate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationStatusDate
   */
  toString(): string {
    const parts: string[] = ['CitationStatusDate'];
    return parts.join(', ');
  }
}
