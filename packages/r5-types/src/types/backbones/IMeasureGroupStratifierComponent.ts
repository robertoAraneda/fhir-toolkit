import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';

/**
 * MeasureGroupStratifierComponent Interface
 * 
 * Stratifier criteria component for the measure
 * 
 *
 * @see https://hl7.org/fhir/R4/measuregroupstratifiercomponent.html
 */
export interface IMeasureGroupStratifierComponent extends IBackboneElement {
  /**
   * Unique id for stratifier component in measure
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Meaning of the stratifier component
   */
  code?: ICodeableConcept;

  /**
   * The human readable description of this stratifier component
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Component of how the measure should be stratified
   */
  criteria?: IExpression;

  /**
   * A group resource that defines this population
   */
  groupDefinition?: IReference<'Group'>;

}
