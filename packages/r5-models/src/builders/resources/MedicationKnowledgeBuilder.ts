import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationKnowledge } from '../../models/resources/MedicationKnowledge.js';
import type {
  ICodeableConcept,
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

/**
 * MedicationKnowledgeBuilder - Fluent builder for MedicationKnowledge resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledge = new MedicationKnowledgeBuilder()
 *   .setId('123')
 *   .setCode(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationKnowledgeBuilder extends DomainResourceBuilder<MedicationKnowledge, IMedicationKnowledge> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code that identifies this medication
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * active | entered-in-error | inactive
   */
  setStatus(status: MedicationKnowledgeStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set author
   * Creator or owner of the knowledge or information about the medication
   */
  setAuthor(author: IReference<'Organization'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set preparationInstruction
   * The instructions for preparing the medication
   */
  setPreparationInstruction(preparationInstruction: string): this {
    this.data.preparationInstruction = preparationInstruction;
    return this;
  }

  /**
   * Set definitional
   * Minimal definition information about the medication
   */
  setDefinitional(definitional: IMedicationKnowledgeDefinitional): this {
    this.data.definitional = definitional;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier for this medication
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add intendedJurisdiction
   * Codes that identify the different jurisdictions for which the information of this resource was created
   */
  addIntendedJurisdiction(intendedJurisdiction: ICodeableConcept): this {
    return this.addToArray('intendedJurisdiction', intendedJurisdiction);
  }

  /**
   * Add name
   * A name associated with the medication being described
   */
  addName(name: string): this {
    return this.addToArray('name', name);
  }

  /**
   * Add relatedMedicationKnowledge
   * Associated or related medication information
   */
  addRelatedMedicationKnowledge(relatedMedicationKnowledge: IMedicationKnowledgeRelatedMedicationKnowledge): this {
    return this.addToArray('relatedMedicationKnowledge', relatedMedicationKnowledge);
  }

  /**
   * Add associatedMedication
   * The set of medication resources that are associated with this medication
   */
  addAssociatedMedication(associatedMedication: IReference<'Medication'>): this {
    return this.addToArray('associatedMedication', associatedMedication);
  }

  /**
   * Add productType
   * Category of the medication or product
   */
  addProductType(productType: ICodeableConcept): this {
    return this.addToArray('productType', productType);
  }

  /**
   * Add monograph
   * Associated documentation about the medication
   */
  addMonograph(monograph: IMedicationKnowledgeMonograph): this {
    return this.addToArray('monograph', monograph);
  }

  /**
   * Add cost
   * The pricing of the medication
   */
  addCost(cost: IMedicationKnowledgeCost): this {
    return this.addToArray('cost', cost);
  }

  /**
   * Add monitoringProgram
   * Program under which a medication is reviewed
   */
  addMonitoringProgram(monitoringProgram: IMedicationKnowledgeMonitoringProgram): this {
    return this.addToArray('monitoringProgram', monitoringProgram);
  }

  /**
   * Add indicationGuideline
   * Guidelines or protocols for administration of the medication for an indication
   */
  addIndicationGuideline(indicationGuideline: IMedicationKnowledgeIndicationGuideline): this {
    return this.addToArray('indicationGuideline', indicationGuideline);
  }

  /**
   * Add medicineClassification
   * Categorization of the medication within a formulary or classification system
   */
  addMedicineClassification(medicineClassification: IMedicationKnowledgeMedicineClassification): this {
    return this.addToArray('medicineClassification', medicineClassification);
  }

  /**
   * Add packaging
   * Details about packaged medications
   */
  addPackaging(packaging: IMedicationKnowledgePackaging): this {
    return this.addToArray('packaging', packaging);
  }

  /**
   * Add clinicalUseIssue
   * Potential clinical issue with or between medication(s)
   */
  addClinicalUseIssue(clinicalUseIssue: IReference<'ClinicalUseDefinition'>): this {
    return this.addToArray('clinicalUseIssue', clinicalUseIssue);
  }

  /**
   * Add storageGuideline
   * How the medication should be stored
   */
  addStorageGuideline(storageGuideline: IMedicationKnowledgeStorageGuideline): this {
    return this.addToArray('storageGuideline', storageGuideline);
  }

  /**
   * Add regulatory
   * Regulatory information about a medication
   */
  addRegulatory(regulatory: IMedicationKnowledgeRegulatory): this {
    return this.addToArray('regulatory', regulatory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledge instance
   */
  build(): MedicationKnowledge {
    return new MedicationKnowledge(this.data);
  }

  /**
   * Build and validate the MedicationKnowledge instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledge> {
    const medicationKnowledge = this.build();
    await medicationKnowledge.validateOrThrow();
    return medicationKnowledge;
  }
}
