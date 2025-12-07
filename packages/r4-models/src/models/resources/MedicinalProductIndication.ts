import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IMedicinalProductIndication,
  IMedicinalProductIndicationOtherTherapy,
  IPopulation,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIndication */
const MEDICINAL_PRODUCT_INDICATION_PROPERTIES = [
  'subject',
  'diseaseSymptomProcedure',
  'diseaseStatus',
  'comorbidity',
  'intendedEffect',
  'duration',
  'otherTherapy',
  'undesirableEffect',
  'population',
] as const;

/**
 * MedicinalProductIndication - Indication for the Medicinal Product.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductindication.html
 *
 * @example
 * const medicinalProductIndication = new MedicinalProductIndication({
 *   // ... properties
 * });
 */
export class MedicinalProductIndication extends DomainResource implements IMedicinalProductIndication {
  readonly resourceType = 'MedicinalProductIndication' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The medication for which this is an indication */
  subject?: IReference<'MedicinalProduct' | 'Medication'>[];

  /** The disease, symptom or procedure that is the indication for treatment */
  diseaseSymptomProcedure?: ICodeableConcept;

  /** The status of the disease or symptom for which the indication applies */
  diseaseStatus?: ICodeableConcept;

  /** Comorbidity (concurrent condition) or co-infection as part of the indication */
  comorbidity?: ICodeableConcept[];

  /** The intended effect, aim or strategy to be achieved by the indication */
  intendedEffect?: ICodeableConcept;

  /** Timing or duration information as part of the indication */
  duration?: IQuantity;

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: IMedicinalProductIndicationOtherTherapy[];

  /** Describe the undesirable effects of the medicinal product */
  undesirableEffect?: IReference<'MedicinalProductUndesirableEffect'>[];

  /** The population group to which this applies */
  population?: IPopulation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicinalProductIndication>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIndication from a JSON object
   */
  static fromJSON(json: IMedicinalProductIndication): MedicinalProductIndication {
    return new MedicinalProductIndication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIndication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIndication>): MedicinalProductIndication {
    return new MedicinalProductIndication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIndication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIndication) => Partial<IMedicinalProductIndication>): MedicinalProductIndication {
    const currentData = this.toJSON();
    return new MedicinalProductIndication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIndication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIndication {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INDICATION_PROPERTIES);
    return result as IMedicinalProductIndication;
  }

  /**
   * Create a deep clone of this MedicinalProductIndication
   */
  clone(): MedicinalProductIndication {
    return new MedicinalProductIndication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIndication
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIndication'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
