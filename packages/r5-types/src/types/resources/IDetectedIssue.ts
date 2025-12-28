import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IDetectedIssueEvidence } from '../backbones/IDetectedIssueEvidence.js';
import type { IDetectedIssueMitigation } from '../backbones/IDetectedIssueMitigation.js';
import type { DetectedIssueSeverityType, DetectedIssueStatusType } from '../../valuesets/index.js';

/**
 * DetectedIssue Interface
 * 
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.
 * 
 *
 * @see https://hl7.org/fhir/R5/detectedissue.html
 */
export interface IDetectedIssue extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DetectedIssue';

  /**
   * Unique id for the detected issue
   */
  identifier?: IIdentifier[];

  /**
   * preliminary | final | entered-in-error | mitigated
   */
  status: DetectedIssueStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Type of detected issue, e.g. drug-drug, duplicate therapy, etc
   */
  category?: ICodeableConcept[];

  /**
   * Specific type of detected issue, e.g. drug-drug, duplicate therapy, etc
   */
  code?: ICodeableConcept;

  /**
   * high | moderate | low
   */
  severity?: DetectedIssueSeverityType;
  /**
   * Extension for severity
   */
  _severity?: IElement;

  /**
   * Associated subject
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /**
   * Encounter detected issue is part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When identified
   */
  identifiedDateTime?: string;
  /**
   * Extension for identifiedDateTime
   */
  _identifiedDateTime?: IElement;

  /**
   * When identified
   */
  identifiedPeriod?: IPeriod;

  /**
   * The provider or device that identified the issue
   */
  author?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device'>;

  /**
   * Problem resource
   */
  implicated?: IReference<'Resource'>[];

  /**
   * Supporting evidence
   */
  evidence?: IDetectedIssueEvidence[];

  /**
   * Description and context
   */
  detail?: string;
  /**
   * Extension for detail
   */
  _detail?: IElement;

  /**
   * Authority for issue
   */
  reference?: string;
  /**
   * Extension for reference
   */
  _reference?: IElement;

  /**
   * Step taken to address
   */
  mitigation?: IDetectedIssueMitigation[];

}
