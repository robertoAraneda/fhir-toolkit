import { DomainResource } from '../base/DomainResource.js';
import type {
  ClinicalUseDefinitionTypeType,
  IClinicalUseDefinition,
  IClinicalUseDefinitionContraindication,
  IClinicalUseDefinitionIndication,
  IClinicalUseDefinitionInteraction,
  IClinicalUseDefinitionUndesirableEffect,
  IClinicalUseDefinitionWarning,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClinicalUseDefinition */
const CLINICAL_USE_DEFINITION_PROPERTIES = [
  'identifier',
  'type',
  '_type',
  'category',
  'subject',
  'status',
  'contraindication',
  'indication',
  'interaction',
  'population',
  'library',
  '_library',
  'undesirableEffect',
  'warning',
] as const;

/**
 * ClinicalUseDefinition - A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinition.html
 *
 * @example
 * const clinicalUseDefinition = new ClinicalUseDefinition({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinition extends DomainResource implements IClinicalUseDefinition {
  readonly resourceType = 'ClinicalUseDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this issue */
  identifier?: IIdentifier[];

  /** indication | contraindication | interaction | undesirable-effect | warning */
  type: ClinicalUseDefinitionTypeType;

  /** Extension for type */
  _type?: IElement;

  /** A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose" */
  category?: ICodeableConcept[];

  /** The medication, product, substance, device, procedure etc. for which this is an indication */
  subject?: IReference<'MedicinalProductDefinition' | 'Medication' | 'ActivityDefinition' | 'PlanDefinition' | 'Device' | 'DeviceDefinition' | 'Substance' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>[];

  /** Whether this is a current issue or one that has been retired etc */
  status?: ICodeableConcept;

  /** Specifics for when this is a contraindication */
  contraindication?: IClinicalUseDefinitionContraindication;

  /** Specifics for when this is an indication */
  indication?: IClinicalUseDefinitionIndication;

  /** Specifics for when this is an interaction */
  interaction?: IClinicalUseDefinitionInteraction;

  /** The population group to which this applies */
  population?: IReference<'Group'>[];

  /** Logic used by the clinical use definition */
  library?: string[];

  /** Extension for library */
  _library?: IElement;

  /** A possible negative outcome from the use of this treatment */
  undesirableEffect?: IClinicalUseDefinitionUndesirableEffect;

  /** Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness' */
  warning?: IClinicalUseDefinitionWarning;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IClinicalUseDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinition from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinition): ClinicalUseDefinition {
    return new ClinicalUseDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinition>): ClinicalUseDefinition {
    return new ClinicalUseDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinition) => Partial<IClinicalUseDefinition>): ClinicalUseDefinition {
    const currentData = this.toJSON();
    return new ClinicalUseDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_PROPERTIES);
    return result as IClinicalUseDefinition;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinition
   */
  clone(): ClinicalUseDefinition {
    return new ClinicalUseDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinition
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
