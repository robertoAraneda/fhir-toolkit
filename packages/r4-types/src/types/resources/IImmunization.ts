import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IImmunizationEducation } from '../backbones/IImmunizationEducation.js';
import type { IImmunizationPerformer } from '../backbones/IImmunizationPerformer.js';
import type { IImmunizationProtocolApplied } from '../backbones/IImmunizationProtocolApplied.js';
import type { IImmunizationReaction } from '../backbones/IImmunizationReaction.js';
import type { ImmunizationStatusType } from '../../valuesets/index.js';

/**
 * Immunization Interface
 * 
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * 
 *
 * @see https://hl7.org/fhir/R4/immunization.html
 */
export interface IImmunization extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Immunization';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * completed | entered-in-error | not-done
   */
  status: ImmunizationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason not done
   */
  statusReason?: ICodeableConcept;

  /**
   * Vaccine product administered
   */
  vaccineCode: ICodeableConcept;

  /**
   * Who was immunized
   */
  patient: IReference<'Patient'>;

  /**
   * Encounter immunization was part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Vaccine administration date
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * Vaccine administration date
   */
  occurrenceString?: string;
  /**
   * Extension for occurrenceString
   */
  _occurrenceString?: IElement;

  /**
   * When the immunization was first captured in the subject's record
   */
  recorded?: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * Indicates context the data was recorded in
   */
  primarySource?: boolean;
  /**
   * Extension for primarySource
   */
  _primarySource?: IElement;

  /**
   * Indicates the source of a secondarily reported record
   */
  reportOrigin?: ICodeableConcept;

  /**
   * Where immunization occurred
   */
  location?: IReference<'Location'>;

  /**
   * Vaccine manufacturer
   */
  manufacturer?: IReference<'Organization'>;

  /**
   * Vaccine lot number
   */
  lotNumber?: string;
  /**
   * Extension for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * Vaccine expiration date
   */
  expirationDate?: string;
  /**
   * Extension for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * Body site vaccine  was administered
   */
  site?: ICodeableConcept;

  /**
   * How vaccine entered body
   */
  route?: ICodeableConcept;

  /**
   * Amount of vaccine administered
   */
  doseQuantity?: IQuantity;

  /**
   * Who performed event
   */
  performer?: IImmunizationPerformer[];

  /**
   * Additional immunization notes
   */
  note?: IAnnotation[];

  /**
   * Why immunization occurred
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why immunization occurred
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>[];

  /**
   * Dose potency
   */
  isSubpotent?: boolean;
  /**
   * Extension for isSubpotent
   */
  _isSubpotent?: IElement;

  /**
   * Reason for being subpotent
   */
  subpotentReason?: ICodeableConcept[];

  /**
   * Educational material presented to patient
   */
  education?: IImmunizationEducation[];

  /**
   * Patient eligibility for a vaccination program
   */
  programEligibility?: ICodeableConcept[];

  /**
   * Funding source for the vaccine
   */
  fundingSource?: ICodeableConcept;

  /**
   * Details of a reaction that follows immunization
   */
  reaction?: IImmunizationReaction[];

  /**
   * Protocol followed by the provider
   */
  protocolApplied?: IImmunizationProtocolApplied[];

}
