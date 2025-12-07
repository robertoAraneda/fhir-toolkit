import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IDiagnosticReportMedia } from '../backbones/IDiagnosticReportMedia.js';
import type { DiagnosticReportStatusType } from '../../valuesets/index.js';

/**
 * DiagnosticReport Interface
 * 
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 * 
 *
 * @see https://hl7.org/fhir/R4/diagnosticreport.html
 */
export interface IDiagnosticReport extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DiagnosticReport';

  /**
   * Business identifier for report
   */
  identifier?: IIdentifier[];

  /**
   * What was requested
   */
  basedOn?: IReference<'CarePlan' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest'>[];

  /**
   * registered | partial | preliminary | final +
   */
  status: DiagnosticReportStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Service category
   */
  category?: ICodeableConcept[];

  /**
   * Name/Code for this diagnostic report
   */
  code: ICodeableConcept;

  /**
   * The subject of the report - usually, but not always, the patient
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance'>;

  /**
   * Health care event when test ordered
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Clinically relevant time/time-period for report
   */
  effectiveDateTime?: string;
  /**
   * Extension for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * Clinically relevant time/time-period for report
   */
  effectivePeriod?: IPeriod;

  /**
   * DateTime this version was made
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * Responsible Diagnostic Service
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam'>[];

  /**
   * Primary result interpreter
   */
  resultsInterpreter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam'>[];

  /**
   * Specimens this report is based on
   */
  specimen?: IReference<'Specimen'>[];

  /**
   * Observations
   */
  result?: IReference<'Observation'>[];

  /**
   * Reference to full details of imaging associated with the diagnostic report
   */
  imagingStudy?: IReference<'ImagingStudy'>[];

  /**
   * Key images associated with this report
   */
  media?: IDiagnosticReportMedia[];

  /**
   * Clinical conclusion (interpretation) of test results
   */
  conclusion?: string;
  /**
   * Extension for conclusion
   */
  _conclusion?: IElement;

  /**
   * Codes for the clinical conclusion of test results
   */
  conclusionCode?: ICodeableConcept[];

  /**
   * Entire report as issued
   */
  presentedForm?: IAttachment[];

}
