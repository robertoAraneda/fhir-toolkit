import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExpression,
  IMeasureGroupStratifier,
  IMeasureGroupStratifierComponent,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MeasureGroupStratifier */
const MEASURE_GROUP_STRATIFIER_PROPERTIES = [
  'linkId',
  '_linkId',
  'code',
  'description',
  '_description',
  'criteria',
  'groupDefinition',
  'component',
] as const;

/**
 * MeasureGroupStratifier - Stratifier criteria for the measure
 *
 * @see https://hl7.org/fhir/R5/measuregroupstratifier.html
 *
 * @example
 * const measureGroupStratifier = new MeasureGroupStratifier({
 *   // ... properties
 * });
 */
export class MeasureGroupStratifier extends BackboneElement implements IMeasureGroupStratifier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique id for stratifier in measure */
  linkId?: string;

  /** Extension for linkId */
  _linkId?: IElement;

  /** Meaning of the stratifier */
  code?: ICodeableConcept;

  /** The human readable description of this stratifier */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** How the measure should be stratified */
  criteria?: IExpression;

  /** A group resource that defines this population */
  groupDefinition?: IReference<'Group'>;

  /** Stratifier criteria component for the measure */
  component?: IMeasureGroupStratifierComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureGroupStratifier>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_GROUP_STRATIFIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureGroupStratifier from a JSON object
   */
  static fromJSON(json: IMeasureGroupStratifier): MeasureGroupStratifier {
    return new MeasureGroupStratifier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureGroupStratifier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureGroupStratifier>): MeasureGroupStratifier {
    return new MeasureGroupStratifier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureGroupStratifier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureGroupStratifier) => Partial<IMeasureGroupStratifier>): MeasureGroupStratifier {
    const currentData = this.toJSON();
    return new MeasureGroupStratifier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureGroupStratifier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureGroupStratifier {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_GROUP_STRATIFIER_PROPERTIES);
    return result as IMeasureGroupStratifier;
  }

  /**
   * Create a deep clone of this MeasureGroupStratifier
   */
  clone(): MeasureGroupStratifier {
    return new MeasureGroupStratifier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureGroupStratifier
   */
  toString(): string {
    const parts: string[] = ['MeasureGroupStratifier'];
    return parts.join(', ');
  }
}
