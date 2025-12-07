import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionContraindication,
  IClinicalUseDefinitionContraindicationOtherTherapy,
  ICodeableReference,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClinicalUseDefinitionContraindication */
const CLINICAL_USE_DEFINITION_CONTRAINDICATION_PROPERTIES = [
  'diseaseSymptomProcedure',
  'diseaseStatus',
  'comorbidity',
  'indication',
  'otherTherapy',
] as const;

/**
 * ClinicalUseDefinitionContraindication - Specifics for when this is a contraindication
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitioncontraindication.html
 *
 * @example
 * const clinicalUseDefinitionContraindication = new ClinicalUseDefinitionContraindication({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionContraindication extends BackboneElement implements IClinicalUseDefinitionContraindication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The situation that is being documented as contraindicating against this item */
  diseaseSymptomProcedure?: ICodeableReference;

  /** The status of the disease or symptom for the contraindication */
  diseaseStatus?: ICodeableReference;

  /** A comorbidity (concurrent condition) or coinfection */
  comorbidity?: ICodeableReference[];

  /** The indication which this is a contraidication for */
  indication?: IReference<'ClinicalUseDefinition'>[];

  /** Information about use of the product in relation to other therapies described as part of the contraindication */
  otherTherapy?: IClinicalUseDefinitionContraindicationOtherTherapy[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionContraindication>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_CONTRAINDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionContraindication from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionContraindication): ClinicalUseDefinitionContraindication {
    return new ClinicalUseDefinitionContraindication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionContraindication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionContraindication>): ClinicalUseDefinitionContraindication {
    return new ClinicalUseDefinitionContraindication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionContraindication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionContraindication) => Partial<IClinicalUseDefinitionContraindication>): ClinicalUseDefinitionContraindication {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionContraindication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionContraindication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionContraindication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_CONTRAINDICATION_PROPERTIES);
    return result as IClinicalUseDefinitionContraindication;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionContraindication
   */
  clone(): ClinicalUseDefinitionContraindication {
    return new ClinicalUseDefinitionContraindication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionContraindication
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionContraindication'];
    return parts.join(', ');
  }
}
