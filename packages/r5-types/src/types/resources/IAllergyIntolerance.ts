import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IAllergyIntoleranceParticipant } from '../backbones/IAllergyIntoleranceParticipant.js';
import type { IAllergyIntoleranceReaction } from '../backbones/IAllergyIntoleranceReaction.js';
import type { AllergyIntoleranceCategoryType, AllergyIntoleranceCriticalityType } from '../../valuesets/index.js';

/**
 * AllergyIntolerance Interface
 * 
 * Risk of harmful or undesirable physiological response which is specific to an individual and associated with exposure to a substance.
 * 
 *
 * @see https://hl7.org/fhir/R4/allergyintolerance.html
 */
export interface IAllergyIntolerance extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'AllergyIntolerance';

  /**
   * External ids for this item
   */
  identifier?: IIdentifier[];

  /**
   * active | inactive | resolved
   */
  clinicalStatus?: ICodeableConcept;

  /**
   * unconfirmed | presumed | confirmed | refuted | entered-in-error
   */
  verificationStatus?: ICodeableConcept;

  /**
   * allergy | intolerance - Underlying mechanism (if known)
   */
  type?: ICodeableConcept;

  /**
   * food | medication | environment | biologic
   */
  category?: AllergyIntoleranceCategoryType[];
  /**
   * Extension for category
   */
  _category?: IElement;

  /**
   * low | high | unable-to-assess
   */
  criticality?: AllergyIntoleranceCriticalityType;
  /**
   * Extension for criticality
   */
  _criticality?: IElement;

  /**
   * Code that identifies the allergy or intolerance
   */
  code?: ICodeableConcept;

  /**
   * Who the allergy or intolerance is for
   */
  patient: IReference<'Patient'>;

  /**
   * Encounter when the allergy or intolerance was asserted
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When allergy or intolerance was identified
   */
  onsetDateTime?: string;
  /**
   * Extension for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * When allergy or intolerance was identified
   */
  onsetAge?: IAge;

  /**
   * When allergy or intolerance was identified
   */
  onsetPeriod?: IPeriod;

  /**
   * When allergy or intolerance was identified
   */
  onsetRange?: IRange;

  /**
   * When allergy or intolerance was identified
   */
  onsetString?: string;
  /**
   * Extension for onsetString
   */
  _onsetString?: IElement;

  /**
   * Date allergy or intolerance was first recorded
   */
  recordedDate?: string;
  /**
   * Extension for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * Who or what participated in the activities related to the allergy or intolerance and how they were involved
   */
  participant?: IAllergyIntoleranceParticipant[];

  /**
   * Date(/time) of last known occurrence of a reaction
   */
  lastOccurrence?: string;
  /**
   * Extension for lastOccurrence
   */
  _lastOccurrence?: IElement;

  /**
   * Additional text not captured in other fields
   */
  note?: IAnnotation[];

  /**
   * Adverse Reaction Events linked to exposure to substance
   */
  reaction?: IAllergyIntoleranceReaction[];

}
