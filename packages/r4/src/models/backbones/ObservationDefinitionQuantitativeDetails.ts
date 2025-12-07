import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IObservationDefinitionQuantitativeDetails,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ObservationDefinitionQuantitativeDetails */
const OBSERVATION_DEFINITION_QUANTITATIVE_DETAILS_PROPERTIES = [
  'customaryUnit',
  'unit',
  'conversionFactor',
  '_conversionFactor',
  'decimalPrecision',
  '_decimalPrecision',
] as const;

/**
 * ObservationDefinitionQuantitativeDetails - Characteristics of quantitative results
 *
 * @see https://hl7.org/fhir/R4/observationdefinitionquantitativedetails.html
 *
 * @example
 * const observationDefinitionQuantitativeDetails = new ObservationDefinitionQuantitativeDetails({
 *   // ... properties
 * });
 */
export class ObservationDefinitionQuantitativeDetails extends BackboneElement implements IObservationDefinitionQuantitativeDetails {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Customary unit for quantitative results */
  customaryUnit?: ICodeableConcept;

  /** SI unit for quantitative results */
  unit?: ICodeableConcept;

  /** SI to Customary unit conversion factor */
  conversionFactor?: number;

  /** Extension for conversionFactor */
  _conversionFactor?: IElement;

  /** Decimal precision of observation quantitative results */
  decimalPrecision?: number;

  /** Extension for decimalPrecision */
  _decimalPrecision?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationDefinitionQuantitativeDetails>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_DEFINITION_QUANTITATIVE_DETAILS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationDefinitionQuantitativeDetails from a JSON object
   */
  static fromJSON(json: IObservationDefinitionQuantitativeDetails): ObservationDefinitionQuantitativeDetails {
    return new ObservationDefinitionQuantitativeDetails(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationDefinitionQuantitativeDetails with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationDefinitionQuantitativeDetails>): ObservationDefinitionQuantitativeDetails {
    return new ObservationDefinitionQuantitativeDetails({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationDefinitionQuantitativeDetails by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationDefinitionQuantitativeDetails) => Partial<IObservationDefinitionQuantitativeDetails>): ObservationDefinitionQuantitativeDetails {
    const currentData = this.toJSON();
    return new ObservationDefinitionQuantitativeDetails({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationDefinitionQuantitativeDetails)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationDefinitionQuantitativeDetails {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_DEFINITION_QUANTITATIVE_DETAILS_PROPERTIES);
    return result as IObservationDefinitionQuantitativeDetails;
  }

  /**
   * Create a deep clone of this ObservationDefinitionQuantitativeDetails
   */
  clone(): ObservationDefinitionQuantitativeDetails {
    return new ObservationDefinitionQuantitativeDetails(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationDefinitionQuantitativeDetails
   */
  toString(): string {
    const parts: string[] = ['ObservationDefinitionQuantitativeDetails'];
    return parts.join(', ');
  }
}
