import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IFamilyMemberHistoryCondition } from '../backbones/IFamilyMemberHistoryCondition.js';
import type { IFamilyMemberHistoryParticipant } from '../backbones/IFamilyMemberHistoryParticipant.js';
import type { IFamilyMemberHistoryProcedure } from '../backbones/IFamilyMemberHistoryProcedure.js';
import type { FamilyHistoryStatusType } from '../../valuesets/index.js';

/**
 * FamilyMemberHistory Interface
 * 
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 * 
 *
 * @see https://hl7.org/fhir/R4/familymemberhistory.html
 */
export interface IFamilyMemberHistory extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'FamilyMemberHistory';

  /**
   * External Id(s) for this record
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * partial | completed | entered-in-error | health-unknown
   */
  status: FamilyHistoryStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * subject-unknown | withheld | unable-to-obtain | deferred
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * Patient history is about
   */
  patient: IReference<'Patient'>;

  /**
   * When history was recorded or last updated
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Who or what participated in the activities related to the family member history and how they were involved
   */
  participant?: IFamilyMemberHistoryParticipant[];

  /**
   * The family member described
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Relationship to the subject
   */
  relationship: ICodeableConcept;

  /**
   * male | female | other | unknown
   */
  sex?: ICodeableConcept;

  /**
   * (approximate) date of birth
   */
  bornPeriod?: IPeriod;

  /**
   * (approximate) date of birth
   */
  bornDate?: string;
  /**
   * Extension for bornDate
   */
  _bornDate?: IElement;

  /**
   * (approximate) date of birth
   */
  bornString?: string;
  /**
   * Extension for bornString
   */
  _bornString?: IElement;

  /**
   * (approximate) age
   */
  ageAge?: IAge;

  /**
   * (approximate) age
   */
  ageRange?: IRange;

  /**
   * (approximate) age
   */
  ageString?: string;
  /**
   * Extension for ageString
   */
  _ageString?: IElement;

  /**
   * Age is estimated?
   */
  estimatedAge?: boolean;
  /**
   * Extension for estimatedAge
   */
  _estimatedAge?: IElement;

  /**
   * Dead? How old/when?
   */
  deceasedBoolean?: boolean;
  /**
   * Extension for deceasedBoolean
   */
  _deceasedBoolean?: IElement;

  /**
   * Dead? How old/when?
   */
  deceasedAge?: IAge;

  /**
   * Dead? How old/when?
   */
  deceasedRange?: IRange;

  /**
   * Dead? How old/when?
   */
  deceasedDate?: string;
  /**
   * Extension for deceasedDate
   */
  _deceasedDate?: IElement;

  /**
   * Dead? How old/when?
   */
  deceasedString?: string;
  /**
   * Extension for deceasedString
   */
  _deceasedString?: IElement;

  /**
   * Why was family member history performed?
   */
  reason?: ICodeableReference[];

  /**
   * General note about related person
   */
  note?: IAnnotation[];

  /**
   * Condition that the related person had
   */
  condition?: IFamilyMemberHistoryCondition[];

  /**
   * Procedures that the related person had
   */
  procedure?: IFamilyMemberHistoryProcedure[];

}
