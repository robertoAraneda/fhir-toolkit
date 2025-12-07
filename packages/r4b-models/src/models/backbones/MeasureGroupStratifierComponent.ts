import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExpression,
  IMeasureGroupStratifierComponent,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MeasureGroupStratifierComponent */
const MEASURE_GROUP_STRATIFIER_COMPONENT_PROPERTIES = [
  'code',
  'description',
  '_description',
  'criteria',
] as const;

/**
 * MeasureGroupStratifierComponent - Stratifier criteria component for the measure
 *
 * @see https://hl7.org/fhir/R4/measuregroupstratifiercomponent.html
 *
 * @example
 * const measureGroupStratifierComponent = new MeasureGroupStratifierComponent({
 *   // ... properties
 * });
 */
export class MeasureGroupStratifierComponent extends BackboneElement implements IMeasureGroupStratifierComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Meaning of the stratifier component */
  code?: ICodeableConcept;

  /** The human readable description of this stratifier component */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Component of how the measure should be stratified */
  criteria: IExpression;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMeasureGroupStratifierComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_GROUP_STRATIFIER_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MeasureGroupStratifierComponent from a JSON object
   */
  static fromJSON(json: IMeasureGroupStratifierComponent): MeasureGroupStratifierComponent {
    return new MeasureGroupStratifierComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MeasureGroupStratifierComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasureGroupStratifierComponent>): MeasureGroupStratifierComponent {
    return new MeasureGroupStratifierComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MeasureGroupStratifierComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasureGroupStratifierComponent) => Partial<IMeasureGroupStratifierComponent>): MeasureGroupStratifierComponent {
    const currentData = this.toJSON();
    return new MeasureGroupStratifierComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasureGroupStratifierComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasureGroupStratifierComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEASURE_GROUP_STRATIFIER_COMPONENT_PROPERTIES);
    return result as IMeasureGroupStratifierComponent;
  }

  /**
   * Create a deep clone of this MeasureGroupStratifierComponent
   */
  clone(): MeasureGroupStratifierComponent {
    return new MeasureGroupStratifierComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MeasureGroupStratifierComponent
   */
  toString(): string {
    const parts: string[] = ['MeasureGroupStratifierComponent'];
    return parts.join(', ');
  }
}
