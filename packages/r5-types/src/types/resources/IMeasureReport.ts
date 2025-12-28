import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IMeasureReportGroup } from '../backbones/IMeasureReportGroup.js';
import type { MeasureReportStatusType, MeasureReportTypeType, SubmitDataUpdateTypeType } from '../../valuesets/index.js';

/**
 * MeasureReport Interface
 * 
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 * 
 *
 * @see https://hl7.org/fhir/R5/measurereport.html
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
   * individual | subject-list | summary | data-exchange
   */
  type: MeasureReportTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * incremental | snapshot
   */
  dataUpdateType?: SubmitDataUpdateTypeType;
  /**
   * Extension for dataUpdateType
   */
  _dataUpdateType?: IElement;

  /**
   * What measure was calculated
   */
  measure?: string;
  /**
   * Extension for measure
   */
  _measure?: IElement;

  /**
   * What individual(s) the report is for
   */
  subject?: IReference<'CareTeam' | 'Device' | 'Group' | 'HealthcareService' | 'Location' | 'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * When the measure was calculated
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who is reporting the data
   */
  reporter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Group'>;

  /**
   * What vendor prepared the data
   */
  reportingVendor?: IReference<'Organization'>;

  /**
   * Where the reported data is from
   */
  location?: IReference<'Location'>;

  /**
   * What period the report covers
   */
  period: IPeriod;

  /**
   * What parameters were provided to the report
   */
  inputParameters?: IReference<'Parameters'>;

  /**
   * What scoring method (e.g. proportion, ratio, continuous-variable)
   */
  scoring?: ICodeableConcept;

  /**
   * increase | decrease
   */
  improvementNotation?: ICodeableConcept;

  /**
   * Measure results for each group
   */
  group?: IMeasureReportGroup[];

  /**
   * Additional information collected for the report
   */
  supplementalData?: IReference<'Resource'>[];

  /**
   * What data was used to calculate the measure score
   */
  evaluatedResource?: IReference<'Resource'>[];

}
