import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICitationCitedArtifactStatusDate,
  ICodeableConcept,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CitationCitedArtifactStatusDate */
const CITATION_CITED_ARTIFACT_STATUS_DATE_PROPERTIES = [
  'activity',
  'actual',
  '_actual',
  'period',
] as const;

/**
 * CitationCitedArtifactStatusDate - An effective date or period for a status of the cited artifact
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactstatusdate.html
 *
 * @example
 * const citationCitedArtifactStatusDate = new CitationCitedArtifactStatusDate({
 *   // ... properties
 * });
 */
export class CitationCitedArtifactStatusDate extends BackboneElement implements ICitationCitedArtifactStatusDate {

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

  constructor(data?: Partial<ICitationCitedArtifactStatusDate>) {
    super(data);
    if (data) {
      this.assignProps(data, CITATION_CITED_ARTIFACT_STATUS_DATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CitationCitedArtifactStatusDate from a JSON object
   */
  static fromJSON(json: ICitationCitedArtifactStatusDate): CitationCitedArtifactStatusDate {
    return new CitationCitedArtifactStatusDate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CitationCitedArtifactStatusDate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICitationCitedArtifactStatusDate>): CitationCitedArtifactStatusDate {
    return new CitationCitedArtifactStatusDate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CitationCitedArtifactStatusDate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICitationCitedArtifactStatusDate) => Partial<ICitationCitedArtifactStatusDate>): CitationCitedArtifactStatusDate {
    const currentData = this.toJSON();
    return new CitationCitedArtifactStatusDate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICitationCitedArtifactStatusDate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICitationCitedArtifactStatusDate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CITATION_CITED_ARTIFACT_STATUS_DATE_PROPERTIES);
    return result as ICitationCitedArtifactStatusDate;
  }

  /**
   * Create a deep clone of this CitationCitedArtifactStatusDate
   */
  clone(): CitationCitedArtifactStatusDate {
    return new CitationCitedArtifactStatusDate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CitationCitedArtifactStatusDate
   */
  toString(): string {
    const parts: string[] = ['CitationCitedArtifactStatusDate'];
    return parts.join(', ');
  }
}
