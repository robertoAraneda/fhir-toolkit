import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ExtensionContextTypeType } from '../../valuesets/index.js';

/**
 * StructureDefinitionContext Interface
 * 
 * If an extension, where it can be used in instances
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuredefinitioncontext.html
 */
export interface IStructureDefinitionContext extends IBackboneElement {
  /**
   * fhirpath | element | extension
   */
  type: ExtensionContextTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Where the extension can be used in instances
   */
  expression: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

}
