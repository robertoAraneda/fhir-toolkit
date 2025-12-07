import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IImmunizationPerformer } from '../backbones/IImmunizationPerformer.js';
import type { IImmunizationProgramEligibility } from '../backbones/IImmunizationProgramEligibility.js';
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
   * Authority that the immunization event is based on
   */
  basedOn?: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>[];

  /**
   * completed | entered-in-error | not-done
   */
  status: ImmunizationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * Vaccine administered
   */
  vaccineCode: ICodeableConcept;

  /**
   * Product that was administered
   */
  administeredProduct?: ICodeableReference;

  /**
   * Vaccine manufacturer
   */
  manufacturer?: ICodeableReference;

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
   * Who was immunized
   */
  patient: IReference<'Patient'>;

  /**
   * Encounter immunization was part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Additional information in support of the immunization
   */
  supportingInformation?: IReference<'Resource'>[];

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
   * Indicates context the data was captured in
   */
  primarySource?: boolean;
  /**
   * Extension for primarySource
   */
  _primarySource?: IElement;

  /**
   * Indicates the source of a  reported record
   */
  informationSource?: ICodeableReference;

  /**
   * Where immunization occurred
   */
  location?: IReference<'Location'>;

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
  reason?: ICodeableReference[];

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
   * Patient eligibility for a specific vaccination program
   */
  programEligibility?: IImmunizationProgramEligibility[];

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
