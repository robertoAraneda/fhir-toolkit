import type { IDomainResource, IElement } from '../../base/index.js';
import type { ISubstanceReferenceInformationClassification } from '../backbones/ISubstanceReferenceInformationClassification.js';
import type { ISubstanceReferenceInformationGene } from '../backbones/ISubstanceReferenceInformationGene.js';
import type { ISubstanceReferenceInformationGeneElement } from '../backbones/ISubstanceReferenceInformationGeneElement.js';
import type { ISubstanceReferenceInformationTarget } from '../backbones/ISubstanceReferenceInformationTarget.js';

/**
 * SubstanceReferenceInformation Interface
 * 
 * Todo.
 * 
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformation.html
 */
export interface ISubstanceReferenceInformation extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'SubstanceReferenceInformation';

  /**
   * Todo
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Todo
   */
  gene?: ISubstanceReferenceInformationGene[];

  /**
   * Todo
   */
  geneElement?: ISubstanceReferenceInformationGeneElement[];

  /**
   * Todo
   */
  classification?: ISubstanceReferenceInformationClassification[];

  /**
   * Todo
   */
  target?: ISubstanceReferenceInformationTarget[];

}
