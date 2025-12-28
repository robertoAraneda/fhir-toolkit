import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * DocumentReferenceContext Interface
 * 
 * Clinical context of document
 * 
 *
 * @see https://hl7.org/fhir/R4B/documentreferencecontext.html
 */
export interface IDocumentReferenceContext extends IBackboneElement {
  /**
   * Context of the document  content
   */
  encounter?: IReference<'Encounter' | 'EpisodeOfCare'>[];

  /**
   * Main clinical acts documented
   */
  event?: ICodeableConcept[];

  /**
   * Time of service that is being documented
   */
  period?: IPeriod;

  /**
   * Kind of facility where patient was seen
   */
  facilityType?: ICodeableConcept;

  /**
   * Additional details about where the content was created (e.g. clinical specialty)
   */
  practiceSetting?: ICodeableConcept;

  /**
   * Patient demographics from source
   */
  sourcePatientInfo?: IReference<'Patient'>;

  /**
   * Related identifiers or resources
   */
  related?: IReference<'Resource'>[];

}
