import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IMeasureReportGroup } from '../backbones/IMeasureReportGroup.js';
import type { MeasureImprovementNotationType, MeasureReportStatusType, MeasureReportTypeType } from '../../valuesets/index.js';

/**
 * MeasureReport Interface
 * 
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 * 
 *
 * @see https://hl7.org/fhir/R4B/measurereport.html
 */
export interface IMeasureReport extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MeasureReport';

  /**
   * Additional identifier for the MeasureReport
   */
  identifier?: IIdentifier[];

  /**
   * complete | pending | error
   */
  status: MeasureReportStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * individual | subject-list | summary | data-collection
   */
  type: MeasureReportTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * What measure was calculated
   */
  measure: string;
  /**
   * Extension for measure
   */
  _measure?: IElement;

  /**
   * What individual(s) the report is for
   */
  subject?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Location' | 'Device' | 'RelatedPerson' | 'Group'>;

  /**
   * When the report was generated
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who is reporting the data
   */
  reporter?: IReference<'Practitioner' | 'PractitionerRole' | 'Location' | 'Organization'>;

  /**
   * What period the report covers
   */
  period: IPeriod;

  /**
   * increase | decrease
   */
  improvementNotation?: ICodeableConcept<MeasureImprovementNotationType>;

  /**
   * Measure results for each group
   */
  group?: IMeasureReportGroup[];

  /**
   * What data was used to calculate the measure score
   */
  evaluatedResource?: IReference<'Resource'>[];

}
