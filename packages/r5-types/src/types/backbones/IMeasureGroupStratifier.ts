import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IMeasureGroupStratifierComponent } from './IMeasureGroupStratifierComponent.js';

/**
 * MeasureGroupStratifier Interface
 * 
 * Stratifier criteria for the measure
 * 
 *
 * @see https://hl7.org/fhir/R4/measuregroupstratifier.html
 */
export interface IMeasureGroupStratifier extends IBackboneElement {
  /**
   * Unique id for stratifier in measure
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Meaning of the stratifier
   */
  code?: ICodeableConcept;

  /**
   * The human readable description of this stratifier
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * How the measure should be stratified
   */
  criteria?: IExpression;

  /**
   * A group resource that defines this population
   */
  groupDefinition?: IReference<'Group'>;

  /**
   * Stratifier criteria component for the measure
   */
  component?: IMeasureGroupStratifierComponent[];

}
