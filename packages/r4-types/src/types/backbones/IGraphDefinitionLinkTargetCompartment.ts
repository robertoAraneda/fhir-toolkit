import type { IBackboneElement, IElement } from '../../base/index.js';
import type { CompartmentTypeType, GraphCompartmentRuleType, GraphCompartmentUseType } from '../../valuesets/index.js';

/**
 * GraphDefinitionLinkTargetCompartment Interface
 * 
 * Compartment Consistency Rules
 * 
 *
 * @see https://hl7.org/fhir/R4/graphdefinitionlinktargetcompartment.html
 */
export interface IGraphDefinitionLinkTargetCompartment extends IBackboneElement {
  /**
   * condition | requirement
   */
  use: GraphCompartmentUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * Patient | Encounter | RelatedPerson | Practitioner | Device
   */
  code: CompartmentTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * identical | matching | different | custom
   */
  rule: GraphCompartmentRuleType;
  /**
   * Extension for rule
   */
  _rule?: IElement;

  /**
   * Custom rule, as a FHIRPath expression
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

  /**
   * Documentation for FHIRPath expression
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

}
