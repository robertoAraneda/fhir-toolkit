import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IElement,
  IMeasureReportGroup,
  IMeasureReportGroupPopulation,
  IMeasureReportGroupStratifier,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MeasureReportGroup */
const MEASURE_REPORT_GROUP_PROPERTIES = [
  'linkId',
  '_linkId',
  'code',
  'subject',
  'population',
  'measureScoreQuantity',
  'measureScoreDateTime',
  '_measureScoreDateTime',
  'measureScoreCodeableConcept',
  'measureScorePeriod',
  'measureScoreRange',
  'measureScoreDuration',
  'stratifier',
] as const;

/**
 * MeasureReportGroup - Measure results for each group
 *
 * @see https://hl7.org/fhir/R4/measurereportgroup.html
 *
 * @example
 * const measureReportGroup = new MeasureReportGroup({
 *   // ... properties
 * });
 */
export class MeasureReportGroup extends BackboneElement implements IMeasureReportGroup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Pointer to specific group from Measure */
  linkId?: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** Meaning of the group */
  code?: ICodeableConcept;

  /** What individual(s) the report is for */
  subject?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** The populations in the group */
  population?: IMeasureReportGroupPopulation[];

  /** What score this group achieved */
  measureScoreQuantity?: IQuantity;

  /** What score this group achieved */
  measureScoreDateTime?: string;

  /** Extension for measureScoreDateTime */
  _measureScoreDateTime?: IElement;

  /** What score this group achieved */
  measureScoreCodeableConcept?: ICodeableConcept;

  /** What score this group achieved */
  measureScorePeriod?: IPeriod;

  /** What score this group achieved */
  measureScoreRange?: IRange;

  /** What score this group achieved */
  measureScoreDuration?: IDuration;

  /** Stratification results */
  stratifier?: IMeasureReportGroupStratifier[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReportGroup>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReportGroup from a JSON object
   */
  static fromJSON(json: IMeasureReportGroup): MeasureReportGroup {
    return new MeasureReportGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReportGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReportGroup>): MeasureReportGroup {
    return new MeasureReportGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReportGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReportGroup) => Partial<IMeasureReportGroup>): MeasureReportGroup {
    const currentData = this.toJSON();
    return new MeasureReportGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReportGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReportGroup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_GROUP_PROPERTIES);
    return result as IMeasureReportGroup;
  }

  /**
   * Create a deep clone of this MeasureReportGroup
   */
  clone(): MeasureReportGroup {
    return new MeasureReportGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReportGroup
   */
  toString(): string {
    const parts: string[] = ['MeasureReportGroup'];
    return parts.join(', ');
  }
}
