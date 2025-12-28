import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IDiagnosticReportMedia } from '../backbones/IDiagnosticReportMedia.js';
import type { IDiagnosticReportSupportingInfo } from '../backbones/IDiagnosticReportSupportingInfo.js';
import type { DiagnosticReportStatusType } from '../../valuesets/index.js';

/**
 * DiagnosticReport Interface
 * 
 * The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances.
 * 
 *
 * @see https://hl7.org/fhir/R5/diagnosticreport.html
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
   * registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown
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
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct'>;

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
   * Comments about the diagnostic report
   */
  note?: IAnnotation[];

  /**
   * Reference to full details of an analysis associated with the diagnostic report
   */
  study?: IReference<'GenomicStudy' | 'ImagingStudy'>[];

  /**
   * Additional information supporting the diagnostic report
   */
  supportingInfo?: IDiagnosticReportSupportingInfo[];

  /**
   * Key images or data associated with this report
   */
  media?: IDiagnosticReportMedia[];

  /**
   * Reference to a Composition resource for the DiagnosticReport structure
   */
  composition?: IReference<'Composition'>;

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
