import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionContraindicationOtherTherapy,
  IClinicalUseDefinitionIndication,
  ICodeableReference,
  IElement,
  IRange,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClinicalUseDefinitionIndication */
const CLINICAL_USE_DEFINITION_INDICATION_PROPERTIES = [
  'diseaseSymptomProcedure',
  'diseaseStatus',
  'comorbidity',
  'intendedEffect',
  'durationRange',
  'durationString',
  '_durationString',
  'undesirableEffect',
  'otherTherapy',
] as const;

/**
 * ClinicalUseDefinitionIndication - Specifics for when this is an indication
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitionindication.html
 *
 * @example
 * const clinicalUseDefinitionIndication = new ClinicalUseDefinitionIndication({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionIndication extends BackboneElement implements IClinicalUseDefinitionIndication {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The situation that is being documented as an indicaton for this item */
  diseaseSymptomProcedure?: ICodeableReference;

  /** The status of the disease or symptom for the indication */
  diseaseStatus?: ICodeableReference;

  /** A comorbidity or coinfection as part of the indication */
  comorbidity?: ICodeableReference[];

  /** The intended effect, aim or strategy to be achieved */
  intendedEffect?: ICodeableReference;

  /** Timing or duration information */
  durationRange?: IRange;

  /** Timing or duration information */
  durationString?: string;

  /** Extension for durationString */
  _durationString?: IElement;

  /** An unwanted side effect or negative outcome of the subject of this resource when being used for this indication */
  undesirableEffect?: IReference<'ClinicalUseDefinition'>[];

  /** The use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: IClinicalUseDefinitionContraindicationOtherTherapy[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionIndication>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_INDICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionIndication from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionIndication): ClinicalUseDefinitionIndication {
    return new ClinicalUseDefinitionIndication(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionIndication with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionIndication>): ClinicalUseDefinitionIndication {
    return new ClinicalUseDefinitionIndication({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionIndication by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionIndication) => Partial<IClinicalUseDefinitionIndication>): ClinicalUseDefinitionIndication {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionIndication({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionIndication)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionIndication {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_INDICATION_PROPERTIES);
    return result as IClinicalUseDefinitionIndication;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionIndication
   */
  clone(): ClinicalUseDefinitionIndication {
    return new ClinicalUseDefinitionIndication(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionIndication
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionIndication'];
    return parts.join(', ');
  }
}
