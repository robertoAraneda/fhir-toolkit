import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IStructureMapGroupInput } from './IStructureMapGroupInput.js';
import type { IStructureMapGroupRule } from './IStructureMapGroupRule.js';
import type { StructureMapGroupTypeModeType } from '../../valuesets/index.js';

/**
 * StructureMapGroup Interface
 * 
 * Named sections for reader convenience
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuremapgroup.html
 */
export interface IStructureMapGroup extends IBackboneElement {
  /**
   * Human-readable label
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Another group that this group adds rules to
   */
  extends?: string;
  /**
   * Extension for extends
   */
  _extends?: IElement;

  /**
   * none | types | type-and-types
   */
  typeMode: StructureMapGroupTypeModeType;
  /**
   * Extension for typeMode
   */
  _typeMode?: IElement;

  /**
   * Additional description/explanation for group
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Named instance provided when invoking the map
   */
  input: IStructureMapGroupInput[];

  /**
   * Transform Rule from source to target
   */
  rule: IStructureMapGroupRule[];

}
