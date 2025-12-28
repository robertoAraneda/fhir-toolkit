import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IMeasureReportGroupPopulation } from './IMeasureReportGroupPopulation.js';
import type { IMeasureReportGroupStratifier } from './IMeasureReportGroupStratifier.js';

/**
 * MeasureReportGroup Interface
 * 
 * Measure results for each group
 * 
 *
 * @see https://hl7.org/fhir/R5/measurereportgroup.html
 */
export interface IMeasureReportGroup extends IBackboneElement {
  /**
   * Pointer to specific group from Measure
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
   * What individual(s) the report is for
   */
  subject?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * The populations in the group
   */
  population?: IMeasureReportGroupPopulation[];

  /**
   * What score this group achieved
   */
  measureScoreQuantity?: IQuantity;

  /**
   * What score this group achieved
   */
  measureScoreDateTime?: string;
  /**
   * Extension for measureScoreDateTime
   */
  _measureScoreDateTime?: IElement;

  /**
   * What score this group achieved
   */
  measureScoreCodeableConcept?: ICodeableConcept;

  /**
   * What score this group achieved
   */
  measureScorePeriod?: IPeriod;

  /**
   * What score this group achieved
   */
  measureScoreRange?: IRange;

  /**
   * What score this group achieved
   */
  measureScoreDuration?: IDuration;

  /**
   * Stratification results
   */
  stratifier?: IMeasureReportGroupStratifier[];

}
