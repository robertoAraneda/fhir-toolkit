import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPeriod,
  IReference,
  ISpecimenProcessing,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SpecimenProcessing */
const SPECIMEN_PROCESSING_PROPERTIES = [
  'description',
  '_description',
  'procedure',
  'additive',
  'timeDateTime',
  '_timeDateTime',
  'timePeriod',
] as const;

/**
 * SpecimenProcessing - Processing and processing step details
 *
 * @see https://hl7.org/fhir/R4B/specimenprocessing.html
 *
 * @example
 * const specimenProcessing = new SpecimenProcessing({
 *   // ... properties
 * });
 */
export class SpecimenProcessing extends BackboneElement implements ISpecimenProcessing {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Textual description of procedure */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Indicates the treatment step  applied to the specimen */
  procedure?: ICodeableConcept;

  /** Material used in the processing step */
  additive?: IReference<'Substance'>[];

  /** Date and time of specimen processing */
  timeDateTime?: string;

  /** Extension for timeDateTime */
  _timeDateTime?: IElement;

  /** Date and time of specimen processing */
  timePeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenProcessing>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_PROCESSING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenProcessing from a JSON object
   */
  static fromJSON(json: ISpecimenProcessing): SpecimenProcessing {
    return new SpecimenProcessing(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenProcessing with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenProcessing>): SpecimenProcessing {
    return new SpecimenProcessing({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenProcessing by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenProcessing) => Partial<ISpecimenProcessing>): SpecimenProcessing {
    const currentData = this.toJSON();
    return new SpecimenProcessing({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenProcessing)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenProcessing {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_PROCESSING_PROPERTIES);
    return result as ISpecimenProcessing;
  }

  /**
   * Create a deep clone of this SpecimenProcessing
   */
  clone(): SpecimenProcessing {
    return new SpecimenProcessing(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenProcessing
   */
  toString(): string {
    const parts: string[] = ['SpecimenProcessing'];
    return parts.join(', ');
  }
}
