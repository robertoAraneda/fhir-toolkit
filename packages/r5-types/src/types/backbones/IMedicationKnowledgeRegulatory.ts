import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IMedicationKnowledgeRegulatoryMaxDispense } from './IMedicationKnowledgeRegulatoryMaxDispense.js';
import type { IMedicationKnowledgeRegulatorySubstitution } from './IMedicationKnowledgeRegulatorySubstitution.js';

/**
 * MedicationKnowledgeRegulatory Interface
 * 
 * Regulatory information about a medication
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeregulatory.html
 */
export interface IMedicationKnowledgeRegulatory extends IBackboneElement {
  /**
   * Specifies the authority of the regulation
   */
  regulatoryAuthority: IReference<'Organization'>;

  /**
   * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
   */
  substitution?: IMedicationKnowledgeRegulatorySubstitution[];

  /**
   * Specifies the schedule of a medication in jurisdiction
   */
  schedule?: ICodeableConcept[];

  /**
   * The maximum number of units of the medication that can be dispensed in a period
   */
  maxDispense?: IMedicationKnowledgeRegulatoryMaxDispense;

}
