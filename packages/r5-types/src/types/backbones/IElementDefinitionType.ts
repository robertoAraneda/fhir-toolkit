import type { IElement } from '../../base/index.js';
import type { AggregationModeType, ReferenceVersionRulesType } from '../../valuesets/index.js';

/**
 * ElementDefinitionType Interface
 * 
 * Data type and Profile for this element
 * 
 *
 * @see https://hl7.org/fhir/R5/elementdefinitiontype.html
 */
export interface IElementDefinitionType extends IElement {
  /**
   * Data type or Resource (reference to definition)
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Profiles (StructureDefinition or IG) - one must apply
   */
  profile?: string[];
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply
   */
  targetProfile?: string[];
  /**
   * Extension for targetProfile
   */
  _targetProfile?: IElement;

  /**
   * contained | referenced | bundled - how aggregated
   */
  aggregation?: AggregationModeType[];
  /**
   * Extension for aggregation
   */
  _aggregation?: IElement;

  /**
   * either | independent | specific
   */
  versioning?: ReferenceVersionRulesType;
  /**
   * Extension for versioning
   */
  _versioning?: IElement;

}
