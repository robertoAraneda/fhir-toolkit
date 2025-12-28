import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * ResearchStudyAssociatedParty Interface
 * 
 * Sponsors, collaborators, and other parties
 * 
 *
 * @see https://hl7.org/fhir/R5/researchstudyassociatedparty.html
 */
export interface IResearchStudyAssociatedParty extends IBackboneElement {
  /**
   * Name of associated party
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair
   */
  role: ICodeableConcept;

  /**
   * When active in the role
   */
  period?: IPeriod[];

  /**
   * nih | fda | government | nonprofit | academic | industry
   */
  classifier?: ICodeableConcept[];

  /**
   * Individual or organization associated with study (use practitionerRole to specify their organisation)
   */
  party?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
