import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IMeasureGroupPopulation } from './IMeasureGroupPopulation.js';
import type { IMeasureGroupStratifier } from './IMeasureGroupStratifier.js';

/**
 * MeasureGroup Interface
 * 
 * Population criteria group
 * 
 *
 * @see https://hl7.org/fhir/R5/measuregroup.html
 */
export interface IMeasureGroup extends IBackboneElement {
  /**
   * Unique id for group in measure
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Meaning of the group
   */
  code?: ICodeableConcept;

  /**
   * Summary description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * process | outcome | structure | patient-reported-outcome | composite
   */
  type?: ICodeableConcept[];

  /**
   * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   */
  subjectCodeableConcept?: ICodeableConcept;

  /**
   * E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   */
  subjectReference?: IReference;

  /**
   * Population basis
   */
  basis?: string;
  /**
   * Extension for basis
   */
  _basis?: IElement;

  /**
   * proportion | ratio | continuous-variable | cohort
   */
  scoring?: ICodeableConcept;

  /**
   * What units?
   */
  scoringUnit?: ICodeableConcept;

  /**
   * How is rate aggregation performed for this measure
   */
  rateAggregation?: string;
  /**
   * Extension for rateAggregation
   */
  _rateAggregation?: IElement;

  /**
   * increase | decrease
   */
  improvementNotation?: ICodeableConcept;

  /**
   * Logic used by the measure group
   */
  library?: string[];
  /**
   * Extension for library
   */
  _library?: IElement;

  /**
   * Population criteria
   */
  population?: IMeasureGroupPopulation[];

  /**
   * Stratifier criteria for the measure
   */
  stratifier?: IMeasureGroupStratifier[];

}
