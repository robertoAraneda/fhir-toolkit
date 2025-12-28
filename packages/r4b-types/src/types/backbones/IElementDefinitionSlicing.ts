import type { IElement } from '../../base/index.js';
import type { IElementDefinitionSlicingDiscriminator } from './IElementDefinitionSlicingDiscriminator.js';
import type { SlicingRulesType } from '../../valuesets/index.js';

/**
 * ElementDefinitionSlicing Interface
 * 
 * This element is sliced - slices follow
 * 
 *
 * @see https://hl7.org/fhir/R4B/elementdefinitionslicing.html
 */
export interface IElementDefinitionSlicing extends IElement {
  /**
   * Element values that are used to distinguish the slices
   */
  discriminator?: IElementDefinitionSlicingDiscriminator[];

  /**
   * Text description of how slicing works (or not)
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * If elements must be in same order as slices
   */
  ordered?: boolean;
  /**
   * Extension for ordered
   */
  _ordered?: IElement;

  /**
   * closed | open | openAtEnd
   */
  rules: SlicingRulesType;
  /**
   * Extension for rules
   */
  _rules?: IElement;

}
