import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMedicationKnowledgeAdministrationGuidelines } from '../backbones/IMedicationKnowledgeAdministrationGuidelines.js';
import type { IMedicationKnowledgeCost } from '../backbones/IMedicationKnowledgeCost.js';
import type { IMedicationKnowledgeDrugCharacteristic } from '../backbones/IMedicationKnowledgeDrugCharacteristic.js';
import type { IMedicationKnowledgeIngredient } from '../backbones/IMedicationKnowledgeIngredient.js';
import type { IMedicationKnowledgeKinetics } from '../backbones/IMedicationKnowledgeKinetics.js';
import type { IMedicationKnowledgeMedicineClassification } from '../backbones/IMedicationKnowledgeMedicineClassification.js';
import type { IMedicationKnowledgeMonitoringProgram } from '../backbones/IMedicationKnowledgeMonitoringProgram.js';
import type { IMedicationKnowledgeMonograph } from '../backbones/IMedicationKnowledgeMonograph.js';
import type { IMedicationKnowledgePackaging } from '../backbones/IMedicationKnowledgePackaging.js';
import type { IMedicationKnowledgeRegulatory } from '../backbones/IMedicationKnowledgeRegulatory.js';
import type { IMedicationKnowledgeRelatedMedicationKnowledge } from '../backbones/IMedicationKnowledgeRelatedMedicationKnowledge.js';
import type { MedicationKnowledgeStatusType } from '../../valuesets/index.js';

/**
 * MedicationKnowledge Interface
 * 
 * Information about a medication that is used to support knowledge.
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledge.html
 */
export interface IMedicationKnowledge extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationKnowledge';

  /**
   * Code that identifies this medication
   */
  code?: ICodeableConcept;

  /**
   * active | inactive | entered-in-error
   */
  status?: MedicationKnowledgeStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Manufacturer of the item
   */
  manufacturer?: IReference<'Organization'>;

  /**
   * powder | tablets | capsule +
   */
  doseForm?: ICodeableConcept;

  /**
   * Amount of drug in package
   */
  amount?: IQuantity;

  /**
   * Additional names for a medication
   */
  synonym?: string[];
  /**
   * Extension for synonym
   */
  _synonym?: IElement;

  /**
   * Associated or related medication information
   */
  relatedMedicationKnowledge?: IMedicationKnowledgeRelatedMedicationKnowledge[];

  /**
   * A medication resource that is associated with this medication
   */
  associatedMedication?: IReference<'Medication'>[];

  /**
   * Category of the medication or product
   */
  productType?: ICodeableConcept[];

  /**
   * Associated documentation about the medication
   */
  monograph?: IMedicationKnowledgeMonograph[];

  /**
   * Active or inactive ingredient
   */
  ingredient?: IMedicationKnowledgeIngredient[];

  /**
   * The instructions for preparing the medication
   */
  preparationInstruction?: string;
  /**
   * Extension for preparationInstruction
   */
  _preparationInstruction?: IElement;

  /**
   * The intended or approved route of administration
   */
  intendedRoute?: ICodeableConcept[];

  /**
   * The pricing of the medication
   */
  cost?: IMedicationKnowledgeCost[];

  /**
   * Program under which a medication is reviewed
   */
  monitoringProgram?: IMedicationKnowledgeMonitoringProgram[];

  /**
   * Guidelines for administration of the medication
   */
  administrationGuidelines?: IMedicationKnowledgeAdministrationGuidelines[];

  /**
   * Categorization of the medication within a formulary or classification system
   */
  medicineClassification?: IMedicationKnowledgeMedicineClassification[];

  /**
   * Details about packaged medications
   */
  packaging?: IMedicationKnowledgePackaging;

  /**
   * Specifies descriptive properties of the medicine
   */
  drugCharacteristic?: IMedicationKnowledgeDrugCharacteristic[];

  /**
   * Potential clinical issue with or between medication(s)
   */
  contraindication?: IReference<'DetectedIssue'>[];

  /**
   * Regulatory information about a medication
   */
  regulatory?: IMedicationKnowledgeRegulatory[];

  /**
   * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
   */
  kinetics?: IMedicationKnowledgeKinetics[];

}
