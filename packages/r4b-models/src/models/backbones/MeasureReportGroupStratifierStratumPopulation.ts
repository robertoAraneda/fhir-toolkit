import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMeasureReportGroupStratifierStratumPopulation,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MeasureReportGroupStratifierStratumPopulation */
const MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_POPULATION_PROPERTIES = [
  'code',
  'count',
  '_count',
  'subjectResults',
] as const;

/**
 * MeasureReportGroupStratifierStratumPopulation - Population results in this stratum
 *
 * @see https://hl7.org/fhir/R4B/measurereportgroupstratifierstratumpopulation.html
 *
 * @example
 * const measureReportGroupStratifierStratumPopulation = new MeasureReportGroupStratifierStratumPopulation({
 *   // ... properties
 * });
 */
export class MeasureReportGroupStratifierStratumPopulation extends BackboneElement implements IMeasureReportGroupStratifierStratumPopulation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: ICodeableConcept;

  /** Size of the population */
  count?: number;

  /** Extension for count */
  _count?: IElement;

  /** For subject-list reports, the subject results in this population */
  subjectResults?: IReference<'List'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureReportGroupStratifierStratumPopulation>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_POPULATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureReportGroupStratifierStratumPopulation from a JSON object
   */
  static fromJSON(json: IMeasureReportGroupStratifierStratumPopulation): MeasureReportGroupStratifierStratumPopulation {
    return new MeasureReportGroupStratifierStratumPopulation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureReportGroupStratifierStratumPopulation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureReportGroupStratifierStratumPopulation>): MeasureReportGroupStratifierStratumPopulation {
    return new MeasureReportGroupStratifierStratumPopulation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureReportGroupStratifierStratumPopulation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureReportGroupStratifierStratumPopulation) => Partial<IMeasureReportGroupStratifierStratumPopulation>): MeasureReportGroupStratifierStratumPopulation {
    const currentData = this.toJSON();
    return new MeasureReportGroupStratifierStratumPopulation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureReportGroupStratifierStratumPopulation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureReportGroupStratifierStratumPopulation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_REPORT_GROUP_STRATIFIER_STRATUM_POPULATION_PROPERTIES);
    return result as IMeasureReportGroupStratifierStratumPopulation;
  }

  /**
   * Create a deep clone of this MeasureReportGroupStratifierStratumPopulation
   */
  clone(): MeasureReportGroupStratifierStratumPopulation {
    return new MeasureReportGroupStratifierStratumPopulation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureReportGroupStratifierStratumPopulation
   */
  toString(): string {
    const parts: string[] = ['MeasureReportGroupStratifierStratumPopulation'];
    return parts.join(', ');
  }
}
