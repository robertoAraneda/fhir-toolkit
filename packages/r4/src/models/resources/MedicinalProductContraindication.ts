import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IMedicinalProductContraindication,
  IMedicinalProductContraindicationOtherTherapy,
  IPopulation,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductContraindication */
const MEDICINAL_PRODUCT_CONTRAINDICATION_PROPERTIES = [
  'subject',
  'disease',
  'diseaseStatus',
  'comorbidity',
  'therapeuticIndication',
  'otherTherapy',
  'population',
] as const;

/**
 * MedicinalProductContraindication - The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductcontraindication.html
 *
 * @example
 * const medicinalProductContraindication = new MedicinalProductContraindication({
 *   resourceType: 'MedicinalProductContraindication',
 *   // ... properties
 * });
 */
export class MedicinalProductContraindication extends DomainResource implements IMedicinalProductContraindication {
  readonly resourceType = 'MedicinalProductContraindication' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The medication for which this is an indication */
  subject?: IReference<'MedicinalProduct' | 'Medication'>[];

  /** The disease, symptom or procedure for the contraindication */
  disease?: ICodeableConcept;

  /** The status of the disease or symptom for the contraindication */
  diseaseStatus?: ICodeableConcept;

  /** A comorbidity (concurrent condition) or coinfection */
  comorbidity?: ICodeableConcept[];

  /** Information about the use of the medicinal product in relation to other therapies as part of the indication */
  therapeuticIndication?: IReference<'MedicinalProductIndication'>[];

  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: IMedicinalProductContraindicationOtherTherapy[];

  /** The population group to which this applies */
  population?: IPopulation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductContraindication>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_CONTRAINDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductContraindication from a JSON object
   */
  static fromJSON(json: IMedicinalProductContraindication): MedicinalProductContraindication {
    return new MedicinalProductContraindication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductContraindication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductContraindication>): MedicinalProductContraindication {
    return new MedicinalProductContraindication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductContraindication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductContraindication) => Partial<IMedicinalProductContraindication>): MedicinalProductContraindication {
    const currentData = this.toJSON();
    return new MedicinalProductContraindication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductContraindication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductContraindication {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_CONTRAINDICATION_PROPERTIES);
    return result as IMedicinalProductContraindication;
  }

  /**
   * Create a deep clone of this MedicinalProductContraindication
   */
  clone(): MedicinalProductContraindication {
    return new MedicinalProductContraindication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductContraindication
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductContraindication'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
