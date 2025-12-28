import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IImmunizationProtocolApplied,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImmunizationProtocolApplied */
const IMMUNIZATION_PROTOCOL_APPLIED_PROPERTIES = [
  'series',
  '_series',
  'authority',
  'targetDisease',
  'doseNumber',
  '_doseNumber',
  'seriesDoses',
  '_seriesDoses',
] as const;

/**
 * ImmunizationProtocolApplied - Protocol followed by the provider
 *
 * @see https://hl7.org/fhir/R5/immunizationprotocolapplied.html
 *
 * @example
 * const immunizationProtocolApplied = new ImmunizationProtocolApplied({
 *   // ... properties
 * });
 */
export class ImmunizationProtocolApplied extends BackboneElement implements IImmunizationProtocolApplied {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of vaccine series */
  series?: string;

  /** Extension for series */
  _series?: IElement;

  /** Who is responsible for publishing the recommendations */
  authority?: IReference<'Organization'>;

  /** Vaccine preventatable disease being targeted */
  targetDisease?: ICodeableConcept[];

  /** Dose number within series */
  doseNumber: string;

  /** Extension for doseNumber */
  _doseNumber?: IElement;

  /** Recommended number of doses for immunity */
  seriesDoses?: string;

  /** Extension for seriesDoses */
  _seriesDoses?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationProtocolApplied>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_PROTOCOL_APPLIED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationProtocolApplied from a JSON object
   */
  static fromJSON(json: IImmunizationProtocolApplied): ImmunizationProtocolApplied {
    return new ImmunizationProtocolApplied(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationProtocolApplied with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationProtocolApplied>): ImmunizationProtocolApplied {
    return new ImmunizationProtocolApplied({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationProtocolApplied by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationProtocolApplied) => Partial<IImmunizationProtocolApplied>): ImmunizationProtocolApplied {
    const currentData = this.toJSON();
    return new ImmunizationProtocolApplied({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationProtocolApplied)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationProtocolApplied {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_PROTOCOL_APPLIED_PROPERTIES);
    return result as IImmunizationProtocolApplied;
  }

  /**
   * Create a deep clone of this ImmunizationProtocolApplied
   */
  clone(): ImmunizationProtocolApplied {
    return new ImmunizationProtocolApplied(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationProtocolApplied
   */
  toString(): string {
    const parts: string[] = ['ImmunizationProtocolApplied'];
    return parts.join(', ');
  }
}
