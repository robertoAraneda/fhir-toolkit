import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDuration,
  IElement,
  IMedicationRequestDispenseRequest,
  IMedicationRequestDispenseRequestInitialFill,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationRequestDispenseRequest */
const MEDICATION_REQUEST_DISPENSE_REQUEST_PROPERTIES = [
  'initialFill',
  'dispenseInterval',
  'validityPeriod',
  'numberOfRepeatsAllowed',
  '_numberOfRepeatsAllowed',
  'quantity',
  'expectedSupplyDuration',
  'dispenser',
  'dispenserInstruction',
  'doseAdministrationAid',
] as const;

/**
 * MedicationRequestDispenseRequest - Medication supply authorization
 *
 * @see https://hl7.org/fhir/R5/medicationrequestdispenserequest.html
 *
 * @example
 * const medicationRequestDispenseRequest = new MedicationRequestDispenseRequest({
 *   // ... properties
 * });
 */
export class MedicationRequestDispenseRequest extends BackboneElement implements IMedicationRequestDispenseRequest {

  // ============================================================================
  // Properties
  // ============================================================================

  /** First fill details */
  initialFill?: IMedicationRequestDispenseRequestInitialFill;

  /** Minimum period of time between dispenses */
  dispenseInterval?: IDuration;

  /** Time period supply is authorized for */
  validityPeriod?: IPeriod;

  /** Number of refills authorized */
  numberOfRepeatsAllowed?: number;

  /** Extension for numberOfRepeatsAllowed */
  _numberOfRepeatsAllowed?: IElement;

  /** Amount of medication to supply per dispense */
  quantity?: IQuantity;

  /** Number of days supply per dispense */
  expectedSupplyDuration?: IDuration;

  /** Intended performer of dispense */
  dispenser?: IReference<'Organization'>;

  /** Additional information for the dispenser */
  dispenserInstruction?: IAnnotation[];

  /** Type of adherence packaging to use for the dispense */
  doseAdministrationAid?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationRequestDispenseRequest>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_REQUEST_DISPENSE_REQUEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationRequestDispenseRequest from a JSON object
   */
  static fromJSON(json: IMedicationRequestDispenseRequest): MedicationRequestDispenseRequest {
    return new MedicationRequestDispenseRequest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationRequestDispenseRequest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationRequestDispenseRequest>): MedicationRequestDispenseRequest {
    return new MedicationRequestDispenseRequest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationRequestDispenseRequest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationRequestDispenseRequest) => Partial<IMedicationRequestDispenseRequest>): MedicationRequestDispenseRequest {
    const currentData = this.toJSON();
    return new MedicationRequestDispenseRequest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationRequestDispenseRequest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationRequestDispenseRequest {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_REQUEST_DISPENSE_REQUEST_PROPERTIES);
    return result as IMedicationRequestDispenseRequest;
  }

  /**
   * Create a deep clone of this MedicationRequestDispenseRequest
   */
  clone(): MedicationRequestDispenseRequest {
    return new MedicationRequestDispenseRequest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationRequestDispenseRequest
   */
  toString(): string {
    const parts: string[] = ['MedicationRequestDispenseRequest'];
    return parts.join(', ');
  }
}
