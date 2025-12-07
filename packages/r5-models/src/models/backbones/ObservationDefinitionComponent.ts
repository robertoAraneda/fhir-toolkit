import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoding,
  IElement,
  IObservationDefinitionComponent,
  IObservationDefinitionQualifiedValue,
  ObservationDataTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ObservationDefinitionComponent */
const OBSERVATION_DEFINITION_COMPONENT_PROPERTIES = [
  'code',
  'permittedDataType',
  '_permittedDataType',
  'permittedUnit',
  'qualifiedValue',
] as const;

/**
 * ObservationDefinitionComponent - Component results
 *
 * @see https://hl7.org/fhir/R4/observationdefinitioncomponent.html
 *
 * @example
 * const observationDefinitionComponent = new ObservationDefinitionComponent({
 *   // ... properties
 * });
 */
export class ObservationDefinitionComponent extends BackboneElement implements IObservationDefinitionComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of observation */
  code: ICodeableConcept;

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
  permittedDataType?: ObservationDataTypeType[];

  /** Extension for permittedDataType */
  _permittedDataType?: IElement;

  /** Unit for quantitative results */
  permittedUnit?: ICoding[];

  /** Set of qualified values for observation results */
  qualifiedValue?: IObservationDefinitionQualifiedValue[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationDefinitionComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_DEFINITION_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationDefinitionComponent from a JSON object
   */
  static fromJSON(json: IObservationDefinitionComponent): ObservationDefinitionComponent {
    return new ObservationDefinitionComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationDefinitionComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationDefinitionComponent>): ObservationDefinitionComponent {
    return new ObservationDefinitionComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationDefinitionComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationDefinitionComponent) => Partial<IObservationDefinitionComponent>): ObservationDefinitionComponent {
    const currentData = this.toJSON();
    return new ObservationDefinitionComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationDefinitionComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationDefinitionComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_DEFINITION_COMPONENT_PROPERTIES);
    return result as IObservationDefinitionComponent;
  }

  /**
   * Create a deep clone of this ObservationDefinitionComponent
   */
  clone(): ObservationDefinitionComponent {
    return new ObservationDefinitionComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationDefinitionComponent
   */
  toString(): string {
    const parts: string[] = ['ObservationDefinitionComponent'];
    return parts.join(', ');
  }
}
