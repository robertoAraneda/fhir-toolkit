import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { GuidanceResponseStatusType } from '../../valuesets/index.js';

/**
 * GuidanceResponse Interface
 * 
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 * 
 *
 * @see https://hl7.org/fhir/R4/guidanceresponse.html
 */
export interface IGuidanceResponse extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'GuidanceResponse';

  /**
   * The identifier of the request associated with this response, if any
   */
  requestIdentifier?: IIdentifier;

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * What guidance was requested
   */
  moduleUri?: string;
  /**
   * Extension for moduleUri
   */
  _moduleUri?: IElement;

  /**
   * What guidance was requested
   */
  moduleCanonical?: string;
  /**
   * Extension for moduleCanonical
   */
  _moduleCanonical?: IElement;

  /**
   * What guidance was requested
   */
  moduleCodeableConcept?: ICodeableConcept;

  /**
   * success | data-requested | data-required | in-progress | failure | entered-in-error
   */
  status: GuidanceResponseStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Patient the request was performed for
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Encounter during which the response was returned
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the guidance response was processed
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * Device returning the guidance
   */
  performer?: IReference<'Device'>;

  /**
   * Why guidance is needed
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why guidance is needed
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /**
   * Additional notes about the response
   */
  note?: IAnnotation[];

  /**
   * Messages resulting from the evaluation of the artifact or artifacts
   */
  evaluationMessage?: IReference<'OperationOutcome'>[];

  /**
   * The output parameters of the evaluation, if any
   */
  outputParameters?: IReference<'Parameters'>;

  /**
   * Proposed actions, if any
   */
  result?: IReference<'CarePlan' | 'RequestGroup'>;

  /**
   * Additional required data
   */
  dataRequirement?: IDataRequirement[];

}
