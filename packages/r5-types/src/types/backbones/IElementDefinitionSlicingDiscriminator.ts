import type { IElement } from '../../base/index.js';
import type { DiscriminatorTypeType } from '../../valuesets/index.js';

/**
 * ElementDefinitionSlicingDiscriminator Interface
 * 
 * Element values that are used to distinguish the slices
 * 
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionslicingdiscriminator.html
 */
export interface IElementDefinitionSlicingDiscriminator extends IElement {
  /**
   * value | exists | type | profile | position
   */
  type: DiscriminatorTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Path to element value
   */
  path: string;
  /**
   * Extension for path
   */
  _path?: IElement;

}
