import type { IBackboneElement, IElement } from '../../base/index.js';
import type { RepositoryTypeType } from '../../valuesets/index.js';

/**
 * MolecularSequenceRepository Interface
 * 
 * External repository which contains detailed report related with observedSeq in this resource
 * 
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencerepository.html
 */
export interface IMolecularSequenceRepository extends IBackboneElement {
  /**
   * directlink | openapi | login | oauth | other
   */
  type: RepositoryTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * URI of the repository
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Repository's name
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Id of the dataset that used to call for dataset in repository
   */
  datasetId?: string;
  /**
   * Extension for datasetId
   */
  _datasetId?: IElement;

  /**
   * Id of the variantset that used to call for variantset in repository
   */
  variantsetId?: string;
  /**
   * Extension for variantsetId
   */
  _variantsetId?: IElement;

  /**
   * Id of the read
   */
  readsetId?: string;
  /**
   * Extension for readsetId
   */
  _readsetId?: IElement;

}
