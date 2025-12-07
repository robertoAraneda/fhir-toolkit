import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationKnowledge } from '../../models/resources/MedicationKnowledge.js';
import type {
  ICodeableConcept,
  IMedicationKnowledge,
  IMedicationKnowledgeAdministrationGuidelines,
  IMedicationKnowledgeCost,
  IMedicationKnowledgeDrugCharacteristic,
  IMedicationKnowledgeIngredient,
  IMedicationKnowledgeKinetics,
  IMedicationKnowledgeMedicineClassification,
  IMedicationKnowledgeMonitoringProgram,
  IMedicationKnowledgeMonograph,
  IMedicationKnowledgePackaging,
  IMedicationKnowledgeRegulatory,
  IMedicationKnowledgeRelatedMedicationKnowledge,
  IQuantity,
  IReference,
  MedicationKnowledgeStatusType,
} from '@fhir-toolkit/r4-types';

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
 *   .addSynonym({ ... })
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
   * active | inactive | entered-in-error
   */
  setStatus(status: MedicationKnowledgeStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set manufacturer
   * Manufacturer of the item
   */
  setManufacturer(manufacturer: IReference<'Organization'>): this {
    this.data.manufacturer = manufacturer;
    return this;
  }

  /**
   * Set doseForm
   * powder | tablets | capsule +
   */
  setDoseForm(doseForm: ICodeableConcept): this {
    this.data.doseForm = doseForm;
    return this;
  }

  /**
   * Set amount
   * Amount of drug in package
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
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
   * Set packaging
   * Details about packaged medications
   */
  setPackaging(packaging: IMedicationKnowledgePackaging): this {
    this.data.packaging = packaging;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add synonym
   * Additional names for a medication
   */
  addSynonym(synonym: string): this {
    return this.addToArray('synonym', synonym);
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
   * A medication resource that is associated with this medication
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
   * Add ingredient
   * Active or inactive ingredient
   */
  addIngredient(ingredient: IMedicationKnowledgeIngredient): this {
    return this.addToArray('ingredient', ingredient);
  }

  /**
   * Add intendedRoute
   * The intended or approved route of administration
   */
  addIntendedRoute(intendedRoute: ICodeableConcept): this {
    return this.addToArray('intendedRoute', intendedRoute);
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
   * Add administrationGuidelines
   * Guidelines for administration of the medication
   */
  addAdministrationGuidelines(administrationGuidelin: IMedicationKnowledgeAdministrationGuidelines): this {
    return this.addToArray('administrationGuidelines', administrationGuidelin);
  }

  /**
   * Add medicineClassification
   * Categorization of the medication within a formulary or classification system
   */
  addMedicineClassification(medicineClassification: IMedicationKnowledgeMedicineClassification): this {
    return this.addToArray('medicineClassification', medicineClassification);
  }

  /**
   * Add drugCharacteristic
   * Specifies descriptive properties of the medicine
   */
  addDrugCharacteristic(drugCharacteristic: IMedicationKnowledgeDrugCharacteristic): this {
    return this.addToArray('drugCharacteristic', drugCharacteristic);
  }

  /**
   * Add contraindication
   * Potential clinical issue with or between medication(s)
   */
  addContraindication(contraindication: IReference<'DetectedIssue'>): this {
    return this.addToArray('contraindication', contraindication);
  }

  /**
   * Add regulatory
   * Regulatory information about a medication
   */
  addRegulatory(regulatory: IMedicationKnowledgeRegulatory): this {
    return this.addToArray('regulatory', regulatory);
  }

  /**
   * Add kinetics
   * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
   */
  addKinetics(kinetic: IMedicationKnowledgeKinetics): this {
    return this.addToArray('kinetics', kinetic);
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
