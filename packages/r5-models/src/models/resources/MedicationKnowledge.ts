import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicationKnowledge,
  IMedicationKnowledgeCost,
  IMedicationKnowledgeDefinitional,
  IMedicationKnowledgeIndicationGuideline,
  IMedicationKnowledgeMedicineClassification,
  IMedicationKnowledgeMonitoringProgram,
  IMedicationKnowledgeMonograph,
  IMedicationKnowledgePackaging,
  IMedicationKnowledgeRegulatory,
  IMedicationKnowledgeRelatedMedicationKnowledge,
  IMedicationKnowledgeStorageGuideline,
  IReference,
  MedicationKnowledgeStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledge */
const MEDICATION_KNOWLEDGE_PROPERTIES = [
  'identifier',
  'code',
  'status',
  '_status',
  'author',
  'intendedJurisdiction',
  'name',
  '_name',
  'relatedMedicationKnowledge',
  'associatedMedication',
  'productType',
  'monograph',
  'preparationInstruction',
  '_preparationInstruction',
  'cost',
  'monitoringProgram',
  'indicationGuideline',
  'medicineClassification',
  'packaging',
  'clinicalUseIssue',
  'storageGuideline',
  'regulatory',
  'definitional',
] as const;

/**
 * MedicationKnowledge - Information about a medication that is used to support knowledge.
 *
 * @see https://hl7.org/fhir/R5/medicationknowledge.html
 *
 * @example
 * const medicationKnowledge = new MedicationKnowledge({
 *   // ... properties
 * });
 */
export class MedicationKnowledge extends DomainResource implements IMedicationKnowledge {
  readonly resourceType = 'MedicationKnowledge' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for this medication */
  identifier?: IIdentifier[];

  /** Code that identifies this medication */
  code?: ICodeableConcept;

  /** active | entered-in-error | inactive */
  status?: MedicationKnowledgeStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Creator or owner of the knowledge or information about the medication */
  author?: IReference<'Organization'>;

  /** Codes that identify the different jurisdictions for which the information of this resource was created */
  intendedJurisdiction?: ICodeableConcept[];

  /** A name associated with the medication being described */
  name?: string[];

  /** Extension for name */
  _name?: IElement;

  /** Associated or related medication information */
  relatedMedicationKnowledge?: IMedicationKnowledgeRelatedMedicationKnowledge[];

  /** The set of medication resources that are associated with this medication */
  associatedMedication?: IReference<'Medication'>[];

  /** Category of the medication or product */
  productType?: ICodeableConcept[];

  /** Associated documentation about the medication */
  monograph?: IMedicationKnowledgeMonograph[];

  /** The instructions for preparing the medication */
  preparationInstruction?: string;

  /** Extension for preparationInstruction */
  _preparationInstruction?: IElement;

  /** The pricing of the medication */
  cost?: IMedicationKnowledgeCost[];

  /** Program under which a medication is reviewed */
  monitoringProgram?: IMedicationKnowledgeMonitoringProgram[];

  /** Guidelines or protocols for administration of the medication for an indication */
  indicationGuideline?: IMedicationKnowledgeIndicationGuideline[];

  /** Categorization of the medication within a formulary or classification system */
  medicineClassification?: IMedicationKnowledgeMedicineClassification[];

  /** Details about packaged medications */
  packaging?: IMedicationKnowledgePackaging[];

  /** Potential clinical issue with or between medication(s) */
  clinicalUseIssue?: IReference<'ClinicalUseDefinition'>[];

  /** How the medication should be stored */
  storageGuideline?: IMedicationKnowledgeStorageGuideline[];

  /** Regulatory information about a medication */
  regulatory?: IMedicationKnowledgeRegulatory[];

  /** Minimal definition information about the medication */
  definitional?: IMedicationKnowledgeDefinitional;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicationKnowledge>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledge from a JSON object
   */
  static fromJSON(json: IMedicationKnowledge): MedicationKnowledge {
    return new MedicationKnowledge(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledge with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledge>): MedicationKnowledge {
    return new MedicationKnowledge({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledge by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledge) => Partial<IMedicationKnowledge>): MedicationKnowledge {
    const currentData = this.toJSON();
    return new MedicationKnowledge({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledge)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledge {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_PROPERTIES);
    return result as IMedicationKnowledge;
  }

  /**
   * Create a deep clone of this MedicationKnowledge
   */
  clone(): MedicationKnowledge {
    return new MedicationKnowledge(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledge
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledge'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
