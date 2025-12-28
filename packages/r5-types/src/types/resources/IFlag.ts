import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { FlagStatusType } from '../../valuesets/index.js';

/**
 * Flag Interface
 * 
 * Prospective warnings of potential issues when providing care to the patient.
 * 
 *
 * @see https://hl7.org/fhir/R5/flag.html
 */
export interface IFlag extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Flag';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * active | inactive | entered-in-error
   */
  status: FlagStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Clinical, administrative, etc
   */
  category?: ICodeableConcept[];

  /**
   * Coded or textual message to display to user
   */
  code: ICodeableConcept;

  /**
   * Who/What is flag about?
   */
  subject: IReference<'Patient' | 'RelatedPerson' | 'Location' | 'Group' | 'Organization' | 'Practitioner' | 'PractitionerRole' | 'PlanDefinition' | 'Medication' | 'Procedure'>;

  /**
   * Time period when flag is active
   */
  period?: IPeriod;

  /**
   * Alert relevant during encounter
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Flag creator
   */
  author?: IReference<'Device' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

}
