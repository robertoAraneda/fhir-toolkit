import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ContractResourcePublicationStatusType } from '../../valuesets/index.js';

/**
 * ContractContentDefinition Interface
 * 
 * Contract precursor content
 * 
 *
 * @see https://hl7.org/fhir/R4/contractcontentdefinition.html
 */
export interface IContractContentDefinition extends IBackboneElement {
  /**
   * Content structure and use
   */
  type: ICodeableConcept;

  /**
   * Detailed Content Type Definition
   */
  subType?: ICodeableConcept;

  /**
   * Publisher Entity
   */
  publisher?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * When published
   */
  publicationDate?: string;
  /**
   * Extension for publicationDate
   */
  _publicationDate?: IElement;

  /**
   * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated
   */
  publicationStatus: ContractResourcePublicationStatusType;
  /**
   * Extension for publicationStatus
   */
  _publicationStatus?: IElement;

  /**
   * Publication Ownership
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

}
