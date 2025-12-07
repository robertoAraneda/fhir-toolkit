import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IVerificationResultAttestation } from '../backbones/IVerificationResultAttestation.js';
import type { IVerificationResultPrimarySource } from '../backbones/IVerificationResultPrimarySource.js';
import type { IVerificationResultValidator } from '../backbones/IVerificationResultValidator.js';
import type { StatusType } from '../../valuesets/index.js';

/**
 * VerificationResult Interface
 * 
 * Describes validation requirements, source(s), status and dates for one or more elements.
 * 
 *
 * @see https://hl7.org/fhir/R4/verificationresult.html
 */
export interface IVerificationResult extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'VerificationResult';

  /**
   * A resource that was validated
   */
  target?: IReference<'Resource'>[];

  /**
   * The fhirpath location(s) within the resource that was validated
   */
  targetLocation?: string[];
  /**
   * Extension for targetLocation
   */
  _targetLocation?: IElement;

  /**
   * none | initial | periodic
   */
  need?: ICodeableConcept;

  /**
   * attested | validated | in-process | req-revalid | val-fail | reval-fail
   */
  status: StatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * When the validation status was updated
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * nothing | primary | multiple
   */
  validationType?: ICodeableConcept;

  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context)
   */
  validationProcess?: ICodeableConcept[];

  /**
   * Frequency of revalidation
   */
  frequency?: ITiming;

  /**
   * The date/time validation was last completed (including failed validations)
   */
  lastPerformed?: string;
  /**
   * Extension for lastPerformed
   */
  _lastPerformed?: IElement;

  /**
   * The date when target is next validated, if appropriate
   */
  nextScheduled?: string;
  /**
   * Extension for nextScheduled
   */
  _nextScheduled?: IElement;

  /**
   * fatal | warn | rec-only | none
   */
  failureAction?: ICodeableConcept;

  /**
   * Information about the primary source(s) involved in validation
   */
  primarySource?: IVerificationResultPrimarySource[];

  /**
   * Information about the entity attesting to information
   */
  attestation?: IVerificationResultAttestation;

  /**
   * Information about the entity validating information
   */
  validator?: IVerificationResultValidator[];

}
