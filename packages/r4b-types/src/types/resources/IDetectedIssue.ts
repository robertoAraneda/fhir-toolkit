import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IDetectedIssueEvidence } from '../backbones/IDetectedIssueEvidence.js';
import type { IDetectedIssueMitigation } from '../backbones/IDetectedIssueMitigation.js';
import type { DetectedIssueSeverityType, ObservationStatusType } from '../../valuesets/index.js';

/**
 * DetectedIssue Interface
 * 
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 * 
 *
 * @see https://hl7.org/fhir/R4/detectedissue.html
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
   * registered | preliminary | final | amended +
   */
  status: ObservationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Issue Category, e.g. drug-drug, duplicate therapy, etc.
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
   * Associated patient
   */
  patient?: IReference<'Patient'>;

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
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Device'>;

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
