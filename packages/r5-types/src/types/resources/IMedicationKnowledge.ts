import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMedicationKnowledgeCost } from '../backbones/IMedicationKnowledgeCost.js';
import type { IMedicationKnowledgeDefinitional } from '../backbones/IMedicationKnowledgeDefinitional.js';
import type { IMedicationKnowledgeIndicationGuideline } from '../backbones/IMedicationKnowledgeIndicationGuideline.js';
import type { IMedicationKnowledgeMedicineClassification } from '../backbones/IMedicationKnowledgeMedicineClassification.js';
import type { IMedicationKnowledgeMonitoringProgram } from '../backbones/IMedicationKnowledgeMonitoringProgram.js';
import type { IMedicationKnowledgeMonograph } from '../backbones/IMedicationKnowledgeMonograph.js';
import type { IMedicationKnowledgePackaging } from '../backbones/IMedicationKnowledgePackaging.js';
import type { IMedicationKnowledgeRegulatory } from '../backbones/IMedicationKnowledgeRegulatory.js';
import type { IMedicationKnowledgeRelatedMedicationKnowledge } from '../backbones/IMedicationKnowledgeRelatedMedicationKnowledge.js';
import type { IMedicationKnowledgeStorageGuideline } from '../backbones/IMedicationKnowledgeStorageGuideline.js';
import type { MedicationKnowledgeStatusType } from '../../valuesets/index.js';

/**
 * MedicationKnowledge Interface
 * 
 * Information about a medication that is used to support knowledge.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledge.html
 */
export interface IMedicationKnowledge extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationKnowledge';

  /**
   * Business identifier for this medication
   */
  identifier?: IIdentifier[];

  /**
   * Code that identifies this medication
   */
  code?: ICodeableConcept;

  /**
   * active | entered-in-error | inactive
   */
  status?: MedicationKnowledgeStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Creator or owner of the knowledge or information about the medication
   */
  author?: IReference<'Organization'>;

  /**
   * Codes that identify the different jurisdictions for which the information of this resource was created
   */
  intendedJurisdiction?: ICodeableConcept[];

  /**
   * A name associated with the medication being described
   */
  name?: string[];
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Associated or related medication information
   */
  relatedMedicationKnowledge?: IMedicationKnowledgeRelatedMedicationKnowledge[];

  /**
   * The set of medication resources that are associated with this medication
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
   * The instructions for preparing the medication
   */
  preparationInstruction?: string;
  /**
   * Extension for preparationInstruction
   */
  _preparationInstruction?: IElement;

  /**
   * The pricing of the medication
   */
  cost?: IMedicationKnowledgeCost[];

  /**
   * Program under which a medication is reviewed
   */
  monitoringProgram?: IMedicationKnowledgeMonitoringProgram[];

  /**
   * Guidelines or protocols for administration of the medication for an indication
   */
  indicationGuideline?: IMedicationKnowledgeIndicationGuideline[];

  /**
   * Categorization of the medication within a formulary or classification system
   */
  medicineClassification?: IMedicationKnowledgeMedicineClassification[];

  /**
   * Details about packaged medications
   */
  packaging?: IMedicationKnowledgePackaging[];

  /**
   * Potential clinical issue with or between medication(s)
   */
  clinicalUseIssue?: IReference<'ClinicalUseDefinition'>[];

  /**
   * How the medication should be stored
   */
  storageGuideline?: IMedicationKnowledgeStorageGuideline[];

  /**
   * Regulatory information about a medication
   */
  regulatory?: IMedicationKnowledgeRegulatory[];

  /**
   * Minimal definition information about the medication
   */
  definitional?: IMedicationKnowledgeDefinitional;

}
