import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IObservationComponent,
  IObservationReferenceRange,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  ISampledData,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ObservationComponent */
const OBSERVATION_COMPONENT_PROPERTIES = [
  'code',
  'valueQuantity',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueRange',
  'valueRatio',
  'valueSampledData',
  'valueTime',
  '_valueTime',
  'valueDateTime',
  '_valueDateTime',
  'valuePeriod',
  'dataAbsentReason',
  'interpretation',
  'referenceRange',
] as const;

/**
 * ObservationComponent - Component results
 *
 * @see https://hl7.org/fhir/R4/observationcomponent.html
 *
 * @example
 * const observationComponent = new ObservationComponent({
 *   // ... properties
 * });
 */
export class ObservationComponent extends BackboneElement implements IObservationComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of component observation (code / type) */
  code: ICodeableConcept;

  /** Actual component result */
  valueQuantity?: IQuantity;

  /** Actual component result */
  valueCodeableConcept?: ICodeableConcept;

  /** Actual component result */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Actual component result */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Actual component result */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Actual component result */
  valueRange?: IRange;

  /** Actual component result */
  valueRatio?: IRatio;

  /** Actual component result */
  valueSampledData?: ISampledData;

  /** Actual component result */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Actual component result */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Actual component result */
  valuePeriod?: IPeriod;

  /** Why the component result is missing */
  dataAbsentReason?: ICodeableConcept;

  /** High, low, normal, etc. */
  interpretation?: ICodeableConcept[];

  /** Provides guide for interpretation of component result */
  referenceRange?: IObservationReferenceRange[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationComponent from a JSON object
   */
  static fromJSON(json: IObservationComponent): ObservationComponent {
    return new ObservationComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationComponent>): ObservationComponent {
    return new ObservationComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationComponent) => Partial<IObservationComponent>): ObservationComponent {
    const currentData = this.toJSON();
    return new ObservationComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_COMPONENT_PROPERTIES);
    return result as IObservationComponent;
  }

  /**
   * Create a deep clone of this ObservationComponent
   */
  clone(): ObservationComponent {
    return new ObservationComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationComponent
   */
  toString(): string {
    const parts: string[] = ['ObservationComponent'];
    return parts.join(', ');
  }
}
