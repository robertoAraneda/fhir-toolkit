import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBiologicallyDerivedProductProcessing,
  ICodeableConcept,
  IElement,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BiologicallyDerivedProductProcessing */
const BIOLOGICALLY_DERIVED_PRODUCT_PROCESSING_PROPERTIES = [
  'description',
  '_description',
  'procedure',
  'additive',
  'timeDateTime',
  '_timeDateTime',
  'timePeriod',
] as const;

/**
 * BiologicallyDerivedProductProcessing - Any processing of the product during collection
 *
 * @see https://hl7.org/fhir/R4B/biologicallyderivedproductprocessing.html
 *
 * @example
 * const biologicallyDerivedProductProcessing = new BiologicallyDerivedProductProcessing({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductProcessing extends BackboneElement implements IBiologicallyDerivedProductProcessing {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of of processing */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Procesing code */
  procedure?: ICodeableConcept;

  /** Substance added during processing */
  additive?: IReference<'Substance'>;

  /** Time of processing */
  timeDateTime?: string;

  /** Extension for timeDateTime */
  _timeDateTime?: IElement;

  /** Time of processing */
  timePeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBiologicallyDerivedProductProcessing>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_PROCESSING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductProcessing from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductProcessing): BiologicallyDerivedProductProcessing {
    return new BiologicallyDerivedProductProcessing(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductProcessing with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductProcessing>): BiologicallyDerivedProductProcessing {
    return new BiologicallyDerivedProductProcessing({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductProcessing by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductProcessing) => Partial<IBiologicallyDerivedProductProcessing>): BiologicallyDerivedProductProcessing {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductProcessing({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductProcessing)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductProcessing {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_PROCESSING_PROPERTIES);
    return result as IBiologicallyDerivedProductProcessing;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductProcessing
   */
  clone(): BiologicallyDerivedProductProcessing {
    return new BiologicallyDerivedProductProcessing(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductProcessing
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductProcessing'];
    return parts.join(', ');
  }
}
