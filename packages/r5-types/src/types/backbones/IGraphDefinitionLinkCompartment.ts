import type { IBackboneElement, IElement } from '../../base/index.js';
import type { CompartmentTypeType, GraphCompartmentRuleType, GraphCompartmentUseType } from '../../valuesets/index.js';

/**
 * GraphDefinitionLinkCompartment Interface
 * 
 * Compartment Consistency Rules
 * 
 *
 * @see https://hl7.org/fhir/R5/graphdefinitionlinkcompartment.html
 */
export interface IGraphDefinitionLinkCompartment extends IBackboneElement {
  /**
   * where | requires
   */
  use: GraphCompartmentUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * identical | matching | different | custom
   */
  rule: GraphCompartmentRuleType;
  /**
   * Extension for rule
   */
  _rule?: IElement;

  /**
   * Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare
   */
  code: CompartmentTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

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
